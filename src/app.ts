import express from "express"
import routes from './index'

const app = express();

app.use(express.json())
app.use(routes)

app.listen(3000,() =>{
    console.log('running on 3000')
})