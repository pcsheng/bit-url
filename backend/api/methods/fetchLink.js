// mongo model
const Link = require('../../models/Link');

const fetchLink = {fetchLink: (req, res) => {

  const { id } = req.body;
  const ip = req.headers['x-forwarded-for'],
        device = req.headers['user-agent'];

  Link.findByIdAndUpdate(id, {$inc: {hits: 1}, $push: {users: {ip: ip, device: device, timestamp: Date.now()}}}, {new: true})
      .then(link => {
        res.json(link);
      })
      .catch(error => {
        console.log(error);
      });
}}

module.exports = fetchLink;
