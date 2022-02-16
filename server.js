const express=require('express');
const app=express();

app.set('view engine','ejs');
app.set('views','application_view');
app.get('/',(req,res)=>{
    res.render("index",{title:"rowad coding academy"});
    res.end();
});
app.use(express.static('./'));
const port=process.env.PORT ||5000;
app.listen(port,()=>{
    console.log(`start server on port ${port}`);
});