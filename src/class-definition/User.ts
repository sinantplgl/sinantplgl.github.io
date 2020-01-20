export interface UserParams {
    id: number;
    username: string;
    fullName: string;
    profile_pic: string;
}
export default class User {
    id: number;
    username: string;
    fullName: string;
    profile_pic: string
    constructor(params: UserParams) {
        this.id = params.id;
        this.username = params.username;
        this.fullName =  params.fullName;
        this.profile_pic = params.fullName;
    }
}