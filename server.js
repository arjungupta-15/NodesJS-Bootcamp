const express = require("express");
const app = express();
const db = require("./db.js");
const bodyParser = require("body-parser")

app.get("/", (req, res) => {
res.send("hello world")
})
app.use(bodyParser.json());


app.get("/home",(req,res)=>{
     res.send("kaise ho mere dost kya kar rahe ho kuch aaone bareme bata kya karte ho kya sikh rahe hai ")
})




app.get("/memos",(req,res)=>{
    const memos = {
        chiken:"chicken momos",
        price:"100",
        quatity:"20",
        avaible:true,
        chickken_avaible:false,
    };
    res.send(memos);
})

app.post("/data",(req,res)=>{
    res.send("data was a saved");
})


const menuitem = require("./routes/menuitem.js")

app.use("/menuitem",menuitem)

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})


