const express = require('express');
const router = express.Router();
router.get("/",(req,res)=> res.send("users page"));

const {createAccount,authenticateUser,logout,
    getUserProfile,updateUserProfile,
    addAddress,updateAddress,deleteAddress,
    addPayments,updatePayments,deletePayments}  = require('../controllers/users');

// login and logout 
router.post('/login',authenticateUser);
router.get('/logout',logout);

// register 
router.post('/register', createAccount);

// get profile details 
router.get('/user/:id',getUserProfile); 

//  add profile details 
router.put('/profile/user/:id',updateUserProfile);

// add address 
router.post('/profile/user/:id/address',addAddress);

// edit address 
router.put('/profile/user/:id/address/:addressId',updateAddress);

// delete address
router.delete('/profile/user/:id/address/:addressId',deleteAddress);

// add payment info 
router.post('/profile/user/:id/payments',addPayments);

// edit payment info 
router.put('/profile/user/:id/payments/:paymentId',updatePayments);

 // delete payment info 
router.delete('/profile/user/:id/payments/:paymentId',deletePayments);

module.exports = router;
