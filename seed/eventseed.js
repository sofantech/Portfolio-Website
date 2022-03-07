const db=require('../config/database');
const Event=require('../models/services');
const mongoose=require('mongoose');
let service=[
    new Event({
        title:'web design',
        description:'web site design and programming',
        image:'image',

    }),
    new Event({
        title:'mobile App',
        description:'introduct all about design and programming',
        image:'image',

    }),
    new Event({
        title:'Bugs Fixing',
        description:'web site design and programming',
        image:'image',

    }),
    new Event({
        title:'Seo',
        description:'Search Engin optimaization',
        image:'image',

    }),
    ,
    new Event({
        title:'mobile App',
        description:'introduct all about design and programming',
        image:'image',

    }),
    new Event({
        title:'Bugs Fixing',
        description:'web site design and programming',
        image:'image',

    }),
    new Event({
        title:'Seo',
        description:'Search Engin optimaization',
        image:'image',

    })
];
service.forEach((service)=>{
    service.save((err,result)=>{
        if (err) {
            console.log(err);
            return;
            
        }
        console.log('success');
    })
})

// let serviceone=new Event({
//     title:'web design',
//     description:'web site design and programming',
//     image:'image',
// })
// serviceone.save((err,result)=>{
//     if (err) {
//         console.log('error');
//         return;
        
//     }
//     else
//     {
//         console.log('success');
//     }
// })

