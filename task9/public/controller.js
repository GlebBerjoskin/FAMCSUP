var logic = (function () {
    var filterByAuthor = function (author, newPosts, top) {
        var findPosts = [];

        if (!author) {
            return newPosts;
        }

        for (var i = 0; i < newPosts.length; i++) {
            if (newPosts[i].author.toLowerCase() === author.toLowerCase() && newPosts[i].depict === '1') {
                findPosts.push(newPosts[i]);
            }
        }
        return findPosts;
    }

    var filterByDate = function (dateFrom, dateTo, newPosts, top) {
        var findPosts = [];

        if (!dateFrom && !dateTo) {
            return newPosts;
        }

        if (dateFrom.trim() === "") {
            dateFrom = new Date('1990-01-15T12:00:00');
        }
        else {
            dateFrom = new Date(dateFrom);
        }

        if (dateTo.trim() === "") {
            dateTo = new Date('2020-01-15T12:00:00');
        }
        else {
            dateTo = new Date(dateTo);
        }

        for (var i = 0; i < newPosts.length; i++) {
            if (newPosts[i].createdAt >= dateFrom && newPosts[i].depict === '1') {
                if (newPosts[i].createdAt <= dateTo) {
                    findPosts.push(newPosts[i]);
                }
            }
        }
        return findPosts;
    }

    var filterByHashTags = function (hashTag, newPosts, top) {
        if (hashTag == []) {
            return newPosts;
        }

        return newPosts.filter(function (post) {
            return hashTag.every(function (hashTagIndex) {
                return post.hashTags.includes(hashTagIndex);
            });
        });
    }

    var getPhotoPosts = function (topPosition, filterConfig, photoPosts, currentUser) {

        var newPosts = photoPosts;

        view.deleteFeedbackFromHTML;

        if (!topPosition || topPosition < 0)
            topPosition = 0;

        if (filterConfig) {
            if (filterConfig.author) {
                newPosts = filterByAuthor(filterConfig.author, newPosts, top);
            }

            if (filterConfig.dateFrom || filterConfig.dateTo) {
                newPosts = filterByDate(filterConfig.dateFrom, filterConfig.dateTo, newPosts, top);
            }

            if (filterConfig.hashTags) {
                newPosts = filterByHashTags(filterConfig.hashTags, newPosts, top);
            }

            for (let i = 0; i < newPosts.length; i++) {
                if (!Number(newPosts[i].depict)) {
                    newPosts.splice(i, 1);
                    i--;
                }
            }

            newPosts = sortByDate(newPosts);

        }
        else {
            newPosts = sortByDate(photoPosts);
            for (let i = 0; i < newPosts.length; i++) {
                if (!Number(newPosts[i].depict)) {
                    newPosts.splice(i, 1);
                    i--;
                }
            }
        }

        view.fillFilterInPage(filterConfig);

        let length = 0;

        if (newPosts.length > 10) {
            let i = 0;

            while (i < topPosition / 10) {
                i++;
                if (newPosts.length - i * 10 > 0) {
                    length += 10;
                }
                else break;
            }
            if (newPosts.length - i * 10 === 0) {
                length += 10;
                view.deleteBrowseButton();
            }
            if (newPosts.length - (i - 1) * 10 < 10) {
                length += newPosts.length - (i - 1) * 10;
                view.deleteBrowseButton();
            }
        }

        else {
            view.deleteBrowseButton();
            length = newPosts.length;
        }

        if (newPosts.length === 0) {
            view.fillFeedbackWithError();
            return 0;
        }

        if (!currentUser || currentUser === "") {
            var cyclesNum = view.getCyclesNumber();

            for (var i = 0; i < cyclesNum; i++) {
                var stringI = i.toString();
                removeAllPosts(stringI, photoPosts);
            }

            for (var i = 0; i < length; i++) {
                view.wrapOverDepictPhotoPost(newPosts[i]);
            }

            return newPosts.length;
        }
        else {
            currentUser = currentUser.trim();

            if (currentUser) {
                removeAllPosts("1", photoPosts);

                for (var i = 0; i < length; i++) {
                    if (getPhotoPost(newPosts[i].id, photoPosts).author.trim() === currentUser) {
                        view.wrapOverDepictPhotoPostAuthorised(newPosts[i]);
                    }
                    else {
                        view.wrapOverDepictPhotoPost(newPosts[i]);
                    }
                }

                return newPosts.length;
            }
            else {
                for (var i = 0; i < view.getLength(); i++) {
                    var stringI = i.toString();
                    removeAllPosts(stringI, photoPosts);
                }

                for (var i = 0; i < length; i++) {
                    view.wrapOverDepictPhotoPost(newPosts[i]);
                }
                return newPosts.length;
            }
        }
    }



    var sortByDate = function (array) {
        var findPosts = array;
        if (findPosts.length) {
            return findPosts.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt);
            }
            );
        }
        else return findPosts;
    }

    var removeAllPosts = function (id, array) {
        view.deleteFeedbackFromHTML();
    }

    var getPhotoPost = function (id, photoPosts) {
        if (!id)
            return null;

        for (var i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id === id)
                return photoPosts[i];
        }
        return null;
    }

    var addPhotoPost = function (photoPost, photoPosts) {
        if (!photoPost) {
            alert("invalid photo post");
            return false;
        }

        if (validatePhotoPost(photoPost) && getPhotoPost(photoPost.id, photoPosts) === null) {
            photoPosts.push(photoPost);
            return true;
        }

        alert("change post parameters!");

        return false;
    }

    var validatePhotoPost = function (photoPost) {
        if ((typeof (photoPost.id) === "string") &&
            (typeof (photoPost.description) === "string") &&
            (typeof (photoPost.author) === "string") &&
            (typeof (photoPost.photoLink) === "string") &&
            (photoPost.createdAt instanceof Date)) {
            if (photoPost.photoLink.length !== 0 && photoPost.description.length <= 200 && photoPost.author !== 0) {
                if (!photoPost.hashTags) {
                    photoPost.hashTags = [];
                }
                return true;
            }
        }
        return false;
    }

    var removePhotoPost = function (id, array) {
        if (!id)
            return false;

        for (var i = 0; i < array.length; i++) {
            if (array[i].id === id) {
                array[i].depict = '0';
                return true;
            }
        }
        return false;
    }

    return {
        getPhotoPost,
        getPhotoPosts,
        addPhotoPost,
        removeAllPosts,
        removePhotoPost,
        validatePhotoPost
    }
})();


