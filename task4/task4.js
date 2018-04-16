var photoPosts = (function () {
    return function () {

        this.photoPosts = [

            {

                id: '1',

                description: 'Would you send me an angel?',

                createdAt: new Date('2018-02-23T23:00:00'),

                author: 'Klaus Meine',

                photoLink: 'https://mota.ru/upload/wallpapers/source/2014/10/28/13/04/41719/274.jpg',

                hashTags: ['#Monument Valley', '#Old song'],

                likes: ['Rudolf Shenker', 'Mattias Jabs'],

            },

            {

                id: '2',

                description: 'Time to meet the sun, wake up, my Catars!',

                createdAt: new Date('2018-02-23T06:00:00'),

                author: 'Carcassonne Maid',

                photoLink: 'http://www.winetastingfrance.com/wp-content/uploads/Fotolia_83791709_M.jpg',

                hashTags: ['#Catars', '#Carcassonne'],

                likes: ['French King'],

            },

            {

                id: '3',

                description: 'Here Chink the noble was rescued',

                createdAt: new Date('2018-02-22T21:05:00'),

                author: 'Ernest Seton-Thompson',

                photoLink: 'https://www.williamhortonphotography.com/wp-content/uploads/2017/09/Yellowstone-2010-13.jpg',

                hashTags: ['#Yellowstone', '#national park', '#little hero'],

                likes: ['Mark Twain', 'Oscar Wilde'],

            },

            {

                id: '4',

                description: 'Welcome to Palo-Alto!',

                createdAt: new Date('2018-02-22T06:40:00'),

                author: 'Xerox Corporation',

                photoLink: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Wfm_palo_alto.jpg',

                hashTags: ['#work', '#Silicon valley'],

                likes: ['Steve Jobs'],

            },

            {

                id: '5',

                description: 'Look at this perfect design!',

                createdAt: new Date('2018-02-21T12:00:00'),

                author: 'Steve Jobs',

                photoLink: 'http://appls.me/wp-content/uploads/2016/12/1344440801_iphone-2g.jpg',

                hashTags: ['#iPhone'],

                likes: ['Klaus Meine', 'Matthias Jabs'],

            },

            {

                id: '6',

                description: 'Nice to see all of you in San-Francisco! Here is my Jabocaster, which will rock you like a hurricane tonight!',

                createdAt: new Date('2018-02-21T09:00:00'),

                author: 'Matthias Jabs',

                photoLink: 'http://static.musicbusiness.fr/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/g/i/gibson-explorer-dsxrchch1-1.jpg',

                hashTags: ['#Explorer', '#Gibson', '#Rock you like a hurricane'],

                likes: ['Klaus Meine', 'Rudolf Shenker', 'Steve Jobs'],

            },

            {

                id: '7',

                description: 'I want to build a new palace, because this seems to be too old, what would you say?',

                createdAt: new Date('2018-02-20T13:00:00'),

                author: 'French King',

                photoLink: 'http://windoftravel.org/uploads/media/objects/photos/17213.jpg',

                hashTags: ['#Paris', '#Palace'],

                likes: ['Carcassonne Maid'],

            },

            {

                id: '8',

                description: 'I have just started writing my new book, would you like to read a such one?',

                createdAt: new Date('2018-02-19T15:00:00'),

                author: 'Oscar Wilde',

                photoLink: 'https://clarklibrary.files.wordpress.com/2013/07/wilde-dublin-1883_0002.jpg',

                hashTags: ['#new book'],

                likes: ['Mark Twain', 'Ernest Seton-Thompson'],

            },

            {

                id: '9',

                description: 'Remember the good times, my friends',

                createdAt: new Date('2018-02-19T05:00:00'),

                author: 'Rudolf Shenker',

                photoLink: 'http://2.bp.blogspot.com/-bDEP1gEmFcU/UyxbJ9xGhFI/AAAAAAABcNI/KnZbShOMaBE/s1600/P1060231.JPG',

                hashTags: ['#Tokyo', '#Youth'],

                likes: ['Matthias Jabs', 'Klaus Meine'],

            },

            {

                id: '10',

                description: 'The new citadel will surprise English King',

                createdAt: new Date('2018-02-18T18:00:00'),

                author: 'French King',

                photoLink: 'https://static.thousandwonders.net/La.Rochelle.original.31270.jpg',

                hashTags: ['#La Rochelle',],

                likes: ['English King'],

            },

            {

                id: '11',

                description: 'My fleet and army are the strongest in the world!',

                createdAt: new Date('2018-02-18T16:00:00'),

                author: 'English King',

                photoLink: 'http://imtw.ru/uploads/imperiall/imgs/total_war1408105170_scan112.jpg',

                hashTags: ['#England'],

                likes: ['French King'],

            },

            {

                id: '12',

                description: 'I like travelling on these beautiful ships',

                createdAt: new Date('2018-02-17T14:00:00'),

                author: 'Mark Twain',

                photoLink: 'http://neworleanseasytravelguide.com/wp-content/uploads/2013/03/Natchez-Riverboat.jpg',

                hashTags: ['#steamboat'],

                likes: ['Ernest Seton-Thompson'],

            },

            {

                id: '13',

                description: 'Unfortunately, it looks really differently today',

                createdAt: new Date('2018-02-17T13:00:00'),

                author: 'Carcassonne Maid',

                photoLink: 'http://www.krasfun.ru/images/2015/6/8f7ab_0_173b7b_4d4f0f31_orig.jpg',

                hashTags: ['#Catars', '#Carcassonne'],

                likes: ['French King', 'English King'],

            },

            {

                id: '14',

                description: 'I have just visited the Tower of London. To tell you the truth - this place is exellent!',

                createdAt: new Date('2018-02-17T11:00:00'),

                author: 'English King',

                photoLink: 'http://www.facade-project.ru/images/cms/data/znamenitye_fasady/london-tauer-1.jpg',

                hashTags: ['#Prison', '#London'],

                likes: ['French King'],

            },

            {

                id: '15',

                description: 'Let me introduce the first Mac',

                createdAt: new Date('2018-02-17T06:00:00'),

                author: 'Steve Jobs',

                photoLink: 'http://i1-news.softpedia-static.com/images/news2/The-New-5K-iMac-Has-8-400-More-Pixels-Than-the-Original-Macintosh-465859-5.jpg',

                hashTags: ['#Computer', '#Say no to IBM'],

                likes: ['IBM incorporated'],

            },

            {

                id: '16',

                description: 'IBM makes the best computers!',

                createdAt: new Date('2018-02-17T04:00:00'),

                author: 'IBM incorporated',

                photoLink: 'http://2.bp.blogspot.com/-tmPSymCS4Z8/UBldvoJ45TI/AAAAAAAAD_U/b-ul7h7H4h0/s1600/ibm-pc.jpg',

                hashTags: ['#Computer'],

                likes: ['Steve Jobs'],

            },

            {

                id: '17',

                description: 'A new reissue is now done!',

                createdAt: new Date('2018-02-16T19:00:00'),

                author: 'Mark Twain',

                photoLink: 'http://listekitap.com/static/img/2016/01/tom-sawyer2-720x1120.jpg',

                hashTags: ['#Tom', '#Book'],

                likes: ['French King', 'Klaus Meine'],

            },

            {

                id: '18',

                description: 'Want to rock? We need a guitarist for lead position!',

                createdAt: new Date('2018-02-16T12:00:00'),

                author: 'Klaus Meine',

                photoLink: 'http://v-kurse-voronezh.ru/wp-content/uploads/2015/11/1000269_72129391.jpg',

                hashTags: ['#Rock', '#Lead'],

                likes: ['Mattias Jabs'],

            },

            {

                id: '19',

                description: 'Speaking generously, I really want to join some cool band',

                createdAt: new Date('2018-02-15T06:00:00'),

                author: 'Mattias Jabs',

                photoLink: 'https://www.filepicker.io/api/file/n5vOiC0pQq6WHiiwHcYB',

                hashTags: ['#Guitarist'],

                likes: [],

            },

            {

                id: '20',

                description: 'Oh, no, look at my face...',

                createdAt: new Date('2018-02-14T06:00:00'),

                author: 'Carcassonne Maid',

                photoLink: 'http://tourout.ru/file/opgq8cnfsulc/600x/i0yfcis2521m.jpg',

                hashTags: ['#Catars'],

                likes: ['French King'],

            },

        ];

        this.invalidArgs = {
            id: "21",
            description: 'Somebody has stolen our idea of fingerscanning!',
            createdAt: new Date('2018-02-28T17:00:00'),
            author: 'Steve Jobs',
            photoLink: '',
            hashTags: ['#thieves'],
            likes: ['IBM incorporated'],
        };

        this.tooMuchWords = {
            description: 'Somebody has stolen our idea of fingerscanning!Somebody has stolen our idea of' +
            ' fingerscanning!Somebody has stolen our idea of fingerscanning!Somebody has stolen our idea ' +
            'of fingerscanning!Somebody has stolen our idea of fingerscanning! Somebody has stolen our idea of' +
            ' fingerscanning!\'',
            createdAt: new Date('2018-02-28T17:00:00'),
            author: 'Steve Jobs',
            photoLink: 'http://tourout.ru/file/opgq8cnfsulc/600x/i0yfcis2521m.jpg',
            hashTags: ['#thieves'],
            likes: ['IBM incorporated'],
        };

        filterByAuthor = function (author, newPosts, top) {
            var findPosts = [];

            if (!author)
                return newPosts;

            for (var i = 0; i < newPosts.length; i++)
                if (newPosts[i].author === author) {
                    findPosts.push(newPosts[i]);
                }

            return findPosts;
        }

        filterByDate = function (dateFrom, dateTo, newPosts, top) {
            var findPosts = [];

            if (!dateFrom || !dateTo)
                return newPosts;

            for (var i = 0; i < newPosts.length; i++) {
                if (newPosts[i].createdAt >= dateFrom) {
                    if (newPosts[i].createdAt <= dateTo) {
                        findPosts.push(newPosts[i]);
                    }
                }
            }
            return findPosts;
        }

        filterByHashTags = function (hashTag, newPosts, top) {
            return newPosts.filter(function (post) {
                return hashTag.every(function (hashTagIndex) {
                    return post.hashTags.includes(hashTagIndex);
                });
            });
        }

        this.getPhotoPosts = function (skip, top, filterConfig) {
            if (skip < 0 || skip >= this.photoPosts.length || !skip)
                skip = 0;

            else if (skip !== 0) {
                skip++;
            }
            if (top === undefined || top <= 0)
                top = 10;

            else if (top !== 10) {
                top++;
            }

            var newPosts = this.photoPosts;

            if (filterConfig) {
                if ("author" in filterConfig)
                    newPosts = filterByAuthor(filterConfig.author, newPosts, top);

                if ("dateFrom" in filterConfig)
                    newPosts = filterByDate(filterConfig.dateFrom, filterConfig.dateTo, newPosts, top);

                if (filterConfig.hashTags)
                    newPosts = filterByHashTags(filterConfig.hashTags, newPosts, top);

                newPosts = this.sortByDate(newPosts).slice(skip, skip + top);
            }
            else {
                newPosts = this.sortByDate(this.photoPosts).slice(skip, skip + top);
            }

            return newPosts;
        }

        function sortF(a, b) {
            return a.createdAt - b.createdAt
        }

        this.sortByDate = function (array) {
            var findPosts = array.slice();
            return findPosts.sort(sortF);
        }

        this.getPhotoPost = function (id) {
            if (!id)
                return null;

            for (var i = 0; i < this.photoPosts.length; i++) {
                if (this.photoPosts[i].id === id)
                    return this.photoPosts[i];
            }
            return null;
        }

        this.validatePhotoPost = function (photoPost) {
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

        this.addPhotoPost = function (photoPost) {
            if (!photoPost)
                return false;

            if (this.validatePhotoPost(photoPost) && this.getPhotoPost(photoPost.id) === null) {

                this.photoPosts.push(photoPost);
                return true;
            }

            return false;
        }

        this.editPhotoPost = function (id, photoPost) {
            var oldPhotoPost = this.getPhotoPost(id);
            var empty = false;
            if (!oldPhotoPost || !photoPost || !id)
                return false;

            if (photoPost.description !== undefined) {
                if (photoPost.description !== null) {
                    if (photoPost.description.length >= 200)
                        return false;
                    else {
                        oldPhotoPost.description = photoPost.description;
                        empty = true;
                    }
                }
            }

            if (photoPost.photoLink !== undefined) {
                if (photoPost.photoLink !== null) {
                    if (photoPost.photoLink.length === 0)
                        return false;
                    else {
                        oldPhotoPost.photoLink = photoPost.photoLink;
                        empty = true;
                    }
                }
            }

            return empty;
        }

        this.removePhotoPost = function (id) {
            if (!id)
                return false;
            for (var i = 0; i < this.photoPosts.length; i++)
                if (this.photoPosts[i].id === id) {
                    this.photoPosts.splice(i, 1);
                    return true;
                }
            return false;
        }
    }

})();

var Posts = new photoPosts();

console.log("Initial array: ");
console.log(Posts.photoPosts);

console.log("\nSorted by dateFrom: ");
console.log(Posts.sortByDate(Posts.photoPosts));

console.group("\n\n\n getPhotoPosts:");
console.log("With default parameters : first 10 posts sorted by dateFrom : ")
console.log(Posts.getPhotoPosts());
console.log("\nSkip = 5, top = 20 :  20 posts after the 5th sorted by dateFrom")
console.log(Posts.getPhotoPosts(5, 20));
console.log("\nSkip = 5 :  10 posts sorted by dateFrom starting from the 6th: ")
console.log(Posts.getPhotoPosts(5));
console.log("\nfilterConfig = {author : 'Carcassonne Maid'} : 10 posts by Carcassonne Maid(3 of them are the result) sorted by dateFrom: ");
console.log(Posts.getPhotoPosts(0, 10, {author: 'Carcassonne Maid'}));
console.log("\nfilterConfig = {dateTo : '19.02.2018', dateFrom : '01.01.2001'} : posts sorted by dateFrom published between these dates");
console.log(Posts.getPhotoPosts(0, 10, {
    dateFrom: new Date('2001-02-19T00:00:00'),
    dateTo: new Date('2018-02-19T00:00:00')
}));
console.log("\nfilterConfig = {hashTag : '#Catars'} : 3 posts sorted by dateFrom with this hashTag");
console.log(Posts.getPhotoPosts(0, 10, {hashTags: ['#Catars']}));
console.log("\nfilterConfig = {author : 'Carcassonne Maid', dateFrom:01.01.2001, dateTo : '19.05.2018', hashTags :'#Catars','#Carcassonne'} : 3 posts");
console.log(Posts.getPhotoPosts(0, 10, {
    author: 'Carcassonne Maid',
    dateFrom: new Date('2001-01-01T00:00:00'),
    dateTo: new Date('2018-05-05T00:00:00')
}));
console.groupEnd();

console.group("\n\n\ngetPhotoPost:");
console.log('photoPost with id 5 : ');
console.log(Posts.getPhotoPost('5'));
console.log('\nphotoPost with id 25(no posts) : ');
console.log(Posts.getPhotoPost('25'));
console.groupEnd();

console.group("\n\nMethod validatePhotoPost");
console.log('True : ');
console.log(Posts.validatePhotoPost(Posts.getPhotoPost('11')));
console.log('False because of long description : ');
console.log(Posts.validatePhotoPost(Posts.tooMuchWords));
console.log('False because of empty arguments : ');
console.log(Posts.validatePhotoPost(Posts.invalidArgs));
console.log('False for the lack of arguments : ');
console.log(Posts.validatePhotoPost({
    id: '25',
    description: 'Lorem ipsum',
    createdAt: new Date('2018-02-03T12:00:00'),
}));
console.groupEnd();


console.group("\n\n\n addPhotoPost");
console.log('Post with id = 21 is added : ');
console.log(Posts.addPhotoPost({
    id: '21',
    description: 'Lorem ipsum',
    createdAt: new Date('2018-02-03T12:00:00'),
    author: 'Mark Twain',
    photoLink: 'https://farm6.staticflickr.com/5143/5577219477_608307068c_o.jpg'
}));
console.log('\n\nReturn false because of existing post with the same ID : ');
console.log(Posts.addPhotoPost(Posts.getPhotoPost('5')));
console.log('Return false for the lack of arguments : ');
console.log(Posts.addPhotoPost({id: '25', description: 'lorem ipsum'}));
console.groupEnd();

console.group("\n\n\n editPhotoPost");
console.log('Post with id=5 is edited : ');
console.log(Posts.editPhotoPost('5', {description: 'First iPhone ever'}));
console.log("\nPhotoPost with id \'5\' after editing : ");
console.log(Posts.photoPosts[4]);
console.log('\nReturn false because such id doesn\'t exist: ');
console.log(Posts.editPhotoPost('200', {description: 'I was in Mexico last night...'}));
console.log('\nReturn false because you can\'t change id : ');
console.log(Posts.editPhotoPost('5', {id: '1'}));
console.log('\nReturn false because of too long description) : ');
console.log(Posts.editPhotoPost('26', {
    description: '0000000000000000000000000000000000000000000000000' +
    '000000000000000000000000000000000000000000000000000000000000000' +
    '0000000000000000000000000000000000000000000000000000' +
    '0000000000000000000000000000000000000000000000000000'
}));
console.groupEnd();

console.group("\n\nremovePhotoPost");
console.log('Delete photoPost with id=1 : ');
console.log(Posts.removePhotoPost('1'));
console.log("\nArray after deleting photoPost : ");
console.log(Posts.photoPosts);
console.log('\nReturn false because id=100 doesn\'t exist : ');
console.log(Posts.removePhotoPost('100'));
console.groupEnd();


