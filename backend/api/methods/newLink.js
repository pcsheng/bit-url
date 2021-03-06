// mongo model
const Link = require('../../models/Link');

const newLink = {newLink: (req, res) => {

  const { url } = req.body;

  Link({url: url})
    .save((error, savedLink) => {
      if (error && error.code === 11000) {
        Link.findOne({url: url})
          .then(foundLink => {
            res.send(foundLink.id);
          })
          .catch(error2 => {
            console.log(error2);
          })
      } else if (error) {
        console.log(error);
        res.json(error);
      } else {
        res.send(savedLink.id);
      }
    });
    // .then(savedLink => {
    //   res.json(savedLink);
    // })
    // .catch(error => {
    //   console.log(error);
    //   res.json(error);
    // })
}}

module.exports = newLink;