// import {IbaseHookMessage} from ./IbaseHookMessage;
import {IAuthor} from "./IAuthor"
/**
 * Created by haozi on 5/17/2017.
 */

export interface Icommit {
    sha: string,
    message: string,
    author: IAuthor,
    url: string,
    distinct: boolean
}