var topPosition = 10;

var handleBrowseMore = function () {

    topPosition += 10;

    var photoPosts = model.getPhotoPosts(-1, -1, {});

    var filterConfig = model.getFilterConfig();

    var currentUser = model.getCurrentUser().currentUser;

    logic.getPhotoPosts(topPosition, filterConfig, photoPosts, currentUser);

    try {
        view.feedback().addEventListener('click', handleDeletingEditingPost);
    }
    catch (err) { }
}

var handleFilterApply = function () {
    view.addBrowseButton();

    var photoPosts = model.getPhotoPosts(-1, -1, {});

    var currentUser = model.getCurrentUser().currentUser;

    filterConfig = view.fillFilterFromPage();

    model.putFilterConfig(filterConfig);

    if (logic.getPhotoPosts(topPosition, filterConfig, photoPosts, currentUser) > 10) {
        view.browseMore().addEventListener('click', handleBrowseMore);
    }
}

var handleLoggingOut = function () {
    try {
        view.deleteEditingCreating();

        view.deleteButtonWrap();
    }
    catch (err) {}

    model.putCurrentUser({ currentUser: "" });
    currentUser = "";

    var photoPosts = model.getPhotoPosts(-1, -1, {});

    var filterConfig = model.getFilterConfig();

    view.changeHeaderUnauthorised();

    view.addBrowseButton();

    view.addFilter();

    view.applyFilter().addEventListener('click', handleFilterApply);

    logic.getPhotoPosts(topPosition, filterConfig, photoPosts, currentUser);



    view.loggingIn().addEventListener('click', handleLoggingIn);
    try {
        view.browseMore().addEventListener('click', handleBrowseMore);
    }
    catch (err) { }

    try {
        view.applyFilter().addEventListener('click', handleFilterApply);
    }
    catch (err) { }
}

var handleLoginPasswordInput = function () {
    var loginName = view.getLoginName();

    var loginPassword = view.getLoginPassword();

    var users = model.getUsers();

    var filterConfig = model.getFilterConfig();

    var photoPosts = model.getPhotoPosts(-1, -1, filterConfig);

    var currentUser;

    var count = 0;

    for (var i = 0; i < users.length; i++) {
        if (users[i].name === loginName) {
            if (users[i].password === loginPassword) {
                count++;

                view.deleteFeedbackFromHTML();

                currentUserProgram = users[i].name;

                model.putCurrentUser({ currentUser: currentUserProgram });

                currentUser = currentUserProgram;

                view.addFilter();

                view.changeCurrentUser(currentUserProgram);

                if (logic.getPhotoPosts(topPosition, filterConfig, photoPosts, currentUser) > 10) {
                    view.addBrowseButton()
                    view.browseMore().addEventListener('click', handleBrowseMore);

                }

                view.loggingOut().addEventListener('click', handleLoggingOut);

                view.applyFilter().addEventListener('click', handleFilterApply);

                view.addingNewPost().addEventListener('click', handleAddingPost);

                view.loggingOut().addEventListener('click', handleLoggingOut);

                try {
                    view.feedback().addEventListener('click', handleDeletingEditingPost);
                }
                catch (err) { }
            }
        }
    }

    if (count === 0) {
        alert("Wrong login or password!");
    }
}

var handleLoggingIn = function () {

    view.deleteHead();

    view.deleteFilter();

    view.deleteBrowseButton();

    view.addLoggingIn();

    view.inputRegistration().addEventListener('click', handleLoginPasswordInput);
}

