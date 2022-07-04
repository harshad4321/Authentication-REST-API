import  logger  from "pino";
import dayjs from "dayjs";
import  config  from "config";

const leve = config.get<string>('logLevel')

const log = logger({
    tranport:{
        target:'pino-pretty'
    },
    leve,
    base:{
        pid:false,   //(pid):processID

    },
    timestamp:()=>`,"time":"${dayjs().format()}`
})