**k-blog**

## 项目介绍
 * 项目原因：
          年纪越来越大，也健忘了。"我秃了，也变强了"，毕竟是二次元才有的境界，好多事情也不再记得或者选择性遗忘。用微信、qq记录又怕刷屏，所有做个网络工具记录自己的技术成果，和每个阶段的心情。
 * 项目目的：
           给广大刚入职场的新人一个可选的技术栈，也希望和新朋友一起探索技术和规范合理性。望不吝赐教！
           人生在世，总要留些故事让后人看，是吧！
 * 使用技术：
           nodejs koa2 sequelize postgres
 * Thats all.
           下面是蹩脚的英文show！

Tips: When using webstorm as ur editor, u need to exclude the folder of node_modules firstly. or the editor would take too much time to index.

## initialize project
1. <code>git clone https://github.com/sunrain990/k-blog</code>
2. make package.json
> <code> npm init -f</code> &emsp;&emsp;
3. create files such as
4. .gitignore (exclude git files)
5. .sequelizerc (config sequelize db server path)
&emsp;&emsp;> others to be add (graphql,apidoc,dcos,docker,and so on.)

## db stuff(use sequelize and postgres)
1. sequelize is an orm frame,sequelize-cli a cli tool
> <code>npm i sequelize sequelize-cli sequelize-auto pg@6 pg-hstore -S (pg@7 is currently unavailable)</code>
2. create folder defined in .sequelizerc file,which contains models and migrations ...
> <code>node_modules/.bin/sequelize init</code>
3. use sequelize to create db
> <code>sequelize db:create todos-dev</code>
4. add a model which map to a db table named Todo and its attributes followed
> <code>sequelize model:create --name Todo --attributes title:string </code>
5. same like above
> <code>sequelize model:create --name TodoItem --attributes content:string,complete:boolean </code>
6. migrate with db tables
> sequelize db:migrate

 sequelize-auto is based on sequelize to dump or restore dbs, also it can dump models from exist dbs
> * dump: <code>./node_modules/.bin/sequelize-auto -o "./dbserver/im_export/sq_models" -t core_ruleng_model -s faast -d ORION_BS -h localhost -u postgres -p 5432 -x admin -e postgres</code>
> * dump: <code>sequelize-auto -o "./sq_models" -t core_ruleng_fact -s faast -d CRONOS_CRISIS -h localhost -u postgres -p 5432 -x admin -e postgres</code>
> * restore(initialize): u can use sync()




