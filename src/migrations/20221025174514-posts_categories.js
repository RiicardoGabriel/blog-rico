'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('posts_categories', {
      post_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'blog_posts',
          key: 'id',
        }
      },
      category_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        }
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.dropTable('posts_categories');
  },
};