require('dotenv').config()
const app=require('./app.js')
const connectDB=require('./db/db.js')

connectDB()
.then(()=>{
    app.listen(`${process.env.NODE_PORT}`,()=>{
        console.log(`your server is running on http://localhost:${process.env.NODE_PORT}`);
    })
})
.catch((err)=>{
    console.log('error on index.js page',err);
})