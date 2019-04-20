module.exports = (sequelize, Sequelize) => {
  const Week = sequelize.define('weeks', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    number: {
      type: Sequelize.STRING
    },
    letter: {
      type: Sequelize.STRING
    },
    year: {
      type: Sequelize.STRING
    }
  });
  
  return Week;
}