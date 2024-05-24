module.exports = {
  async up(queryInterface, Sequelize) {
    const groups = [];

    groups.push({
      group_id: 1,
      group_name: `buyer`,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    groups.push({
      group_id: 2,
      group_name: `seller`,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await queryInterface.bulkInsert("groups", groups, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("groups", null, {});
  },
};
