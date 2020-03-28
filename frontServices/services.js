import request from '../utils/services';

export default {
  login(user) {
    return request({
      method: 'post',
      url: '/login',
      data: user,
    });
  },
  register(user) {
    return request({
      method: 'post',
      url: '/register',
      data: user,
    });
  },
};
