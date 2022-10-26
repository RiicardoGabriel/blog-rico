module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      title: { type: DataTypes.STRING },
      content: { type: DataTypes.STRING, unique: true },
      userId: { type: DataTypes.STRING },
      published: { allowNull: false, type: DataTypes.DATE },
      updated: { allowNull: false, type: DataTypes.DATE },
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'blog_posts'
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey: 'id',
            as: 'user',
        });
      };


    return BlogPost;
  };