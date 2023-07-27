const { StatusCodes } = require('http-status-codes')

const LifeInsuranceModel = require('../models/lifeInsurance');
const HealthInsuranceModel = require('../models/healthInsurance');
const HomeInsuranceModel = require('../models/homeInsurance');
const CarInsuranceModel = require('../models/carInsurance');
const TravelInsuranceModel = require('../models/travelInsurance');
const IndemnityInsuranceModel = require('../models/indemnityInsurance');
const AppointmentsModel = require('../models/appointments');
const NewsLetterModel = require('../models/newsletter');
const ContactUsModel = require('../models/contactUs');
const RegisteredClientModel = require('../models/UserAuthentication');

const getLifeInsuranceCovers = async (req, res)=>{

    try {
        const lifeInsuranceCovers = await LifeInsuranceModel.find({});

        //console.log(lifeInsuranceCovers)

        res.status(StatusCodes.OK).json({ lifeInsuranceCovers});
    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
    }
    
}

const getCarInsuranceCovers = async (req, res)=>{

    try {
        const carInsuranceCovers = await CarInsuranceModel.find({});

        //console.log(carInsuranceCovers)

        res.status(StatusCodes.OK).json({ carInsuranceCovers});
    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
    }
    
}


const getHealthInsuranceCovers = async (req, res)=>{

    try {
        const healthInsuranceCovers = await HealthInsuranceModel.find({});

        

        res.status(StatusCodes.OK).json({ healthInsuranceCovers});
    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
    }
    
}

const getHomeInsuranceCovers = async (req, res)=>{

    try {
        const homeInsuranceCovers = await HomeInsuranceModel.find({});

        //console.log(carInsuranceCovers)

        res.status(StatusCodes.OK).json({ homeInsuranceCovers});
    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
    }
    
}

const getIndemnityInsuranceCovers = async (req, res)=>{

    try {
        const indemnityInsuranceCovers = await IndemnityInsuranceModel.find({});

        //console.log(carInsuranceCovers)

        res.status(StatusCodes.OK).json({ indemnityInsuranceCovers});
    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
    }
    
}


const getTravelInsuranceCovers = async (req, res)=>{

    try {
        const travelInsuranceCovers = await TravelInsuranceModel.find({});

        //console.log(carInsuranceCovers)

        res.status(StatusCodes.OK).json({ travelInsuranceCovers});
    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
    }
    
}


const getAppointmentInsuranceCovers = async (req, res)=>{

    try {
        const appointmentInsuranceCovers = await AppointmentsModel.find({});

        //console.log(carInsuranceCovers)

        res.status(StatusCodes.OK).json({ appointmentInsuranceCovers});
    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
    }
    
}

const getNewsLetterInsuranceCovers = async (req, res)=>{

    try {
        const newsletterInsuranceCovers = await NewsLetterModel.find({});

        //console.log(carInsuranceCovers)

        res.status(StatusCodes.OK).json({ newsletterInsuranceCovers});
    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
    }
    
}

const getHelpSupportInsuranceCovers = async (req, res)=>{

    try {
        const helpsupportInsuranceCovers = await ContactUsModel.find({});

        //console.log(carInsuranceCovers)

        res.status(StatusCodes.OK).json({ helpsupportInsuranceCovers});
    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
    }
    
}

const getRegisteredClient = async (req, res)=>{

    try {
        const registeredclients = await RegisteredClientModel.find({});

        //console.log(carInsuranceCovers)

        res.status(StatusCodes.OK).json({ registeredclients});
    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
    }
    
}

const deleteLifeInsuranceCover = async (req, res)=>{

    //const{params:{id : JobId}} = req;
     const { params: { id: jobId }} = req

   // console.log(jobId)

  try {
    const deletedcover = await LifeInsuranceModel.findByIdAndRemove({ _id: jobId });

    if(!deletedcover){
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "No cover found with this ID" })
    } 

    res.status(StatusCodes.OK).json({msg: "Cover deleted successfully"});

   } catch (error) {
        console.log(error)
   }
   

}

const deleteCarInsuranceCover = async (req, res)=>{

    //const{params:{id : JobId}} = req;
     const { params: { id: jobId }} = req

    //console.log(jobId)

  try {
    const deletedcover = await CarInsuranceModel.findByIdAndRemove({ _id: jobId });

    if(!deletedcover){
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "No cover found with this ID" })
    } 

    res.status(StatusCodes.OK).json({msg: "Cover deleted successfully"});

   } catch (error) {
        console.log(error)
   }
   

}



