const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

// set ejs as a view engine 
app.set('view engine', 'ejs');
// set the views folder 
app.set ('views', __dirname + '/views')



//make any file inside public folder accessable without creating routes for each file
app.use(express.static(__dirname + '/public'));

// set middleware to be able to get POSTed data
// If extended is false, you can NOT post 'nested Objects'
app.use(express.urlencoded({express: true}));
app.use(express.json());



app.get('/',(req,res)=>{
   // console.log(__dirname)
   // res.sendFile(__dirname + '/views/index.html') 
   res.render('index');
    // res.send('hello');
})


app.get('/about',(req,res)=>{
    // console.log(__dirname)
     //res.sendFile(__dirname + '/views/about_test.html') 
    // res.sendFile(__dirname + '/views/about.html') 
    res.render('about')
})


//create a comments array to save the comments inside 

const commentsArr = [
   {  
    name: 'Faelan',

    commentDate: new Date(2021, 2, 16, 10), 
    comment:" I'm an elf with long ears"
},
{  
    name: 'Maèl',
    commentDate : new Date(2021, 2, 17, 07),
    comment :" I'm an elf with magic"
},
{  
    name: 'Mirel',
    commentDate: new Date(2021, 2, 18, 09),
    comment:" I'm an elf. Do you like me?"
}
]


app.get('/blog',(req,res)=>{
    res.render('blog',{commentsArr})
})


app.post('/blog',(req,res)=>{
    console.log(req.body)
    // push new data to commentsArr  
    
    commentsArr.push({      
        name:req.body.name,
        commentDate: new Date(),   // Date.now() 
        comment: req.body.comment,
        email: req.body.email
    })

    //  let newData = {
    //      name:req.body.name,
    //      commentDate: new Date(),
    //      comment: req.body.comment,
    //      email: req.body.email
    //  }
    //  commentsArr.unshift(newData);

    res.render('blog', {commentsArr})
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})


app.listen(port,()=>{
    console.log(`app is running on port: ${port}`);
})


// commentDate : new Date(2021, 2, 17, 10).toLocaleTimeString(),