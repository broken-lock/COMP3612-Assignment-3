function send404Html (res, url) {
    res.status(404).send(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>404 Not Found</title>
            <style>
                body { text-align: center; }
            </style>
        </head>
        <body>
            <h1>404 - Not Found</h1>
            <p>The requested resource ${url} was not found on this server.</p>
        </body>
        </html>`
    );
};

const handle404Error = (req, res, message) => {
    if (req.accepts('html')) {
        send404Html(res, req.originalUrl);
    } else {
        res.status(404).json({
            success: false,
            message: message,
            query: req.originalUrl
        });
    }
};

module.exports = { send404Html, handle404Error };