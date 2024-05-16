export interface ApiResponse {
    kind: string,
    data: User
}

export interface User {
    is_employee: boolean,
    is_friend: boolean,
    subreddit: Subreddit,
    snoovatar_size: Array<number>
    awardee_karma: number,
    id: string,
    verified: boolean,
    is_gold: boolean,
    is_mod: boolean,
    awarder_karma: number,
    has_verified_email: boolean,
    icon_img: string,
    hide_from_robots: boolean,
    link_karma: number,
    is_blocked: boolean,
    total_karma: number,
    pref_show_snoovatar: boolean,
    name: string,
    created: number,
    created_utc: number,
    snoovatar_img: string,
    comment_karma: number,
    accept_followers: boolean,
    has_subscribed: boolean
}

export interface LightUser {
    name: string, // display_name
    iconUrl: string, // icon_img
    title: string, //subreddit.title
    postKarma: number, // link_karma
    commentKarm: number, //comment_karma
    birthDate: string // created
}

interface Subreddit {
    default_set: boolean,
    user_is_contributor: any,
    banner_img: string,
    allowed_media_in_comments: [],
    user_is_banned: any,
    free_form_reports: boolean,
    community_icon: any,
    show_media: boolean,
    icon_color: string,
    user_is_muted: any,
    display_name: string,
    header_img: any,
    title: string,
    previous_names: [],
    over_18: boolean,
    icon_size: Array<number>,
    primary_color: string,
    icon_img: string,
    description: string,
    submit_link_label: string,
    header_size: any,
    restrict_posting: boolean,
    restrict_commenting: boolean,
    subscribers: 0,
    submit_text_label: string,
    is_default_icon: boolean,
    link_flair_position: string,
    display_name_prefixed: string,
    key_color: string,
    name: string,
    is_default_banner: boolean,
    url: string,
    quarantine: boolean,
    banner_size: any,
    user_is_moderator: any,
    accept_followers: boolean,
    public_description: string,
    link_flair_enabled: boolean,
    disable_contributor_requests: boolean,
    subreddit_type: string,
    user_is_subscriber: any
}