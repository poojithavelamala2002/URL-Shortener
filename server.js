const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()
const session = require('express-session');

// ✅ Session setup for tracking latest created URL
app.use(session({
  secret: 'url-shortener-session-key', // can be anything
  resave: false,
  saveUninitialized: true
}));


console.log('Connecting to:', process.env.MONGO_URI);

// ✅ Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Atlas connected'))
  .catch(err => console.error('❌ Connection error:', err));


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

// ✅ Home route: show only the latest shortened URL for this session
app.get('/', async (req, res) => {
  let shortUrls = [];

  if (req.session.latestUrlId) {
    const latest = await ShortUrl.findById(req.session.latestUrlId);
    if (latest) {
      shortUrls.push(latest);
    }
  }
  res.render('index', { shortUrls , request: req });
});

// ✅ Handle form submission: create short URL, store its ID in session
app.post('/shortUrls', async (req, res) => {
  const newUrl = await ShortUrl.create({ full: req.body.fullUrl }); // ✅ fix: assign to newUrl
  // ✅ Save the ID of this new URL in memory
  req.session.latestUrlId = newUrl._id;
     res.redirect('/');
  
});

// ✅ Redirect short URL and increment clicks
app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)

  shortUrl.clicks++
   await shortUrl.save()

  res.redirect(shortUrl.full)
})

// ✅ Use dynamic PORT for deployment (no hardcoded localhost)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  //console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`🚀 Server running on port ${PORT}`);

});
