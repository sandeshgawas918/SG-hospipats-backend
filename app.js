require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const session = require('express-session')
const cookieParser = require('cookie-parser')

app.use(cors(
    {
        origin: `${process.env.FRONTEND}`, 
        credentials: true // Allow credentials (cookies) to be sent
    }
))
app.use(cookieParser())
app.use(session({
    secret: 'cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true, // Since both frontend and backend are HTTPS
        sameSite: "None" // Allow cross-site requests
    }
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const createCategoryRouter = require('./routes/createCategoryRoute.js')
const fetchCategoriesRouter = require('./routes/fetchCategoriesRoute.js')
const createDoctorRouter = require('./routes/createDoctorRoute.js')
const fetchDoctorsRouter = require('./routes/fetchDoctorsRoute.js')
const categoryWithDoctorRouter = require('./routes/categoryWithDoctorRoute.js')
const fetchSingleDoctorRouter = require('./routes/fetchSingleDoctorRoute.js')
const createBookingRouter = require('./routes/createBookingRoute.js')
const registerRouter = require('./routes/registerUserRoute.js')
const loginRouter = require('./routes/loginUserRoute.js')
const getBookingRouter = require('./routes/getUserAppointmentsRouter.js')
const getCountRouter = require('./routes/getCountRoute.js')
const getAllBookingsRouter = require('./routes/getBookingsRoute.js')
const deleteBookingRouter = require('./routes/deleteAppointment.js')
const deleteCategoryRouter = require('./routes/deleteCategory.js')
const deleteDoctorRouter = require('./routes/deleteDoctor.js')
const logoutRouter = require('./routes/logoutRouter.js')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', createCategoryRouter)
app.use('/api', fetchCategoriesRouter)
app.use('/api', createDoctorRouter)
app.use('/api', fetchDoctorsRouter)
app.use('/api', categoryWithDoctorRouter)
app.use('/api', fetchSingleDoctorRouter)
app.use('/api', createBookingRouter)
app.use('/api', registerRouter)
app.use('/api', loginRouter)
app.use('/api', getBookingRouter)
app.use('/api', getCountRouter)
app.use('/api', getAllBookingsRouter)
app.use('/api', deleteBookingRouter)
app.use('/api', deleteCategoryRouter)
app.use('/api', deleteDoctorRouter)
app.use('/api', logoutRouter)

app.get('/', (req, res) => {
    res.send('doctor-appointment-booking-application')
})

module.exports = app