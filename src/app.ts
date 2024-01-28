import express from "express"

const app = express()

app.use(express.json({ limit: "16kb"}));

app.use(express.urlencoded({ extended: true, limit: "16kb"}))

app.use(express.static("public"))

app.get('/', (req,res) => {
    res.send("ok")
})
//Route registration

import userRoute from "./routes/user.route.js"

app.use("/api/v1/users", userRoute)

export default app;