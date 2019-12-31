const Kitten = require("../Config/kittenSchema");

exports.createKitten = (req, res) => {
  let fluffy = new Kitten({
    name: req.body.name
  });
  fluffy.speak();
  fluffy.save((err, fluffy) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
    fluffy.speak();
    res.send(`Kitten named ${fluffy.name} is adopted on the road`);
  });
};

exports.getAllKitten = (req, res) => {
  Kitten.find((err, kittens) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
    res.send(kittens);
  });
};
