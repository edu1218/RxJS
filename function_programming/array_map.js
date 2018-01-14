let util = require('util')
//map:併發處理,需要return 到新數組
let newCourseList = [
    {
        id: 511021,
        title: 'React for Beginners',
        coverPng: 'https://res.cloudinary.com/dohtkyi84/image/upload/v148/react-cover.png',
        rating: 5
    },
    {
        id: 511022,
        title: 'Vue for Beginners',
        coverPng: 'https://res.cloudinary.com/dohtkyi84/image/upload/v148/vue-cover.png',
        rating: 3
    },
    {
        id: 511023,
        title: 'Angular for Beginners',
        coverPng: 'https://res.cloudinary.com/dohtkyi84/image/upload/v148/angular-cover.png',
        rating: 5
    },
    {
        id: 511024,
        title: 'Webpack for Beginners',
        coverPng: 'https://res.cloudinary.com/dohtkyi84/image/upload/v148/webpack-cover.png',
        rating: 4
    }
]
let arr=newCourseList.map(item => { 
    return {id:item.id,rating:item.rating}
})

console.log(util.inspect(arr));