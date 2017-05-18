/**
 * Created by haozi on 5/18/2017.
 */
import {EventEmitter} from 'events'
import {Context, Middleware} from 'koa'
export class GitHub extends EventEmitter {
    private path: string
    private secret: string
    constructor(path: string, secret: string) {
        super()
        this.path = path
        this.secret = secret
    }

    public async callback(ctx: Context, next: () => void): Promise<void> {
        console.log(2333)
    }
}
