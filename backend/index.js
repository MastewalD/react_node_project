const express =require("express")
const app =express()
const validation=require("./middleware/validationMiddleWare")
const userSchema=require("./validation/userValidation")
app.post("/register",validation(userSchema),(req,res)=>{
    res.status(200).send(req.body)
})
app.listen("3001",()=>{
    console.log("The server is running on port 3001")
})