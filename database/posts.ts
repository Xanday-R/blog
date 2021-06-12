import { os } from './connection';
import { Post } from './interface';

export class post extends os {
    async createPost(data:Post):Promise<any> {
        let result:any = await this.knex('posts').insert(data, ['*']);
        return result;
    }
    async updatePost(data:Post):Promise<any> {
        let result:any = await this.knex('posts').update(data).where({'id': data.id});
        return result;
    }
    async deletePost(data:Post):Promise<any> {
        let result:any = await this.knex('posts').delete().where({'id': data.id});
        return result;
    }
    async findPost(data:Post):Promise<any> {
        let result:any = await this.knex('posts').select('*').where({'id': data.id});
        return result;
    }
}