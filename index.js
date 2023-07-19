const express = require("express");
const app = express();
const ejs = require("ejs");

const { sequelize, blogs } = require("./model")
//Local Imports
const { createBlog, getBlog } = require("./controller/blogController");

//Template Setup
app.set("view engine", "ejs");

//General Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Get main page
app.get("/", (req, res) => {
  res.send("It is my  first 'CRUD' project in Internship 😁");
});

//Get blog page
app.get("/createBlog", (req, res) => {
  res.render("add-blog");
});

//Create new blog
app.post("/createBlog", createBlog);

//Get home page
// app.get("/home", getBlog);
app.get('/homeblog', async(req, res) =>{
  const blogss = await blogs.findAll()
  // console.log(blogss)
  res.render('home',{blogss}) // file ko name dako
})


// app.post('/home');

app.get('/blogs/:id',async(req, res)=>{
  const blog= await blogs.findAll({
    where:{id:req.params.id}
  })
  console.log(blog)
  
  res.render('singleBlog',{blog})
})

app.get('/delete/:id',async(req, res)=>{
   await blogs.destroy({
    where:{id:req.params.id}
  })
  // console.log(blog)
  
  res.redirect('/homeblog');
})



//Create server
app.listen(3000, () => {
  console.log("Listening at port: 3000");
});
