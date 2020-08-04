import { QueryInterface, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';

export = {
	up: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.createTable('pages', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataType.STRING,
        allowNull: false,
      },
      title: {
        type: DataType.STRING,
        allowNull: false,
      },
      content: {
        type: DataType.TEXT,
        allowNull: false,
      },
      published: {
        type: DataType.TINYINT,
        defaultValue: 1,
      },
      createdAt: {
        type: DataType.DATE,
      },
      updatedAt: {
        type: DataType.DATE,
      },
    });
	},

	down: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.dropTable('pages');
	},
};
