const User = require("../models/user.model");

module.exports.findAllUsers = (req, res) => {
  User.find()
    .then(allDaUsers => res.json({ users: allDaUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleUser = (req, res) => {
  console.log("gfhfgS")
  User.findOne({ _id: req.params.id }).populate('photo')
    .then(oneSingleUser => res.json({ user: oneSingleUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// module.exports.createNewUser = (req, res) => {
//   User.create(req.body)
//     .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

module.exports.updateExistingUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
//login and reg
module.exports.loginUser = (req, res) => {
  const { email, password } = req.body
  User.findOnelog({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfull", user: user })
      } else {
        res.send({ message: "Password didn't match" })
      }
    } else {
      res.send({ message: "User not registered" })
    }
  })
}
module.exports.regUser = (req, res) => {
  const { name, email, password ,address } = req.body
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd" })
    } else {
      const user = new User({
        name,
        email,
        password,
        address
      })
      user.save(err => {
        if (err) {
          res.send(err)
        } else {
          res.send({ message: "Successfully Registered, Please login now." })
        }
      })
    }
  })

}

