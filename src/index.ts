import Express from 'express';

const app = Express();

app.use(Express.json());

app.get('/', function (req, res) {
  res.send('Hello, I am http-echo server. response with request contents.');
});

app.options('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Max-Age', '86400');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  res.send();
});

app.post('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(req.body);
});

app.listen(3000, function () {
  console.log('App is listening on port 3000!');
});