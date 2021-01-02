'use strice';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Device = app.model.define('device', {
    device_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    owner: STRING(30),
  }, {
    timestamps: false,
  });

  return Device;
}