var wrap = function(string){
    return ("<div class=\"wrap\">\n"+ string+"</div>\n");
}

var depictPhotoPost = function(photoPost){
    let buffer ="";
    if(photoPost.hashTags) {
        for (let i = 0; i < photoPost.hashTags.length; i++) {
            buffer += photoPost.hashTags[i];
        }
    }

    let likes ="";
    if(photoPost.likes){
        likes = photoPost.likes.length;
        if(photoPost.likes.length===0){
            likes="";
        }
    }
    return"<div class=\"post\">\n" +
        "                    <div class=\"header\">\n" +
        "                        <div class=\"top\">\n" +
        "                           <img src=\"user_blue.png\">"+ photoPost.author +
        "                        </div>\n" +
        "                        <div class=\"top\">" + (photoPost.createdAt) + "</div>\n" +
        "                    </div>\n" +
        "                    <img class=\"image\" src="+photoPost.photoLink+">\n" +
        "                    <p>"+photoPost.description+"</p>\n" +
        "                    <div class=\"header\">\n" +
        "                        <div class=\"bottom\">\n"+
        "                               <em>"+ buffer+"</em>\n" +
        "                        </div>\n"+
        "                        <div class=\"bottom\">\n"+"<div>"+likes+"</div>\n"+
                                         "<div><input type=\"image\" src=\"like.png\" name=\"submit\" /></div>\n"+
        "                        </div>  \n"+
        "                    </div>\n"+
        "<br><br>"+
        "</div>\n"
}

var depictPhotoPostWithoutWrap = function(photoPost){
    let buffer ="";
    if(photoPost.hashTags) {
        for (let i = 0; i < photoPost.hashTags.length; i++) {
            buffer += photoPost.hashTags[i];
        }
    }

    let likes ="";
    if(photoPost.likes){
        likes = photoPost.likes.length;
        if(photoPost.likes.length===0){
            likes="";
        }
    }
    return"                    <div class=\"header\">\n" +
        "                        <div class=\"top\">\n" +
        "                           <img src=\"user_blue.png\">"+ photoPost.author +
        "                        </div>\n" +
        "                        <div class=\"top\">" + (photoPost.createdAt) + "</div>\n" +
        "                    </div>\n" +
        "                    <img class=\"image\" src="+photoPost.photoLink+">\n" +
        "                    <p>"+photoPost.description+"</p>\n" +
        "                    <div class=\"header\">\n" +
        "                        <div class=\"bottom\">\n"+
        "                               <em>"+ buffer+"</em>\n" +
        "                        </div>\n"+
        "                        <div class=\"bottom\">\n"+"<div>"+likes+"</div>\n"+
        "<div><input type=\"image\" src=\"like.png\" name=\"submit\" /></div>\n"+
        "                        </div>  \n"+
        "                    </div>\n"+
        "<br><br>"
}

var depictPhotoPostAuthorised = function(photoPost){
    let buffer ="";
    if(photoPost.hashTags) {
        for (let i = 0; i < photoPost.hashTags.length; i++) {
            buffer += photoPost.hashTags[i];
        }
    }
    let likes ="";
    if(photoPost.likes){
        likes = (photoPost.likes.length);
        if(photoPost.likes.length===0){
            likes="";
        }
    }
    return"<div class=\"post\">\n" +
        "                    <div class=\"header\">\n" +
        "                        <div class=\"top\">\n" +
        "                           <img src=\"user_blue.png\">"+ photoPost.author +
        "                        </div>\n" +
        "                        <div class=\"top\">" + (photoPost.createdAt) + "</div>\n" +
        "                    </div>\n" +
        "                    <img class=\"image\" src="+photoPost.photoLink+">\n" +
        "                    <p>"+photoPost.description+"</p>\n" +
        "                    <div class=\"header\">\n" +
        "                        <div class=\"bottom\">\n"+
        "                               <em>"+ buffer+"</em>\n" +
        "                        </div>\n"+
        "                        <div class=\"bottom\">\n"+
        "                               <input type=\"image\" src=\"pencil32.png\" name=\"submit\"/>\n"+"</div>\n"+
        "                       <div class=\"bottom\">\n"+
        "                               <input type=\"image\" src=\"bin.png\" name=\"submit\"/>\n"+
        "                        </div>\n"+
        "                        <div class=\"bottom\">\n"+
                                        likes +"<input type=\"image\" src=\"like.png\" name=\"submit\" />\n"+
        "                        </div>  \n"+
        "                    </div>\n"+
        "<br><br>"+
        "</div>\n"
}

