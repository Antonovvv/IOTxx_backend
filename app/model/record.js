'use strice';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Record = app.model.define('record', {
    record_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    start_time: DATE,
    device_id: {
      type: INTEGER,
      references: { model: 'devices', key: 'device_id' },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
  });

  return Record;
}