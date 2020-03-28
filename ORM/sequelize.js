const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'kangxinxiong',
  database: 'backend',
  timezone: '+08:00',
  logging: false,
  define: {
    // paranoid: true,
    underscored: true,
    charset: 'utf8mb4',
    collate: 'utf8mb4_0900_ai_ci',
  },
});
const {
  CHAR,
} = DataTypes;

const User = sequelize.define('User', {
  username: CHAR(255),
  pwd: CHAR(255),
});
// User === sequelize.models.User;

// (async () => {
//   await User.create({
//     username: 'leon',
//     pwd: 'abc',
//   });
// })();
module.exports = sequelize;
