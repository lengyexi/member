const Koa =  require('koa')

const app = new Koa

const koaStatic =  require('koa-static')

const router = require('./router')

const bodyparser = require('koa-bodyparser')

const path = require('path')

//__dirname 当前执行文件所在的目录  process.cwd() 小黑板打开位置的目录

app.use(koaStatic(path.join(process.cwd(),'public')))

app.use(bodyparser())

app.use(router.routes())

app.use(router.allowedMethods())

app.listen(3000,()=>{
    console.log('服务器启动成功')
})