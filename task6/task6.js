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
        "                           <img src=\"user_blue.png\">" + photoPost.author +
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
        "<div><input type=\"image\" src=\"like.png\" name=\"submit\" /></div>\n" +
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
        "                           <img src=\"user_blue.png\">" + photoPost.author +
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
        "<div><input type=\"image\" src=\"like.png\" name=\"submit\" /></div>\n" +
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
        "                           <img src=\"user_blue.png\">" + photoPost.author +
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
        "                               <input type=\"image\" src=\"pencil32.png\" name=\"submitPost\" class=\"editing-button\"/>\n" + "</div>\n" +
        "                       <div class=\"bottom\">\n" +
        "                               <input type=\"image\" src=\"bin.png\" id=\"deleteIt\" class=\"deleting-button\"/>\n" +
        "                        </div>\n" +
        "                        <div class=\"bottom\">\n" +
        likes + "<input type=\"image\" src=\"like.png\" name=\"submit\" />\n" +
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
        "                           <img src=\"user_blue.png\">" + photoPost.author +
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
        "                               <input type=\"image\" src=\"pencil32.png\" name=\"submitPost\" class=\"editing-button\"/>" +
        "                        </div>\n" +
        "                        <div class=\"bottom\">\n" +
        "                               <input type=\"image\" src=\"bin.png\" id=\"deleteIt\" class=\"deleting-button\"/>\n" +
        "                        </div>\n" +
        "                        <div class=\"bottom\">\n" +
        likes + "<input type=\"image\" src=\"like.png\" name=\"submit\" />\n" +
        "                        </div>  \n" +
        "                    </div>\n";
}


