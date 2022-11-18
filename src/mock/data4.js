import Mock from 'mockjs'

Mock.mock('check.php','post', function(options) {
    console.log("options",options);
    var data=JSON.parse(options.body);
    console.log("data",data);
    var userName=data.userName;
    var pwd=data.pwd;
    if(userName=="tom" && pwd=="123"){
        return Mock.mock({status:"10001",msg:"ok"});
    }else{
        return Mock.mock({status:"20001",msg:"用户名或密码错误！"});
    }
    
});