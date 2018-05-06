var fs = require('fs');

var postsEditor = (function () {
    return function () {
        this.getPhotoPost = function (id) {
            var photoPosts = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
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

            console.log(author.toLowerCase());
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

        this.getPhotoPosts = function(skip, top, filterConfig) {
            let newPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));

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

                newPosts = newPosts.sort(function(post1, post2) { return  post2.createdAt - post1.createdAt;});

                return newPosts;
            }
        }

        this.addPhotoPost = function(post) {
            let photoPosts = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));

            var newId = -1;
            for (let i = 0; i < photoPosts.length; i++) {
                if (newId < parseInt(photoPosts[i].id)) {
                    newId = i;
                }
            }

            post.id = (parseInt(photoPosts[newId].id) + 1).toString();

            post.createdAt = new Date();

            if (!this.validatePhotoPost(post)) {
                return false;
            }

            photoPosts.push(post);

            let writer = fs.createWriteStream('./server/data/posts.json');

            writer.write(JSON.stringify(photoPosts));

            return true;
        }

        this.editPhotoPost = function(post) {
            let photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
            var i = 0;

            while (i < photoPosts.length && photoPosts[i].id !== post.id.toString()) {
                i++;
            }

            if (i === photoPosts.length) {
                return false;
            }
            if (post.description) {
                photoPosts[i].description = post.description;
            }
            if (post.photoLink) {
                photoPosts[i].photoLink = post.photoLink;
            }

            let writer = fs.createWriteStream('server/data/posts.json');
            writer.write(JSON.stringify(photoPosts));

            return true;
        }

        this.validatePhotoPost = function(photoPost) {
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

        this.removePhotoPost = function(id) {
            let photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
            for (var i = 0; i < photoPosts.length; i++) {
                if (photoPosts[i].id === id.toString()) {
                    photoPosts.slice(i, i + 1);
                    let writer = fs.createWriteStream('server/data/posts.json');
                    writer.write(JSON.stringify(photoPosts));
                    return true;
                }
            }

            return false;
        }
    }
})();
module.exports = postsEditor;