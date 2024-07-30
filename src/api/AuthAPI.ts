import { BaseAPI } from './BaseAPI';
import { SignInData, SignUpData, UserInfo } from '../types';

class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  signin(data: SignInData) {
    return this.http.post('/signin', { data });
  }

  signup(data: SignUpData) {
    return this.http.post('/signup', { data });
  }

  logout() {
    return this.http.post('/logout');
  }

  getUserInfo() {
    return this.http.get<UserInfo>('/user');
  }
}

export default new AuthAPI();
