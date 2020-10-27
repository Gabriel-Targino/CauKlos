const funcoes = require('../models');
const Create = async (req,res) => {
  const media = await funcoes.create(req.body);
  res.json(media);
}
const View = async(req,res) => {
  const media = await funcoes.view();
  res.json(media);
}
module.exports = {Create,View};
