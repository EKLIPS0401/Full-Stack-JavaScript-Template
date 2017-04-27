import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

let app = express();

// your mlab connection string
const CONNECTION_STRING = '';

// uncomment the code block to connect to mlab
// mongoose.connect(CONNECTION_STRING).then(() => {
//   console.log('We are connected');
// }).catch((err) => {
//   console.log(err);
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./app/frontend/'));

app.get('*', (req, res, next) => {
  res.sendfile('app/frontend/index.html');
});

app.listen(3000);
console.log('listening on port 3000');
