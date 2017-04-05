const db           = require('../config/database');
const Lboarders     = {};


Lboarders.findAll   = () => {
  return db.manyOrNone(`
    SELECT * FROM wiki ORDER BY title DESC, likes DESC`
  );
};



module.exports     = Lboarders;
