var model = (function () {
    var getPhotoPost = function (id) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/getPhotoPost/' + id, true);

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    var error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Error'));
            };

            xhr.send();
        });
    }
    var getFilterConfig = function () {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/getFilterConfig', true);

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    var error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Error'));
            };
            xhr.send();
        });
    }

    var getUsers = function () {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/getUsers', true);

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    var error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Error'));
            };
            xhr.send();
        });
    }

    var getEverything = function () {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/getEverything', true);

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    var error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Error'));
            };
            xhr.send();
        });
    }

    var getCurrentUser = function () {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/getCurrentUser', true);

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    var error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Error'));
            };
            xhr.send();
        });
    }

    var getEditedPost = function () {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/getEditedPost', true);

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    var error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Error'));
            };
            xhr.send();
        });
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

        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/getPhotoPosts/' + skip + '/' + top, true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    var error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Error'));
            };
            xhr.send(JSON.stringify(filterConfig));
        });
    }

    var addPhotoPost = function (newPost) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/addPhotoPost', true);
            
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    var error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Error'));
            };
            xhr.send(newPost);
        });

    }
    var putFilterConfig = function (filterConfig) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('PUT', '/putFilterConfig', true);
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    var error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Error'));
            };
            xhr.send(JSON.stringify(filterConfig));
        });
    }
    var putCurrentUser = function (currentUser) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('PUT', '/putCurrentUser', true);
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    var error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Error'));
            };
            xhr.send(JSON.stringify(currentUser));
        });
    }

    var putEditedPost = function (post) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('PUT', '/putEditedPost', true);
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    var error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Error'));
            };
            xhr.send(JSON.stringify(post));
        });
    }

    var editPhotoPost = function (id, image, tags, text) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('PUT', '/editPhotoPost/'+ id, true);
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    var error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Error'));
            };
            xhr.send(JSON.stringify({ "photoLink": image, "hashTags": tags, "description": text }));
        });
    }

    var editPhotoPostMulter = function (id, newPost, text, tags, image) {
        newPost.append('text', text);
        newPost.append('hashTags', tags);
        newPost.append('img',image);

        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('PUT', '/editPhotoPostMulter/'+ id, true);

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    var error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Error'));
            };
            xhr.send(newPost);
        });
    }

    var removePhotoPost = function (id) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('DELETE', '/removePhotoPost/' + id, true);

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    var error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Error'));
            };
            xhr.send();
        });
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
        getEverything,
        getCurrentUser,
        putFilterConfig,
        putEditedPost,
        putCurrentUser
    }
})();