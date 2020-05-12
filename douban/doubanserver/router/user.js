var express = require("express");
var router = express.Router();

// 引用post解析模块
var bodyParser = require("body-parser");
var uE = bodyParser.urlencoded({extended:false})
// 引用数据加密模块
var crypto = require("crypto");
// 引用数据库连接文件
var userClo = require("./userdb");
// 引用JWT创建token
var jwt = require("jsonwebtoken");

    // 注册路由
    router.post("/zhuce",uE,(req,res)=>{
        console.log(req.body.username,req.body.password);
        var newPossword = crypto.createHash("md5").update(req.body.password).digest("hex");
        var demoUser = new userClo({
            username:req.body.username,
            password:newPossword
        })
        demoUser.save()
            .then((ok)=>{
                console.log(ok);
                res.send({msg:"注册成功",status:200});
            })
            .catch((err)=>{
                console.log(err);
                res.send({msg:"注册失败",status:400});
            })
    });
    // 登录路由
    router.post("/login",uE,(req,res)=>{
        console.log(req.body.username,req.body.password);
        var newPossword = crypto.createHash("md5").update(req.body.password).digest("hex");
        userClo.find({username:req.body.username,password:newPossword})
                .then((ok)=>{
                    var userObj={
                        loginOk:true
                    }
                    mi = "agheohgeijgoagheogiho";
                    var token = jwt.sign(userObj,mi)
                    if(ok.length>0){
                      res.send({msg:"登录成功",status:200,token})  
                    }else{
                        res.send({msg:"登录失败",status:400});
                    } 
                })
                .catch((err)=>{
                    console.log(err);
                })
    });
module.exports = router;