import  express  from 'express';
const app= express();

app.get('/',(req, res)=>{
    res.send('server is ready');
})
// get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes=[

        {
           id:1,
           title:'A joke',
           contsnt:'This  is joke' 
        },
        {
           id:2,
           title:'A lion Joke',
           contsnt:'This  is joke for lion' 
        },
        {
           id:3,
           title:'A joke',
           contsnt:'This  is joke' 
        },
        {
           id:4,
           title:'A joke',
           contsnt:'This  is joke' 
        },
        {
           id:5,
           title:'A joke',
           contsnt:'This  is joke' 
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port ,()=>{
    console.log(`server start at http://localhost:${port}`)
});   