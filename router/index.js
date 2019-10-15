const router = require('koa-router')()

const query = require('../db/query')

//查询成员列表
router.get('/api/userlist',async ctx =>{
    let data = await query('select * from userlist')
    ctx.body = data
})

//添加成员信息
router.post('/api/add',async ctx => {
    let {name,age,phone,idCard} = ctx.request.body
    console.log(idCard);
    

    //查 select * from userlist where idCard=?

    let idLength=await query('select * from userlist where idCard=?',[idCard])

    if(idLength.data.length >= 1){
        ctx.body = '请勿重复添加'
    }else{
        let sql = 'insert into userlist (username,age,phone,idCard) values (?,?,?,?)'

        let data = await query(sql,[name,age,phone,idCard])
    
        if(data.msg='success'){
            ctx.body = '添加成功'
        }else{
            ctx.body = '添加失败'
        }
    }
    
    
   
})

//删除成员信息

//修改成员信息
module.exports = router