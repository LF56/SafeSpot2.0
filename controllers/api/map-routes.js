const router = require('express').Router();
const axios = require('axios');

require('dotenv').config();
var mapRoute = `https://a.api.tomtom.com/map/1/tile/basic/main/1/0/0.png?key=${process.env.API_KEY}&tileSize=512`


router.post('/', (req, res) => {
    axios.get(mapRoute).then (
        data => 
      res.send(data.data)
    )
  });



module.exports = router;
