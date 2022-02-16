const express=require('express');
const app=express();

app.set('view engine','ejs');
app.set('views','application_view');
app.get('/',(req,res)=>{
    res.render("index",{title:"rowad coding academy"});
});
app.use(express.static('./'));
app.listen('3000',()=>{
    console.log('start server.....');
});