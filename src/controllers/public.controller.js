const healthController = (req, res) => {
  res.status(200).send("OK");
};

const pingController = (req, res) => {
  res.status(200).send("pang");
};

module.exports = {
  healthController,
  pingController,
};
