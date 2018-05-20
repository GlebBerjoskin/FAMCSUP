const logic = (function () {
  const filterByAuthor = function (author, newPosts) {
    const findPosts = [];

    if (!author) {
      return newPosts;
    }

    for (let i = 0; i < newPosts.length; i += 1) {
      if (newPosts[i].author.toLowerCase() === author.toLowerCase() && newPosts[i].depict === '1') {
        findPosts.push(newPosts[i]);
      }
    }
    return findPosts;
  };

  const filterByDate = function (dateFrom, dateTo, newPosts) {
    const findPosts = []; /* may contain mistake */

    if (!dateFrom && !dateTo) {
      return newPosts;
    }

    if (dateFrom.trim() === '') {
      dateFrom = new Date('1990-01-15T12:00:00');
    } else {
      dateFrom = new Date(dateFrom);
    }

    if (dateTo.trim() === '') {
      dateTo = new Date('2020-01-15T12:00:00');
    } else {
      dateTo = new Date(dateTo);
    }

    for (let i = 0; i < newPosts.length; i += 1) {
      if (newPosts[i].createdAt >= dateFrom && newPosts[i].depict === '1') {
        if (newPosts[i].createdAt <= dateTo) {
          findPosts.push(newPosts[i]);
        }
      }
    }
    return findPosts;
  };

  const filterByHashTags = function (hashTag, newPosts) {
    if (hashTag === []) {
      return newPosts;
    }

    return newPosts.filter((post) => {
      return hashTag.every((hashTagIndex) => {
        return post.hashTags.includes(hashTagIndex);
      });
    });
  };

  const sortByDate = function (array) {
    let findPosts = array;
    if (findPosts.length) {
      return findPosts.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    }
    return findPosts;
  };

  const removeAllPosts = function () {
    view.deleteFeedbackFromHTML();
  };

  const getPhotoPost = function (id, photoPosts) {
    if (!id) { return null; }

    for (let i = 0; i < photoPosts.length; i += 1) {
      if (photoPosts[i].id === id) { return photoPosts[i]; }
    }
    return null;
  };

  const getPhotoPosts = function (topPosition, filterConfig, photoPosts, currentUser) {
    let newPosts = photoPosts;

    view.deleteFeedbackFromHTML();

    if (!topPosition || topPosition < 0) {
      topPosition = 0;
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

      for (let i = 0; i < newPosts.length; i += 1) {
        if (!Number(newPosts[i].depict)) {
          newPosts.splice(i, 1);
          i -= 1;
        }
      }

      newPosts = sortByDate(newPosts);
    } else {
      newPosts = sortByDate(photoPosts);
      for (let i = 0; i < newPosts.length; i += 1) {
        if (!Number(newPosts[i].depict)) {
          newPosts.splice(i, 1);
          i -= 1;
        }
      }
    }

    view.fillFilterInPage(filterConfig);

    let length = 0;

    if (newPosts.length > 10) {
      let i = 0;

      while (i < topPosition / 10) {
        i += 1;
        if (newPosts.length - (i * 10) > 0) {
          length += 10;
        } else break;
      }
      if (newPosts.length - (i * 10) === 0) {
        length += 10;
        view.deleteBrowseButton();
      }
      if (newPosts.length - ((i - 1) * 10) < 10) {
        length += newPosts.length - ((i - 1) * 10);
        view.deleteBrowseButton();
      }
    } else {
      view.deleteBrowseButton();
      length = newPosts.length;
    }

    if (newPosts.length === 0) {
      view.fillFeedbackWithError();
      return 0;
    }

    if (!currentUser || currentUser === '') {
      let cyclesNum = view.getCyclesNumber();

      for (let i = 0; i < cyclesNum; i += 1) {
        removeAllPosts();
      }

      for (let i = 0; i < length; i += 1) {
        view.wrapOverDepictPhotoPost(newPosts[i]);
      }

      return newPosts.length;
    } else {
      currentUser = currentUser.trim();

      if (currentUser) {
        removeAllPosts('1', photoPosts);

        for (let i = 0; i < length; i += 1) {
          if (getPhotoPost(newPosts[i].id, photoPosts).author.trim() === currentUser) {
            view.wrapOverDepictPhotoPostAuthorised(newPosts[i]);
          } else {
            view.wrapOverDepictPhotoPost(newPosts[i]);
          }
        }

        return newPosts.length;
      }
      for (let i = 0; i < view.getLength(); i += 1) {
        let stringI = i.toString();
        removeAllPosts(stringI, photoPosts);
      }

      for (let i = 0; i < length; i += 1) {
        view.wrapOverDepictPhotoPost(newPosts[i]);
      }
      return newPosts.length;
    }
  };

  let validatePhotoPost = function (photoPost) {
    if ((typeof (photoPost.id) === 'string') &&
            (typeof (photoPost.description) === 'string') &&
            (typeof (photoPost.author) === 'string') &&
            (typeof (photoPost.photoLink) === 'string') &&
            (photoPost.createdAt instanceof Date)) {
      let changer = photoPost.description.length;
      if (photoPost.photoLink.length !== 0 && changer <= 200 && photoPost.author !== 0) {
        if (!photoPost.hashTags) {
          photoPost.hashTags = [];
        }
        return true;
      }
    }
    return false;
  };

  let addPhotoPost = function (photoPost, photoPosts) {
    if (!photoPost) {
      alert('invalid photo post');
      return false;
    }

    if (validatePhotoPost(photoPost) && getPhotoPost(photoPost.id, photoPosts) === null) {
      photoPosts.push(photoPost);
      return true;
    }

    alert('change post parameters!');

    return false;
  };

  let removePhotoPost = function (id, array) {
    if (!id) { return false; }

    for (let i = 0; i < array.length; i += 1) {
      if (array[i].id === id) {
        array[i].depict = '0';
        return true;
      }
    }
    return false;
  };

  return {
    getPhotoPost,
    getPhotoPosts,
    addPhotoPost,
    removeAllPosts,
    removePhotoPost,
    validatePhotoPost,
  };
}());


