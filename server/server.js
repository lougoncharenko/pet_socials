const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

//setup db
mongoose.connect('mongodb://127.0.0.1:27017/database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log('Connected to DB'))
    .catch(console.error);


//Controllers
require('./controllers/posts')(app);
require('./controllers/comments.js')(app);
require('./controllers/auth.js')(app);


const Post = require('./models/Posts')

app.get("/api", (req,res) => {
    res.json({"posts": [{title: "postOne"}, {title:"postTwo"}, {title:"postThree"}]})
})



app.listen(4001, () => {
    console.log("Server started on port 4001")
})