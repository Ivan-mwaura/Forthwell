const multer = require('multer');
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
const User = require('../models/UserAuthentication');
const Admin = require('../models/adminLogin');


const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb){
        cb(null, file.originalname);
    }
})


const upload = multer({storage: storage});

const AdminLogin = async (req, res) =>{
    try {
        upload.any()(req, res, async function(err){

            if(err){
                console.log('Error found')
            }   

            const {email, password} = req.body;

            console.log({email, password})

            if(!email || !password){
                return res.status(StatusCodes.BAD_REQUEST).json({msg:'Please provide an email and password'})
            }

            const user = await Admin.findOne({email})

            if(!user){
                return res.status(StatusCodes.BAD_REQUEST).json({msg:'Invalid email'})
            }

            const isPasswordMatch = await user.comparePassword(password)

            if(!isPasswordMatch){
                return res.status(StatusCodes.BAD_REQUEST).json({msg:'Invalid password'})
            }

            const token = user.createJWT()

            res.status(StatusCodes.OK).json({user:{email:user.email}, token:{token}, msg:'Login successful'})

         
        })
    } catch (error) {
        console.log(error)
    }
}


const Login = async (req, res) =>{

    try {
        upload.any()(req, res, async function(err){

            if(err){
                console.log('Error found')
            }   

            const {email, password} = req.body;

            console.log({email, password})

            if(!email || !password){
                return res.status(StatusCodes.BAD_REQUEST).json({msg:'Please provide an email and password'})
            }

            const user = await User.findOne({email})

            if(!user){
                return res.status(StatusCodes.BAD_REQUEST).json({msg:'Invalid email'})
            }

            const isPasswordMatch = await user.comparePassword(password)

            if(!isPasswordMatch){
                return res.status(StatusCodes.BAD_REQUEST).json({msg:'Invalid password'})
            }

            const token = user.createJWT()

            res.status(StatusCodes.OK).json({user:{email:user.email}, token:{token}, msg:'Login successful'})

         
        })
    } catch (error) {
        console.log(error)
    }
}


const Signup = async (req, res) =>{
    try {
        upload.any()(req, res, async function(err){
            if(err){
                console.log('Error found')
            }
           
            const body = req.body

            console.log(body)

           try {
                
                const user = await User.create({...body})

                const token = user.createJWT()

                res.status(StatusCodes.CREATED).json({user:{email:user.email}, token:{token}, msg:'Account created successfully'});
               

           } catch (err) {
            let customError = {
                //set default
            
                statusCode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
                msg:err.message || 'Something went wrong, try again later'
              }
            
            
              if(err.name === 'validationError'){
                /*customError.msg = Object.values(err.errors).map((item)=> item.message).join(',')*/
                customError.msg = `Short Password, please input a stronger password`
                customError.statusCode = 400
              }
              if (err.name === 'CastError'){
                customError.msg = `No item with id : ${err.value}`
                customError.statusCode = 404
              }
              if(err.code && err.code === 11000){
                customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value`
            
                customError.statusCode = 400
              }
           
              //return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
              
              return res.status(customError.statusCode).json({ msg: customError.msg })
           }
        })
    } catch (error) {
        
    }
}

const LifeInsurance = async (req, res) =>{

    try {
        upload.any()(req, res, async function(err){

            if(err){
                console.log('Error found')
            }

           
            const body = req.body

            const newLifeInsurance = new LifeInsuranceModel(body)

            try {
                
                const savedForm = await newLifeInsurance.save();
                res.status(201).json({data:{savedForm}, msg:'submitted'});

            } catch (err) {

                let customError = {
                
                    statusCode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
                    msg:err.message || 'Something went wrong, try again later'
                  }

                  if(err.code && err.code === 11000){
                    //customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value`
                    customError.msg = `Duplicate email, please choose another Email`               
                    customError.statusCode = 400
                  }
                  

                  return res.status(customError.statusCode).json({ msg: customError.msg })

            }
        
 
        })
    } catch (error) {

        console.log(error)
 
    }

}

const HealthInsurance = async (req, res) =>{
    try {
        upload.any()(req, res, async function(err){

            if(err){
                console.log('Error found')
            }

           
            const body = req.body

            const newHealthInsurance = new HealthInsuranceModel(body)

            try {
                
                const savedForm = await newHealthInsurance.save();
                res.status(201).json({data:{savedForm}, msg:'submitted'});

            } catch (err) {

                let customError = {
                
                    statusCode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
                    msg:err.message || 'Something went wrong, try again later'
                  }

                  if(err.code && err.code === 11000){
                    customError.msg = `Duplicate email, please choose another Email`
                
                    customError.statusCode = 400
                  }

                  return res.status(customError.statusCode).json({ msg: customError.msg })

            }
        
 
        })
    } catch (error) {

        console.log(error)
 
    }
}

const HomeInsurance = async (req, res) =>{
    try {
        upload.any()(req, res, async function(err){

            if(err){
                console.log('Error found')
            }

           
            const body = req.body

            const newHomeInsurance = new HomeInsuranceModel(body)

            try {
                
                const savedForm = await newHomeInsurance.save();
                res.status(201).json({data:{savedForm}, msg:'submitted'});

            } catch (err) {

                let customError = {
                
                    statusCode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
                    msg:err.message || 'Something went wrong, try again later'
                  }

                  if(err.code && err.code === 11000){
                    customError.msg = `Duplicate email, please choose another Email`
                
                    customError.statusCode = 400
                  }

                  return res.status(customError.statusCode).json({ msg: customError.msg })

            }
        
 
        })
    } catch (error) {

        console.log(error)
 
    }
}

