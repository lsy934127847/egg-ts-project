

1. 创建ts项目
npm init egg --type=ts

2. js代码编写sequelize
npm install --save egg-sequelize mysql2

3. ts代码编写sequelize
npm install --save sequelize-typescript   egg-sequelize-ts
注意点 : 可能会因为addschema报错 重新安装 npm i --save egg-sequelize-type 然后 插件的配置改为package: 'egg-sequelize-type'
https://github.com/seekcx/egg-sequelize-type
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize-type'
}
