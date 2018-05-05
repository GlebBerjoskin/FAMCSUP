var wrap = function (string) {
    return ("<div class=\"wrap\">\n" + string + "</div>\n");
}

var depictPhotoPost = function (photoPost) {
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
    return "<div class=\"post\" id=\"" + photoPost.id + "\">\n" +
        "                    <div class=\"header\">\n" +
        "                        <div class=\"top\">\n" +
        "                           <img src=\"user_blue.png\">" + photoPost.author +
        "                        </div>\n" +
        "                        <div class=\"top\">" + (photoPost.createdAt) + "</div>\n" +
        "                    </div>\n" +
        "                    <img class=\"image\" src=" + photoPost.photoLink + ">\n" +
        "                    <p>" + photoPost.description + "</p>\n" +
        "                    <div class=\"header\">\n" +
        "                        <div class=\"bottom\">\n" +
        "                               <em>" + buffer + "</em>\n" +
        "                        </div>\n" +
        "                        <div class=\"bottom\">\n" + "<div>" + likes + "</div>\n" +
        "<div><input type=\"image\" src=\"like.png\" name=\"submit\" /></div>\n" +
        "                        </div>  \n" +
        "                    </div>\n" +
        "</div>\n"
}

var depictPhotoPostWithoutWrap = function (photoPost) {
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
        "                           <img src=\"user_blue.png\">" + photoPost.author +
        "                        </div>\n" +
        "                        <div class=\"top\">" + (photoPost.createdAt) + "</div>\n" +
        "                    </div>\n" +
        "                    <img class=\"image\" src=" + photoPost.photoLink + ">\n" +
        "                    <p>" + photoPost.description + "</p>\n" +
        "                    <div class=\"header\">\n" +
        "                        <div class=\"bottom\">\n" +
        "                               <em>" + buffer + "</em>\n" +
        "                        </div>\n" +
        "                        <div class=\"bottom\">\n" + "<div>" + likes + "</div>\n" +
        "<div><input type=\"image\" src=\"like.png\" name=\"submit\" /></div>\n" +
        "                        </div>  \n" +
        "                    </div>\n";
}

var depictPhotoPostAuthorised = function (photoPost) {
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
    return "<div class=\"post\ id=\"" + photoPost.id + "\>\n" +
        "                    <div class=\"header\">\n" +
        "                        <div class=\"top\">\n" +
        "                           <img src=\"user_blue.png\">" + photoPost.author +
        "                        </div>\n" +
        "                        <div class=\"top\">" + (photoPost.createdAt) + "</div>\n" +
        "                    </div>\n" +
        "                    <img class=\"image\" src=" + photoPost.photoLink + ">\n" +
        "                    <p>" + photoPost.description + "</p>\n" +
        "                    <div class=\"header\">\n" +
        "                        <div class=\"bottom\">\n" +
        "                               <em>" + buffer + "</em>\n" +
        "                        </div>\n" +
        "                        <div class=\"bottom\">\n" +
        "                               <input type=\"image\" src=\"pencil32.png\" name=\"submit\"/>\n" + "</div>\n" +
        "                       <div class=\"bottom\">\n" +
        "                               <input type=\"image\" src=\"bin.png\" name=\"submit\"/>\n" +
        "                        </div>\n" +
        "                        <div class=\"bottom\">\n" +
        likes + "<input type=\"image\" src=\"like.png\" name=\"submit\" />\n" +
        "                        </div>  \n" +
        "                    </div>\n" +
        "</div>\n"
}

var depictPhotoPostAuthorisedWithoutWrap = function (photoPost) {
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
        "                           <img src=\"user_blue.png\">" + photoPost.author +
        "                        </div>\n" +
        "                        <div class=\"top\">" + (photoPost.createdAt) + "</div>\n" +
        "                    </div>\n" +
        "                    <img class=\"image\" src=" + photoPost.photoLink + ">\n" +
        "                    </div>\n" +
        "                    <p>" + photoPost.description + "</p>\n" +
        "                    <div class=\"header\">\n" +
        "                        <div class=\"bottom\">\n" +
        "                               <em>" + buffer + "</em>\n" +
        "                        </div>\n" +
        "                        <div class=\"bottom\">\n" +
        "                               <input type=\"image\" src=\"pencil32.png\" name=\"submit\"/>" +
        "                        </div>\n" +
        "                        <div class=\"bottom\">\n" +
        "                               <input type=\"image\" src=\"bin.png\" name=\"submit\"/>\n" +
        "                        </div>\n" +
        "                        <div class=\"bottom\">\n" +
        likes + "<input type=\"image\" src=\"like.png\" name=\"submit\" />\n" +
        "                        </div>  \n" +
        "                    </div>\n";
}



