const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();
app.use(serve(path.join(__dirname, '../dist')));

app.listen(80);
console.log('服务器已启动');