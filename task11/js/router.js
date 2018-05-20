const express = require('express');

const application = express();

const ImportsJS = require('./util.js');

const multer = require('multer');

let nameOfFileToUpload = '';
const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './public/images');
  },
  filename(req, file, callback) {
    nameOfFileToUpload = Date.now() + '-' + file.originalname;
    callback(null, nameOfFileToUpload);
  },
});
const upload = multer({ storage });

application.use(express.static('public'));
application.use(express.json());

application.get('/', (req, res) => {
  res.sendFile('index.html');
});

application.get('/getPhotoPost/:id', (req, res) => {
  const id = req.params.id;
  const postsEditor = new ImportsJS();

  const post = postsEditor.getPhotoPost(id);
  if (post) {
    res.send(post);
  } else {
    res.status(404).end();
  }
});
application.get('/getEverything', (req, res) => {
  const postsEditor = new ImportsJS();

  const object = postsEditor.getEverything();

  if (object) {
    res.send(object);
  } else {
    res.status(404).end();
  }
});
application.get('/getFilterConfig', (req, res) => {
  const postsEditor = new ImportsJS();

  const filterConfig = postsEditor.getFilterConfig();

  if (filterConfig) {
    res.send(filterConfig);
  } else {
    res.status(404).end();
  }
});
application.get('/getEditedPost', (req, res) => {
  const postsEditor = new ImportsJS();

  const editedPost = postsEditor.getEditedPost();

  if (editedPost) {
    res.send(editedPost);
  } else {
    res.status(404).end();
  }
});
application.get('/getUsers', (req, res) => {
  const postsEditor = new ImportsJS();

  const users = postsEditor.getUsers();

  if (users) {
    res.send(users);
  } else {
    res.status(404).end();
  }
});
application.get('/getCurrentUser', (req, res) => {
  const postsEditor = new ImportsJS();

  const user = postsEditor.getCurrentUser();

  if (user || user === '') {
    res.send(user);
  } else {
    res.status(404).end();
  }
});
application.post('/getPhotoPosts/:skip/:top', (req, res) => {
  const skip = req.params.skip;
  const top = req.params.top;
  const filterConfig = req.body;

  const postsEditor = new ImportsJS();

  const posts = postsEditor.getPhotoPosts(skip, top, filterConfig);

  if (posts) {
    res.send(posts);
  } else {
    res.status(404).end();
  }
});
application.post('/addPhotoPost', upload.single('upload'), (req, res) => {
  const postsEditor = new ImportsJS();

  const repOne = req.body.textOfPost;

  if (postsEditor.addPhotoPost(nameOfFileToUpload, repOne, req.body.tagOfPost, req.body.author)) {
    res.send('Post has been saved');
  } else {
    res.status(403).end();
  }
});
application.put('/putFilterConfig', (req, res) => {
  const postsEditor = new ImportsJS();

  if (postsEditor.putFilterConfig(req.body)) {
    res.send('Filter has been put');
  } else {
    res.status(403).end();
  }
});
application.put('/putEditedPost', (req, res) => {
  const postsEditor = new ImportsJS();

  if (postsEditor.putEditedPost(req.body)) {
    res.send('EditedPost has been put');
  } else {
    res.status(403).end();
  }
});
application.put('/putCurrentUser', (req, res) => {
  const postsEditor = new ImportsJS();

  if (postsEditor.putCurrentUser(req.body)) {
    res.send('User has been put');
  } else {
    res.status(403).end();
  }
});
application.put('/editPhotoPostMulter/:id', upload.single('upload'), (req, res) => {
  const id = req.params.id;
  const postsEditor = new ImportsJS();

  if (!nameOfFileToUpload) {
    if (postsEditor.editPhotoPost(id, req.body.img, req.body.hashTags, req.body.text)) {
      res.send('Post has been saved');
    } else {
      res.status(403).end();
    }
  } else {
    if (nameOfFileToUpload.split('/').length === 1) {
      nameOfFileToUpload = '/images/' + nameOfFileToUpload;
    }

    if (postsEditor.editPhotoPost(id, nameOfFileToUpload, req.body.hashTags, req.body.text)) {
      res.send('Post has been saved');
    } else {
      res.status(403).end();
    }
  }
});
application.put('/editPhotoPost/:id', (req, res) => {
  const id = req.params.id;

  const postsEditor = new ImportsJS();

  if (postsEditor.editPhotoPost(id, req.body.photoLink, req.body.hashTags, req.body.description)) {
    res.send('Post has been saved');
  } else {
    res.status(403).end();
  }
});
application.delete('/removePhotoPost/:id', (req, res) => {
  const id = req.params.id;

  const postsEditor = new ImportsJS();

  if (postsEditor.removePhotoPost(id)) {
    res.send('Post has been removed');
  } else {
    res.status(404).end();
  }
});

module.exports = application;
