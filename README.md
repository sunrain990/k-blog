# k-blog
koa2 sequelize postgres 

tips: webstorm need to exclude folder of node_modules

## init
npm init -f  (make package.json)
create files such as
.gitignore (exclude git files)
.sequelizerc (config sequelize db server path)


cnpm i sequelize sequelize-cli sequelize-auto -S
cnpm i pg@6 pg-hstore -S

## sequelize db





// to be edit
npm i sequelize sequelize-cli  pg@6 pg-hstore -S
node_modules/.bin/sequelize init
sequelize db:create todos-dev
sequelize model:create --name Todo --attributes title:string
sequelize model:create --name TodoItem --attributes content:string,complete:boolean
sequelize db:migrate


// 备份还原数据库
sequelize-auto -o "./models" -d db -h localhost -u postgres -p 5432 -x admin -e postgres


./node_modules/.bin/sequelize-auto -o "./dbserver/im_export/sq_models" -t core_ruleng_model -s faast -d ORION_BS -h 172.21.138.21 -u postgres -p 5432 -x admin -e postgres
sequelize-auto -o "./sq_models" -t core_ruleng_fact -s faast -d CRONOS_CRISIS -h 172.21.138.21 -u postgres -p 5432 -x admin -e postgres



