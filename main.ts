// @ts-ignore
import express from 'express';
import {users} from './database/users';
// @ts-ignore
// import passport from 'passport';

const app = express();

// import {config} from './config/config';

export { app };




// Other
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(passport.initialize());
// require('./middleware/passport')(passport);
// app.use(/${config.pathToUploads}, express.static(config.pathToUploads));

// Routes
// app.use('/api/posts', postRoutes);
// app.use('/api/account', accountRoutes);
// app.use('/api/comments', commentRoutes);

// OS

interface Registeruser {
  name:string,
  password:string,
  email:string
}

app.get('/test', (req: express.Request, res: express.Response) => {
    let user: any = new users();
    let newUser: Registeruser = {email: 'test1', name: 'test2', password: 'test3'};
    user.register(newUser);
    res.send('ok!');
  });

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('ok!');
});

app.listen(3000, () => console.log('Server start!'));