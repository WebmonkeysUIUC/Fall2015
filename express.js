// reference for this tutorial;
// http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/
// http://expressjs.com/en/starter/generator.html
// setting up / Installation
// 1. install node.js
// link -> https://nodejs.org/en/
// 2. install express generator, for mac users, add sudo in the front
// type the command below on the terminal, it is different from express.js. It creates a skeleton for using express.
// $(sudo)npm install -g express-generator

// start your app!
// these commands will create an app for you and install the packages
// $express appname
// $cd appname
// $(sudo)npm install

// To test if it worked
// start the server!
// $npm start

//structure
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade

// Basic routing
// http://expressjs.com/en/guide/routing.html
// in index.js / users.js
APP.MODULE(PATH, HANDLER FUNCTION)
// get : read
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Other RESTful Services
// create
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
// update, replace
app.put('/', function (req, res) {
  res.send('Got a PUT request');
});
// delete
app.delete('/', function (req, res) {
  res.send('Got a DELETE request');
});

//using static files (usually included in app.js) to include files in public like BOOTSTRAP!
app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));

// jade
// resource: http://jade-lang.com/
// similar to HTML but it's a template and accepts variable passing to it
// if you are more comfortable with HTML, you can try EJS by either specify when start the new project
// or npm install ejs, but make sure to change the engine in app.js
  // resource for ejs:
  // 1. $ (sudo)npm install ejs
  //    app.set('view engine', 'ejs');  in app.js
  // 2. $ express appname -ejs
//usual structure of these files:
  // make a layout / heading .jade that is similar in all other pages
  // index.jade, where the main content is
  // footer.jade the footer

//final notes:
  // The installation might be the hardest part, make sure your syntax correspond to the right version.
  // ask google anything, he is super friendly and helpful.
