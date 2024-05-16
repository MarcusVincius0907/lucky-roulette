import { ApiResponse, LightUser, User } from "../types/User";
import { convertTimestampToStr } from "./date.helper";

export function covertUserToLightUser(postResponse: ApiResponse): LightUser {
    return {
        name: postResponse?.data?.name, 
        iconUrl: postResponse?.data?.icon_img?.split("?")[0] || "", 
        title: postResponse?.data?.subreddit.title, 
        postKarma: postResponse?.data?.link_karma, 
        commentKarm: postResponse?.data?.comment_karma, 
        birthDate: convertTimestampToStr(postResponse?.data?.created) 
    }
}


