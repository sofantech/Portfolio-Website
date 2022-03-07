var express = require('express');
var router = express.Router();
var services=require('../models/services');
var Skills=require('../models/Skills');
/* GET home page. */
router.get('/',function(req, res) {
  
  
  Skills.find({},(err,skills)=>{
    services.find({},(err,service)=>{
    
      let chunk=[];
      let chunksize=3;
      for (let i = 0; i < service.length; i+=chunksize) {
        chunk.push(service.slice(i,chunksize+i));
        
      }
      console.log(chunk);
      res.setHeader('Content-Type','text/html');
      res.render('index', { skills: skills,chunk:chunk });
  
    });
    
    

  })
  
  
  
  
  
  
});

// router.get('/', function(req, res, next) {
  
// });
// router.get('/', function(req, res, next) {
 
  
//   // res.render('index', { title: 'Express' });
// });
function getskills(req,res,next) {
  
  
  
  next();
  
}
function getservice(req,res,next) {
  
  console.log('two')
  next();
  
}

  






module.exports = router;
