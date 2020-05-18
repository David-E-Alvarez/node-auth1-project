const server = require('./api/server.js');

const port = process.env.PORT || 5000;

server.get('/', (req,res) => {
    res.json("hello world")
})

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));