var depictPhotoPostAuthorisedWithoutWrap = function(photoPost){
    let buffer ="";
    if(photoPost.hashTags) {
        for (let i = 0; i < photoPost.hashTags.length; i++) {
            buffer += photoPost.hashTags[i];
        }
    }
    let likes ="";
    if(photoPost.likes){
        likes = (photoPost.likes.length);
        if(photoPost.likes.length===0){
            likes="";
        }
    }
    return "                    <div class=\"header\">\n" +
        "                        <div class=\"top\">\n" +
        "                           <img src=\"user_blue.png\">"+ photoPost.author +
        "                        </div>\n" +
        "                        <div class=\"top\">" + (photoPost.createdAt) + "</div>\n" +
        "                    </div>\n" +
        "                    <img class=\"image\" src="+photoPost.photoLink+">\n" +
        "                    </div>\n" +
        "                    <p>"+photoPost.description+"</p>\n" +
        "                    <div class=\"header\">\n" +
        "                        <div class=\"bottom\">\n"+
        "                               <em>"+ buffer+"</em>\n" +
        "                        </div>\n"+
        "                        <div class=\"bottom\">\n"+
        "                               <input type=\"image\" src=\"pencil32.png\" name=\"submit\"/>"+
        "                        </div>\n"+
        "                        <div class=\"bottom\">\n"+
        "                               <input type=\"image\" src=\"bin.png\" name=\"submit\"/>\n"+
        "                        </div>\n"+
        "                        <div class=\"bottom\">\n"+
        likes +"<input type=\"image\" src=\"like.png\" name=\"submit\" />\n"+
        "                        </div>  \n"+
        "                    </div>\n"+
        "<br><br>"
}



