const express = require('express');
const router = express.Router();

const { 
    getLifeInsuranceCovers,
    deleteLifeInsuranceCover ,
    getCarInsuranceCovers,
    deleteCarInsuranceCover,
    getHealthInsuranceCovers,
    deleteHealthInsuranceCover,
    getHomeInsuranceCovers,
    deleteHomeInsuranceCover,
    getIndemnityInsuranceCovers,
    deleteIndemnityInsuranceCover,
    getTravelInsuranceCovers,
    deleteTravelInsuranceCover,
    getAppointmentInsuranceCovers,
    deleteAppointmentInsuranceCover,
    getNewsLetterInsuranceCovers,
    deletenewsLetterInsuranceCover,
    getHelpSupportInsuranceCovers,
    deleteHelpSupportInsuranceCover,
    getRegisteredClient,
    deleteRegisteredClient,

    
} = require('../controllers/adminroutes');

//get requests
router.route("/lifeInsuranceCovers").get(getLifeInsuranceCovers)
router.route("/carInsuranceCovers").get(getCarInsuranceCovers)
router.route("/homeInsuranceCovers").get(getHomeInsuranceCovers)
router.route("/travelInsuranceCovers").get(getTravelInsuranceCovers)
router.route("/indemnityInsuranceCovers").get(getIndemnityInsuranceCovers)
router.route("/healthInsuranceCovers").get(getHealthInsuranceCovers)
router.route("/appointmentInsuranceCovers").get(getAppointmentInsuranceCovers)
router.route("/newsletterInsuranceCovers").get(getNewsLetterInsuranceCovers)
router.route("/helpsupportInsuranceCovers").get(getHelpSupportInsuranceCovers)
router.route("/registeredClients").get(getRegisteredClient)


//delete requests

router.route("/lifeInsuranceCovers/:id").delete(deleteLifeInsuranceCover)
router.route("/carInsuranceCovers/:id").delete(deleteCarInsuranceCover)
router.route("/healthInsuranceCovers/:id").delete(deleteHealthInsuranceCover)
router.route("/homeInsuranceCovers/:id").delete(deleteHomeInsuranceCover)
router.route("/indemnityInsuranceCovers/:id").delete(deleteIndemnityInsuranceCover)
router.route("/travelInsuranceCovers/:id").delete(deleteTravelInsuranceCover)
router.route("/appointmentInsuranceCovers/:id").delete(deleteAppointmentInsuranceCover)
router.route("/newsletterInsuranceCovers/:id").delete(deletenewsLetterInsuranceCover)
router.route("/helpsupportInsuranceCovers/:id").delete(deleteHelpSupportInsuranceCover)
router.route("/registeredClients/:id").delete(deleteRegisteredClient)


module.exports = router;