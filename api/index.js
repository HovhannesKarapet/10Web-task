const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));

const config = require('./config/config');

//Allow CORS origin requests
const cors = require('cors');
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

//Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('morgan')('dev'));
app.use(cors());


//MongoDB connection
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGOURL || config.mongoURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MongoDB connected...');
    })
    .catch(error => console.log(error));


//Routes
const section_routes = require('./routes/section');
const article_routes = require('./routes/article');

app.use('/api/section', section_routes);
app.use('/api/article', article_routes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist/client'));

    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(
                __dirname, 'client', 'dist', 'client', 'index.html'
            )
        )
    })
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running ${port}...`);
});
