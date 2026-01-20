import express from 'express';
import mongoose from 'mongoose';
import {User} from './Models/User.js';
import { userRegister } from './controller/user.js';
const app = express();
const port = 2000;

// MIDDLEWARE
// This one is for parsing application/x-www-form-urlencoded (standard form submissions)
app.use(express.urlencoded({ extended: true })); 
// ** ADD THIS LINE **
// This one is for parsing application/json (common for data sent from JavaScript/fetch)
app.use(express.json()); 

app.get('/', (req, res) => {
    // Assuming you have an 'index.ejs' file in a 'views' folder
    // You might need to set your view engine if you haven't already
    app.set('view engine', 'ejs'); 
    res.render('index.ejs');
});

app.post('/form-submit', userRegister)

// MONGODB CONNECTION
// Make sure your IP is whitelisted in MongoDB Atlas
mongoose.connect("mongodb+srv://sanyogsharma073_db_user:94pJPDTXgN7iUSy9@cluster0.qzhplzb.mongodb.net/", {
    dbName: "nodepract"
}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

app.listen(port, () => console.log(`Server running on port ${port}`));