// mongo model
const Link = require('../../models/Link');

const fetchLink = {fetchLink: (req, res) => {

  const { id } = req.body;

  Link.findByIdAndUpdate(id, {$inc: {hits: 1}})
      .then(link => {
        res.json(link);
      })
      .catch(error => {
        console.log(error);
      });
}}

module.exports = fetchLink;