var photoPosts = (function() {
    return function() {

        this.photoPosts = [];

        this.changeCurrentUser = function(userName){
            if(!userName){
                document.getElementById('userName').innerHTML = "<img src=\"user_blue.png\"> <button class=\"button\" type=\"button\">Войти</button>";
                document.getElementById('logOut').innerHTML = "";
                for(var i=0;i<this.photoPosts.length;i++){

                    document.getElementById('feedback').getElementsByClassName('post')[i].innerHTML = depictPhotoPostWithoutWrap(this.photoPosts[i]);

                }
            }
            else {
                userName=userName.trim();
                if (userName) {
                    document.getElementById('userName').innerHTML = userName;

                    for(var i=0;i<this.photoPosts.length;i++){
                        if(this.photoPosts[i].author.trim()===userName){
                            document.getElementById('feedback').getElementsByClassName('post')[i].innerHTML = depictPhotoPostAuthorisedWithoutWrap(this.photoPosts[i]);
                        }
                        else{
                            document.getElementById('feedback').getElementsByClassName('post')[i].innerHTML = depictPhotoPostWithoutWrap(this.photoPosts[i]);
                        }
                    }
                }
                else{
                    document.getElementById('userName').innerHTML = "<img src=\"user_blue.png\"> <button class=\"button\" type=\"button\">Войти</button>";
                    document.getElementById('logOut').innerHTML = "";
                    for(var i=0;i<this.photoPosts.length;i++){

                            document.getElementById('feedback').getElementsByClassName('post')[i].innerHTML = depictPhotoPostWithoutWrap(this.photoPosts[i]);

                    }
                }
            }
        }

        filterByAuthor = function (author, newPosts, top) {
            var findPosts = [];

            if (!author)
                return newPosts;

            for (var i = 0; i < newPosts.length; i++)
                if (newPosts[i].author === author && findPosts.length <= top)
                    findPosts.push(newPosts[i]);

            return findPosts;
        }

        filterByDate = function (dateFrom, dateTo, newPosts, top) {
            var findPosts = [];

            if (!dateFrom || !dateTo)
                return newPosts;

            for (var i = 0; i < newPosts.length; i++)
                if (newPosts[i].createdAt >= dateFrom) {
                    if (newPosts[i].createdAt <= dateTo && findPosts.length <= top) {
                        findPosts.push(newPosts[i]);
                    }
                }
            return findPosts;
        }

        filterByHashTags = function (hashTag, newPosts, top) {
            var findPosts = [];

            if (!hashTag)
                return newPosts;

            for (var j = 0; j < newPosts.length; j++){
                if(newPosts[j]) {
                    var keeper = 0;
                    for (var i = 0; i < hashTag.length; i++) {
                        if(hashTag[i]){
                            if (newPosts[j].hashTags.indexOf(hashTag[i]) !== -1 && findPosts.length <= top)
                                keeper++;
                        }
                    }
                    if(keeper === hashTag.length){
                        findPosts.push(newPosts[j]);
                    }
                }
            }
            return findPosts;
        }

        this.getPhotoPosts = function (skip, top, filterConfig) {

            var newPosts = this.photoPosts;

            if (skip === skip < 0 || skip >= photoPosts.length || !skip)
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
                if ("author" in filterConfig)
                    newPosts = filterByAuthor(filterConfig.author, newPosts, top);

                if ("dateFrom" in filterConfig && "dateTo" in filterConfig)
                    newPosts = filterByDate(filterConfig.dateFrom, filterConfig.dateTo, newPosts, top);

                if (!(!filterConfig.hashTags))
                    newPosts = filterByHashTags(filterConfig.hashTags, newPosts, top);

                newPosts = this.sortByDate(newPosts).slice(skip, skip + top);
            }
            else {
                newPosts = this.sortByDate(this.photoPosts).slice(skip, skip + top);
            }

            return newPosts;
        }

        function sortF(a, b) {
            return a.createdAt - b.createdAt
        }

        this.sortByDate = function(array) {
            var findPosts = array.slice();
            return findPosts.sort(sortF);
        }

        this.getPhotoPost = function(id) {
            if (!id)
                return null;

            for (var i = 0; i < this.photoPosts.length; i++) {
                if (this.photoPosts[i].id === id)
                    return this.photoPosts[i];
            }
            return null;
        }

        this.validatePhotoPost = function(photoPost) {
            if ((typeof(photoPost.id) === "string") &&
                (typeof(photoPost.description) === "string") &&
                (typeof(photoPost.author) === "string") &&
                (typeof(photoPost.photoLink) === "string") &&
                (photoPost.createdAt instanceof Date)) {
                if (photoPost.photoLink.length !== 0 && photoPost.description.length <= 200 && photoPost.author !== 0) {
                    return true;
                }
            }
            return false;
        }

        this.addPhotoPost = function(photoPost) {
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

        this.editPhotoPost = function(id, photoPost) {
            var oldPhotoPost = this.getPhotoPost(id);
            var empty = false;
            if (!oldPhotoPost || !photoPost|| !id)
                return false;

            if (photoPost.description !== undefined) {
                if(photoPost.description !==null){
                    if (photoPost.description.length >= 200)
                        return false;
                    else {
                        oldPhotoPost.description = photoPost.description;
                        empty = true;
                    }
                }
            }

            if (photoPost.photoLink !== undefined) {
                if(photoPost.photoLink!==null) {
                    if (photoPost.photoLink.length === 0)
                        return false;
                    else {
                        oldPhotoPost.photoLink = photoPost.photoLink;
                        empty = true;
                    }
                }
            }

            if (photoPost.hashTags !== undefined) {
                if(photoPost.hashTags!==null) {
                        oldPhotoPost.hashTags = photoPost.hashTags;
                        empty = true;
                }
            }
            console.log(document.getElementById('feedback').getElementsByClassName('post'));
            document.getElementById('feedback').getElementsByClassName('post')[id-1].innerHTML = depictPhotoPostWW(oldPhotoPost);

            return empty;
        }

        this.removePhotoPost = function(id) {
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
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Mark Twain",
    hashTags:['#hashtag', '#hashtag','#hashtag'],
    photoLink: "alps.jpg",
    likes: ['He','She','It']
});

posts.addPhotoPost({
    id: "2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Rudolf Shenker",
    hashTags:['#hashtag', '#hashtag','#hashtag'],
    photoLink: "Italy.jpg",
    likes: []
});

posts.addPhotoPost({
    id: "3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Steve Jobs",
    hashTags:['#hashtag', '#hashtag','#hashtag'],
    photoLink: "venice.jpg",
    likes: ['He','She','It',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
});

posts.addPhotoPost({
    id: "4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Michael Flatley",
    hashTags:['#hashtag', '#hashtag','#hashtag'],
    photoLink: "carcassonne.jpg",
    likes: ['He','She','It','they','somebody']
});

posts.addPhotoPost({
    id: "5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Ronnie James Dio",
    hashTags:['#hashtag', '#hashtag','#hashtag'],
    photoLink: "cataren.jpeg",
    likes: ['He']
});

posts.addPhotoPost({
    id: "6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Joe Cocker",
    hashTags:['#hashtag', '#hashtag','#hashtag'],
    photoLink: "canyon.jpg",
    likes: ['He','She']
});

posts.addPhotoPost({
    id: "7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Ingwie Malmsten",
    hashTags:['#hashtag', '#hashtag','#hashtag'],
    photoLink: "switz.jpg",
    likes: ['He','She','It', 'they']
});
posts.addPhotoPost({
    id: "8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Steve Jobs",
    hashTags:['#hashtag', '#hashtag','#hashtag'],
    photoLink: "america.jpg",
    likes: ['He','She','It', 'they']
});
posts.addPhotoPost({
    id: "9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Ronnie James Dio",
    hashTags:['#hashtag', '#hashtag','#hashtag'],
    photoLink: "Waterfall.jpg",
    likes: ['He','She','It']
});
posts.addPhotoPost({
    id: "10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" ,
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Klaus Meine",
    hashTags:['#hashtag', '#hashtag','#hashtag'],
    photoLink: "yosemitt.jpg",
    likes: ['He','She','It', 'they']
});
posts.removePhotoPost('10');
posts.editPhotoPost('6',{
    id: "7",
    description: "Unchain my heart! Baby, set me free! Unchain my heart! Cause you dont care 'bout me!" +
    "Every time I call you only phone, somebody tells me you're not at home! Unchain my heart, set me free!" ,
    createdAt: new Date('2018-02-03T12:00:00'),
    author: "Ingwie Malmsten",
    hashTags:['#hashtag', '#hashtag','#hashtag'],
    photoLink: "alps.jpg",
    likes: ['He','She','It', 'they']
})
posts.changeCurrentUser("Joe Satriani");


