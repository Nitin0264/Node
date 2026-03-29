import express from "express"
import multer from "multer";
let app = express();


multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,`${process.cwd()}/upload`)
  },
  filename:function(req,file,cb)
  {
    cb(null,file.originalname);
  },
  
})

let upload = multer({storage})

app.get("/",(req,res)=>
{
  res.render("upload")
})

app.post("/upload",upload(req,res)=>
{
  console.log("upload")

})
app.listen(8000,() => console.log("Running"))