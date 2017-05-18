/**
 * Created by haozi on 5/17/2017.
 */
// import * as mongoose from 'mongoose'

import {Collection, Db, MongoClient} from 'mongodb'
import {dbLink} from './config'

export class Mongo {
    private db: Db

    /**
     * 连接数据库
     * @returns {Promise<void>}
     * @async
     */
    public async connect() {
        try {
            this.db = await MongoClient.connect(dbLink)

        }catch (e) {
            // console.log('沒有 连接成功 辣鸡')
        }
    }

    /**
     * 获取数据库集合
     * @param collectionName
     * @returns {Collection}
     */
    public getCollection(collectionName: string): Collection {
        return this.db.collection(collectionName)
    }

    /**
     * 包装一般情况下的callback函数
     * @param fn
     * @param receiver
     * @returns {(...args:any[])=>Promise<T>}
     * @async
     */
    public promisify(fn: () => void, receiver: any)  {
        return (...args: any[]) => {
            return new Promise((resolve, reject) => {
                fn.apply(receiver, [...args, (err: Error, res: any) => {
                    return err ? reject(err) : resolve(res)
                }])
            })
        }
    }
}
