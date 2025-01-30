const { taqveem } = require('../models/taqveem.schema')

const getAll = async (req, res) => {
	try {
		const data = await taqveem.find()

		return res.status(200).json({
			data
		})
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ error: error.message })
	}
}

const getOne = async (req,res) => {
  try {
    const { sana } = req.params
    const result = await taqveem.findOne({ sana: sana })

    if (!result) {
      return res.status(404).json({ message: "Ma'lumot topilmadi" })
    }
    return res.status(200).json({ data: result })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

const create = async (req, res) => {
  try {
    const { sana, saharlik, iftorlik } = req.body
    const newData = await taqveem.create({ sana, saharlik, iftorlik })
    
    return res.status(201).json({
      message: "Muvaffaqiyatli yaratildi",
      data: newData
    })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message }) 
  }
}


const update = async (req, res) => {
  try {
    const { sana } = req.params
    const { saharlik, iftorlik } = req.body 

    const updatedData = await taqveem.findOneAndUpdate(
      { sana }, 
      { saharlik, iftorlik },
      { new: true }
    )

    if (!updatedData) {
      return res.status(404).json({ message: "Ma'lumot topilmadi" })
    }

    return res.status(200).json({
      message: "Ma'lumot muvaffaqiyatli yangilandi",
      data: updatedData
    })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}


const deleteOne = async (req, res) => {
	try {
		const { sana } = req.params

		const result = await taqveem.deleteOne({ sana: sana })

		if (result.deletedCount > 0) {
			return res.status(200).json({
				message: "Muvaffaqiyatli o'chirildi",
				sana: sana,
			})
		} else {
			return res.status(404).json({
				message: "Ma'lumot topilmadi",
			})
		}
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ error: error.message })
	}
}


module.exports = {
	getAll,
	getOne,
	create,
	update,
	deleteOne
}