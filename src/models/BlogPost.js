module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      title: { type: DataTypes.STRING },
      content: { type: DataTypes.STRING, unique: true },
      userId: { type: DataTypes.STRING },
      published: { type: DataTypes.DATE },
      updated: { type: DataTypes.DATE },
    },
    {
      createdAt: 'published',
      updatedAt: 'updated',
      underscored: true,
      timestamps: true,
      tableName: 'blog_posts'
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
        });
      };


    return BlogPost;
  };