const deleteHealthInsuranceCover = async (req, res)=>{

    //const{params:{id : JobId}} = req;
     const { params: { id: jobId }} = req

    //console.log(jobId)

  try {
    const deletedcover = await HealthInsuranceModel.findByIdAndRemove({ _id: jobId });

    if(!deletedcover){
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "No cover found with this ID" })
    } 

    res.status(StatusCodes.OK).json({msg: "Cover deleted successfully"});

   } catch (error) {
        console.log(error)
   }
   

}


const deleteHomeInsuranceCover = async (req, res)=>{

    //const{params:{id : JobId}} = req;
     const { params: { id: jobId }} = req

    //console.log(jobId)

  try {
    const deletedcover = await HomeInsuranceModel.findByIdAndRemove({ _id: jobId });

    if(!deletedcover){
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "No cover found with this ID" })
    } 

    res.status(StatusCodes.OK).json({msg: "Cover deleted successfully"});

   } catch (error) {
        console.log(error)
   }
   

}

const deleteIndemnityInsuranceCover = async (req, res)=>{

    //const{params:{id : JobId}} = req;
     const { params: { id: jobId }} = req

    //console.log(jobId)

  try {
    const deletedcover = await IndemnityInsuranceModel.findByIdAndRemove({ _id: jobId });

    if(!deletedcover){
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "No cover found with this ID" })
    } 

    res.status(StatusCodes.OK).json({msg: "Cover deleted successfully"});

   } catch (error) {
        console.log(error)
   }
   

}

const deleteTravelInsuranceCover = async (req, res)=>{

    //const{params:{id : JobId}} = req;
     const { params: { id: jobId }} = req

    //console.log(jobId)

  try {
    const deletedcover = await TravelInsuranceModel.findByIdAndRemove({ _id: jobId });

    if(!deletedcover){
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "No cover found with this ID" })
    } 

    res.status(StatusCodes.OK).json({msg: "Cover deleted successfully"});

   } catch (error) {
        console.log(error)
   }
   

}

const deleteAppointmentInsuranceCover = async (req, res)=>{

    //const{params:{id : JobId}} = req;
     const { params: { id: jobId }} = req

    //console.log(jobId)

  try {
    const deletedcover = await AppointmentsModel.findByIdAndRemove({ _id: jobId });

    if(!deletedcover){
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "No cover found with this ID" })
    } 

    res.status(StatusCodes.OK).json({msg: "Cover deleted successfully"});

   } catch (error) {
        console.log(error)
   }
   

}

const deletenewsLetterInsuranceCover = async (req, res)=>{

    //const{params:{id : JobId}} = req;
     const { params: { id: jobId }} = req

    //console.log(jobId)

  try {
    const deletedcover = await NewsLetterModel.findByIdAndRemove({ _id: jobId });

    if(!deletedcover){
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "No cover found with this ID" })
    } 

    res.status(StatusCodes.OK).json({msg: "Cover deleted successfully"});

   } catch (error) {
        console.log(error)
   }
   

}

const deleteHelpSupportInsuranceCover = async (req, res)=>{

    //const{params:{id : JobId}} = req;
     const { params: { id: jobId }} = req

    //console.log(jobId)

  try {
    const deletedcover = await ContactUsModel.findByIdAndRemove({ _id: jobId });

    if(!deletedcover){
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "No cover found with this ID" })
    } 

    res.status(StatusCodes.OK).json({msg: "Cover deleted successfully"});

   } catch (error) {
        console.log(error)
   }
   

}


const deleteRegisteredClient = async (req, res)=>{

    //const{params:{id : JobId}} = req;
     const { params: { id: jobId }} = req

    //console.log(jobId)

  try {
    const deletedcover = await RegisteredClientModel.findByIdAndRemove({ _id: jobId });

    if(!deletedcover){
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "No cover found with this ID" })
    } 

    res.status(StatusCodes.OK).json({msg: "Cover deleted successfully"});

   } catch (error) {
        console.log(error)
   }
   

}

module.exports = {
    getLifeInsuranceCovers,
    deleteLifeInsuranceCover,
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
    deleteRegisteredClient
    
}