import { logger } from "./config/logging.js";
import { server } from "./config/server.js";
import 'dotenv/config'
import worker from "./event/worker.js";

const port = process.env.PORT
server.listen(port,()=>{
    logger.info(`server start, listen port ${port} `)
})
worker()