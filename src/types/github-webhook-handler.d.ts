// /**
//  * Created by haozi on 2017/05/17.
//  */
//
//
// import {EventEmitter} from 'events'
// import {inherits} from 'util'
// // import * as crypto from 'crypto'
// // import * as bl from 'bl'
// // import * as bufferEq from 'buffer-equal-constant-time'
//
// declare function signBlob(key: string, blob: string): string
//
// interface IhookOption {
//     path: string,
//     secret: string
// }
//
// interface IHook extends EventEmitter {
//     on(type: "*"): this
//     on(type: "commit_comment"): this
//     on(type: "create"): this
//     on(type: "delete"): this
//     on(type: "deployment_status"): this
//     on(type: "deployment"): this
//     on(type: "fork"): this
//     on(type: "gollum"): this
//     on(type: "issue_comment"): this
//     on(type: "issues"): this
//     on(type: "member"): this
//     on(type: "membership"): this
//     on(type: "page_build"): this
//     on(type: "public"): this
//     on(type: "pull_request_review_comment"): this
//     on(type: "pull_request"): this
//     on(type: "push"): this
//     on(type: "release"): this
//     on(type: "repository"): this
//     on(type: "member"): this
//     on(type: "status"): this
//     on(type: "team_add"): this
//     on(type: "watchAny"): this
// }
//
// declare function create(options: IhookOption[]): EventEmitter
