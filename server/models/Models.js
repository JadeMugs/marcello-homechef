const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

export const Menu = sequelize.define(
  'Menu',
  {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    fromDate: DataTypes.DATE,
    toDate: DataTypes.DATE,
  },
  { sequelize, modelName: 'menu' }
);

export const Dish = sequelize.define(
  'Dish',
  {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    price: DataTypes.FLOAT,
  },
  { sequelize, modelName: 'dish' }
);

export const Category = sequelize.define(
  'Category',
  {
    idCategory: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  { sequelize, modelName: 'category' }
);

export const MenuDish = sequelize.define(
  'MenuDish',
  {
    idMenu: DataTypes.INTEGER,
    idDish: DataTypes.INTEGER,
    idCategory: DataTypes.INTEGER,
  },
  { sequelize, modelName: 'menuDish' }
);

// (async () => {
//   await sequelize.sync();
//   const jane = await User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });
//   console.log(jane.toJSON());
// })();
