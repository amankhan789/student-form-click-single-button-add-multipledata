require("dotenv").config();
const express =require('express'); 
const app=express();
const http = require('http').createServer(app);
const path= require('path');
const studentRouter= require("./api/users/student.router");
const multer  = require('multer')
const upload = multer()
const cors= require('cors')
const fastcsv = require("fast-csv");
const fs = require("fs");
app.use(cors());


// create route for csv file upload

app.post("/multiple", upload.array('document',3),(req,res)=>{
console.log(req.files);
res.send(" file uplodes");
});

// create middleware for csv file

const fileStorgeEngine = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./document')           
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+ file.originalname);
    }
});
const uplode=multer({storage:fileStorgeEngine});

//


var bodyParser = require('body-parser')
app.use(express.json());
app.use(express.urlencoded({ extended : true }));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname) + '/students.html')
});

app.use("/api/users",studentRouter);

const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})


