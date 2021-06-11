import {os} from './connection';

interface Registeruser {
    name:string,
    password:string,
    email:string
}

export class users extends os {
    async register(user:Registeruser):Promise<any> {
        let test:any = await this.knex('users').insert(user);
        console.log(test);
    }
}
