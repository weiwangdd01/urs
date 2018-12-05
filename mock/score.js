const Mock = require("mockjs");

let baseData = Mock.mock({
  data: [
  ]
});

module.exports = {
  [`GET /mock/active`](req, res) {
    res.status(200).json(baseData);
  }
};
