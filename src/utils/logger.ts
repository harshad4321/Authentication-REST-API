import  logger  from "pino";
import dayjs from "dayjs";
import  config  from "config";

const level = config.get<string>('logLevel')

const log = logger({
    tranport:{
        target:'pino-pretty'
    },
    level,
    base:{
        pid:false,   //(pid):processID

    },
    timestamp:()=>`,"time":"${dayjs().format()}`,
})
export default log;