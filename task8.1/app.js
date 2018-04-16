var express = require('express');
var app = express();
const fs = require('fs');

app.use(express.static('public'));
app.use(express.json());
app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.get('/getPhotoPost', function (req, res) {
    let id = Number.parseInt(req.query.id);
    let post = getPhotoPost(id);
    if (post) {
        res.json(post);
    } else {
        res.status(500).send('A unexpected mistake happened');
    }
});
app.post('/getPhotoPosts', function (req, res) {
    let skip = Number.parseInt(req.query.skip);
    let top = Number.parseInt(req.query.top);
    let filterConfig = req.body;

    let posts = getPhotoPosts(skip, top, filterConfig);
    if (posts) {
        res.json(posts);
    } else {
        res.status(500).send('A unexpected mistake happened');
    }
});
app.post('/addPhotoPost', function (req, res) {
    let newPost = req.body;

    if (addPhotoPost(newPost)) {
        res.json({"message": "Post has been saved"});
    } else {
        res.status(500).send('A unexpected mistake happened');
    }
});
app.put('/editPhotoPost', function (req, res) {
    let id = Number.parseInt(req.query.id);
    let post = req.body;
    post.id = id;
    if (editPhotoPost(post)) {
        res.json({"message": "Post has been saved"});
    } else {
        res.status(500).send('A unexpected mistake happened');
    }
});
app.delete('/removePhotoPost', function (req, res) {
    let id = Number.parseInt(req.query.id);
    if (removePhotoPost(id)) {
        res.json({"message": "Post has been removed"});
    } else {
        res.status(500).send('A unexpected mistake happened');
    }
});

function getPhotoPost(id) {
    let posts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
    for (let i = 0; i < posts.length; i++) {
        console.log(i);
        if (posts[i].id === id.toString()) {
            posts[i].createdAt = new Date(Date.parse(posts[i].createdAt));
            return posts[i];
        }
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

    if (!dateFrom||dateFrom.trim() === "") {
        dateFrom = new Date('1990-01-15T12:00:00');
    }
    else {
        dateFrom = new Date(dateFrom);
    }

    if (!dateTo||dateTo.trim() === "") {
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

function getPhotoPosts(skip, top, filterConfig) {
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
        newPosts = newPosts.sort((post1, post2) => (
            post2.createdAt - post1.createdAt
        ));

        return newPosts;
    }
}

function addPhotoPost(post) {
    let photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));

    var newId = -1;
    for (let i = 0; i < photoPosts.length; i++) {
        if (newId < parseInt(photoPosts[i].id)) {
            newId = i;
        }
    }

    post.id = (parseInt(photoPosts[newId].id) + 1).toString();

    post.createdAt = new Date();

    if (!validatePhotoPost(post)) {
        return false;
    }

    photoPosts.push(post);
    let writer = fs.createWriteStream('server/data/posts.json');
    writer.write(JSON.stringify(photoPosts));

    return true;
}

function editPhotoPost(post) {
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

function validatePhotoPost(photoPost) {
    if ((typeof(photoPost.id) === "string") &&
        (typeof(photoPost.description) === "string") &&
        (typeof(photoPost.author) === "string") &&
        (typeof(photoPost.photoLink) === "string") &&
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

function removePhotoPost(id) {
    let photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
    for (var i = 0; i < photoPosts.length; i++) {
        if (photoPosts[i].id === id.toString()) {
            photoPosts.slice(i,i+1);
            let writer = fs.createWriteStream('server/data/posts.json');
            writer.write(JSON.stringify(photoPosts));
            return true;
        }
    }

    return false;
}

app.listen(3000, function () {
    console.log('listen 3000 port');
})
