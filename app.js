const path = require('path');
const express = require('express');
const { userSee } = require('./routes/user-see');
const { hostSee } = require('./routes/host-see');
const { member } = require('./routes/member');
const { memberSee } = require('./routes/ memberSee');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use('/src', express.static(path.join(__dirname, 'src')));

app.use(userSee);
app.use('/host', hostSee);
app.use(member);
app.use(memberSee);

app.use((req, res, next) => {
  res.status(404).render('404', { title: 'Error 404', currentPage:'404' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});