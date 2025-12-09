const express = require('express');
const app = express();

const galleriesRouter = require('./routes/galleriesRouter');
const artistsRouter = require('./routes/artistsRouter');
const paintingsRouter = require('./routes/paintingsRouter');
const paintingRouter = require('./routes/paintingRouter');
const { handle404Error } = require('./routes/error');

app.use('/api/galleries', galleriesRouter);
app.use('/api/artists', artistsRouter);
app.use('/api/paintings', paintingsRouter);
app.use('/api/painting', paintingRouter);

app.use((req, res) => {
    handle404Error(req, res, `The requested resource ${req.originalUrl} was not found on this server.`)
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});