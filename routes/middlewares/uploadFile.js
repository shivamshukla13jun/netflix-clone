const multer = require("multer");
var path=require('path')
var upload= multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname)); 
        }
        
    }),
})

module.exports=upload