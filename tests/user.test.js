const { User, validate: validateUser } = require('../models/user');

describe('User test', () => {

  it('Get User\'s jwt ', () => {
    const user = new User();
    const token = user.createToken();
    console.log('token:',token);
    expect(token).not.toBe(null);
  });
});