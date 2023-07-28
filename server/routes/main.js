const express = require('express');
const router = express.Router();


const { 
    LifeInsurance,
     HealthInsurance, 
     HomeInsurance, 
     CarInsurance, 
     TravelInsurance,
     IndemnityInsurance,
    appointments,
    newsLetter,
    contactUs,
    Login,
    Signup,
    AdminLogin,
    Quotes

 } = require('../controllers/services');


router.route('/lifeinsurance').post(LifeInsurance)
router.route('/healthinsurance').post(HealthInsurance)
router.route('/homeinsurance').post(HomeInsurance)
router.route('/carinsurance').post(CarInsurance)
router.route('/travelinsurance').post(TravelInsurance)
router.route('/indemnityinsurance').post(IndemnityInsurance)
router.route('/appointments').post(appointments)
router.route('/newsletter').post(newsLetter)
router.route('/contactUs').post(contactUs)
router.route('/login').post(Login)
router.route('/signup').post(Signup)
router.route('/adminLogin').post(AdminLogin)
router.route('/quotes').post(Quotes)



module.exports = router;