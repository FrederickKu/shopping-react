var multer = require('multer');
const path = require('path');
var upload = multer({ dest: path.join(__dirname, 'uploads') });


module.exports = (app, db) => {
  const login = require('./controllers/login')(db);

  app.get('/login', login.displayLogin);
  app.post('/login',login.login);
  app.get('/logout',login.signout)
  app.get('/signup',login.displaySignup);
  app.post('/signup',upload.single('photo'),login.registerPartOne);
  app.get('/signup2',login.displaySignupTwo);
  app.get('/signup2/upload',login.displayUpload);
  app.post('/signup2/upload',upload.single('photo'),login.previewNamecard);
  app.post('/signup2/addCard',login.addCard)
  app.get('/signup2/design',login.designCard)
//   app.get('/signup2/confirm')



};