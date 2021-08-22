import * as CourseComponent from '../components/course.component';
import * as Utils from '../support/utils';

describe('Test courses functionalities', () => {
  context('Check the functionalities for an admin user', () => {
    beforeEach(() => {
      Utils.loginWithApi('admin', 'admin');
      Utils.visitAPage('courses');
    });

    it('admin user should see the delete button', () => {
      CourseComponent.deleteButton().should('be.visible');
    });

    it('should be able to add a new course correctly', () => {
      CourseComponent.newCourseInput().type('Learn Selenium');
      CourseComponent.newCourseButton();

      CourseComponent.deleteButton().should('have.length', 3);
    });

    it('should be able to delete a course', () => {
      CourseComponent.deleteButton().last().click();
      CourseComponent.deleteButton().should('have.length', 2);
    });
  });

  context('Check the functionalities for a normal user', () => {
    beforeEach(() => {
      Utils.loginWithApi('user', 'user');
      Utils.visitAPage('courses');
    });

    it('normal user should be able to see all the corses', () => {
      CourseComponent.coursesName().should('have.length', 2);
    });
  });
});
