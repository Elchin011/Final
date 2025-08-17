const express=require("express")
const env=require("dotenv").config()
const ConnectDb =require("./db/ConnectDb")
const AuthRouter=require("./routers/AuthRouter")
const ProductsRouter=require("./routers/ProductRouter")
const PersonRouter=require("./routers/PersonRouter")
const ServiceLevelsRouter=require("./routers/ServiceLevelsRouter")
const BlogRouter=require("./routers/BlogRouter")
const QuestionsRouter=require("./routers/QuestionsRouter")






const bodyParser=require("body-parser")
const cors=require("cors")
const app=express()

app.use(bodyParser.json())
app.use(cors({
    origin:"*"
}))
const PORT=3001
ConnectDb()

app.use("/api/auth",AuthRouter)
app.use("/api",ProductsRouter)
app.use("/api/persons", PersonRouter)
app.use("/api/service-levels", ServiceLevelsRouter); 
app.use("/api/blogs", BlogRouter)
app.use("/api/questions", QuestionsRouter);


app.listen(PORT,()=>{
    console.log(`Server is Runing ${PORT}`)
})

