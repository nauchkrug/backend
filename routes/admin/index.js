const {Router} = require('express');
const serve = require('serve-static');
const router = new Router;

const profile = require('./profile');
router.use('/profile', profile);
router.use('/static', serve('node_modules/admin-lte'));
router.use('/static', serve('node_modules/tinymce'));

router.get('/', (req, res) => {
  res.render('cab/index');
});

router.get('/add', (req, res) => {
  res.render('cab/add');
});

router.post('/add', (req, res) => {
  const obj = {
    status: true,
    msg: 'Task approved'
  };
  if (!req.body) {
    obj.status = false;
    obj.msg = 'Task undefined';
  }
  console.log(req.body);
  res.json(obj);
});

module.exports = router;