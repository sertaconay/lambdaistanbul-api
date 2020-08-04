import { QueryInterface, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';

export = {
	up: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        allowNull: false,
        type: DataType.STRING,
        unique: true,
      },
      name: {
        allowNull: false,
        type: DataType.STRING,
      },
      password: {
        allowNull: false,
        type: DataType.STRING,
      },
      createdAt: {
        type: DataType.DATE,
      },
      updatedAt: {
        type: DataType.DATE,
      },
    })
	},

	down: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.dropTable('users');
	}
};