var photoPosts = (function () {
    return function () {

        this.photoPosts = [];

        this.currentUser = "";

        this.changeCurrentUser = function (userName) {
            if (!userName) {
                document.getElementById('userName').innerHTML = "<img src=\"user_blue.png\"> <button class=\"button\" type=\"button\" id=\"loggingIn\">Войти</button>";
                document.getElementById('logOut').innerHTML = "";
            }
            else {
                userName = userName.trim();
                if (userName) {

                    document.getElementById('userName').innerHTML = "<img src=\"user_blue.png\"><div id=\"name\"></div><div id=\"plusContainer\"><input type=\"image\" src=\"plus.png\" id=\"addingPost\"></div>";
                    document.getElementById('name').innerHTML = userName;
                    document.getElementById('logOut').innerHTML = "<input type=\'image\' src=\"blue_arrow_right.png\" id='logging-out'>";
                }
                else {
                    document.getElementById('userName').innerHTML = "<img src=\"user_blue.png\"> <button class=\"button\" type=\"button\" id=\"loggingIn\">Войти</button>";
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
                document.getElementById('feedback').innerHTML = "<img src=\"err.png\" class=\'post\'>";
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

/*var initialPostsArray = [{depict:"1",
    id: "1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Mark Twain",
    hashTags:['#hashtag'],
    photoLink: "alps.jpg",
    likes: ['He','She','It']
},
{depict:'1',
    id: "2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-02-02T12:00:00'),
    author: "Rudolf Shenker",
    hashTags:['#rock', '#roll','#kottak'],
    photoLink: "Italy.jpg",
    likes: []
},
    {depict:'1',
    id: "3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-02-01T12:00:00'),
    author: "Steve Jobs",
    hashTags:['#city', '#lights'],
    photoLink: "venice.jpg",
    likes: ['He','She','It',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
},
    {depict:'1',
    id: "4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-01-19T12:00:00'),
    author: "Michael Flatley",
    hashTags:['#charming', '#France','#Languedok'],
    photoLink: "carcassonne.jpg",
    likes: ['He','She','It','they','somebody']
},
    {depict:'1',
    id: "5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-01-18T12:00:00'),
    author: "Ronnie James Dio",
    hashTags:['#fortress', '#restricted'],
    photoLink: "cataren.jpeg",
    likes: ['He']
},
    {depict:'1',
    id: "6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-01-17T12:00:00'),
    author: "Joe Cocker",
    hashTags:['#nature'],
    photoLink: "canyon.jpg",
    likes: ['He','She']
},
    {depict:'1',
    id: "7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-01-16T12:00:00'),
    author: "Ingwie Malmsten",
    hashTags:['#switzerland', '#Alps'],
    photoLink: "switz.jpg",
    likes: ['He','She','It', 'they']
},
    {depict:'1',
    id: "8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-01-15T12:00:00'),
    author: "Steve Jobs",
    hashTags:['#failed_dream', '#old_town','#silent_mood'],
    photoLink: "america.jpg",
    likes: ['He','She','It', 'they']
},
    {depict:'1',
    id: "9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-01-14T12:00:00'),
    author: "Ronnie James Dio",
    hashTags:['#beauty'],
    photoLink: "Waterfall.jpg",
    likes: ['He','She','It']
},
    {depict:'1',
    id: "10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-01-13T12:00:00'),
    author: "Klaus Meine",
    hashTags:['#Yosemit'],
    photoLink: "yosemitt.jpg",
    likes: ['He','She','It', 'they']
},
    {depict:'1',
        id: "11",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
        createdAt: new Date('2018-01-12T12:00:00'),
        author: "Mark Twain",
        hashTags:['#Titanic'],
        photoLink: "tit.jpg",
        likes: ['He','She','It']
    },
    {depict:'1',
        id: "12",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
        createdAt: new Date('2018-01-11T12:00:00'),
        author: "Joe Cocker",
        hashTags:['#Bulsara', '#Mercury'],
        photoLink: "bulsara.jpg",
        likes: ['He','She','It']
    },
    {depict:'1',
        id: "13",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
        createdAt: new Date('2018-01-10T12:00:00'),
        author: "Oldschool Skater",
        hashTags:['#vert', '#skate_or_die'],
        photoLink: "skate.jpg",
        likes: ['He','She','It']
    },
    {depict:'1',
        id: "14",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
        createdAt: new Date('2018-01-09T12:00:00'),
        author: "Jack Unknown",
        hashTags:['#film'],
        photoLink: "future.jpg",
        likes: ['He','She','It']
    },
    {depict:'1',
        id: "15",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
        createdAt: new Date('2018-01-08T12:00:00'),
        author: "Les Paul",
        hashTags:['#my_guitar', '#lespaul','#gibson'],
        photoLink: "lespaul.jpg",
        likes: ['He','She','It']
    },
    {depict:'1',
        id: "16",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
        createdAt: new Date('2018-01-07T12:00:00'),
        author: "Do Longboard!",
        hashTags:['#slides', '#are','#guides','#skate_or_die'],
        photoLink: "slide.jpg",
        likes: ['He','She','It']
    },
    {depict:'1',
        id: "17",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
        createdAt: new Date('2018-01-06T12:00:00'),
        author: "Swedish King",
        hashTags:['#my_ship'],
        photoLink: "vasa.jpg",
        likes: ['He','She','It']
    },
    {depict:'1',
        id: "18",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
        createdAt: new Date('2018-01-05T12:00:00'),
        author: "Rich Man",
        hashTags:['#yacht', '#mine'],
        photoLink: "yacht.jpg",
        likes: ['He','She','It']
    },
    {depict:'1',
        id: "19",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
        createdAt: new Date('2018-01-04T12:00:00'),
        author: "Wolfgang Mozart",
        hashTags:['#nature', '#beauty'],
        photoLink: "zalz.jpg",
        likes: ['He','She','It']
    },
    {depict:'1',
        id: "20",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
        createdAt: new Date('2018-01-03T12:00:00'),
        author: "African Hunter",
        hashTags:['#stone'],
        photoLink: "zimb.jpg",
        likes: ['He','She','It']
    },
    {depict:'1',
        id: "21",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
        createdAt: new Date('2018-01-01T12:00:00'),
        author: "Oldschool Skater",
        hashTags:['#skate_or_die'],
        photoLink: "skaters.jpg",
        likes: ['He','She','It']
    },
];

var postsString = JSON.stringify(initialPostsArray);

localStorage.setItem("photoPosts", postsString);

var currentUserString = JSON.stringify("");
localStorage.setItem("user", currentUserString);

var filterConfigString = JSON.stringify({
    dateFrom:"",
    dateTo: "",
    hashTags:[],
    author:""
});
localStorage.setItem("filter",filterConfigString);

var usersString = JSON.stringify([{
    name: "Mark Twain",
    password: "11204"
},
    {
        name: "Mark Twain",
        password: "11204"
    },
    {
        name:"Rudolf Shenker",
        password:"afgt"
    },
    {
        name:"Klaus Meine",
        password:"WeWillRockYou"
    },
    {
        name:"Steve Jobs",
        password:"iPhone10"
    },
    {
        name:"Michael Flatley",
        password:"Irish_Not_Irish"
    },
    {
        name:"Ronnie James Dio",
        password:"Dream_On123"
    },
    {
        name:"Joe Cocker",
        password:"1120w4"
    },
    {
        name:"Ingwie Malmsten",
        password:"1dfe1204"
    },
    {
        name:"Oldschool Skater",
        password:"112023234"
    },
    {
        name:"Rich Man",
        password:"104"
    },
    {
        name:"Swedish King",
        password:"1rev1204"
    },
    {
        name:"Wolfgang Mozart",
        password:"1rerev1204"
    },
    {
        name:"African Hunter",
        password:"1204"
    },
    {
        name:"Jack Unknown",
        password:"1revef1204"
    },
    {
        name:"Les Paul",
        password:"1rereiuv1204"
    }
    ]);

localStorage.setItem("namesAndPasswords",usersString);

localStorage.setItem("currentState",JSON.stringify("authorisedFeedback"));*/

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
    alert("Раскомментируйте большой участок кода, в котором в Localstorage помещаются посты и авторы. Перезагрузите страницу и после этого закомментируйте этот участок кода обратно." +
        "Пароли для пользователей, а также их логины можно узнать в этом участке кода");
}

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

    document.getElementById('logOut').innerHTML = "<input type=\'image\' src=\"blue_arrow_right.png\" id='logging-out'>";
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

                document.getElementById('head').innerHTML = "<div class=\"header\"> <img src=\"cam.png\">YourLight</div>\n" +
                    "\n" +
                    "    <div class=\"header\" id=\"userName\"> <img src=\"user_blue.png\"> <button class=\"button\" type=\"button\" id=\"logIn\">Войти</button></div>\n" +
                    "\n" +
                    "    <div class=\"header\"id=\"logOut\"></div>";

                posts.changeCurrentUser(posts.currentUser);

                if(posts.getPhotoPosts(10, filterConfig)>10){
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

  

    document.getElementById('logOut').innerHTML = "<input type=\'image\' src=\"blue_arrow_right.png\" id='logging-out'>";
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


    // var deletingButton = document.getElementsByClassName('deleting-button')
}