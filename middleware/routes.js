const staticsRouter = require('../routes/static');
const todosRouter = require('../routes/todos');
const usersRouter = require('../routes/users');
const authRouter = require('../routes/auth');


module.exports = exports = function(app){
  app.use('/', staticsRouter);
  app.use('/api/todos', todosRouter); 
  app.use('/api/users', usersRouter);
  app.use('/auth', authRouter);
}