import { os } from './connection';
import { Comment } from './interface';

export class like extends os {
    async addComment(data:Comment):Promise<any> {
        let result:any = await this.knex('comments').insert(data, ['*']);
        return result;
    }
    async updateComment(data:Comment):Promise<any> {
        let result:any = await this.knex('comments').update(data).where({'id': data.id});
        return result;
    }
    async deleteComment(data:Comment):Promise<any> {
        let result:any = await this.knex('comments').delete().where({'id': data.id});
        return result;
    }
}