const config = require('./config');
const app = require('./app');


app.listen(config.port, ()=> {
    console.log('server is running');
});
