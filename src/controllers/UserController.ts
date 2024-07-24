import { PasswordData, ProfileData } from '../types';
import userAPI from '../api/UserAPI';
import router from '../tools/router';
import { AuthController } from './AuthController';
import Store from '../tools/rootStore';

export class UserController {
  static async changeProfile(data: ProfileData) {
    try {
      const newProfileData = await userAPI.changeProfile(data);
      Store.set('user', newProfileData);
      router.go('/profile');
    } catch (error) {
      console.log(`change profile error: ${error}`);
    }
  }

  static async changeAvatar(data: FormData) {
    try {
      await userAPI.changeAvatar(data);
      await AuthController.fetchUser();
    } catch (error) {
      console.log(`change avatar error: ${error}`);
    }
  }

  static async changePassword(data: PasswordData) {
    try {
      await userAPI.changePassword(data);
      router.go('/profile');
    } catch (error) {
      console.log(`change password error: ${error}`);
    }
  }
}
