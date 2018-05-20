const view = (function () {
  let filterStringInsert = function () {
    return ' <p> Фильтровать по:</p>\n' +
            '                   <p>Имя автора: </p>\n' +
            '                    <input id="nameAuthor"type="text" placeholder="Введите имя автора">\n' +
            '                    <p>Дата публикации: </p>\n' +
            '                       <p>c :</p>\n' +
            '                     <input type="text" id="dateFrom" placeholder="01.01.2001">\n' +
            '                        <p>по:</p>\n' +
            '                       <input type = "text" id="dateTo" placeholder="01.01.2019">\n' +
            '                       <p>#Хэштеги </p>\n' +
            '                       <input type="text" id = "hashtags" placeholder="#spring,#joy">\n' +
            '                    <button class="button" type="button" id="applyFilter">Применить фильтр</button>';
  };
  const depictPhotoPost = function (photoPost) {
    if (!photoPost) {
      return;
    }
    let buffer = ''; if (photoPost.hashTags) {
      for (let i = 0; i < photoPost.hashTags.length; i += 1) {
        buffer += photoPost.hashTags[i];
      }
    }
    let likes = '';
    if (photoPost.likes) {
      likes = photoPost.likes.length;
      if (photoPost.likes.length === 0) {
        likes = '';
      }
    }
    return `${'<div class="post">\n' +
            '                    <div class="header">\n' +
            '                        <div class="top">\n' +
            '                           <img src="images/user_blue.png">'}${photoPost.author} </div>\n` +
            `                        <div class="top">${photoPost.createdAt}</div>\n` +
            '                    </div>\n' +
            `                    <img class="image" src=${photoPost.photoLink} id="${photoPost.id}">\n` +
            `                    <p>${photoPost.description}</p>\n` +
            '                    <div class="header">\n' +
            '                        <div class="bottom">\n' +
            `                               <em>${buffer}</em>\n` +
            '                        </div>\n' +
            '                        <div class="bottom">\n' +
            `<div>${likes}</div>\n` +
            '<div><input type="image" src="images/like.png" name="submit" /></div>\n' +
            '                        </div>  \n' +
            '                    </div>\n' +
            '</div>\n';
  };

  const depictPhotoPostWithoutWrap = function (photoPost) {
    if (!photoPost) {
      return;
    }
    let buffer = '';
    if (photoPost.hashTags) {
      for (let i = 0; i < photoPost.hashTags.length; i += 1) {
        buffer += photoPost.hashTags[i];
      }
    }

    let likes = '';
    if (photoPost.likes) {
      likes = photoPost.likes.length;
      if (photoPost.likes.length === 0) {
        likes = '';
      }
    }
    return `${'                    <div class="header">\n' +
            '                        <div class="top">\n' +
            '                           <img src="images/user_blue.png">'}${photoPost.author
    }                        </div>\n` +
            `                        <div class="top">${photoPost.createdAt}</div>\n` +
            '                    </div>\n' +
            `                    <img class="image" src=${photoPost.photoLink} id="${photoPost.id}">\n` +
            `                    <p>${photoPost.description}</p>\n` +
            '                    <div class="header">\n' +
            '                        <div class="bottom">\n' +
            `                               <em>${buffer}</em>\n` +
            '                        </div>\n' +
            '                        <div class="bottom">\n' +
            `<div>${likes}</div>\n` +
            '<div><input type="image" src="images/like.png" name="submit" /></div>\n' +
            '                        </div>  \n' +
            '                    </div>\n';
  };

  const depictPhotoPostAuthorised = function (photoPost) {
    if (!photoPost) {
      return;
    }
    let buffer = '';
    if (photoPost.hashTags) {
      for (let i = 0; i < photoPost.hashTags.length; i += 1) {
        buffer += photoPost.hashTags[i];
      }
    }
    let likes = '';
    if (photoPost.likes) {
      likes = (photoPost.likes.length);
      if (photoPost.likes.length === 0) {
        likes = '';
      }
    }
    return `${'<div class="post">\n' +
            '                    <div class="header">\n' +
            '                        <div class="top">\n' +
            '                           <img src="images/user_blue.png">'}${photoPost.author
    }                        </div>\n` +
            `                        <div class="top">${photoPost.createdAt}</div>\n` +
            '                    </div>\n' +
            `                    <img class="image" src=${photoPost.photoLink} id="${photoPost.id}">\n` +
            `                    <p>${photoPost.description}</p>\n` +
            '                    <div class="header">\n' +
            '                        <div class="bottom">\n' +
            `                               <em>${buffer}</em>\n` +
            '                        </div>\n' +
            '                        <div class="bottom">\n' +
            '                               <input type="image" src="images/pencil32.png" name="submitPost" class="editing-button"/>\n</div>\n' +
            '                       <div class="bottom">\n' +
            '                               <input type="image" src="images/bin.png" id="deleteIt" class="deleting-button"/>\n' +
            '                        </div>\n' +
            `                        <div class="bottom">\n${
              likes}<input type="image" src="images/like.png" name="submit" />\n` +
            '                        </div>  \n' +
            '                    </div>\n' +
            '</div>\n';
  };

  const depictPhotoPostAuthorisedWithoutWrap = function (photoPost) {
    if (!photoPost) {
      return;
    }
    let buffer = '';
    if (photoPost.hashTags) {
      for (let i = 0; i < photoPost.hashTags.length; i += 1) {
        buffer += photoPost.hashTags[i];
      }
    }
    let likes = '';
    if (photoPost.likes) {
      likes = (photoPost.likes.length);
      if (photoPost.likes.length === 0) {
        likes = '';
      }
    }
    return `${'                    <div class="header">\n' +
            '                        <div class="top">\n' +
            '                           <img src="images/user_blue.png">'}${photoPost.author
    }                        </div>\n` +
            `                        <div class="top">${photoPost.createdAt}</div>\n` +
            '                    </div>\n' +
            `                    <img class="image" src=${photoPost.photoLink} id="${photoPost.id}">\n` +
            '                    </div>\n' +
            `                    <p>${photoPost.description}</p>\n` +
            '                    <div class="header">\n' +
            '                        <div class="bottom">\n' +
            `                               <em>${buffer}</em>\n` +
            '                        </div>\n' +
            '                        <div class="bottom">\n' +
            '                               <input type="image" src="images/pencil32.png" name="submitPost" class="editing-button"/>' +
            '                        </div>\n' +
            '                        <div class="bottom">\n' +
            '                               <input type="image" src="images/bin.png" id="deleteIt" class="deleting-button"/>\n' +
            '                        </div>\n' +
            `                        <div class="bottom">\n${
              likes}<input type="image" src="images/like.png" name="submit" />\n` +
            '                        </div>  \n' +
            '                    </div>\n';
  };

  const wrapOverDepictPhotoPost = function (post) {
    document.getElementById('feedback').innerHTML += depictPhotoPost(post);
  };

  const wrapOverDepictPhotoPostAuthorised = function (post) {
    document.getElementById('feedback').innerHTML += depictPhotoPostAuthorised(post);
  };

  const wrapOverDepictPhotoPostWithoutWrap = function (i, oldPhotoPost) {
    document.getElementById('feedback').getElementsByClassName('post')[i].innerHTML = depictPhotoPostWithoutWrap(oldPhotoPost);
  };


  const addBrowseButton = function () {
    document.getElementById('browse-button').innerHTML = '<button class="button" type="button" id="browse">Загрузить ещё</button>';
  };

  const addFilter = function () {
    document.getElementById('filter').innerHTML = filterStringInsert();
  };

  const addLoggingOut = function () {
    document.getElementById('logOut').innerHTML = "<input type='image' src=\"images/blue_arrow_right.png\" id='logging-out'>";
  };

  const addEditingCreating = function () {
    document.getElementById('editingCreating').innerHTML = '<p>Ссылка на фото:</p>' +
            '<input id="choosing" type="file" name="upload" />\n' +
            '<p>Текст поста:</p>' +
            '<p><textarea rows="4" cols="100" id="textOfPost" ></textarea></p>\n' +
            '<p></p>Хэштеги:</p>' +
            '<p><input type="text" id="tagOfPost" />\n</p>\n' +
            '<p><input type="submit" id="submit" class="submit-button" />\n</p>';
  };

  const addButtonWrap = function () {
    document.getElementById('buttonWrap').innerHTML = '<button class="button" id="inputNewPost">Загрузить пост</button>';
  };

  const addLoggingIn = function () {
    stringInner = '<div class="logging-in" id="logging-fields">\n' +
            '    <p>Введите  логин</p><p><input type = "text" id="loginName">\n' +
            '    <p>Введите пароль</p><input type="password" id = "password"> <p></p>\n' +
            '    <button class="button-logging" id="inputRegistration">Войти</button>\n' +
            '    </div>';
    document.getElementById('feedback').innerHTML = stringInner;
  };

  const addFeaturesForEditingPost = function () {
    const imageToEdit = event.target.parentElement.parentElement.parentElement.children[1].src;
    const textToEdit = event.target.parentElement.parentElement.parentElement.children[2].innerHTML;
    const tagsToEdit = event.target.parentElement.parentElement.children[0].children[0].innerHTML;
    const idOfEditedPost = event.target.parentElement.parentElement.parentElement.children[1].id;

    document.getElementById('feedback').innerHTML = '';
    document.getElementById('browse-button').innerHTML = '';
    document.getElementById('filter').innerHTML = '';

    const valueOfPicture = imageToEdit;

    const valueOfTags = tagsToEdit;

    const valueOfText = textToEdit;

    document.getElementById('editingCreating').innerHTML = `<div class="post"> \n <img src="${valueOfPicture}" class="photo-editing" id="${idOfEditedPost
    }"><p></p> \n` +
            `<p><input type=" file " id="choosing" accept=".png,.jpg,.jpeg" value="${valueOfPicture}"/></p>\n` +
            `<p><textarea rows="4" cols="100" id="textOfPost" >${valueOfText
            }</textarea></p>\n` +
            `<input type="text" id="tagOfPost" value="${valueOfTags}" />\n</div>\n`;
    document.getElementById('buttonWrap').innerHTML = '<button class="button" id="inputNewPost">Загрузить пост</button>';
  };

  const addHeaderAuthorised = function (userName) {
    document.getElementById('userName').innerHTML = '<img src="images/user_blue.png"><div id="name"></div><div id="plusContainer"><input type="image" src="images/plus.png" id="addingPost"></div>';
    document.getElementById('name').innerHTML = userName;
    document.getElementById('logOut').innerHTML = "<input type='image' src=\"images/blue_arrow_right.png\" id='logging-out'>";
  };

  const addHeaderUnauthorised = function () {
    document.getElementById('head').innerHTML = '<div class="header"> <img src="images/cam.png">YourLight</div>\n' +
            '\n' +
            '    <div class="header" id="userName"> <img src="images/user_blue.png"> <button class="button" type="button" id="logIn">Войти</button></div>\n' +
            '\n' +
            '    <div class="header"id="logOut"></div>';
  };

  const addHead = function () {
    document.getElementById('head').innerHTML = '<div class="header"> <img src="images/cam.png">YourLight</div>\n' +
            '\n' +
            '    <div class="header" id="userName"> <img src="images/user_blue.png"> <button class="button" type="button" id="logIn">Войти</button></div>\n' +
            '\n' +
            '    <div class="header"id="logOut"></div>';
  };

  const addEditing = function (post) {
    document.getElementById('editingCreating').innerHTML = `<div class="post"> \n <img src="${post.imageToEdit}" class="photo-editing" id="${post.idOfEditedPost
    }"><p></p> \n` +
            '<input id="choosing" type="file" name="upload"/></p>\n' +
            `<p><textarea rows="4" cols="100" id="textOfPost" >${post.textToEdit
            }</textarea></p>\n` +
            `<input type="text" id="tagOfPost" value="${post.tagsToEdit}" />\n` +
            '<p><input type="submit" id="submit" class="submit-button" />\n</p>';
  };


  const changeHeaderUnauthorised = function () {
    document.getElementById('userName').innerHTML = '<img src="images/user_blue.png"> <button class="button" type="button" id="logIn">Войти</button>';
    document.getElementById('logOut').innerHTML = '';
  };

  const changeCurrentUser = function (userName) {
    if (!userName) {
      document.getElementById('userName').innerHTML = '<img src="images/user_blue.png"> <button class="button" type="button" id="logIn">Войти</button>';
      document.getElementById('logOut').innerHTML = '';
    } else {
      userName = userName.trim();
      if (userName) {
        document.getElementById('head').innerHTML = '<div class="header"> <img src="images/cam.png">YourLight</div>\n' +
                    '\n' +
                    '    <div class="header" id="userName"> <img src="images/user_blue.png"> <button class="button" type="button" id="logIn">Войти</button></div>\n' +
                    '\n' +
                    '    <div class="header"id="logOut"></div>';

        addHeaderAuthorised(userName);
      } else {
        document.getElementById('userName').innerHTML = '<img src="images/user_blue.png"> <button class="button" type="button" id="loggingIn">Войти</button>';
        document.getElementById('logOut').innerHTML = '';
      }
    }
  };


  const deleteFeedbackFromHTML = function () {
    document.getElementById('feedback').innerHTML = '';
  };

  const deleteBrowseButton = function () {
    document.getElementById('browse-button').innerHTML = '';
  };

  const deleteButtonWrap = function () {
    document.getElementById('buttonWrap').innerHTML = '';
  };

  const deleteEditingCreating = function () {
    document.getElementById('editingCreating').innerHTML = '';
  };

  const deleteFilter = function () {
    document.getElementById('filter').innerHTML = '';
  };

  const deleteHead = function () {
    document.getElementById('head').innerHTML = '';
  };


  const fillFilterInPage = function (filterConfig) {
    if (filterConfig) {
      document.getElementById('filter').children[2].value = filterConfig.author;
    }
    if (filterConfig.dateFrom) {
      document.getElementById('filter').children[5].value = filterConfig.dateFrom;
    }
    if (filterConfig.dateTo) {
      document.getElementById('filter').children[7].value = filterConfig.dateTo;
    }
    if (filterConfig.hashTags) {
      document.getElementById('filter').children[9].value = filterConfig.hashTags;
    }
  };

  const fillFilterFromPage = function () {
    const filterConfig = {};
    filterConfig.author = document.getElementById('nameAuthor').value;
    filterConfig.dateFrom = document.getElementById('dateFrom').value;
    filterConfig.dateTo = document.getElementById('dateTo').value;
    if (document.getElementById('hashtags').value.trim() === '') {
      filterConfig.hashTags = [];
    } else {
      filterConfig.hashTags = document.getElementById('hashtags').value.split(',');
    }
    return filterConfig;
  };

  const fillFeedbackWithError = function () {
    document.getElementById('feedback').innerHTML = "<img src=\"images/err.png\" class= 'post'>";
  };


  const getPostFile = function () {
    return document.forms.editingCreating.choosing.value;
  };

  const getPostText = function () {
    return document.forms.editingCreating.textOfPost.value;
  };

  const getPostTags = function () {
    return document.forms.editingCreating.tagOfPost.value;
  };

  const getCyclesNumber = function () {
    return document.getElementById('feedback').getElementsByClassName('post').length;
  };

  const getPostId = function (i) {
    return document.getElementById('feedback').getElementsByClassName('post')[i].id.toString();
  };

  const getNewPost = function () {
    let post;
    post.nameOfPicture = document.getElementById('choosing').value;
    post.text = document.getElementById('textOfPost').value;
    post.tags = document.getElementById('tagOfPost').value;
    return post;
  };

  const getLoginInfo = function () {
    let info;
    info.loginName = document.getElementById('loginName').value;
    info.loginPassword = document.getElementById('password').value;
    return info;
  };

  const getEditedPost = function () {
    const post = {};
    post.nameOfPicture = document.getElementById('choosing').value;
    if (post.nameOfPicture === '') {
      post.nameOfPicture = document.getElementById('editingCreating').children[0].children[0].src;
    }

    post.text = document.getElementById('textOfPost').value;
    post.tags = document.getElementById('tagOfPost').value;

    post.idOfPostToEdit = document.getElementById('editingCreating').children[0].children[0].id;
    return post;
  };

  const getTextEdited = function () {
    return document.getElementById('textOfPost').value;
  };

  const getTagsEdited = function () {
    return document.getElementById('tagOfPost').value;
  };

  const getImageEdited = function () {
    return document.getElementById('choosing').value;
  };

  const getLength = function () {
    return document.getElementById('feedback').getElementsByClassName('post').length;
  };

  const getTextOfPost = function () {
    return document.getElementById('textOfPost').value;
  };

  const getTagOfPost = function () {
    return document.getElementById('tagOfPost').value;
  };

  const getLoginName = function () {
    return document.getElementById('loginName').value;
  };

  const getLoginPassword = function () {
    return document.getElementById('password').value;
  };


  const applyFilter = function () {
    return document.getElementById('applyFilter');
  };

  const loggingIn = function () {
    return document.getElementById('logIn');
  };

  const browseMore = function () {
    return document.getElementById('browse-button');
  };

  const browseButton = function () {
    return document.getElementById('browse');
  };

  const loggingOut = function () {
    return document.getElementById('logging-out');
  };

  const feedback = function () {
    return document.querySelector('.feedback');
  };

  const inputRegistration = function () {
    return document.getElementById('inputRegistration');
  };

  const filterApply = function () {
    return document.getElementById('applyFilter');
  };

  const addingNewPost = function () {
    return document.getElementById('addingPost');
  };

  const inputNewPost = function () {
    return document.getElementById('submit');
  };

  const postToDelete = function (event) {
    return event.path[3];
  };
  const idOfDeletedPost = function (post) {
    let id = post.children[1].id;
    id = id.toString();
    return id;
  };

  const postToEdit = function (event) {
    const post = {};
    post.imageToEdit = event.path[3].children[1].src;
    post.imageToEdit = post.imageToEdit.split('http://localhost:3000')[1];
    post.textToEdit = event.path[3].children[2].innerHTML;
    post.tagsToEdit = event.path[3].children[3].children[0].children[0].innerHTML;
    post.idOfEditedPost = event.path[3].children[1].id.toString();
    return post;
  };

  return {
    filterStringInsert,
    depictPhotoPost,
    depictPhotoPostWithoutWrap,
    depictPhotoPostAuthorised,
    depictPhotoPostAuthorisedWithoutWrap,
    wrapOverDepictPhotoPost,
    wrapOverDepictPhotoPostAuthorised,
    wrapOverDepictPhotoPostWithoutWrap,
    addBrowseButton,
    addFilter,
    addLoggingOut,
    addEditingCreating,
    addButtonWrap,
    addLoggingIn,
    addFeaturesForEditingPost,
    addHeaderAuthorised,
    addHeaderUnauthorised,
    addHead,
    addEditing,
    changeHeaderUnauthorised,
    changeCurrentUser,
    deleteFeedbackFromHTML,
    deleteBrowseButton,
    deleteButtonWrap,
    deleteEditingCreating,
    deleteFilter,
    deleteHead,
    fillFilterInPage,
    fillFilterFromPage,
    fillFeedbackWithError,
    getCyclesNumber,
    getPostId,
    getNewPost,
    getLoginInfo,
    getEditedPost,
    getLength,
    getTextOfPost,
    getTagOfPost,
    getTextEdited,
    getTagsEdited,
    getLoginName,
    getPostFile,
    getPostText,
    getPostTags,
    getImageEdited,
    getLoginPassword,
    applyFilter,
    loggingIn,
    browseButton,
    loggingOut,
    feedback,
    inputNewPost,
    inputRegistration,
    filterApply,
    addingNewPost,
    postToDelete,
    idOfDeletedPost,
    postToEdit,
    browseMore,
  };
}());
