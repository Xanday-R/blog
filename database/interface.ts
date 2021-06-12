export interface User {
    id?:number,
    name:string,
    password?:string,
    email?:string
}

export interface Post {
    id?:number,
    user_id?:number,
    title:string,
    image:string,
    body:string,
    create_time:string,
    update_time:string,
    update:boolean
}

export interface Like {
    id?:number,
    user_id:number,
    post_id:number
}

export interface Comment {
    id?:number,
    user_id:number,
    post_id:number,
    body:string,
    create_time:string,
    update_time:string,
    update:boolean
}