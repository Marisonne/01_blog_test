const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

//make any file inside public folder accessable without creating routes for each file
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
   // console.log(__dirname)
    res.sendFile(__dirname + '/views/index.html') 
    // res.send('hello');
})

app.listen(port,()=>{
    console.log(`app is running on port: ${port}`);
})