const { taqveem } = require('../models/taqveem.schema')

const getAll = async (req, res) => {
	const data = await taqveem.find()

	return res.status(200).json(data)
}

const create = async (req, res) => {
	const { sana, saharlik, iftorlik } = req.body

	const data = {
		sana, saharlik, iftorlik
	}

	await taqveem.create(data)

	return res.status(203).json({
		message: "Created successfully",
		data
	})
}


const update = async (req, res) => {
	const { date } = req.params
	const { sana, saharlik, iftorlik } = req.body

	const data = {
		sana,
		saharlik,
		iftorlik
	}

	const updatedData = await taqveem.findOneAndUpdate(date, data, { new: true })

	if (!updatedData) {
		return res.status(404).json({
			message: "Ma'lumot topilmadi"
		})
	}

	return res.status(200).json({
		message: "Ma'lumot muvaffaqiyatli yangilandi",
		data: updatedData
	})
}


const deleteOne = async (req, res) => {
	const { sana } = req.params

	const result = await taqveem.deleteOne({ sana: sana })

	if (result.deletedCount > 0) {
		return res.status(200).json({
			message: "Deleted successfully",
			sana: sana,
		})
	} else {
		return res.status(404).json({
			message: "Data not found",
		})
	}
}


module.exports = {
	getAll,
	create,
	update,
	deleteOne
}