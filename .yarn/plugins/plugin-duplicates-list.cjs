module.exports = {
  name: `plugin-duplicates-list`,
  factory: (require) => {
    const { BaseCommand } = require(`@yarnpkg/cli`);
    const { Configuration, Project, structUtils } = require("@yarnpkg/core");
  },
};
