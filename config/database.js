const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/portfolio').then(()=>{
  console.log('connecting to db is success');
}).catch((e)=>{
  console.log(e);

})
