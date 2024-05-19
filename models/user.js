module.exports = (sequelize, DataTypes, Model) => {
  class User extends Model {}

  User.init(
    {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      uid: {//firebase
        type: DataTypes.STRING,
        allowNull: true,
      },
      UName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      UPassword: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      isEmailVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      phone: {
        type: DataTypes.STRING,
        unique: true,
      },
      isPhoneVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isStoped: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      notification: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "user",
      tableName: "users",
    }
  );
  User.prototype.toJson = function () {
    const values = { ...this.get() };
    delete values.UPassword;
    delete values.isEmailVerified;
    delete values.isPhoneVerified;
    delete values.createdAt;
    return values;
  };
  return User;
};
