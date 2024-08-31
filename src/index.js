const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/",(req,res)=>{
	res.send("main route");
}
);

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.clear();
	console.log(`
 ____    _    _   _ _  __     _    ____ ___    ____ _____ _____ _____ _____ 
| __ )  / \\  | \\ | | |/ /    / \\  |  _ \\_ _|  / ___| ____|  ___| ____|_   _|
|  _ \\ / _ \\ |  \\| | ' /    / _ \\ | |_) | |  | |   |  _| | |_  |  _|   | |  
| |_) / ___ \\| |\\  | . \\   / ___ \\|  __/| |  | |___| |___|  _| | |___  | |  
|____/_/   \\_\\_| \\_|_|\\_\\ /_/   \\_\\_|  |___|  \\____|_____|_|   |_____| |_|  `)
	console.log("Server running in the port: " + PORT)
});

app.use('/user', require('./interfaceAdapters/web/controllers/routes/userRouter'));
app.use('/transaction', require('./interfaceAdapters/web/controllers/routes/transactionRouter'));
