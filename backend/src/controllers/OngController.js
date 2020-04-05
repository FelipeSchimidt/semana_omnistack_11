const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const result = await connection('ongs').select('*');

    return res.json(result);
  },
  async store(req, res) {
    const { name, whatsapp, email, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      whatsapp,
      email,
      city,
      uf
    });

    return res.json({ id });
  }
};