var handleAddingNewPost = function () {
    let formData = new FormData(document.forms.editingCreating);

    var text = view.getTextOfPost();
    if (text.length > 200 || text.length === 0) {
        alert('Too short or too long description!');
        handleAddingPost();
        return 0;
    }

    var image = view.getPostFile();
    if (image.length === 0) {
        alert('Choose photo please!');
        handleAddingPost();
        return 0;
    }

    formData.append('tagOfPost', view.getPostTags());
    formData.append('textOfPost', view.getPostText());
    formData.append('author', model.getCurrentUser().currentUser);

    model.addPhotoPost(formData);

    var filterConfig = model.getFilterConfig();
    var photoPosts = model.getPhotoPosts(-1, -1, {});

    view.addBrowseButton();
    view.browseMore().addEventListener('click', handleBrowseMore);

    view.addFilter();

    view.addLoggingOut();
    view.loggingOut().addEventListener('click', handleLoggingOut);

    view.deleteEditingCreating();
    view.deleteButtonWrap();

    try {
        view.feedback().addEventListener('click', handleDeletingEditingPost);
    }
    catch (err) { }

    logic.getPhotoPosts(topPosition, filterConfig, model.getPhotoPosts(-1, -1, {}), model.getCurrentUser().currentUser);
}

var handleAddingPost = function () {

    view.deleteFeedbackFromHTML();

    view.deleteBrowseButton();

    view.deleteFilter();

    view.addEditingCreating();

    view.inputNewPost().addEventListener('click', handleAddingNewPost);
}

var handleBadRequest = function (post) {
    view.addEditing(post);

    view.inputNewPost().addEventListener('click', handleEditingPostApply);
}

var handleEditingPostApply = function () {
    var text = view.getTextEdited();
    var image = view.getImageEdited();

    if (text.length > 200 || text.length === 0) {
        alert('Too short or too long description!The text will not be changed!');

        var post = model.getEditedPost();
        text = post.textToEdit;
    }

    if (image.length === 0) {
        alert('Invalid picture! It will not be chosen');

        var post = model.getEditedPost();
        image = post.imageToEdit;
        //console.log(image);
    }

    var tags = view.getPostTags();

    if (image.split("/images/")[0] === "") {
        model.editPhotoPost(model.getEditedPost().idOfEditedPost, image, tags, text);
    }

    else {
        let formData = new FormData(document.forms.editingCreating);
        model.editPhotoPostMulter(model.getEditedPost().idOfEditedPost, formData, text, tags);
    }


    var filterConfig = model.getFilterConfig();
    var photoPosts = model.getPhotoPosts(-1, -1, {});

    view.addBrowseButton();
    view.browseMore().addEventListener('click', handleBrowseMore);

    view.addFilter();

    view.addLoggingOut();
    view.loggingOut().addEventListener('click', handleLoggingOut);

    view.deleteEditingCreating();
    view.deleteButtonWrap();

    try {
        view.feedback().addEventListener('click', handleDeletingEditingPost);
    }
    catch (err) { }

    logic.getPhotoPosts(topPosition, filterConfig, model.getPhotoPosts(-1, -1, {}), model.getCurrentUser().currentUser);
}

function handleDeletingEditingPost(event) {
    var photoPosts = model.getPhotoPosts(-1, -1, {});

    var currentUser = model.getCurrentUser().currentUser;

    var filterConfig = model.getFilterConfig();

    if (event.target.className === "deleting-button") {
        var postToDelete = view.postToDelete(event);

        var idOfDeletedPost = view.idOfDeletedPost(postToDelete);

        model.removePhotoPost(idOfDeletedPost);

        var newPhotoPosts = model.getPhotoPosts(-1, -1, {});

        logic.getPhotoPosts(topPosition, filterConfig, newPhotoPosts, currentUser);


    }

    if (event.target.className === "editing-button") {
        var post = view.postToEdit(event);

        view.deleteFeedbackFromHTML();
        view.deleteBrowseButton();
        view.deleteFilter();

        view.addEditing(post);

        model.putEditedPost(post);

        view.inputNewPost().addEventListener('click', handleEditingPostApply);

    }
}

var handlePageLaunch = function () {
    view.addFilter();

    view.addHeaderUnauthorised();

    var photoPosts = model.getPhotoPosts(-1, -1, {});

    var filterConfig = model.getFilterConfig();

    var currentUser = model.getCurrentUser().currentUser;

    photoPosts.sort(function (a, b) { return new Date(b.createdAt) - new Date(a.createdAt); });

    logic.getPhotoPosts(topPosition, filterConfig, photoPosts, currentUser);

    if (currentUser === "") {
        view.changeHeaderUnauthorised

        view.applyFilter().addEventListener('click', handleFilterApply);

        view.browseMore().addEventListener('click', handleBrowseMore);

        view.loggingIn().addEventListener('click', handleLoggingIn);
    }

    if (currentUser !== "") {

        view.changeCurrentUser(currentUser);

        view.applyFilter().addEventListener('click', handleFilterApply);

        view.browseMore().addEventListener('click', handleBrowseMore);

        view.addingNewPost().addEventListener('click', handleAddingPost);

        view.loggingOut().addEventListener('click', handleLoggingOut);

        try {
            view.feedback().addEventListener('click', handleDeletingEditingPost);
        }
        catch (err) {
        }
    }
}
handlePageLaunch();