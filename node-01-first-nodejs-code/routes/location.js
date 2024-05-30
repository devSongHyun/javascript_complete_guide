const express = require('express');

const router = express.Router();

const locationStorage = {
  locations: [],
};

router.post('/add-location', (req, res, next) => {
  const id = Math.random();
  locationStorage.locations.push({
    id: id,
    address: req.body.address,
    coords: { lat: req.body.lat, lng: req.body.lng },
  });
  // res.send를 json 데이터로 보내겠다는 축약
  res.json({ message: 'Stored location!', locId: id });
});

router.post('/location', (req, res, next) => {});

module.exports = router;
