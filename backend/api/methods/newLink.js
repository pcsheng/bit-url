// mongo model
const Link = require('../../models/Link');

const newLink = {newLink: (req, res) => {

  const { url } = req.body;

  Link({url: url})
    .save()
    .then(savedLink => {
      res.json(savedLink);
    })
    .catch(error => {
      console.log(error);
      res.json(error);
    })
}}

module.exports = newLink;