const CarInsurance = async (req, res) =>{
    
    try {
        upload.any()(req, res, async function(err){

            if(err){
                console.log('Error found')
            }

           
            const body = req.body

            const newCarInsurance = new CarInsuranceModel(body)

            try {
                
                const savedForm = await newCarInsurance.save();
                res.status(201).json({data:{savedForm}, msg:'submitted'});

            } catch (err) {

                let customError = {
                
                    statusCode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
                    msg:err.message || 'Something went wrong, try again later'
                  }

                  if(err.code && err.code === 11000){
                    customError.msg = `Duplicate email, please choose another Email`
                
                    customError.statusCode = 400
                  }

                  return res.status(customError.statusCode).json({ msg: customError.msg })

            }
        
 
        })
    } catch (error) {

        console.log(error)
 
    }
}

const TravelInsurance = async (req, res) =>{
    try {
        upload.any()(req, res, async function(err){

            if(err){
                console.log('Error found')
            }

           
            const body = req.body

            const newTravelInsurance = new TravelInsuranceModel(body)

            try {
                
                const savedForm = await newTravelInsurance.save();
                res.status(201).json({data:{savedForm}, msg:'submitted'});

            } catch (err) {

                let customError = {
                
                    statusCode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
                    msg:err.message || 'Something went wrong, try again later'
                  }

                  if(err.code && err.code === 11000){
                    customError.msg = `Duplicate email, please choose another Email`
                
                    customError.statusCode = 400
                  }

                  return res.status(customError.statusCode).json({ msg: customError.msg })

            }
        
 
        })
    } catch (error) {

        console.log(error)
 
    }
}

const IndemnityInsurance = async (req, res) =>{
    try {
        upload.any()(req, res, async function(err){

            if(err){
                console.log('Error found')
            }

           
            const body = req.body

            const newIndemnityInsurance = new IndemnityInsuranceModel(body)

            try {
                
                const savedForm = await newIndemnityInsurance.save();
                res.status(201).json({data:{savedForm}, msg:'submitted'});

            } catch (err) {

                let customError = {
                
                    statusCode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
                    msg:err.message || 'Something went wrong, try again later'
                  }

                  if(err.code && err.code === 11000){
                    customError.msg = `Duplicate email, please choose another Email`
                
                    customError.statusCode = 400
                  }

                  return res.status(customError.statusCode).json({ msg: customError.msg })

            }
        
 
        })
    } catch (error) {

        console.log(error)
 
    }
}

const appointments = async (req, res) =>{

    try {
        upload.any()(req, res, async function(err){

            if(err){
                console.log('Error found')
            }

           
            const body = req.body

            const newAppointments = new AppointmentsModel(body)

            try {
                
                const savedForm = await newAppointments.save();
                res.status(201).json({data:{savedForm}, msg:'submitted'});

            } catch (err) {

                let customError = {
                
                    statusCode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
                    msg:err.message || 'Something went wrong, try again later'
                  }

                  if(err.code && err.code === 11000){
                    customError.msg = `Duplicate email, please choose another Email`
                
                    customError.statusCode = 400
                  }

                  return res.status(customError.statusCode).json({ msg: customError.msg })

            }
        
 
        })
    } catch (error) {

        console.log(error)
 
    }

}

const newsLetter = async (req, res) =>{
    try {
        upload.any()(req, res, async function(err){

            if(err){
                console.log('Error found')
            }

           
            const body = req.body

            console.log(body)

            const newNewsLetter = new NewsLetterModel(body)

            try {
                
                const savedForm = await newNewsLetter.save();
                res.status(201).json({data:{savedForm}, msg:'submitted'});

            } catch (err) {

                let customError = {
                
                    statusCode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
                    msg:err.message || 'Something went wrong, try again later'
                  }

                  if(err.code && err.code === 11000){
                    customError.msg = `Duplicate email, please choose another Email`
                
                    customError.statusCode = 400
                  }
                  else{
                    customError.msg = `Something went wrong, try again later`
                
                    customError.statusCode = 400
               
                  }
                 
                  return res.status(customError.statusCode).json({ msg: customError.msg })

            }
        
 
        })
    } catch (error) {

        console.log(error)
 
    }
}

const contactUs = async (req, res) =>{
    upload.any()(req, res, async function(err){
        const body = req.body

        if(err){
            console.log('Error found')
        }

        const newContactUs = new ContactUsModel(body)

        try {
            const savedForm = await newContactUs.save();
            res.status(StatusCodes.CREATED).json({data:{savedForm}, msg:'submitted'})
        } catch (err) {

            let customError = {
                
                statusCode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
                msg:err.message || 'Something went wrong, try again later'
              }

              if(err.code && err.code === 11000){
                customError.msg = `Duplicate email, please choose another Email`
            
                customError.statusCode = 400
              }
              else{
                customError.msg = `Something went wrong, try again later`
            
                customError.statusCode = 400
           
              }
             
              return res.status(customError.statusCode).json({ msg: customError.msg })
        }
    })
}

module.exports = {
    LifeInsurance,
    HealthInsurance,
    HomeInsurance,
    CarInsurance,
    TravelInsurance,
    IndemnityInsurance,
    appointments,
    newsLetter,
    contactUs,
    Signup,
    Login,
    AdminLogin
}