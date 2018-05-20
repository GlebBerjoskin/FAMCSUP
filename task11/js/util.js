const fs = require('fs');

const postsEditor = (function postsEdito() {
  return function postsEdit() {
    this.getPhotoPost = function postsEdi(id) {
      const photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
      const photoPosts = photoObject.photoPosts;

      if (!id) { return null; }

      for (let i = 0; i < photoPosts.length; i += 1) {
        if (photoPosts[i].id === id) { return photoPosts[i]; }
      }
      return null;
    };

    function filterByAuthor(author, newPosts) {
      const findPosts = [];

      if (!author) {
        return newPosts;
      }

      for (let i = 0; i < newPosts.length; i += 1) {
        if (newPosts[i].author.toLowerCase() === author.toLowerCase()) {
          findPosts.push(newPosts[i]);
        }
      }
      return findPosts;
    }

    function filterByDate(dateFrom, dateTo, newPosts) {
      const findPosts = [];

      if (!dateFrom && !dateTo) {
        return newPosts;
      }

      if (!dateFrom || dateFrom.trim() === '') {
        dateFrom = new Date('1990-01-15T12:00:00');
      } else {
        dateFrom = new Date(dateFrom);
      }

      if (!dateTo || dateTo.trim() === '') {
        dateTo = new Date('2020-01-15T12:00:00');
      } else {
        dateTo = new Date(dateTo);
      }
      for (let i = 0; i < newPosts.length; i += 1) {
        if (new Date(newPosts[i].createdAt) >= dateFrom) {
          if (new Date(newPosts[i].createdAt) <= dateTo) {
            findPosts.push(newPosts[i]);
          }
        }
      }
      return findPosts;
    }

    function filterByHashTags(hashTag, newPosts) {
      return newPosts.filter((post) => {
        return hashTag.every((hashTagIndex) => {
          return post.hashTags.includes(hashTagIndex);
        });
      });
    }

    this.getPhotoPosts = function (skip, top, filterConfig) {
      const photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
      let newPosts = photoObject.photoPosts;

      if (!skip || skip < 0) {
        skip = 0;
      }

      if (!top || top < 0) {
        top = 10;
      }

      if (filterConfig) {
        if (filterConfig.author) {
          newPosts = filterByAuthor(filterConfig.author, newPosts);
        }
        if (filterConfig.dateFrom || filterConfig.dateTo) {
          newPosts = filterByDate(filterConfig.dateFrom, filterConfig.dateTo, newPosts);
        }
        if (filterConfig.hashTags) {
          newPosts = filterByHashTags(filterConfig.hashTags, newPosts);
        }

        newPosts = newPosts.sort((post1, post2) => { return post2.createdAt - post1.createdAt; });
        newPosts.slice(skip + 1, top + 1);
      }
      return newPosts; /* may be mistake at the location */
    };

    this.getEverything = function () {
      const object = {};
      object.photoPosts = this.getPhotoPosts(-1, -1, {});
      object.currentUser = this.getCurrentUser();
      object.filterConfig = this.getFilterConfig();
      object.users = this.getUsers();
      object.editedPost = this.getEditedPost();
      return object;
    };

    this.getFilterConfig = function () {
      const photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
      const filterConfig = photoObject.filterConfig;
      return filterConfig;
    };

    this.getEditedPost = function () {
      const photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
      const editedPost = photoObject.editedPost;
      return editedPost;
    };

    this.getCurrentUser = function () {
      const photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
      const currentUser = photoObject.currentUser;
      return currentUser;
    };

    this.getUsers = function () {
      const photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
      const users = photoObject.users;
      return users;
    };

    this.addPhotoPost = function (image, description, tags, author) {
      const photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
      const photoPosts = photoObject.photoPosts;

      let newId = -1;
      for (let i = 0; i < photoPosts.length; i += 1) {
        if (newId < parseInt(photoPosts[i].id, 10)) {
          newId = i;
        }
      }

      const post = {};

      post.id = (parseInt(photoPosts[newId].id, 10) + 1).toString();

      post.createdAt = new Date();

      post.photoLink = '/images/' + image;

      post.description = description;

      post.author = author;

      tags = tags.split(',');

      if (!(tags instanceof Array)) {
        tags = [];
      }

      post.hashTags = tags;

      post.depict = '1';

      if (!this.validatePhotoPost(post)) {
        return false;
      }

      photoPosts.push(post);

      const writer = fs.createWriteStream('./server/data/posts.json');

      writer.write(JSON.stringify(photoObject));

      return true;
    };

    this.putFilterConfig = function (filterConfig) {
      if (!filterConfig) {
        return false;
      }
      const photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
      photoObject.filterConfig = filterConfig;

      const writer = fs.createWriteStream('server/data/posts.json');
      writer.write(JSON.stringify(photoObject));
      return true;
    };
    this.putEditedPost = function (editedPost) {
      if (!editedPost) {
        return false;
      }
      const photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
      photoObject.editedPost = editedPost;

      const writer = fs.createWriteStream('server/data/posts.json');
      writer.write(JSON.stringify(photoObject));
      return true;
    };
    this.putCurrentUser = function (currentUser) {
      const photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
      photoObject.currentUser = currentUser;

      const writer = fs.createWriteStream('server/data/posts.json');
      writer.write(JSON.stringify(photoObject));
      return true;
    };

    this.editPhotoPost = function (id, image, tags, text) {
      const photoObject = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
      let i = 0;

      while (i < photoObject.photoPosts.length && photoObject.photoPosts[i].id !== id) {
        i += 1;
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

      if (tags) {
        photoObject.photoPosts[i].hashTags = [];
        photoObject.photoPosts[i].hashTags = tags.split(',');
      }
      if (!tags) {
        photoObject.photoPosts[i].hashTags = [];
      }

      const writer = fs.createWriteStream('server/data/posts.json');
      writer.write(JSON.stringify(photoObject));

      return true;
    };

    this.validatePhotoPost = function (photoPost) {
      if ((typeof (photoPost.id) === 'string') &&
                (typeof (photoPost.description) === 'string') &&
                (typeof (photoPost.author) === 'string') &&
                (typeof (photoPost.photoLink) === 'string') &&
                (photoPost.createdAt instanceof Date)) {
        const repOne = photoPost.description.length;
        if (photoPost.photoLink.length !== 0 && repOne <= 200 && photoPost.author.length !== 0) {
          if (!photoPost.hashTags) {
            photoPost.hashTags = [];
          }
          return true;
        }
      }
      return false;
    };

    this.removePhotoPost = function (id) {
      const photoObject = JSON.parse(fs.readFileSync('./server/data/posts.json', 'utf8'));
      const photoPosts = photoObject.photoPosts;

      for (let i = 0; i < photoPosts.length; i += 1) {
        if (photoPosts[i].id === id) {
          photoPosts[i].depict = '0';
          const writer = fs.createWriteStream('server/data/posts.json');
          writer.write(JSON.stringify(photoObject));
          return true;
        }
      }

      return false;
    };
  };
}());
module.exports = postsEditor;
