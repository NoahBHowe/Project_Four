const fetch = require('node-fetch');

const OpenData = {};
// const apptoken = process.env.APP_TOKEN;  -->gonna risk putting a public access library on github


OpenData.search = () => {
   console.log("search term:", cmplnt_fr_dt)
  return fetch (`https://data.cityofnewyork.us/resource/7x9x-zpz6.json?$$app_token=EAZicRXn062Gkx6mG9V41Kqs5&$limit=10000`

    );
}

module.exports = OpenData




// Column,Description9

// cmplnt_fr_dt   CMPLNT_FR_DT,"Exact date of occurrence for the reported event (or starting date of occurrence, if CMPLNT_TO_DT exists)"
// cmplnt_fr_tm   CMPLNT_FR_TM,"Exact time of occurrence for the reported event (or starting time of occurrence,
// addr_pct_cd  ADDR_PCT_CD,The precinct in which the incident occurred
// ofns_desc    OFNS_DESC,Description of offense corresponding with key code
// law_cat_cd   LAW_CAT_CD,"Level of offense: felony, misdemeanor, violation "
// lat_lon




