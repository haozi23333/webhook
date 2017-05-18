/**
 * Created by haozi on 2017/05/17.
 */

import {Icommit} from "./Icommit";
import {IRepository} from "./IRepository";

export interface IPush {
    ref: string,
    head: string,
    before: string,
    size: number,
    distinct_size: number,
    commits: Icommit[],
    repository: IRepository
}
