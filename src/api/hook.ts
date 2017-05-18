/**
 * Created by haozi on 2017/05/17.
 */

import {InsertOneWriteOpResult} from "mongodb"
import {Mongo} from "../db"
import {IPush} from "../models/interface/IPush"

export class Hook {
    private db: Mongo

    constructor() {
        this.db = new Mongo()

    }

    public async insertPush(pushData: string): Promise<InsertOneWriteOpResult> {
        try {
            const r = await this.db.getCollection('pushs').insertOne(pushData)
            return r
        }catch (e) {
            throw e
        }
    }

    /**
     * 获取
     * @param fullName
     * @param ref
     * @returns {Promise<void>}
     */
    public async selectPush(fullName: string, ref: string = "refs/heads/master"): Promise<IPush[]> {
        try {
            // console.log(ref)
            const r = await this.db.getCollection('pushs').find({
                "ref": ref,
                "repository.full_name": fullName,
            }).toArray() as IPush[]
            return r
        }catch (e) {
            throw e
        }
    }
}
