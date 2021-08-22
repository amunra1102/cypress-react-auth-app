import { getHttp, postHttp, patchHttp, deleteHttp } from '../helpers/http';

export const getCourse = () => getHttp('/courses');

export const addCourse = (course) => postHttp('/courses', course);

export const updateCourse = (updatedCourse) => patchHttp(`/courses/${updatedCourse.id}`, updatedCourse);

export const deleteCourse = (courseToDelete) => deleteHttp(`/courses/${courseToDelete.id}`);
