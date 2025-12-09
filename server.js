const express = require('express');
const app = express();

const galleriesRouter = require('./routes/galleriesRouter');
const artistsRouter = require('./routes/artistsRouter');
const paintingsRouter = require('./routes/paintingsRouter');
const paintingRouter = require('./routes/paintingRouter');

app.use('/api/galleries', galleriesRouter);
app.use('/api/artists', artistsRouter);
app.use('/api/paintings', paintingsRouter);
app.use('/api/painting', paintingRouter);

app.use((req, res) => {

    if (req.accepts('html')) {
        res.status(404).send(
            `<!DOCTYPE html>
            <html lang="en">

            <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>404 Not Found</title>
                <style>
                    body {
                        text-align: center;
                    }
                </style>
            </head>

            <body>
                <h1>404 - Not Found</h1>
                <p>The requested resource ${req.originalUrl} was not found on this server.</p>
            </body>
            </html>
                `
        );
    } else {
        res.status(404).json(
            {
                success: false,
                message: "Invalid API endpoint",
                request: req.originalUrl
            });
    }
});

let port = process.env.port;

app.listen(port, () => {

    console.log(`Listening on port ${port}`);
});
