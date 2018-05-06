var express = require('express');
var application = express();

var fs = require('fs');
var importsJS = require('./util.js');

application.use(express.static('public'));
application.use(express.json());

application.get('/', function (req, res) {
    res.sendFile('index.html');
});

application.get('/getPhotoPost/:id', (req, res) => {
    let id = req.params.id;
    var postsEditor = new importsJS();
    
    let post = postsEditor.getPhotoPost(id);
    if (post) {
        res.send(post);
    }
    else {
        res.status(404).end();
    }
});
application.post('/getPhotoPosts/:skip/:top', (req, res) => {
    let skip = req.params.skip;
    let top = req.params.top;
    let filterConfig = req.body;

    var postsEditor = new importsJS();

    let posts = postsEditor.getPhotoPosts(skip, top, filterConfig);

    if (posts) {
        res.send(posts);
    }
    else {
        res.status(404).end();
    }
});
application.post('/addPhotoPost', (req, res) => {
    let newPost = req.body;

    var postsEditor = new importsJS();

    if (postsEditor.addPhotoPost(newPost)) {
        res.send("Post has been saved");
    }
    else {
        res.status(403).end();
    }
});
application.put('/editPhotoPost/:id', (req, res) =>{
    let id = req.params.id;
    let post = req.body;

    var postsEditor = new importsJS();
    post.id = id;
    if (postsEditor.editPhotoPost(post)) {
        res.send("Post has been saved");
    } else {
        res.status(403).end();
    }
});
application.delete('/removePhotoPost/:id', (req, res) =>{
    let id = req.params.id;

    var postsEditor = new importsJS();
    if (postsEditor.removePhotoPost(id)) {
        res.send("Post has been removed");
    } else {
        res.status(404).end();
    }
});

module.exports = application;