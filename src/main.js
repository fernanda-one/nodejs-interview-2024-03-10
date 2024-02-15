import { logger } from "./config/logging.js";
import { server } from "./config/server.js";
import 'dotenv/config'

const port = process.env.PORT
server.listen(port,()=>{
    logger.info(`server start, listen port ${port} `)
})