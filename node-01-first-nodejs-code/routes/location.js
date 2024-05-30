const express = require('express');

const router = express.Router();

const locationStorage = {
  locations: [],
};

router.post('/add-location', (req, res, next) => {
  locationStorage.locations.push({
    id: Math.random(),
    address: req.body.address,
    coords: { lat: req.body.lat, lng: req.body.lng },
  });
  // res.send를 json 데이터로 보내겠다는 축약
  res.json({ message: 'Stored location!' });
});

router.post('/location', (req, res, next) => {});

module.exports = router;