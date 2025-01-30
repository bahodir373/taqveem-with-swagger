const {Router} = require('express')
const { getAll, create, deleteOne, update, getOne } = require('../controllers/taqveem.controller')
const { taqveem } = require('../models/taqveem.schema')

const taqveemRouter = Router()

/**
 * @swagger
 * tags:
 *   name: Taqveem
 *   description: Ramazon taqvimi API
 */

/**
 * @swagger
 * /taqveem:
 *   get:
 *     summary: Barcha taqvim ma'lumotlarini olish
 *     tags: [Taqveem]
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               - sana: "2023-03-23"
 *                 saharlik: "05:30"
 *                 iftorlik: "18:45"
 */
taqveemRouter.get('/taqveem', getAll);


/**
 * @swagger
 * /taqveem/{sana}:
 *   get:
 *     summary: Bitta ma'lumotni olish (sanaga ko'ra)
 *     tags: [Taqveem]
 *     parameters:
 *       - in: path
 *         name: sana
 *         required: true
 *         schema:
 *           type: string
 *         example: "2023-03-23"
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               sana: "2023-03-23"
 *               saharlik: "05:30"
 *               iftorlik: "18:45"
 *       404:
 *         description: Topilmadi
 *         content:
 *           application/json:
 *             example:
 *               message: "Ma'lumot topilmadi"
 */
taqveemRouter.get('/taqveem/:sana', getOne)

/**
 * @swagger
 * /taqveem:
 *   post:
 *     summary: Yangi taqvim yaratish
 *     tags: [Taqveem]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sana:
 *                 type: string
 *                 format: date
 *                 example: "2023-03-23"
 *               saharlik:
 *                 type: string
 *                 example: "05:29"
 *               iftorlik:
 *                 type: string
 *                 example: "18:46"
 *     responses:
 *       203:
 *         description: Created
 *         content:
 *           application/json:
 *             example:
 *               message: "Created successfully"
 *               data:
 *                 sana: "2023-03-23"
 *                 saharlik: "05:29"
 *                 iftorlik: "18:46"
 */
taqveemRouter.post('/taqveem', create);

/**
 * @swagger
 * /taqveem/{sana}:
 *   put:
 *     summary: Mavjud taqvimni yangilash
 *     tags: [Taqveem]
 *     parameters:
 *       - in: path
 *         name: sana
 *         required: true
 *         schema:
 *           type: string
 *         example: "2023-03-23"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               saharlik:
 *                 type: string
 *                 example: "05:28"
 *               iftorlik:
 *                 type: string
 *                 example: "18:47"
 *     responses:
 *       200:
 *         description: Updated
 *         content:
 *           application/json:
 *             example:
 *               message: "Ma'lumot muvaffaqiyatli yangilandi"
 *               data:
 *                 sana: "2023-03-23"
 *                 saharlik: "05:28"
 *                 iftorlik: "18:47"
 *       404:
 *         description: Not Found
 */
taqveemRouter.put('/taqveem/:sana', update);

/**
 * @swagger
 * /taqveem/{sana}:
 *   delete:
 *     summary: Taqvimni o'chirish
 *     tags: [Taqveem]
 *     parameters:
 *       - in: path
 *         name: sana
 *         required: true
 *         schema:
 *           type: string
 *         example: "2023-03-23"
 *     responses:
 *       200:
 *         description: Deleted
 *         content:
 *           application/json:
 *             example:
 *               message: "Deleted successfully"
 *               sana: "2023-03-23"
 *       404:
 *         description: Not Found
 */
taqveemRouter.delete('/taqveem/:sana', deleteOne);

module.exports = {
	taqveemRouter
}