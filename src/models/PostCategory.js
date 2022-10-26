module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: { type: DataTypes.INTEGER, primaryKey: true },
      categoryId: { type: DataTypes.INTEGER, primaryKey: true },
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'posts_categories'
    });

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
          as: 'blogPosts',
          through: PostCategory,
          foreignKey: 'categoryId',
          otherKey: 'postId',
        });
        models.BlogPost.belongsToMany(models.Category, {
          as: 'categories',
          through: PostCategory,
          foreignKey: 'postId',
          otherKey: 'categoryId',
        });
      };


    return PostCategory;
  };