let topPosition = 10;

let sorter = (a, b) => {
  return new Date(b.createdAt) - new Date(a.createdAt);
};

let handleBrowseMore = function () {
  topPosition += 10;

  model.getEverything()
    .then((response) => {
      let object = {};
      object = JSON.parse(response);
      return object;
    })
    .then((object) => {
      for (let i = 0; i < object.photoPosts.length; i += 1) {
        object.photoPosts[i].createdAt = new Date(object.photoPosts[i].createdAt);
      }

      object.photoPosts.sort((a, b) => { return new Date(b.createdAt) - new Date(a.createdAt); });
      let changer = object.currentUser.currentUser;
      logic.getPhotoPosts(topPosition, object.filterConfig, object.photoPosts, changer);
    });

  try {
    view.feedback().addEventListener('click', handleDeletingEditingPost);
  } catch (err) { }
};

let handleFilterApply = function () {
  view.addBrowseButton();

  model.getEverything()
    .then((response) => {
      let object = {};
      object = JSON.parse(response);
      return object;
    })
    .then((object) => {
      for (let i = 0; i < object.photoPosts.length; i += 1) {
        object.photoPosts[i].createdAt = new Date(object.photoPosts[i].createdAt);
      }

      filterConfig = view.fillFilterFromPage();

      model.putFilterConfig(filterConfig);
      let changer = object.currentUser.currentUser;

      if (logic.getPhotoPosts(topPosition, filterConfig, object.photoPosts, changer) > 10) {
        view.browseMore().addEventListener('click', handleBrowseMore);
      }
    });
};

let handleLoggingOut = function () {
  try {
    view.deleteEditingCreating();

    view.deleteButtonWrap();
  } catch (err) { }

  model.putCurrentUser({ currentUser: '' });
  currentUser = '';

  view.changeHeaderUnauthorised();

  view.addBrowseButton();

  view.addFilter();

  view.applyFilter().addEventListener('click', handleFilterApply);

  model.getEverything()
    .then((response) => {
      let object = {};
      object = JSON.parse(response);
      return object;
    })
    .then((object) => {
      for (let i = 0; i < object.photoPosts.length; i += 1) {
        object.photoPosts[i].createdAt = new Date(object.photoPosts[i].createdAt);
      }

      let changerOne = object.currentUser.currentUser;

      object.photoPosts.sort((a, b) => { return new Date(b.createdAt) - new Date(a.createdAt); });
      logic.getPhotoPosts(topPosition, object.filterConfig, object.photoPosts, changerOne);
    });


  view.loggingIn().addEventListener('click', handleLoggingIn);
  try {
    view.browseMore().addEventListener('click', handleBrowseMore);
  } catch (err) { }

  try {
    view.applyFilter().addEventListener('click', handleFilterApply);
  } catch (err) { }
};

