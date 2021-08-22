export const deleteButton = () => cy.get('[data-cy=delete-button]');

export const newCourseInput = () => cy.get('.add-course-input');

export const newCourseButton = () => cy.get('.add-course').click();

export const coursesName = () => cy.get('[data-cy=course-name]');
