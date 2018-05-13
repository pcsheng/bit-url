// mongo model
const Link = require('../../models/Link');

const linkStats = {linkStats: (req, res) => {

  const { id } = req.query;

  Link.findById(id)
      .then(link => {
        res.json(link);
      })
      .catch(error => {
        console.log(error);
      });
}}

module.exports = linkStats;
