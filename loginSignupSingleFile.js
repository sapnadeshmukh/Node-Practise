const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require ('bcrypt');
const app = express();
app.use(express.json())
const port = 4560;

mongoose.connect("mongodb+srv://Sapna:Sapna@2104@cluster0.t8a1a.mongodb.net/DB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true })
    .then(() => console.log("connection successfully..."))
    .catch((err) => console.log(err));


//create schema 
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,

    }
})

userSchema.pre("save",async function (next){
    try{
        const salt=await bcrypt.genSalt(10)
        const hashPassword=await bcrypt.hash(this.password,salt)
        this.password=hashPassword
        next()
    }catch(error){
        next(error)
    }
})









// create model...
const collection = new mongoose.model("datas", userSchema);



app.post("/signup", (req, res) => {
    const getDocument = async () => {
        const userDetails = await collection.find({});
        let i = 0;
        for (i of userDetails) {
            if (i["gmail"] == req.body.gmail ) {
                break;
            }
        } if (i["gmail"] == req.body.gmail ) {
            res.send("email already exist.")
            console.log("email already exist.")
        } else {
            const createDocument = async () => {

                const jsPlaylist = new collection({
                    username: req.body.username,
                    password: req.body.password,
                    gmail: req.body.gmail

                })
                const result = await jsPlaylist.save()
                res.send(" You have Signup successfully!!!")
                console.log("You have Signup successfully!!!")
            }
            createDocument();
        }
    }
    getDocument()
});

app.get("/login",(req,res)=>{
    const getDocument = async () => {
        const userDetails = await collection.find({});
        const user = ({
            username: req.body.username,
            password: req.body.password,
            gmail: req.body.gmail
        })
        let i = 0;
        for (i of userDetails) {
            if (i["gmail"] == req.body.gmail) {
                break;
            }
        } if (i["gmail"] == req.body.gmail ) {
            res.send("You have logged in successfully!!!")
            console.log("You have logged in successfully!!!")
        }else{
            res.send("Invalid user")
            console.log("Invalid user")
        }
    }
    getDocument();
})



app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})




