var photoPosts = (function () {
    return function () {

        this.photoPosts = [];

        this.currentUser;

        this.changeCurrentUser = function (userName) {
            currentUser = userName;
            if (!userName) {
                document.getElementById('userName').innerHTML = "<img src=\"user_blue.png\"> <button class=\"button\" type=\"button\">Войти</button>";
                document.getElementById('logOut').innerHTML = "";
                for (var i = 0; i < this.photoPosts.length; i++) {

                    document.getElementById('feedback').getElementsByClassName('post')[i].innerHTML = depictPhotoPostWithoutWrap(this.photoPosts[i]);

                }
            }
            else {
                userName = userName.trim();
                if (userName) {
                    document.getElementById('userName').innerHTML = userName;

                    for (var i = 0; i < this.photoPosts.length; i++) {
                        if (this.photoPosts[i].author.trim() === userName) {
                            document.getElementById('feedback').getElementsByClassName('post')[i].innerHTML = depictPhotoPostAuthorisedWithoutWrap(this.photoPosts[i]);
                        }
                        else {
                            document.getElementById('feedback').getElementsByClassName('post')[i].innerHTML = depictPhotoPostWithoutWrap(this.photoPosts[i]);
                        }
                    }
                }
                else {
                    document.getElementById('userName').innerHTML = "<img src=\"user_blue.png\"> <button class=\"button\" type=\"button\">Войти</button>";
                    document.getElementById('logOut').innerHTML = "";
                    for (var i = 0; i < this.photoPosts.length; i++) {

                        document.getElementById('feedback').getElementsByClassName('post')[i].innerHTML = depictPhotoPostWithoutWrap(this.photoPosts[i]);

                    }
                }
            }
        }

        filterByAuthor = function (author, newPosts, top) {
            var findPosts = [];

            if (!author)
                return newPosts;

            for (var i = 0; i < newPosts.length; i++){
                if (newPosts[i].author.toLowerCase() === author.toLowerCase()){
                    findPosts.push(newPosts[i]);
                }
            }

            return findPosts;
        }

        filterByDate = function (dateFrom, dateTo, newPosts, top) {
            var findPosts = [];

            if (!dateFrom || !dateTo)
                return newPosts;

            for (var i = 0; i < newPosts.length; i++)
                if (newPosts[i].createdAt >= dateFrom) {
                    if (newPosts[i].createdAt <= dateTo) {
                        findPosts.push(newPosts[i]);
                    }
                }
            return findPosts;
        }

        filterByHashTags = function (hashTag, newPosts, top) {
            return newPosts.filter(function (post) {
                return hashTag.every(function (hashTagIndex) {
                    return post.hashTags.includes(hashTagIndex);
                });
            });
        }

        this.getPhotoPosts = function (skip, top, filterConfig) {

            var newPosts = this.photoPosts;

            if (skip < 0 || skip >= photoPosts.length || !skip)
                skip = 0;

            else if (skip !== 0) {
                skip++;
            }
            if (!top || top <= 0)
                top = 10;

            else if (top !== 10) {
                top++;
            }
            if (filterConfig) {
                if ("author" in filterConfig){
                    newPosts = filterByAuthor(filterConfig.author, newPosts, top);
                    document.getElementById('filter')[0].value = filterConfig.author;
            }
                if ("dateFrom" in filterConfig && "dateTo" in filterConfig){
                    newPosts = filterByDate(filterConfig.dateFrom, filterConfig.dateTo, newPosts, top);
                    document.getElementById('filter')[1].value = filterConfig.dateFrom;
                    document.getElementById('filter')[2].value = filterConfig.dateTo;
            }
                if (filterConfig.hashTags){
                    newPosts = filterByHashTags(filterConfig.hashTags, newPosts, top);
                    document.getElementById('filter')[3].value = filterConfig.hashTags;
                }
                newPosts = this.sortByDate(newPosts).slice(skip, skip + top);

            }
            else {
                newPosts = this.sortByDate(this.photoPosts).slice(skip, skip + top);
            }

            document.getElementById('feedback').innerHTML = "";

            for(let i=0;i<newPosts.size;i++){
                if(currentUser===newPosts[i].author){
                    document.getElementById("feedback").innerHTML += depictPhotoPostAuthorised(newPosts[i]);
                }
                else{
                document.getElementById("feedback").innerHTML += depictPhotoPost(newPosts[i]);
                }
            }

            return newPosts;
        }

        function sortF(a, b) {
            return a.createdAt - b.createdAt
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
                document.getElementById("feedback").innerHTML += depictPhotoPost(photoPost);
                return true;
            }

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
            
            let i=0;
            while(i<document.getElementById('feedback').getElementsByClassName('post').length){
                if(document.getElementById('feedback').getElementsByClassName('post')[i].id.toString()=== oldPhotoPost.id){
                   
                    document.getElementById('feedback').getElementsByClassName('post')[i].innerHTML = depictPhotoPostWithoutWrap(oldPhotoPost);
                }
                i++;
            }

            return empty;
        }

        this.removePhotoPost = function (id) {
            if (!id)
                return false;

            for (var i = 0; i < this.photoPosts.length; i++) {
                if (this.photoPosts[i].id === id) {
                    this.photoPosts.splice(i, 1);
                    elementsArray = document.getElementById('feedback').getElementsByClassName('post');
                    elementsArray[i].remove();
                    return true;
                }
            }
            return false;
        }
    }

})();

