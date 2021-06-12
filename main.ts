// @ts-ignore

import express from 'express';

// @ts-ignore

const app = express();


export { app };




// Other
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// OS

import { post } from './database/post';
import { Post } from './database/interface';

app.get('/test', async(req: express.Request, res: express.Response) => {
    let posts: any = new post();
    let Account: Post = {id: 1, user_id: 1, title: '1', image: 'https://i.imgur.com/rVvX6E6.png', body: '3', create_time: '1999-01-08 04:05:06', update_time: '1999-01-08 04:05:06', update: false};
    let result: string = await posts.updatePost(Account);
    console.log(result);
    res.send('ok!');
});

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('ok!');
});

app.listen(3000, () => console.log('Server start!'));