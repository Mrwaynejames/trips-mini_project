const router = require('express').Router();
// Include the Book model with the other imports
const { Traveller, Trip, Location } = require('../../models');

router.get('/', (req, res) =>  console.log("get request for api/location"));
router.post('/', (req, res) =>  console.log("post request for api/location"));
router.get('/:id', (req, res) =>  console.log("get request for api/location/:id"));
router.delete('/:id', (req, res) =>  console.log("delete request for api/location/:id"));

module.exports = router;
