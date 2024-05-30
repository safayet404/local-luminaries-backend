const express = require('express');
const connectDB = require('./config/connectDB');
const mongoose = require("mongoose")
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000;


const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const cors = require('cors')

connectDB()
app.use(cors())

const corsConfig = {
    origin : "*",
    credential : true,
    methods : ["GET","POST","PUT","DELETE"]
}
app.use(cors(corsConfig))
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
const userRouter = require('./routes/userRoutes')
const activityRouter = require('./routes/activityRoutes')
const popularRouter = require('./routes/popularRoutes')
const blogRouter = require('./routes/blogRoutes')
const contactRouter = require('./routes/contactRoutes')
const orderRouter = require('./routes/orderRoutes')
const teamRouter = require('./routes/teamRoutes')
const tourRouter = require('./routes/tourRoutes')
const videoRouter = require('./routes/videoRoutes')
const customizeRouter = require('./routes/customizeRoutes')
const destinationRouter = require("./routes/destinationRoutes")
app.use('/api/user',userRouter)
app.use('/api/activity',activityRouter)
app.use('/api/popular',popularRouter)
app.use('/api/blog',blogRouter)
app.use('/api/team',teamRouter)
app.use('/api/order',orderRouter)
app.use('/api/tour',tourRouter)
app.use('/api/video',videoRouter)
app.use('/api/contact',contactRouter)
app.use('/api/customize',customizeRouter)
app.use('/api/destination',destinationRouter)


app.use(cookieParser())
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, ()=>{{
    console.log(`Server is running at PORT `)
}})