import { QueryInterface, SequelizeStatic } from "sequelize";

export = {
  up(queryInterface: QueryInterface, sequelize: SequelizeStatic): any {
    return queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER
      },
      last_name: {
        allowNull: false,
        type: sequelize.STRING
      },
      first_name: {
        allowNull: false,
        type: sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: sequelize.DATE
      }
    });
  },
  down(queryInterface: QueryInterface, _sequelize: SequelizeStatic): any {
    return queryInterface.dropTable("users");
  }
};
