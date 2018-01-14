
let util = require('util')


let newCourseList = [
    {
        id: 511021,
        title: 'React for Beginners',
        coverPng: 'https://res.cloudinary.com/dohtkyi84/image/upload/v148/react-cover.png',
        rating:5
    },
    {
        id: 511022,
        title: 'Vue for Beginners',
        coverPng: 'https://res.cloudinary.com/dohtkyi84/image/upload/v148/vue-cover.png',
        rating:3
    },
    {
        id: 511023,
        title: 'Angular for Beginners',
        coverPng: 'https://res.cloudinary.com/dohtkyi84/image/upload/v148/angular-cover.png',
        rating:5
    },
    {
        id: 511024,
        title: 'Webpack for Beginners',
        coverPng: 'https://res.cloudinary.com/dohtkyi84/image/upload/v148/webpack-cover.png',
        rating:4
    }
]
let list = []
//forEach:一個一個來,直接對原數組操作
newCourseList.forEach((item, index, arr) => {
    //list.push({ id: item.id, rating: item.rating })
    item.id--;
})
//console.log(util.inspect(list));
console.log(util.inspect(newCourseList));


console.log('**********找出courseLists所以課程id*************');
let user = {
    id: 888,
    name: 'Mitanni',
    courseLists: [{
        name: 'my courses',
        courses: [{
                id: 511019,
                title: 'React for Beginners',
                converPng: 'https://res.cloudinary.com/dohtkyi84/image/upload/v148/react-cover.png',
                tags: [{
                    id: 1,
                    name: 'javascript'
                }],
                rating: 5
            },
            {
                id: 511020,
                title: 'front-end automat workflow',
                converPng: 'https://res.cloudinary.com/dohtkyi84/image/upload/v148/front-cover.png',
                tags: [{
                    id: 2,
                    name: 'gulp'
                }, {
                    id: 3,
                    name: 'workflow'
                }],
                rating: 4
            }
        ]
    }, {
        name: 'new release',
        courses: [{
                id: 511022,
                title: 'vue for beginners',
                converPng: 'https://res.cloudinary.com/dohtkyi84/image/upload/v148/vue-cover.png',
                tags: [{
                    id: 1,
                    name: 'javascript'
                }],
                rating: 5
            },
            {
                id: 511023,
                title: 'angular for beginners',
                converPng: 'https://res.cloudinary.com/dohtkyi84/image/upload/v148/angular-cover.png',
                tags: [{
                    id: 1,
                    name: 'javascript'
                }],
                rating: 4
            }
        ]
    }]
},arr=[]
user.courseLists.forEach(item => { 
    item.courses.forEach(item => { 
        arr.push(item.id)
    })
})
console.log(arr);