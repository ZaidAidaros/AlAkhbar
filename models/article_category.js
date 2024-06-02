module.exports = (sequelize, DataTypes, Model) => {
  class ArticleCategory extends Model {}

  ArticleCategory.init(
    {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      arName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      enName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      enDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "articleCategory",
      tableName: "articleCategories",
    }
  );
  return ArticleCategory;
};
