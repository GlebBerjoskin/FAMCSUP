var topPosition = 10;

function handleBrowseMore() {
    topPosition += 10;
    posts.getPhotoPosts(topPosition, filterConfig);

    try {
        var deletePost = document.querySelector('.feedback');
        deletePost.addEventListener('click', handleDeletingPost);
    }
    catch (err) {
    }

}

function filterStringInsert() {
    return " <p> Фильтровать по:</p>\n" +
        "                   <p>Имя автора: </p>\n" +
        "                    <input id=\"nameAuthor\"type=\"text\" placeholder=\"Введите имя автора\">\n" +
        "                    <p>Дата публикации: </p>\n" +
        "                       <p>c :</p>\n" +
        "                     <input type=\"text\" id=\"dateFrom\" placeholder=\"01.01.2001\">\n" +
        "                        <p>по:</p>\n" +
        "                       <input type = \"text\" id=\"dateTo\" placeholder=\"01.01.2019\">\n" +
        "                       <p>#Хэштеги </p>\n" +
        "                       <input type=\"text\" id = \"hashtags\" placeholder=\"#spring,#joy\">\n" +
        "                    <button class=\"button\" type=\"button\" id=\"applyFilter\">Применить фильтр</button>";
}

var depictPhotoPost = function (photoPost) {
    if(!photoPost){
        return ;
    }
    let buffer = "";
    if (photoPost.hashTags) {
        for (let i = 0; i < photoPost.hashTags.length; i++) {
            buffer += photoPost.hashTags[i];
        }
    }

    let likes = "";
    if (photoPost.likes) {
        likes = photoPost.likes.length;
        if (photoPost.likes.length === 0) {
            likes = "";
        }
    }
    return "<div class=\"post\">\n" +
        "                    <div class=\"header\">\n" +
        "                        <div class=\"top\">\n" +
        "                           <img src=\"images/user_blue.png\">" + photoPost.author +
        "                        </div>\n" +
        "                        <div class=\"top\">" + (photoPost.createdAt) + "</div>\n" +
        "                    </div>\n" +
        "                    <img class=\"image\" src=" + photoPost.photoLink + " id=\"" + photoPost.id + "\">\n" +
        "                    <p>" + photoPost.description + "</p>\n" +
        "                    <div class=\"header\">\n" +
        "                        <div class=\"bottom\">\n" +
        "                               <em>" + buffer + "</em>\n" +
        "                        </div>\n" +
        "                        <div class=\"bottom\">\n" + "<div>" + likes + "</div>\n" +
        "<div><input type=\"image\" src=\"images/like.png\" name=\"submit\" /></div>\n" +
        "                        </div>  \n" +
        "                    </div>\n" +
        "</div>\n";
}

var depictPhotoPostWithoutWrap = function (photoPost) {
    if(!photoPost){
        return ;
    }
    let buffer = "";
    if (photoPost.hashTags) {
        for (let i = 0; i < photoPost.hashTags.length; i++) {
            buffer += photoPost.hashTags[i];
        }
    }

    let likes = "";
    if (photoPost.likes) {
        likes = photoPost.likes.length;
        if (photoPost.likes.length === 0) {
            likes = "";
        }
    }
    return "                    <div class=\"header\">\n" +
        "                        <div class=\"top\">\n" +
        "                           <img src=\"images/user_blue.png\">" + photoPost.author +
        "                        </div>\n" +
        "                        <div class=\"top\">" + (photoPost.createdAt) + "</div>\n" +
        "                    </div>\n" +
        "                    <img class=\"image\" src=" + photoPost.photoLink + " id=\"" + photoPost.id + "\">\n" +
        "                    <p>" + photoPost.description + "</p>\n" +
        "                    <div class=\"header\">\n" +
        "                        <div class=\"bottom\">\n" +
        "                               <em>" + buffer + "</em>\n" +
        "                        </div>\n" +
        "                        <div class=\"bottom\">\n" + "<div>" + likes + "</div>\n" +
        "<div><input type=\"image\" src=\"images/like.png\" name=\"submit\" /></div>\n" +
        "                        </div>  \n" +
        "                    </div>\n";
}

