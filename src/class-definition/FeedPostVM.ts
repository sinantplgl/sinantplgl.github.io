import User, {UserParams} from '../class-definition/User';

export interface FeedPostVMParams {
    id: number;
    title: string;
    url_slug: string;
    banner_pic: string;
    description: string;
    user: UserParams;
    status: string
    created_at: Date;
    updated_at: Date;
}

export class FeedPostVM {
    id: number
    title: string;
    url_slug: string;
    banner_pic: string;
    description: string;
    user: User;
    status: string
    created_at: Date;
    updated_at: Date;

    constructor(params: FeedPostVMParams) {
        this.id = params.id
        this.title = params.title;
        this.url_slug = params.url_slug;
        this.banner_pic = params.banner_pic
        this.description = params.description
        this.user = new User(params.user);
        this.status = params.status
        this.created_at = params.created_at
        this.updated_at = params.updated_at
    }
}