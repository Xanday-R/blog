import { os } from './connection';
import { Like } from './interface';

export class like extends os {
    async addLike(data:Like):Promise<any> {
        let result:any = await this.knex('likes').insert(data, ['*']);
        return result;
    }
    async deleteLike(data:Like):Promise<any> {
        let result:any = await this.knex('likes').delete().where({'user_id': data.user_id, 'post_id': data.post_id});
        return result;
    }
}