let handleLoginPasswordInput = function () {
  let loginName = view.getLoginName();

  let loginPassword = view.getLoginPassword();

  model.getEverything()
    .then((response) => {
      let object = {};
      object = JSON.parse(response);
      return object;
    })
    .then((object) => {
      let count = 0;

      for (let i = 0; i < object.users.length; i += 1) {
        if (object.users[i].name === loginName) {
          if (object.users[i].password === loginPassword) {
            count += 1;

            view.deleteFeedbackFromHTML();

            currentUserProgram = object.users[i].name;

            model.putCurrentUser({ currentUser: currentUserProgram });

            currentUser = currentUserProgram;

            view.addFilter();

            view.changeCurrentUser(currentUserProgram);

            for (let j = 0; j < object.photoPosts.length; j += 1) {
              object.photoPosts[j].createdAt = new Date(object.photoPosts[j].createdAt);
            }

            let changEOne = object.filterConfig;

            if (logic.getPhotoPosts(topPosition, changEOne, object.photoPosts, currentUser) > 10) {
              view.addBrowseButton();
              view.browseMore().addEventListener('click', handleBrowseMore);
            }

            view.loggingOut().addEventListener('click', handleLoggingOut);

            view.applyFilter().addEventListener('click', handleFilterApply);

            view.addingNewPost().addEventListener('click', handleAddingPost);

            view.loggingOut().addEventListener('click', handleLoggingOut);

            try {
              view.feedback().addEventListener('click', handleDeletingEditingPost);
            } catch (err) { }
          }
        }
      }

      if (count === 0) {
        alert('Wrong login or password!');
      }
    });
};

let handleLoggingIn = function () {
  view.deleteHead();

  view.deleteFilter();

  view.deleteBrowseButton();

  view.addLoggingIn();

  view.inputRegistration().addEventListener('click', handleLoginPasswordInput);
};

let handleAddingNewPost = function () {
  const formData = new FormData(document.forms.editingCreating);

  let text = view.getTextOfPost();
  if (text.length > 200 || text.length === 0) {
    alert('Too short or too long description!');
    handleAddingPost();
    return 0;
  }

  let image = view.getPostFile();
  if (image.length === 0) {
    alert('Choose photo please!');
    handleAddingPost();
    return 0;
  }

  formData.append('tagOfPost', view.getPostTags());
  formData.append('textOfPost', view.getPostText());
  model.getCurrentUser()
    .then((responseOne) => {
      let curUser = JSON.parse(responseOne).currentUser;
      formData.append('author', curUser);

      model.addPhotoPost(formData)
        .then(() => { // mistake may be here
          model.getEverything()
            .then((response) => {
              let object = {};
              object = JSON.parse(response);
              return object;
            })
            .then((object) => {
              for (let i = 0; i < object.photoPosts.length; i += 1) {
                object.photoPosts[i].createdAt = new Date(object.photoPosts[i].createdAt);
              }

              view.addBrowseButton();
              view.browseMore().addEventListener('click', handleBrowseMore);

              view.addFilter();

              view.addLoggingOut();
              view.loggingOut().addEventListener('click', handleLoggingOut);

              view.deleteEditingCreating();
              view.deleteButtonWrap();

              try {
                view.feedback().addEventListener('click', handleDeletingEditingPost);
              } catch (err) { }

              object.photoPosts.sort(sorter);

              let change = object.currentUser.currentUser;

              logic.getPhotoPosts(topPosition, {}, object.photoPosts, change);
            });
        });
    });
};

let handleAddingPost = function () {
  view.deleteFeedbackFromHTML();

  view.deleteBrowseButton();

  view.deleteFilter();

  view.addEditingCreating();

  view.inputNewPost().addEventListener('click', handleAddingNewPost);
};