var depictPhotoPostAuthorised = function (photoPost) {
    if(!photoPost){
        return ;
    }
    let buffer = "";
    if (photoPost.hashTags) {
        for (let i = 0; i < photoPost.hashTags.length; i++) {
            buffer += photoPost.hashTags[i];
        }
    }
    let likes = "";
    if (photoPost.likes) {
        likes = (photoPost.likes.length);
        if (photoPost.likes.length === 0) {
            likes = "";
        }
    }
    return "<div class=\"post\">\n" +
        "                    <div class=\"header\">\n" +
        "                        <div class=\"top\">\n" +
        "                           <img src=\"images/user_blue.png\">" + photoPost.author +
        "                        </div>\n" +
        "                        <div class=\"top\">" + (photoPost.createdAt) + "</div>\n" +
        "                    </div>\n" +
        "                    <img class=\"image\" src=" + photoPost.photoLink + " id=\"" + photoPost.id + "\">\n" +
        "                    <p>" + photoPost.description + "</p>\n" +
        "                    <div class=\"header\">\n" +
        "                        <div class=\"bottom\">\n" +
        "                               <em>" + buffer + "</em>\n" +
        "                        </div>\n" +
        "                        <div class=\"bottom\">\n" +
        "                               <input type=\"image\" src=\"images/pencil32.png\" name=\"submitPost\" class=\"editing-button\"/>\n" + "</div>\n" +
        "                       <div class=\"bottom\">\n" +
        "                               <input type=\"image\" src=\"images/bin.png\" id=\"deleteIt\" class=\"deleting-button\"/>\n" +
        "                        </div>\n" +
        "                        <div class=\"bottom\">\n" +
        likes + "<input type=\"image\" src=\"images/like.png\" name=\"submit\" />\n" +
        "                        </div>  \n" +
        "                    </div>\n" +
        "</div>\n";
}

var depictPhotoPostAuthorisedWithoutWrap = function (photoPost) {
    if(!photoPost){
        return ;
    }
    let buffer = "";
    if (photoPost.hashTags) {
        for (let i = 0; i < photoPost.hashTags.length; i++) {
            buffer += photoPost.hashTags[i];
        }
    }
    let likes = "";
    if (photoPost.likes) {
        likes = (photoPost.likes.length);
        if (photoPost.likes.length === 0) {
            likes = "";
        }
    }
    return "                    <div class=\"header\">\n" +
        "                        <div class=\"top\">\n" +
        "                           <img src=\"images/user_blue.png\">" + photoPost.author +
        "                        </div>\n" +
        "                        <div class=\"top\">" + (photoPost.createdAt) + "</div>\n" +
        "                    </div>\n" +
        "                    <img class=\"image\" src=" + photoPost.photoLink + " id=\"" + photoPost.id + "\">\n" +
        "                    </div>\n" +
        "                    <p>" + photoPost.description + "</p>\n" +
        "                    <div class=\"header\">\n" +
        "                        <div class=\"bottom\">\n" +
        "                               <em>" + buffer + "</em>\n" +
        "                        </div>\n" +
        "                        <div class=\"bottom\">\n" +
        "                               <input type=\"image\" src=\"images/pencil32.png\" name=\"submitPost\" class=\"editing-button\"/>" +
        "                        </div>\n" +
        "                        <div class=\"bottom\">\n" +
        "                               <input type=\"image\" src=\"images/bin.png\" id=\"deleteIt\" class=\"deleting-button\"/>\n" +
        "                        </div>\n" +
        "                        <div class=\"bottom\">\n" +
        likes + "<input type=\"image\" src=\"images/like.png\" name=\"submit\" />\n" +
        "                        </div>  \n" +
        "                    </div>\n";
}


