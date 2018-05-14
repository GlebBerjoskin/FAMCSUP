var express = require('express');
var application = express();

var fs = require('fs');
var importsJS = require('./util.js');

var multer = require('multer');
var nameOfFileToUpload='';
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/images');
    },
    filename: function (req, file, callback) {
        nameOfFileToUpload = Date.now() + '-' + file.originalname;
        callback(null, nameOfFileToUpload);
    }
});
var upload = multer({ storage: storage });

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
application.get('/getFilterConfig', (req, res) => {
    var postsEditor = new importsJS();

    var filterConfig = postsEditor.getFilterConfig();

    if (filterConfig) {
        res.send(filterConfig);
    }
    else {
        res.status(404).end();
    }
});
application.get('/getEditedPost', (req, res) => {
    var postsEditor = new importsJS();

    var editedPost = postsEditor.getEditedPost();

    if (editedPost) {
        res.send(editedPost);
    }
    else {
        res.status(404).end();
    }
});
application.get('/getUsers', (req, res) => {
    var postsEditor = new importsJS();

    var users = postsEditor.getUsers();

    if (users) {
        res.send(users);
    }
    else {
        res.status(404).end();
    }
});
application.get('/getCurrentUser', (req, res) => {
    var postsEditor = new importsJS();

    var user = postsEditor.getCurrentUser();

    if (user || user === "") {
        res.send(user);
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
application.post('/addPhotoPost', upload.single('upload'), (req, res) => {

    var postsEditor = new importsJS();

    if (postsEditor.addPhotoPost(nameOfFileToUpload,req.body.textOfPost, req.body.tagOfPost, req.body.author)) {
        res.send("Post has been saved");
    }
    else {
        res.status(403).end();
    }
});
application.put('/putFilterConfig', (req, res) => {
    var postsEditor = new importsJS();

    if (postsEditor.putFilterConfig(req.body)) {
        res.send("Filter has been put");
    }
    else {
        res.status(403).end();
    }
});
application.put('/putEditedPost', (req, res) => {
    var postsEditor = new importsJS();

    if (postsEditor.putEditedPost(req.body)) {
        res.send("EditedPost has been put");
    }
    else {
        res.status(403).end();
    }
});
application.put('/putCurrentUser', (req, res) => {
    var postsEditor = new importsJS();

    if (postsEditor.putCurrentUser(req.body)) {
        res.send("User has been put");
    }
    else {
        res.status(403).end();
    }
});
application.put('/editPhotoPostMulter/:id', upload.single('upload'), (req, res) => {
    let id = req.params.id;

    var postsEditor = new importsJS();

    nameOfFileToUpload = "/images/" + nameOfFileToUpload;

    if (postsEditor.editPhotoPost(id, nameOfFileToUpload, req.body.hashTags, req.body.text)) {
        res.send("Post has been saved");
    }
    else {
        res.status(403).end();
    }
});
application.put('/editPhotoPost/:id', (req, res) => {
    let id = req.params.id;
    
    var postsEditor = new importsJS();

     if (postsEditor.editPhotoPost(id, req.body.photoLink, req.body.hashTags, req.body.description)) {
        res.send("Post has been saved");
    }
    else {
        res.status(403).end();
    }
});
application.delete('/removePhotoPost/:id', (req, res) => {
    let id = req.params.id;

    var postsEditor = new importsJS();
    
    if (postsEditor.removePhotoPost(id)) {
        res.send("Post has been removed");
    } else {
        res.status(404).end();
    }
});

module.exports = application;