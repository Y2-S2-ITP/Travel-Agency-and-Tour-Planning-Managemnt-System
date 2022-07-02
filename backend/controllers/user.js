const { errorHandler } = require('../helpers/dbErrorHandler');
const user = require('../models/user');
const User = require('../models/user');
const express = require('express');
const router = express.Router();

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found"
            });
        }
        req.profile = user;
        next();
    });
};

exports.read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};

exports.update = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.profile._id },
        { $set: req.body },
        { new: true },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: "You are not authorized to perform this action"
                });
            }
            user.hashed_password = undefined;
            user.salt = undefined;
            res.json(user);
        }
    );
};


/*
exports.remove = (req, res) => {
    let user = req.user;
    user.findByIdAndRemove((err, deleteUser) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json({
                deleteUser,
                "message":"Product deleted succefully"
            });
        });
};
*/


exports.remove = (req, res) =>{
    User
    .findByIdAndRemove(req.params.userId)
    .exec()
    .then(err => {
        if(err) { 
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            deleteUser,
            "message":"Product deleted succefully"
            
        })
    }); 

};


/*exports.remove = (req, res, id) => {
    User.findByIdAndRemove(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found"
            });
        }
        res.json({
            deleteUser,
            "message":"Product deleted succefully"
        })
      
    });
};
*/
/*
router.delete('/user/:userId',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        })
        return res.json({
            message:"Deleted Succesfull",deletedPost
        });
    });
});
*/

/*exports.remove = (req, res) => {
    let user = req.user;
    user.remove((err,user)=>{
  
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
           
            res.json({
                user,
                "message":"Product deleted succefully"
            });
        }
    );
};*/


/*exports.remove = (req, res, id) => {
    User.remove(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found"
            });
        }
        res.json({
            user,
            message:"User deleted successfully"
        })
        
    });
};
*/


exports.list = (req,res)=>{
    let order = req.query.order ? req.query.order : "asc"
    
    user.find()
    .populate("name")
    .sort([[order]])
    .exec((err,users)=>{
        if(err){
            return res.status(400).json({
                error: "Product not found"
            })
        }
        res.send(users);
    });

};



    

