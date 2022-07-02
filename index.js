const app = require('express')();
const Network = require('netty_finder');





app.get('/api/:number', (req, res) => {
    console.log(req.query)
    let number = new Network(req.params.number);
    const network = number.getNetworkName();
    if (network !== null) {
        res.send( `${number} belong to  the ${network} network`);
    }
    else {
        res.send("The number you just sent does not belong to any network");   
        }
    }
);

const port = process.env.PORT || '3000'
app.listen(port, () => console.log(`API running on localhost:${port}`))