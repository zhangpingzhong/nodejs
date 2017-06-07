'use strict'

/**
 *这个文件就是用来处理我们账号相关的逻辑(注册&登录)
 */

//导包
const fs = require('fs')
const path = require('path')
const captchapng = require('captchapng');


//处理获取登录页面的方法
exports.getLoginPage = (req,res)=>{
    fs.readFile(path.join(__dirname,'../views/login.html'),(err,data)=>{
      res.setHeader("Content-Type","text/html;charset=utf-8")
      res.end(data)
    })
}

//返回验证码的图片给浏览器
exports.getVcodeImage = (req,res)=>{
      var vcode = parseInt(Math.random()*9000+1000)
      //todo vcode 要在服务端存储起来
      var p = new captchapng(80,30,vcode); // width,height,numeric captcha 
        p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha) 
        p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha) 
 
        var img = p.getBase64();
        var imgbase64 = new Buffer(img,'base64');
        res.writeHead(200, {
            'Content-Type': 'image/png'
        });
        res.end(imgbase64);
}
