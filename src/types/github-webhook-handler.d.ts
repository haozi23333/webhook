/**
 * Created by haozi on 2017/05/17.
 */


///<reference path="node"/>
import {EventEmitter} from 'events'
import {inherits} from 'util'
import * as crypto from 'crypto'
import * as bl from 'bl'
import * as bufferEq from 'buffer-equal-constant-time'



declare function signBlob (key: string, blob: string): string

interface hookOption {
    path: string,
    secret: string
}

interface hook extends EventEmitter{
    on(type: "*")
    on(type: "commit_comment")
    on(type: "create")
    on(type: "delete")
    on(type: "deployment_status")
    on(type: "deployment")
    on(type: "fork")
    on(type: "gollum")
    on(type: "issue_comment")
    on(type: "issues")
    on(type: "member")
    on(type: "membership")
    on(type: "page_build")
    on(type: "public")
    on(type: "pull_request_review_comment")
    on(type: "pull_request")
    on(type: "push")
    on(type: "release")
    on(type: "repository")
    on(type: "member")
    on(type: "status")
    on(type: "team_add")
    on(type: "watchAny")
}

declare function create (options: hookOption[]): EventEmitter