/**
 * Created by haozi on 5/17/2017.
 */

import * as Koa from 'koa'



const app = new Koa

app.use(async (ctx, next) => {
    ctx.body = 2333
    await next()
})



app.listen(8080, () => {
    console.log('server listen to 8080')
})