var model = (function () {
    var getPhotoPost = function (id) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', '/getPhotoPost/' + id, false);

        xhr.send();

        if (xhr.status !== 200) {
            alert(xhr.status + ': ' + xhr.statusText);
            return null;
        }

        else {
            var post = JSON.parse(xhr.responseText);
            post.createdAt = new Date(post.createdAt);
            return post;
        }
    }
    var getFilterConfig = function () {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', '/getFilterConfig', false);

        xhr.send();

        if (xhr.status !== 200) {
            alert(xhr.status + ': ' + xhr.statusText);
            return null;
        }

        else {
            var filterConfig = JSON.parse(xhr.responseText);
            return filterConfig;
        }
    }

    var getUsers = function () {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', '/getUsers', false);

        xhr.send();

        if (xhr.status !== 200) {
            alert(xhr.status + ': ' + xhr.statusText);
            return null;
        }

        else {
            var users = JSON.parse(xhr.responseText);
            return users;
        }
    }
    var getCurrentUser = function () {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', '/getCurrentUser', false);

        xhr.send();

        if (xhr.status !== 200) {
            alert(xhr.status + ': ' + xhr.statusText);
            return null;
        }

        else {
            try {
                var user = JSON.parse(xhr.responseText);
            }
            catch (err) { user = ""; }
            return user;
        }
    }

    var getEditedPost = function () {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', '/getEditedPost', false);

        xhr.send();

        if (xhr.status !== 200) {
            alert(xhr.status + ': ' + xhr.statusText);
            return null;
        }

        else {
            var post = JSON.parse(xhr.responseText);

            return post;
        }
    }
    var getPhotoPosts = function (skip, top, filterConfig) {
        if (skip < 0 || !skip)
            skip = 0;

        else if (skip !== 0) {
            skip++;
        }
        if (!top || top < 0)
            top = 10;

        else if (top !== 10) {
            top++;
        }

        var xhr = new XMLHttpRequest();

        xhr.open('POST', '/getPhotoPosts/' + skip + '/' + top, false);

        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.send(JSON.stringify(filterConfig));

        if (xhr.status !== 200) {
            alert(xhr.status + ': ' + xhr.statusText);
            return null;
        }

        else {
            var posts = JSON.parse(xhr.responseText);

            for (var i = 0; i < posts.length; i++) {
                posts[i].createdAt = new Date(posts[i].createdAt);
            }
            return posts;
        }
    }

    var addPhotoPost = function (newPost) {

        var xhr = new XMLHttpRequest();

        xhr.open('POST', '/addPhotoPost', false);

        xhr.send(newPost);

        if (xhr.status !== 200) {
            alert("post has not been added!");
        }

    }
    var putFilterConfig = function (filterConfig) {
        var xhr = new XMLHttpRequest();

        xhr.open('PUT', '/putFilterConfig', false);

        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.send(JSON.stringify(filterConfig));

        if (xhr.status !== 200) {
            alert("Empty filter!");
        }
    }
    var putCurrentUser = function (currentUser) {
        var xhr = new XMLHttpRequest();

        xhr.open('PUT', '/putCurrentUser', false);

        xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

        xhr.send(JSON.stringify(currentUser));

        if (xhr.status !== 200) {
            alert("A unknown mistake happened!");
        }
    }

    var putEditedPost = function (post) {

        var xhr = new XMLHttpRequest();

        xhr.open('PUT', '/putEditedPost', false);

        xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

        xhr.send(JSON.stringify(post));

        if (xhr.status !== 200) {
            alert("A unknown mistake happened!");
        }
    }

    var editPhotoPost = function (id, image, tags, text) {
        var xhr = new XMLHttpRequest();

        xhr.open('PUT', '/editPhotoPost/' + id, false);

        xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

        xhr.send(JSON.stringify({ "photoLink": image, "hashTags": tags, "description": text }));

        if (xhr.status !== 200) {
            alert("Post hasn't been saved!");
        }
    }

    var editPhotoPostMulter = function (id, newPost, text, tags) {
        var xhr = new XMLHttpRequest();


        newPost.append('text', text);
        newPost.append('hashTags', tags);

        xhr.open('PUT', '/editPhotoPostMulter/' + id, false);

        xhr.send(newPost);

        if (xhr.status !== 200) {
            alert("Post hasn't been saved!");
        }
    }

    var removePhotoPost = function (id) {
        var xhr = new XMLHttpRequest();

        xhr.open('DELETE', '/removePhotoPost/' + id, false);

        xhr.send();

        let event = new Event('post-delete');

        if (xhr.status !== 200) {
            alert("Unsuccessful operation!");
        }
    }

    return {
        removePhotoPost,
        editPhotoPost,
        editPhotoPostMulter,
        getPhotoPost,
        getEditedPost,
        getPhotoPosts,
        addPhotoPost,
        getFilterConfig,
        getUsers,
        getCurrentUser,
        putFilterConfig,
        putEditedPost,
        putCurrentUser
    }
})();