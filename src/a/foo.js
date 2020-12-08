const { bar } = require("../b/bar");

module.exports = {
  foo: () => {
    console.log("foo");
    bar();
  },
};
