import User, { UserParams } from "./User";

export interface PostParams {
    id: number;
    user: UserParams;
    title: string;
    url_slug: string;
    banner_pic: string;
    description: string;
    content: string;
    status: string;
    created_at: Date;
    updated_at: Date;

}
export default class Post {
    id: number;
    user: User;
    title: string;
    url_slug: string;
    banner_pic: string;
    description: string;
    content: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    constructor(params: PostParams) {
        this.id = params.id;
        this.user = new User(params.user);
        this.title = params.title;
        this.url_slug = params.url_slug;
        this.banner_pic = params.banner_pic;
        this.description = params.description;
        this.content = params.content;
        this.status = params.status;
        this.created_at = params.created_at;
        this.updated_at = params.updated_at;
    }
}