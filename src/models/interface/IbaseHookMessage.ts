/**
 * Created by haozi on 5/17/2017.
 */
export interface IbaseHookMessage{
    hook_id: number,
    hook: Ihook,
    repository: Irepository,
    private: boolean,
    html_url: string,
    description: string,
    fork: boolean,
    url: string,
    /**
     * 此处省略一堆url
     */
    created_at: string,
    updated_at: string,
    pushed_at: string,
    git_url: string,
    ssh_url: string,
    clone_url: string,
    svn_url: string,
    homepage: boolean,
    size: number,
    watchers_count: number,
    stargazers_count: number,
    language: string,
    ssh_url: string,


}


export interface Ihook {
    type: string,
    id: number,
    name: string,
    active: boolean,
    events: string[],
    updated_at: string,
    created_at: string,
    url: string,
    ping_url: string
}


export interface Irepository {
    id: number,
    name: string,
    full_name: string,
    owner: IrepositoryOwner
}

export interface IrepositoryOwner {
    login: string,
    id: number,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean
}

