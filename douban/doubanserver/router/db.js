var mongoose = require("mongoose");
    // 连接数据库
    mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser:true,useUnifiedTopology:true});
    // 设置连接对象
    var db=mongoose.connection;
    db.on("err",console.error.bind(console,"数据库连接失败"));
    db.once("open",function(){
        console.log("连接成功");
    });
    // 定义操作对象
    var userSchema = new mongoose.Schema({
        title:String,
        img:String,
        fen:Number
    });
    // 设置集合
    var doubanCol = mongoose.model("doubans",userSchema);
    // 暴露
    module.exports=doubanCol;