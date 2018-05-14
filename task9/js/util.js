var fs = require('fs');

var postsEditor = (function () {
    return function () {
        this.getPhotoPost = function (id) {
            var photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
            var photoPosts = photoObject.photoPosts;

            if (!id)
                return null;

            for (var i = 0; i < photoPosts.length; i++) {
                if (photoPosts[i].id === id)
                    return photoPosts[i];
            }
            return null;
        }

        function filterByAuthor(author, newPosts, top) {
            var findPosts = [];

            if (!author) {
                return newPosts;
            }

            for (var i = 0; i < newPosts.length; i++) {
                if (newPosts[i].author.toLowerCase() === author.toLowerCase()) {
                    findPosts.push(newPosts[i]);
                }
            }
            return findPosts;
        }

        function filterByDate(dateFrom, dateTo, newPosts, top) {
            var findPosts = [];

            if (!dateFrom && !dateTo) {
                return newPosts;
            }

            if (!dateFrom || dateFrom.trim() === "") {
                dateFrom = new Date('1990-01-15T12:00:00');
            }
            else {
                dateFrom = new Date(dateFrom);
            }

            if (!dateTo || dateTo.trim() === "") {
                dateTo = new Date('2020-01-15T12:00:00');
            }
            else {
                dateTo = new Date(dateTo);
            }
            for (var i = 0; i < newPosts.length; i++) {
                if (new Date(newPosts[i].createdAt) >= dateFrom) {
                    if (new Date(newPosts[i].createdAt) <= dateTo) {
                        findPosts.push(newPosts[i]);
                    }
                }
            }
            return findPosts;
        }

        function filterByHashTags(hashTag, newPosts, top) {
            return newPosts.filter(function (post) {
                return hashTag.every(function (hashTagIndex) {
                    return post.hashTags.includes(hashTagIndex);
                });
            });
        }

        this.getPhotoPosts = function (skip, top, filterConfig) {
            var photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
            var newPosts = photoObject.photoPosts;

            if (!skip || skip < 0) {
                skip = 0;
            }

            if (!top || top < 0) {
                top = 10;
            }

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

                newPosts = newPosts.sort(function (post1, post2) { return post2.createdAt - post1.createdAt; });
                newPosts.slice(skip + 1, top + 1);

                return newPosts;
            }
        }

        this.getFilterConfig = function () {
            var photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
            var filterConfig = photoObject.filterConfig;
            return filterConfig;
        }

        this.getEditedPost = function () {
            var photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
            var editedPost = photoObject.editedPost;
            return editedPost;
        }

        this.getCurrentUser = function () {
            var photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
            var currentUser = photoObject.currentUser;
            return currentUser;
        }

        this.getUsers = function () {
            var photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
            var users = photoObject.users;
            return users;
        }

        this.addPhotoPost = function (image, description, tags, author) {
            let photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
            var photoPosts = photoObject.photoPosts;

            var newId = -1;
            for (let i = 0; i < photoPosts.length; i++) {
                if (newId < parseInt(photoPosts[i].id)) {
                    newId = i;
                }
            }

            var post = {};

            post.id = (parseInt(photoPosts[newId].id) + 1).toString();

            post.createdAt = new Date();

            post.photoLink = "/images/" + image;
           
            post.description = description;

            post.author = author;

            tags = tags.split(',');

            if (!(tags instanceof Array)) {
                tags = [];
            }

            post.hashTags = tags;

            post.depict = "1";

            if (!this.validatePhotoPost(post)) {
                return false;
            }

            photoPosts.push(post);

            let writer = fs.createWriteStream('./server/data/posts.json');

            writer.write(JSON.stringify(photoObject));

            return true;
        }

        this.putFilterConfig = function (filterConfig) {
            if (!filterConfig) {
                return false;
            }
            var photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
            photoObject.filterConfig = filterConfig;

            let writer = fs.createWriteStream('server/data/posts.json');
            writer.write(JSON.stringify(photoObject));
            return true;
        }
        this.putEditedPost = function (editedPost) {
            if (!editedPost) {
                return false;
            }
            var photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
            photoObject.editedPost = editedPost;

            let writer = fs.createWriteStream('server/data/posts.json');
            writer.write(JSON.stringify(photoObject));
            return true;
        }
        this.putCurrentUser = function (currentUser) {
            var photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
            photoObject.currentUser = currentUser;

            let writer = fs.createWriteStream('server/data/posts.json');
            writer.write(JSON.stringify(photoObject));
            return true;
        }

        this.editPhotoPost = function (id,image,tags,text) {
            let photoObject = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
            var i = 0;

            while (i < photoObject.photoPosts.length && photoObject.photoPosts[i].id !== id) {
                i++;
            }

            if (i === photoObject.photoPosts.length) {
                return false;
            }

            if (text) {
                photoObject.photoPosts[i].description = text;
            }

            if (image) {
                photoObject.photoPosts[i].photoLink = image;
            }

            let writer = fs.createWriteStream('server/data/posts.json');
            writer.write(JSON.stringify(photoObject));

            return true;
        }

        this.validatePhotoPost = function (photoPost) {
            if ((typeof (photoPost.id) === "string") &&
                (typeof (photoPost.description) === "string") &&
                (typeof (photoPost.author) === "string") &&
                (typeof (photoPost.photoLink) === "string") &&
                (photoPost.createdAt instanceof Date)) {
                if (photoPost.photoLink.length !== 0 && photoPost.description.length <= 200 && photoPost.author.length !== 0) {
                    if (!photoPost.hashTags) {
                        photoPost.hashTags = [];
                    }
                    return true;
                }
            }
            return false;
        }

        this.removePhotoPost = function (id) {
            var photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
            var photoPosts = photoObject.photoPosts;

            for (var i = 0; i < photoPosts.length; i++) {
                if (photoPosts[i].id === id) {
                    photoPosts[i].depict = "0";
                    let writer = fs.createWriteStream('server/data/posts.json');
                    writer.write(JSON.stringify(photoObject));
                    return true;
                }
            }

            return false;
        }
    }
})();
module.exports = postsEditor;