var photoPosts = (function () {
    return function () {

        this.photoPosts = [];

        this.currentUser = "";

        this.changeCurrentUser = function (userName) {
            if (!userName) {
                document.getElementById('userName').innerHTML = "<img src=\"images/user_blue.png\"> <button class=\"button\" type=\"button\" id=\"loggingIn\">Войти</button>";
                document.getElementById('logOut').innerHTML = "";
            }
            else {
                userName = userName.trim();
                if (userName) {

                    document.getElementById('userName').innerHTML = "<img src=\"images/user_blue.png\"><div id=\"name\"></div><div id=\"plusContainer\"><input type=\"image\" src=\"images/plus.png\" id=\"addingPost\"></div>";
                    document.getElementById('name').innerHTML = userName;
                    document.getElementById('logOut').innerHTML = "<input type=\'image\' src=\"images/blue_arrow_right.png\" id='logging-out'>";
                }
                else {
                    document.getElementById('userName').innerHTML = "<img src=\"images/user_blue.png\"> <button class=\"button\" type=\"button\" id=\"loggingIn\">Войти</button>";
                    document.getElementById('logOut').innerHTML = "";
                }
            }
        }

        filterByAuthor = function (author, newPosts, top) {
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

        filterByDate = function (dateFrom, dateTo, newPosts, top) {
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

        filterByHashTags = function (hashTag, newPosts, top) {
            if (hashTag == []) {
                return newPosts;
            }

            return newPosts.filter(function (post) {
                return hashTag.every(function (hashTagIndex) {
                    return post.hashTags.includes(hashTagIndex);
                });
            });
        }

        this.getPhotoPosts = function (topPosition, filterConfig) {

            var newPosts = this.photoPosts;

            document.getElementById('feedback').innerHTML = "";

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

                for(let i=0;i<newPosts.length;i++){
                    if(newPosts[i].depict === "0"){
                        newPosts.splice(i,1);
                    }
                }

                newPosts = this.sortByDate(newPosts);

            }
            else {
                newPosts = this.sortByDate(this.photoPosts);
                for(let i=0;i<newPosts.length;i++){
                    if(newPosts[i].depict === "0"){
                        newPosts.splice(i,1);
                        i--;
                    }
                }
            }

            document.getElementById('filter').children[2].value = filterConfig.author;
            document.getElementById('filter').children[5].value = filterConfig.dateFrom;
            document.getElementById('filter').children[7].value = filterConfig.dateTo;
            document.getElementById('filter').children[9].value = filterConfig.hashTags;

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
                    document.getElementById('browse-button').innerHTML = "";
                }
                if (newPosts.length - (i - 1) * 10 < 10) {
                    length += newPosts.length - (i - 1) * 10;
                    document.getElementById('browse-button').innerHTML = "";
                }
            }

            else {
                document.getElementById('browse-button').innerHTML = "";
                length = newPosts.length;
            }

            if (newPosts.length === 0) {
                document.getElementById('feedback').innerHTML = "<img src=\"images/err.png\" class=\'post\'>";
                return 0;
            }

            if (!this.currentUser) {
                var cyclesNum = document.getElementById('feedback').getElementsByClassName('post').length;

                for (var i = 0; i < cyclesNum; i++) {
                    var stringI = i.toString();
                    this.removeAllPosts(stringI, this.photoPosts);
                }

                for (var i = 0; i < length; i++) {
                    document.getElementById("feedback").innerHTML += depictPhotoPost(newPosts[i]);
                }

                return newPosts.length;
            }
            else {
                this.currentUser = this.currentUser.trim();

                if (this.currentUser) {
                    this.removeAllPosts("1", this.photoPosts);

                    for (var i = 0; i < length; i++) {
                        if (this.getPhotoPost(newPosts[i].id).author.trim() === this.currentUser) {
                            document.getElementById("feedback").innerHTML += depictPhotoPostAuthorised(newPosts[i]);
                        }
                        else {
                            document.getElementById("feedback").innerHTML += depictPhotoPost(newPosts[i]);
                        }
                    }

                    return newPosts.length;
                }
                else {
                    for (var i = 0; i < document.getElementById('feedback').getElementsByClassName('post').length; i++) {
                        var stringI = i.toString();
                        this.removeAllPosts(stringI, this.photoPosts);
                    }

                    for (var i = 0; i < length; i++) {
                        document.getElementById("feedback").innerHTML += depictPhotoPost(newPosts[i]);
                    }
                    return newPosts.length;
                }
            }
        }

        function sortF(a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt);
        }

        this.sortByDate = function (array) {
            var findPosts = array.slice();
            return findPosts.sort(sortF);
        }

        this.getPhotoPost = function (id) {
            if (!id)
                return null;

            for (var i = 0; i < this.photoPosts.length; i++) {
                if (this.photoPosts[i].id === id)
                    return this.photoPosts[i];
            }
            return null;
        }

        this.validatePhotoPost = function (photoPost) {
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

        this.addPhotoPost = function (photoPost) {
            if (!photoPost) {
                alert("invalid photo post");
                return false;
            }

            if (this.validatePhotoPost(photoPost) && this.getPhotoPost(photoPost.id) === null) {
                this.photoPosts.push(photoPost);
                return true;
            }

            alert("change post parameters!");

            return false;
        }

        this.editPhotoPost = function (id, photoPost) {
            var oldPhotoPost = this.getPhotoPost(id);
            var empty = false;
            if (!oldPhotoPost || !photoPost || !id)
                return false;

            if (photoPost.description) {
                if (photoPost.description.length >= 200)
                    return false;
                else {
                    oldPhotoPost.description = photoPost.description;
                    empty = true;
                }
            }

            if (photoPost.photoLink) {
                if (photoPost.photoLink.length === 0)
                    return false;
                else {
                    oldPhotoPost.photoLink = photoPost.photoLink;
                    empty = true;

                }
            }

            if (photoPost.hashTags) {
                oldPhotoPost.hashTags = photoPost.hashTags;
                empty = true;

            }

            let i = 0;
            while (i < document.getElementById('feedback').getElementsByClassName('post').length) {
                if (document.getElementById('feedback').getElementsByClassName('post')[i].id.toString() === oldPhotoPost.id) {

                    document.getElementById('feedback').getElementsByClassName('post')[i].innerHTML = depictPhotoPostWithoutWrap(oldPhotoPost);
                }
                i++;
            }

            return empty;
        }

        this.removePhotoPost = function (id, array) {
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

        this.removeAllPosts = function (id, array) {
            document.getElementById('feedback').innerHTML = "";
        }
    }

})();



