import {IOwner} from './IOwner'
/**
 * Created by haozi on 2017/05/17.
 */
export interface IRepository {
    id: number,
    name: string,
    full_name: string,
    owner: IOwner,
    private: boolean,
    html_url: string,
    description: string,
    fork: boolean,
    url: string,
    git_url: string,
    ssh_url: string,
    clone_url: string,
    homepage: null,
    size: number,
    stargazers_count: number,
    watchers_count: number,
    language: null,
    has_issues: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: number,
    mirror_url: null,
    open_issues_count: number,
    forks: number,
    open_issues: number,
    watchers: number,
    default_branch: string
}
