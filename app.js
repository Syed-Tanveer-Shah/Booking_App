import express from 'express';
import connectDB from './connections/connectdb.js';
import authentication from './routes/authentication.js'
import user from './routes/user.js'
import web from './routes/web.js'
import cookieParser from 'cookie-parser';


const app = express();
const port = process.env.PORT || '2200';
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017';

// Establish database connection
connectDB(DATABASE_URL);

//cookie parser
app.use(cookieParser())
// Middleware to parse JSON requests
app.use(express.json());



// Use your routes from the separate route file
 app.use('/user',user); // user routes
app.use('/auth', authentication); // Use your authentication routes
app.use('/' , web)


app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
