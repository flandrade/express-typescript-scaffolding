import * as sequelize from "sequelize";

export interface ListUserParams {
  limit: number;
}

export interface UserAttrs {
  createdAt?: Date;
  firstName?: string;
  id?: number;
  lastName?: string;
  updatedAt?: Date;
}

export interface UserModel extends sequelize.Model<User, UserAttrs> {}

export interface User extends sequelize.Instance<UserAttrs>, UserAttrs { }

export default function(
  sequelize: sequelize.Sequelize,
  dataTypes: sequelize.DataTypes
): UserModel {
  const model: UserModel =
    sequelize.define<User, UserAttrs>("user", {
      id: {
        allowNull: false,
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      lastName: {
        allowNull: false,
        defaultValue: "",
        field: "last_name",
        type: dataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Last name cannot be empty"
          }
        }
      },
      firstName: {
        allowNull: false,
        defaultValue: "",
        field: "first_name",
        type: dataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "First name cannot be empty"
          }
        }
      },
      createdAt: {
        field: "created_at",
        type: dataTypes.DATE
      },
      updatedAt: {
        field: "updated_at",
        type: dataTypes.DATE
      }
    }, {
      timestamps: true
    });
  return model;
}
