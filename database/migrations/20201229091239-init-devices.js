'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, INTEGER, DATE } = Sequelize;
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('devices', {
        device_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(30),
        owner: STRING(30),
      });

      await queryInterface.createTable('records', {
        record_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        start_time: DATE,
        device_id: {
          type: INTEGER,
          references: { model: 'devices', key: 'device_id' },
          onUpdate: 'cascade',
          onDelete: 'cascade',
        },
      });

      await queryInterface.createTable('points', {
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
      });

      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
      console.error(e);
    }
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.dropTable('points');
      await queryInterface.dropTable('records');
      await queryInterface.dropTable('devices');
      await transaction.commit();
    } catch (e) {
      console.error(e);
      await transaction.rollback();
    }
  },
};
