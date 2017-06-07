'use strict'

//导包
const express = require('express')
const path = require('path')

//创建app
const app = express()

//集成静态资源中间件
app.use(express.static(path.join(__dirname,'statics')))

//集成路由(放在最后，在启动web服务之前即可)
const accountRouter = require(path.join(__dirname,'routers/accountRouter.js'))
app.use('/account',accountRouter)

//开启web服务
app.listen(3000,(err)=>{
  if (err) {
    console.log(err)
  }
  console.log("start OK")
})