let posts = new photoPosts();
posts.addPhotoPost({
    id: "1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Mark Twain",
    hashTags: ['#hashtag', '#hashtag', '#hashtag'],
    photoLink: "alps.jpg",
    likes: ['He', 'She', 'It']
});

posts.addPhotoPost({
    id: "2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Rudolf Shenker",
    hashTags: ['#hashtag', '#hashtag', '#hashtag'],
    photoLink: "Italy.jpg",
    likes: []
});

posts.addPhotoPost({
    id: "3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Steve Jobs",
    hashTags: ['#hashtag', '#hashtag', '#hashtag'],
    photoLink: "venice.jpg",
    likes: ['He', 'She', 'It', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
});

posts.addPhotoPost({
    id: "4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Michael Flatley",
    hashTags: ['#hashtag', '#hashtag', '#hashtag'],
    photoLink: "carcassonne.jpg",
    likes: ['He', 'She', 'It', 'they', 'somebody']
});

posts.addPhotoPost({
    id: "5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Ronnie James Dio",
    hashTags: ['#hashtag', '#hashtag', '#hashtag'],
    photoLink: "cataren.jpeg",
    likes: ['He']
});

posts.addPhotoPost({
    id: "6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Joe Cocker",
    hashTags: ['#hashtag', '#hashtag', '#hashtag'],
    photoLink: "canyon.jpg",
    likes: ['He', 'She']
});

posts.addPhotoPost({
    id: "7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Ingwie Malmsten",
    hashTags: ['#hashtag', '#hashtag', '#hashtag'],
    photoLink: "switz.jpg",
    likes: ['He', 'She', 'It', 'they']
});
posts.addPhotoPost({
    id: "8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Steve Jobs",
    hashTags: ['#hashtag', '#hashtag', '#hashtag'],
    photoLink: "america.jpg",
    likes: ['He', 'She', 'It', 'they']
});
posts.addPhotoPost({
    id: "9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Ronnie James Dio",
    hashTags: ['#hashtag', '#hashtag', '#hashtag'],
    photoLink: "Waterfall.jpg",
    likes: ['He', 'She', 'It']
});

posts.removePhotoPost('1');
posts.editPhotoPost('6', {
    id: "7",
    description: "Unchain my heart! Baby, set me free! Unchain my heart! Cause you dont care 'bout me!" +
        "Every time I call you only phone, somebody tells me you're not at home! Unchain my heart, set me free!",
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Ingwie Malmsten",
    hashTags: ['#hashtag', '#hashtag', '#hashtag'],
    photoLink: "alps.jpg",
    likes: ['He', 'She', 'It', 'they']
});
posts.changeCurrentUser("Joe Satriani");


