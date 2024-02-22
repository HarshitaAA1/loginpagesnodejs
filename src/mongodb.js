const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/loginpages")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch((err) => {
        console.log("failed to connect:", err);
    });



const loginSchema=new mongoose.Schema({

name :{
    type:String ,
    required:true
},
password:{

    type:String,
    required:true
}

})





const  collection=new mongoose.model("collection1",loginSchema)

module.exports=collection

