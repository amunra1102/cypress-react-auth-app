import * as Utils from '../support/utils';
import * as HeaderComponent from '../components/header.component';

describe('Test logout functionality', () => {
  it('admin user should be able to logout correctly', () => {
    Utils.loginWithApi('admin', 'admin');
    Utils.visitAPage('courses');

    HeaderComponent.signOutButton().click();
    Utils.checkUrl('not-logged-in');
  });

  it('normal user should be able to logout correctly', () => {
    Utils.loginWithApi('admin', 'admin');
    Utils.visitAPage('courses');
    HeaderComponent.signOutButton().click();
    Utils.checkUrl('not-logged-in');
  });
});
