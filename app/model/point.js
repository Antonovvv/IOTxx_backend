'use strice';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Point = app.model.define('point', {
    point_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    time: DATE,
    type: STRING,
    data: STRING,
    record_id: {
      type: INTEGER,
      references: { model: 'records', key: 'record_id' },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
  }, {
    timestamps: false,
  });

  return Point;
}