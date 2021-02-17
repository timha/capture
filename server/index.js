import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

const URL =
	'mongodb+srv://admin:dune47kafka@aws-oregon.ldmhj.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
	.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
	)
	.catch(error => console.log(error.message));

mongoose.set('useFindAndModify', false);
