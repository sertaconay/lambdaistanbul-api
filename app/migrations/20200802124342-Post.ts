import { QueryInterface, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';

export = {
	up: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.createTable('posts', {
      id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataType.STRING,
        allowNull: false,
      },
      description: {
        type: DataType.TEXT,
        allowNull: false,
      },
      published: {
        type: DataType.TINYINT,
        defaultValue: 1,
      },
      categoryId: {
        type: DataType.INTEGER,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      updatedAt: {
        type: DataType.DATE,
      },
      createdAt: {
        type: DataType.DATE,
      },
    });
	},

	down: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.dropTable('posts');
  }
};
