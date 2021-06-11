// @ts-ignore

import express from 'express';

// @ts-ignore

const app = express();


export { app };




// Other
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// OS

import { users } from './database/users';
import { User } from './database/interface';

app.get('/test', async(req: express.Request, res: express.Response) => {
    let user: any = new users();
    let Account: User = {id: 1, email: 'test1', name: 'test2', password: 'test4'};
    let result: string = await user.deleteUser(Account);
    console.log(result);
    res.send('ok!');
});

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('ok!');
});

app.listen(3000, () => console.log('Server start!'));