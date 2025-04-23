import pool from '../database/index.js'

const tipController = {
    getTipsByUser: async(req, res) => {
        try {
            const { idUser } = req.params

            const [rows,fields] = await pool.query(`
                SELECT *
                FROM tip
                WHERE user = ?  
            `,
            [idUser])

            res.status(200)
            res.json({
                data:rows
            })
            
        } catch(error) {
            res.status(500)
            res.json({
                error: 'ERROR'
            })
        }
    }
}

export default tipController