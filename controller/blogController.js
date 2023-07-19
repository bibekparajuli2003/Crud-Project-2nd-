const { blogs } = require("../model");


// Create new blog
exports.createBlog = async (req, res) => {
  const { title, subtitle, description } = req.body;

  console.log(title, subtitle, description);

   const newBlog = await blogs.create({
    title: title,
     subtitle: subtitle,
    description: description
   } );

  // res.render("home",{newBlog: newBlog.dataValues});

  res.redirect('/home')
};




// Get all blog from db
// exports.getBlog = async (req,res,next) => {
//     try {
//      const blogs =  await blogs.findAll();
//      console.log("Blogs: ", blogs);
//      res.send("Fetch bhayo! 👌")

//     } catch (error) {
//       console.log(error);
//       res.status(500).send("Internal server error! 😢")
//     }
// };
