let util=require('util')

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
let arr = newCourseList.filter(item => { return item.rating === 5 } )
console.log(util.inspect(arr));