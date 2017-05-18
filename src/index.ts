/**
 * Created by haozi on 5/17/2017.
 */

import * as Koa from 'koa'
import {Mongo} from './db'

const app = new Koa()

app.use(async (ctx, next) => {
    ctx.body = 2333
    await next()
})

const m = new Mongo();

(async () => {
    console.log(233)
})().then(console.log).catch(console.log)

app.listen(808, () => {
    console.log('server listen to 808')
})
