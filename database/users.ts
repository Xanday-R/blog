import { os } from './connection';
import { User } from './interface';

export class users extends os {
    async registerUser(user:User):Promise<any> {
        let result:any = await this.knex('users').insert(user, ['*']);
        return result;
    }
    async findUserEmail(user:User):Promise<any> {
        let result:any = await this.knex('users').select('*').where({'email': user.email});
        if(result.length == 0) return null;
        return result;
    }
    async findUserId(user:User):Promise<any> {
        let result:any = await this.knex('users').select('*').where({'id': user.id});
        if(result.length == 0) return null;
        return result;
    }
    async changePass(user:User):Promise<any> {
        let result:any = await this.knex('users').update({'password': user.password}).where({'id': user.id});
        return result;
    }
    async deleteUser(user:User):Promise<any> {
        let result:any = await this.knex('users').delete().where({'id': user.id});
        return result;
    }
}
