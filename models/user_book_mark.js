module.exports = (sequelize, DataTypes, Model) => {
  class UserBookMark extends Model {}

  UserBookMark.init(
    {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      sequelize,
      modelName: "userBookMark",
      tableName: "userBookMarks",
      indexes: [{ unique: true, fields: ["userId", "articleId"] }],
    }
  );
  return UserBookMark;
};
