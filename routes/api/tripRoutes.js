const router = require('express').Router();
// Include the Book model with the other imports
const { Traveller, Trip, Location } = require('../../models');

router.post('/', (req, res) =>  console.log("post request for api/trips"));
router.delete('/:id', (req, res) =>  console.log("delete request for api/trips/:id"));

module.exports = router;
