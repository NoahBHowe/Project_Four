const fetch         = require('node-fetch');

const Zillow = {};
const ZWSID = process.env.ZWSID;

Zillow.search = (address)  => {
  console.log("search term:", address)
  return fetch(`http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${ZWSID}&address=${address}&citystatezip=NYC%2C+NY`);
}





module.exports = Zillow



