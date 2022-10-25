module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      display_name: DataTypes.STRING,
      email: { type: DataTypes.STRING, foreignKey: true },
      password: { type: DataTypes.STRING, foreignKey: true },
      image: { type: DataTypes.STRING, foreignKey: true },
    },
    {
      timestamps: false,
    });

    User.associate = (models) => {
        User.belongsTo(models.Plan, {
        foreignKey: 'plan_id',
        as: 'plan',
      });
    };

    return User;
  };