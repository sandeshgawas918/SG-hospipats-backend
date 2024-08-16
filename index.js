const app=require('./app.js')
const connectDB=require('./db/db.js')

connectDB()
.then(()=>{
    app.listen(7000,()=>{
        console.log(`your server is running on http://localhost:7000`);
    })
})
.catch((err)=>{
    console.log('error on index.js page',err);
})