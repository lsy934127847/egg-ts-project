import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  // 开启sequelize-js
  // sequelize : {
  //   enable: true,
  //   package: 'egg-sequelize',
  // },
  // 开启sequelize-ts
  sequelize : {
    enable: true,
    package: 'egg-sequelize-type'
}
};

export default plugin;
