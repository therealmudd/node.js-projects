const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const path = require('path');
const userRoutes = require('./controllers/userController');
const postRoutes = require('./controllers/postController');
const commentRoutes = require('./controllers/commentController');
const User = require('./models/userModel');
const Post = require('./models/postModel');
const Comment = require('./models/commentModel');
const seedDatabase = require('./seed');


seedDatabase();

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'pages'));

const hbs = exphbs.create({ extname: '.html', defaultLayout: false });
app.engine('html', hbs.engine);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret-key', resave: true, saveUninitialized: true }));

app.use(bodyParser.json());

app.use('/api/', userRoutes);
app.use('/api/', postRoutes);
app.use('/api/', commentRoutes);

const isLoggedIn = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
};

app.get('/', (req, res) => {
    res.redirect('/all-posts');
});

app.get('/all-posts', isLoggedIn, async (req, res) => {
    const pageTitle = "All Posts";
    const user = req.session.user;
    const posts = await Post.findAll({
        include: [
          { model: User },
          { model: Comment, include: [User] }
        ]
    });
    res.render('index', { user, pageTitle, posts });
});

app.get('/my-posts', isLoggedIn, async (req, res) => {
    const pageTitle = "My Posts";
    const user = req.session.user;
    const posts = await Post.findAll({
        where: { userId: user.id },
        include: [
          { model: User },
          { model: Comment, include: [User] }
        ]
    });
    res.render('index', { user, pageTitle, posts });
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/pages/login.html');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ where: { email, password } });

    if (user) {
        req.session.user = user;
        res.redirect('/all-posts');
    } else {
        res.redirect('/login');
    }
});

app.get('/logout', (req, res) => {
    if (req.session.user) {
        req.session.destroy(() => {
            res.redirect('/login');
        });
    } else {
        res.redirect('/login');
    }
});

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
