const fetch = require('node-fetch');

const openData = {};
const apptoken = process.env.APP_TOKEN;


openData.search = () => {
  return fetch (`https://data.cityofnewyork.us/resource/7x9x-zpz6.json$$app_token=${APP_TOKEN}`
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
