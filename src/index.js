const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
	res.send("main route");
}
);

const PORT = process.env.PORT;
app.listen(PORT, () => { console.log("Server running in the port: " + PORT)});

app.use('/user', require('./interfaceAdapters/web/controllers/routes/userRouter'));
app.use('/transaction', require('./interfaceAdapters/web/controllers/routes/transactionRouter'));
