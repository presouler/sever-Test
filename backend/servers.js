const Koa = require('koa');
// const path = require('path');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const bcrypt = require('bcrypt');
const seq = require('../ORM/sequelize');

const saltRounds = 10;

// seq.addUser('a', 'b');
// (async () => {
//   await User.create({
//     username: 'leon',
//     pwd: 'abc',
//   });
// })();

const { User } = seq.models;

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use((ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', '*');
  ctx.set('Access-Control-Allow-Headers', '*');
  next();
});
router.post('/login', async (ctx) => {
  const { username, pwd } = ctx.request.body;
  (async () => {
    const a = await User.findAll({
      where: {
        username,
      },
    });
    const b = await bcrypt.compare(pwd, a[0].pwd);
    if (b) {
      ctx.body = 'pass';
      console.log('yes');
    } else {
      ctx.body = 'false';
    }
  })();
});


router.post('/register', async (ctx) => {
  const { username, pwd } = ctx.request.body;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(pwd, salt, (err, hash) => {
      User.create({
        username,
        pwd: hash,
      });
    });
  });
  ctx.body = 'done';
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
console.log('服务器已启动');
