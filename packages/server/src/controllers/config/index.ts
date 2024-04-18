import { Request, Response, NextFunction } from 'express'
import configService from '../../services/config'

// Get api keys
const getModels = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const apiResponse = await configService.getModels()
        return res.json(apiResponse)
    } catch (error) {
        next(error)
    }
}

export default {
    getModels
}
