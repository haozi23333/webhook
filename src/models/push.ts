/**
 * Created by haozi on 2017/05/17.
 */
import * as mongoose  from 'mongoose'
import {IPush} from "./interface/IPush"

interface IPushModel extends IPush, mongoose.Document {}

/* tslint:disable */
const pushSchema =  new mongoose.Schema({
    ref: String,
    head: String,
    before: String,
    size: Boolean,
    distinct_size: Boolean,
    commits: [{
        sha: String,
        message: String,
        author: {
            name: String,
            email: String
        },
        url: String,
        distinct: Boolean
    }],
    repository: {
        id: Number,
        name: String,
        full_name: String,
        owner: {
            login: String,
            id: Number,
            avatar_url: String,
            gravatar_id: String,
            url: String,
            html_url: String,
            followers_url: String,
            following_url: String,
            gists_url: String,
            starred_url: String,
            subscriptions_url: String,
            organizations_url: String,
            repos_url: String,
            events_url: String,
            received_events_url: String,
            type: String,
            site_admin: Boolean
        },
        private: Boolean,
        html_url: String,
        description: String,
        fork: Boolean,
        url: String,
        git_url: String,
        ssh_url: String,
        clone_url: String,
        homepage: String,
        size: Number,
        stargazers_count: Number,
        watchers_count: Number,
        language: String,
        has_issues: Boolean,
        has_downloads: Boolean,
        has_wiki: Boolean,
        has_pages: Boolean,
        forks_count: Number,
        mirror_url: String,
        open_issues_count: Number,
        forks: Number,
        open_issues: Number,
        watchers: Number,
        default_branch: String
    }
})

const Push = mongoose.model<IPushModel>("Push", pushSchema)

export {
    Push,
    IPushModel
}
