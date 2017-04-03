const fetch         = require('node-fetch');

const zillow = {};
const ZWSID = process.env.ZWSID;

zillow.search = (zip, price, bed, bath) => {


  return fetch(`http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${ZWSID}&address=${ADDRESS}&citystatezip=${CITYSTATEZIP}`);
}

module.exports = Zillow




