import userInfo from "../models/userModel.js";

const userController = {
  index: (req, res) => {
    userInfo.find({}).then((user) => {
      res.json(user);
    });
  }, //make admin specific
  indexById: (req,res) => {
    userInfo.findById(req.params.id).then((user) => {
        res.json(user)
    })
  },
  createUser: (req,res) => {
    userInfo.create(req.body).then((user) => {
        res.json(user)
    })
  },
};

export default userController