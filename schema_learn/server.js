import  express  from 'express';
const app= express();

app.get('/',(req, res)=>{
    res.send('server is ready');
})
// get a list of 5 jokes

const port = process.env.PORT || 3000;

app.listen(port ,()=>{
    console.log(`server start at http://localhost:${port}`)
});   