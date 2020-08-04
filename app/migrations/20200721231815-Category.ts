import { QueryInterface, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';

export = {
	up: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.createTable('categories', {
      id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        type: DataType.STRING,
        unique: true,
      },

    });
	},

	down: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.dropTable('categories');
	}
};
