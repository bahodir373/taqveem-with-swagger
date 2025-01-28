const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const taqveemSchema = new Schema({
	sana: String,
	saharlik: String,
	iftorlik: String,
}, {
	versionKey: false
})

const taqveem = model('Calendar', taqveemSchema)
module.exports = {
	taqveem
}