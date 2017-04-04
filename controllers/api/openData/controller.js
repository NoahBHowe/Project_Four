const OpenData = require('../../../services/openData.js');

let controller = {};

controller.getFelonies = (req, res) => {
  console.log('query params in api controller', req.params.cmplnt_fr_dt)
  OpenData
    .getFelonies(req.params.cmplnt_fr_dt)

    .then(r => r.json())

    .then((data) => {
      res.json(data)
      console.log('controller.getFelonies api data', data);
    })
    .catch((err) => {
      res.status(400)
      .json(err);
    });
};


module.exports = controller;