let handleEditingPostApply = function () {
  let text = view.getTextEdited();
  let image = view.getImageEdited();
  let tags = view.getTagsEdited();

  model.getEverything()
    .then((response) => {
      let object = {};
      object = JSON.parse(response);
      return object;
    })
    .then((object) => {
      if (text.length > 200 || text.length === 0) {
        alert('Too short or too long description! It will not be changed!');

        text = object.editedPost.textToEdit;
      }

      if (tags.length === 0) {
        tags = object.editedPost.tagsToEdit;
      }

      if (image.length === 0) {
        alert('Invalid picture! It will not be changed!');

        image = object.editedPost.imageToEdit;
      }

      const formData = new FormData(document.forms.editingCreating);

      object.formData = formData;

      return object;
    })
    .then((object) => {
      let changer = object.editedPost.idOfEditedPost;
      model.editPhotoPostMulter(changer, object.formData, text, tags, image)
        .then(() => {
          view.addBrowseButton();
          view.browseMore().addEventListener('click', handleBrowseMore);

          view.addFilter();

          view.addLoggingOut();
          view.loggingOut().addEventListener('click', handleLoggingOut);

          view.deleteEditingCreating();
          view.deleteButtonWrap();

          try {
            view.feedback().addEventListener('click', handleDeletingEditingPost);
          } catch (err) { }

          model.getEverything()
            .then((responseTwo) => {
              let objectOne = {};
              objectOne = JSON.parse(responseTwo);
              return objectOne;
            })
            .then((objectTwo) => {
              for (let i = 0; i < objectTwo.photoPosts.length; i += 1) {
                objectTwo.photoPosts[i].createdAt = new Date(objectTwo.photoPosts[i].createdAt);
              }

              objectTwo.photoPosts.sort(sorter);

              let changerOne = objectTwo.currentUser.currentUser;

              let changerTwo = objectTwo.photoPosts;

              logic.getPhotoPosts(topPosition, objectTwo.filterConfig, changerTwo, changerOne);
            });
        });
    });
};

function handleDeletingEditingPost(event) {
  if (event.target.className === 'deleting-button') {
    let postToDelete = view.postToDelete(event);

    let idOfDeletedPost = view.idOfDeletedPost(postToDelete);

    model.removePhotoPost(idOfDeletedPost)
      .then(() => {
        model.getEverything()
          .then((response) => {
            let object = {};
            object = JSON.parse(response);
            return object;
          })
          .then((object) => {
            for (let i = 0; i < object.photoPosts.length; i += 1) {
              object.photoPosts[i].createdAt = new Date(object.photoPosts[i].createdAt);
            }

            let changerOne = object.currentUser.currentUser;

            object.photoPosts.sort(sorter);
            logic.getPhotoPosts(topPosition, object.filterConfig, object.photoPosts, changerOne);
          });
      });
  }

  if (event.target.className === 'editing-button') {
    let post = view.postToEdit(event);

    view.deleteFeedbackFromHTML();
    view.deleteBrowseButton();
    view.deleteFilter();

    view.addEditing(post);

    model.putEditedPost(post);

    view.inputNewPost().addEventListener('click', handleEditingPostApply);
  }
}


let handlePageLaunch = function () {
  view.addFilter();

  view.addHeaderUnauthorised();

  model.getEverything()
    .then((response) => {
      let object = {};
      object = JSON.parse(response);
      return object;
    })
    .then((object) => {
      for (let i = 0; i < object.photoPosts.length; i += 1) {
        object.photoPosts[i].createdAt = new Date(object.photoPosts[i].createdAt);
      }

      object.photoPosts.sort((a, b) => { return new Date(b.createdAt) - new Date(a.createdAt); });

      let change = object.currentUser.currentUser;

      logic.getPhotoPosts(topPosition, object.filterConfig, object.photoPosts, change);

      if (object.currentUser.currentUser === '') {
        view.changeHeaderUnauthorised();

        view.applyFilter().addEventListener('click', handleFilterApply);

        view.browseMore().addEventListener('click', handleBrowseMore);

        view.loggingIn().addEventListener('click', handleLoggingIn);
      }

      if (object.currentUser.currentUser !== '') {
        view.changeCurrentUser(object.currentUser.currentUser);

        view.applyFilter().addEventListener('click', handleFilterApply);

        view.browseMore().addEventListener('click', handleBrowseMore);

        view.addingNewPost().addEventListener('click', handleAddingPost);

        view.loggingOut().addEventListener('click', handleLoggingOut);

        try {
          view.feedback().addEventListener('click', handleDeletingEditingPost);
        } catch (err) {
        }
      }
    });
};
handlePageLaunch();
