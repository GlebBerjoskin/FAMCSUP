var users = JSON.parse(localStorage.getItem("namesAndPasswords"));

var currentUser = JSON.parse(localStorage.getItem("user"));

var postsArray = JSON.parse(localStorage.getItem("photoPosts"));

var posts = new photoPosts();

var filterConfig = JSON.parse(localStorage.getItem("filter"));

var applyFilter = document.getElementById('applyFilter');

var browseMore = document.getElementById('browse');

var stringInner = "";

var currentState = JSON.parse(localStorage.getItem("currentState"));

posts.currentUser = currentUser;

if (!postsArray) {
    alert("Раскомментируйте добавление скрипта LOCAL_STORAGE.js в index.html, после обновления страницы закомментируйте опять и обновите страницу ещё раз");
}

else {
    for (var i = 0; i < postsArray.length; i++) {
        postsArray[i].createdAt = new Date(postsArray[i].createdAt);
        posts.addPhotoPost(postsArray[i]);
    }

    function handleFilterApply() {
        document.getElementById('browse-button').innerHTML = "<button class=\"button\" type=\"button\" id=\"browse\">Загрузить ещё</button>";
        filterConfig.author = document.getElementById('nameAuthor').value;
        filterConfig.dateFrom = document.getElementById('dateFrom').value;
        filterConfig.dateTo = document.getElementById('dateTo').value;
        if (document.getElementById('hashtags').value.trim() === "") {
            filterConfig.hashTags = [];
        }
        else {
            filterConfig.hashTags = document.getElementById('hashtags').value.split(",");
        }
        localStorage.setItem("filter", JSON.stringify(filterConfig));

        if (posts.getPhotoPosts(10, filterConfig) > 10) {
            document.getElementById('browse').addEventListener('click', handleBrowseMore);
        }
    }

    function handleLoggingOut() {
        try {
            document.getElementById('editingCreating').innerHTML = "";
            document.getElementById('buttonWrap').innerHTML = "";
        }
        catch (err) {
        }

        posts.currentUser = "";
        currentUser = "";
        localStorage.setItem("user", JSON.stringify(""));
        document.getElementById('browse-button').innerHTML = "<button class=\"button\" type=\"button\" id=\"browse\">Загрузить ещё</button>";
        document.getElementById('filter').innerHTML = filterStringInsert();
        var applyFilterPage = document.getElementById('applyFilter');
        applyFilterPage.addEventListener('click', handleFilterApply);
        posts.getPhotoPosts(10, filterConfig);
        posts.changeCurrentUser(posts.currentUser);

        var logInPage = document.getElementById('loggingIn');
        logInPage.addEventListener('click', handleLoggingIn);
        try {
            var browseMorePage = document.getElementById('browse');
            browseMorePage.addEventListener('click', handleBrowseMore);
        }
        catch (err) { }

        try {
            var applyFilterPageOne = document.getElementById('applyFilter');
            applyFilterPageOne.addEventListener('click', handleFilterApply);
        }

        catch (err) {
        }
    }

    function handleAddingNewPost() {
        var nameOfPicture = document.getElementById('choosing').value;
        var text = document.getElementById('textOfPost').value;
        var tags = document.getElementById('tagOfPost').value;

        if (text.length > 200 || text.length === 0) {
            alert('Too short or too long description!');
            return 0;
        }

        if (!posts.addPhotoPost({
            depict: '1',
            id: (Number(posts.photoPosts[posts.photoPosts.length - 1].id) + 1).toString(),
            description: text,
            createdAt: new Date(),
            author: posts.currentUser,
            hashTags: tags.split(","),
            photoLink: nameOfPicture.split("\\")[nameOfPicture.split("\\").length - 1],
            likes: []
        })) {
            return 0;
        }

        localStorage.setItem("photoPosts", JSON.stringify(posts.photoPosts));

        document.getElementById('name').innerHTML = posts.currentUser;

        document.getElementById('logOut').innerHTML = "<input type=\'image\' src=\"images/blue_arrow_right.png\" id='logging-out'>";
        document.getElementById('logging-out').addEventListener('click', handleLoggingOut);

        document.getElementById('browse-button').innerHTML = "<button class=\"button\" type=\"button\" id=\"browse\">Загрузить ещё</button>";
        document.getElementById('browse').addEventListener('click', handleBrowseMore);

        document.getElementById('filter').innerHTML = filterStringInsert();

        document.getElementById('editingCreating').innerHTML = "";
        document.getElementById('buttonWrap').innerHTML = "";

        try {
            document.querySelector('.feedback').addEventListener('click', handleDeletingEditingPost);
        }
        catch (err) {
        }

        posts.getPhotoPosts(10, filterConfig);
    }

    function handleAddingPost() {
        document.getElementById('feedback').innerHTML = "";
        document.getElementById('browse-button').innerHTML = "";
        document.getElementById('filter').innerHTML = "";

        document.getElementById('editingCreating').innerHTML = "<p>Ссылка на фото:" +
            "</p><p><input type=\" file \" id=\"choosing\" accept=\".png,.jpg,.jpeg\"/></p>\n" +
            "<p>Текст поста:</p>" +
            "<p><textarea rows=\"4\" cols=\"100\" id=\"textOfPost\" ></textarea></p>\n" +
            "<p></p>Хэштеги:</p>" +
            "<p><input type=\"text\" id=\"tagOfPost\" />\n</p></div>\n";
        document.getElementById('buttonWrap').innerHTML = "<button class=\"button\" id=\"inputNewPost\">Загрузить пост</button>";

        document.getElementById('inputNewPost').addEventListener('click', handleAddingNewPost);
    }

    function handleLoggingIn() {
        document.getElementById('head').innerHTML = "";
        document.getElementById('filter').innerHTML = "";
        document.getElementById('browse-button').innerHTML = "";
        stringInner = "<div class=\"logging-in\" id=\"logging-fields\">\n" +
            "    <p>Введите  логин</p><p><input type = \"text\" id=\"loginName\">\n" +
            "    <p>Введите пароль</p><input type=\"password\" id = \"password\"> <p></p>\n" +
            "    <button class=\"button-logging\" id=\"inputRegistration\">Войти</button>\n" +
            "    </div>";
        document.getElementById('feedback').innerHTML = stringInner;

        document.getElementById('inputRegistration').addEventListener('click', handleLoginPasswordInput);
    }

    function handleLoginPasswordInput() {
        var loginName = document.getElementById('loginName').value;
        var loginPassword = document.getElementById('password').value;

        var count = 0;

        for (var i = 0; i < users.length; i++) {
            if (users[i].name === loginName) {
                if (users[i].password === loginPassword) {
                    count++;
                    posts.currentUser = loginName;

                    currentUser = loginName;

                    localStorage.setItem("user", JSON.stringify(loginName));

                    document.getElementById('filter').innerHTML = filterStringInsert();

                    document.getElementById('head').innerHTML = "<div class=\"header\"> <img src=\"images/cam.png\">YourLight</div>\n" +
                        "\n" +
                        "    <div class=\"header\" id=\"userName\"> <img src=\"images/user_blue.png\"> <button class=\"button\" type=\"button\" id=\"logIn\">Войти</button></div>\n" +
                        "\n" +
                        "    <div class=\"header\"id=\"logOut\"></div>";

                    posts.changeCurrentUser(posts.currentUser);

                    if (posts.getPhotoPosts(10, filterConfig) > 10) {
                        document.getElementById('browse-button').innerHTML = "<button class=\"button\" type=\"button\" id=\"browse\">Загрузить ещё</button>";
                        var browseMoreBrowsedPage = document.getElementById('browse');
                        browseMoreBrowsedPage.addEventListener('click', handleBrowseMore);

                    }

                    var logOutBrowsedPage = document.getElementById('logging-out');
                    logOutBrowsedPage.addEventListener('click', handleLoggingOut);

                    var applyFilterBrowsedPage = document.getElementById('applyFilter');
                    applyFilterBrowsedPage.addEventListener('click', handleFilterApply);

                    var addingPostPage = document.getElementById('addingPost');
                    addingPostPage.addEventListener('click', handleAddingPost);

                    var logOutPage = document.getElementById('logging-out');
                    logOutPage.addEventListener('click', handleLoggingOut);

                    try {
                        var deleteEditPostPage = document.querySelector('.feedback');
                        deleteEditPostPage.addEventListener('click', handleDeletingEditingPost);
                    }
                    catch (err) {
                    }
                }
            }
        }

        if (count === 0) {
            alert("Wrong login or password!");
        }

    }

    function handleEditingPostApply() {
        var nameOfPicture = document.getElementById('choosing').value;
        if (nameOfPicture === "") {
            nameOfPicture = document.getElementById('editingCreating').children[0].children[0].src;
        }

        var text = document.getElementById('textOfPost').value;
        var tags = document.getElementById('tagOfPost').value;

        var idOfPostToEdit = document.getElementById('editingCreating').children[0].children[0].id;

        if (text.length > 200 || text.length === 0) {
            alert('Too short or too long description!');
            return 0;
        }

        posts.getPhotoPost(idOfPostToEdit.toString()).photoLink = nameOfPicture;
        posts.getPhotoPost(idOfPostToEdit.toString()).hashTags = tags.split(",");
        posts.getPhotoPost(idOfPostToEdit.toString()).description = text;

        localStorage.setItem("photoPosts", JSON.stringify(posts.photoPosts));



        document.getElementById('logOut').innerHTML = "<input type=\'image\' src=\"images/blue_arrow_right.png\" id='logging-out'>";
        document.getElementById('logging-out').addEventListener('click', handleLoggingOut);

        document.getElementById('browse-button').innerHTML = "<button class=\"button\" type=\"button\" id=\"browse\">Загрузить ещё</button>";
        document.getElementById('browse').addEventListener('click', handleBrowseMore);

        document.getElementById('filter').innerHTML = filterStringInsert();
        document.getElementById('applyFilter').addEventListener('click', handleFilterApply);

        try {
            document.querySelector('.feedback').addEventListener('click', handleDeletingEditingPost);
        }
        catch (err) {
        }

        document.getElementById('editingCreating').innerHTML = "";
        document.getElementById('buttonWrap').innerHTML = "";

        posts.getPhotoPosts(10, filterConfig);
    }

    function handleDeletingEditingPost(event) {
        if (event.target.className === "deleting-button") {
            var postToDelete = event.target.parentElement.parentElement.parentElement;

            var idOfDeletedPost = postToDelete.children[1].id.toString();

            posts.removePhotoPost(idOfDeletedPost, posts.photoPosts);

            posts.getPhotoPosts(10, filterConfig);

            localStorage.setItem("photoPosts", JSON.stringify(posts.photoPosts));
        }

        if (event.target.className === "editing-button") {
            var imageToEdit = event.target.parentElement.parentElement.parentElement.children[1].src;
            var textToEdit = event.target.parentElement.parentElement.parentElement.children[2].innerHTML;
            var tagsToEdit = event.target.parentElement.parentElement.children[0].children[0].innerHTML;
            var idOfEditedPost = event.target.parentElement.parentElement.parentElement.children[1].id;

            document.getElementById('feedback').innerHTML = "";
            document.getElementById('browse-button').innerHTML = "";
            document.getElementById('filter').innerHTML = "";

            var valueOfPicture = imageToEdit;

            var valueOfTags = tagsToEdit;

            var valueOfText = textToEdit;

            document.getElementById('editingCreating').innerHTML = "<div class=\"post\"> \n <img src=\"" + valueOfPicture + "\" class=\"photo-editing\" id=\"" + idOfEditedPost +
                "\"><p></p> \n" +
                "<p><input type=\" file \" id=\"choosing\" accept=\".png,.jpg,.jpeg\" value=\"" + valueOfPicture + "\"/></p>\n" +
                "<p><textarea rows=\"4\" cols=\"100\" id=\"textOfPost\" >" + valueOfText +
                "</textarea></p>\n" +
                "<input type=\"text\" id=\"tagOfPost\" value=\"" + valueOfTags + "\" />\n</div>\n";
            document.getElementById('buttonWrap').innerHTML = "<button class=\"button\" id=\"inputNewPost\">Загрузить пост</button>";

            document.getElementById('inputNewPost').addEventListener('click', handleEditingPostApply);

        }
    }

    if (currentUser === "") {
        applyFilter.addEventListener('click', handleFilterApply);
        browseMore.addEventListener('click', handleBrowseMore);

        posts.changeCurrentUser(posts.currentUser);
        posts.getPhotoPosts(10, filterConfig);

        var logIn = document.getElementById('loggingIn');
        logIn.addEventListener('click', handleLoggingIn);
    }

    if (currentUser !== "") {
        applyFilter.addEventListener('click', handleFilterApply);
        browseMore.addEventListener('click', handleBrowseMore);

        posts.changeCurrentUser(posts.currentUser);
        posts.getPhotoPosts(10, filterConfig);

        var addingPost = document.getElementById('addingPost');
        addingPost.addEventListener('click', handleAddingPost);

        var logOut = document.getElementById('logging-out');
        logOut.addEventListener('click', handleLoggingOut);

        try {
            var deleteEditPost = document.querySelector('.feedback');
            deleteEditPost.addEventListener('click', handleDeletingEditingPost);
        }
        catch (err) {
        }
    }
}