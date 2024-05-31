const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const router = express.Router();

const uri =
  'mongodb+srv://shlee:shlee@cluster-dev.exunbfr.mongodb.net/locations?retryWrites=true&w=majority&appName=cluster-dev';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const locationStorage = {
  locations: [],
};

router.post('/add-location', async (req, res, next) => {
  // Connect the client to the server	(optional starting in v4.7)
  await client.connect();
  const db = client.db('locations');
  // Send a ping to confirm a successful connection
  await db.command({ ping: 1 });
  console.log('Pinged your deployment. You successfully connected to MongoDB!');
  const r = await db.collection('user-locations').insertOne({
    address: req.body.address,
    coords: { lat: req.body.lat, lng: req.body.lng },
  });
  console.log(r);
  // res.send를 json 데이터로 보내겠다는 축약
  res.json({ message: 'Stored location!', locId: r.insertedId });
  // locationStorage.locations.push({
  //   id: id,
  //   address: req.body.address,
  //   coords: { lat: req.body.lat, lng: req.body.lng },
  // });
});

router.get('/location/:lid', async (req, res, next) => {
  // MongoDB의 특수 객체 타입의 id다
  const locationId = req.params.lid;

  await client.connect();
  const db = client.db('locations');
  await db.command({ ping: 1 });
  console.log('Pinged your deployment. You successfully connected to MongoDB!');
  const doc = await db.collection('user-locations').findOne({
    _id: new ObjectId(locationId),
  });

  if (!doc) {
    return res.status(404).json({ message: 'Not found!' });
  }
  res.json({ address: doc.address, coordinates: doc.coords });
});

module.exports = router;
