<style >
body {background:#000; color: #0099ff}

</style>

# **<font color=#0099ff size=12 face="黑体">k-blog</font>**

> ## 项目介绍
> * 项目原因：
>           年纪越来越大，也健忘了。"我秃了，也变强了"，毕竟是二次元才有的境界，好多事情也不再记得或者选择性遗忘。用微信、qq记录又怕刷屏，所有做个网络工具记录自己的技术成果，和每个阶段的心情。
> * 项目目的：
>           给广大刚入职场的新人一个可选的技术栈，也希望和新朋友一起探索技术和规范合理性。望不吝赐教！
>           人生在世，总要留些故事让后人看，是吧！
> * 使用技术：nodejs koa2 sequelize postgres 
> * Thats all. 下面是蹩脚的英文show！

<font color=purple>Tips: When using webstorm as ur editor, u need to exclude the folder of node_modules firstly. or the editor would take too much time to index.</font>

## initialize project
npm init -f  (make package.json)
create files such as
.gitignore (exclude git files)
.sequelizerc (config sequelize db server path)


cnpm i sequelize sequelize-cli sequelize-auto -S
cnpm i pg@6 pg-hstore -S

## 




## db stuff(use sequelize and postgres)
npm i sequelize sequelize-cli  pg@6 pg-hstore -S (pg@7 is currently unavailable)
node_modules/.bin/sequelize init
sequelize db:create todos-dev
sequelize model:create --name Todo --attributes title:string
sequelize model:create --name TodoItem --attributes content:string,complete:boolean
sequelize db:migrate


// 备份还原数据库
sequelize-auto -o "./models" -d db -h localhost -u postgres -p 5432 -x admin -e postgres


./node_modules/.bin/sequelize-auto -o "./dbserver/im_export/sq_models" -t core_ruleng_model -s faast -d ORION_BS -h 172.21.138.21 -u postgres -p 5432 -x admin -e postgres
sequelize-auto -o "./sq_models" -t core_ruleng_fact -s faast -d CRONOS_CRISIS -h 172.21.138.21 -u postgres -p 5432 -x admin -e postgres



