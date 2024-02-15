import winston from 'winston'
const logger = winston.createLogger({
    logger:"info",
    format:winston.format.json(),
    transports:[
        new winston.transports.Console({})
    ]
})

export {
    logger
}