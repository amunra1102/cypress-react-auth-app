import * as LoginComponent from '../components/login.component';
import * as HeaderComponent from '../components/header.component';
import * as CourseComponent from '../components/course.component';
import * as Utils from '../support/utils'

describe('Test all login functionalities', () => {
  beforeEach(() => {
    Utils.visitAPage('login');
  });

  it('login with valid email and password for a normal user', () => {
    LoginComponent.performLogin('user', 'user');

    Utils.checkUrl('courses');
    HeaderComponent.signOutButton().should('be.visible');
  })

  it('should login correctly as admin user', function () {
    LoginComponent.performLogin('admin', 'admin');

    Utils.checkUrl('courses');
    HeaderComponent.signOutButton().should('be.visible');

    CourseComponent.deleteButton().should('be.visible');
  });
});
