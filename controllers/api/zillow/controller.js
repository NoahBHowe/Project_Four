const Zillow = require('../../../services/zillow.js');

let controller = {};

controller.getApartments = (req, res) => {
  console.log('query params in api controller', req.params.address)
  Zillow
    .search(req.params.address)
    .then(r => r.json())
    .then((data) => {
      res.json(data)
      console.log('controller.getApartments api data', data);
    })
    .catch((err) => {
      res.status(400)
      .json(err);
    });
};






module.exports = controller;
