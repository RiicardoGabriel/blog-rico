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
          as: 'blogpost',
          through: PostCategory,
          foreignKey: 'category_id',
          otherKey: 'post_id',
        });
        models.BlogPost.belongsToMany(models.Category, {
          as: 'category',
          through: PostCategory,
          foreignKey: 'post_id',
          otherKey: 'category_id',
        });
      };


    return PostCategory;
  };