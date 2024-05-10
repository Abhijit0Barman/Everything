const express=require("express")
const cors=require("cors")
const {connection}=require("./db")
const {userRouter}=require("./routes/user.routes")
const {auth}=require("./middleware/auth.middleware")
const {postRouter}=require("./routes/post.routes")
require("dotenv").config()

const app =express()

app.use(express.json())
app.use(cors())

app.use("/users",userRouter)
app.use("/posts",auth,postRouter)

app.listen(process.env.PORT, async()=>{
  try {
    await connection
    console.log(`connect to db and server is running`);
  } catch (error) {
    console.log(error.message);
  }
})