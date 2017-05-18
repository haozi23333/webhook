/**
 * Created by haozi on 5/18/2017.
 */
import {EventEmitter} from 'events'
import {Context, Middleware} from 'koa'

export class GitHubHook extends EventEmitter {
    constructor() {
        super()
    }
    public routes(): Middleware {
        return (ctx: Context, next: () => void) => {
            this.a()
        }
    }

    public a() {
        this.routes()
    }
}
