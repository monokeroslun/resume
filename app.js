var koa = require('koa');
var route = require('koa-route');
var path = require('path');
var serve = require('koa-static');
var render = require('koa-ejs');
var publicFiles = serve(path.join(__dirname, 'public'));
var app = koa();

app.use(publicFiles);

render(app, {
  root: path.join(__dirname, 'view'),
  layout: false,
  viewExt: 'html',
  cache: false,
  debug: true,
  //locals: locals
  // , filters: filters
});

app.use(route.get('/', function* (){
yield this.render('index');
}));
app.listen(3001);
console.log('Listening on ' + 3001);
