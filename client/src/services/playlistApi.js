import { getHttp, patchHttp } from '../helpers/http';
import { getCourses } from './courseApi';
import { getUsers } from './userApi';

const _mergePlaylistData = (courses, playlists, users) =>
  playlists.map((playlist) => {
    playlist.user = users.find((user) => user.id === playlist.user);
    playlist.courses = playlist.courses.map((courseId) =>
      courses.find((course) => course.id === courseId)
    );
    return playlist;
  });

const getAllPlaylistsForUser = username =>
  getUsers().then((users) => {
    const user = users.find((user) => user.username === username);
    if (user) {
      return getHttp(`/playlists?user=${user.id}`);
    }

    return Promise.resolve([]);
  });

const getAllPlaylists = () => getHttp('/playlists');

export const getAllPlaylistsMerged = () =>
  Promise.all([getCourses(), getAllPlaylists(), getUsers()]).then(
    (responses) => {
      const [courses, playlists, users] = responses;
      return _mergePlaylistData(courses, playlists, users);
    }
  );

export const getAllPlaylistsForUserMerged = userId =>
  Promise.all([
    getCourses(),
    getAllPlaylistsForUser(userId),
    getUsers()
  ]).then((responses) => {
    const [courses, playlists, users] = responses;
    return _mergePlaylistData(courses, playlists, users);
  });

export const getPlaylist = (playlistId) =>getHttp(`/playlists/${playlistId}`);

export const addCourseToPlaylist = (playlistId, courseId) =>
  getHttp(`/playlists/${playlistId}`).then((playlist) => {
    const courses = playlist.courses;
    courses.push(courseId);
    return patchHttp(`playlist`, { courses: courses });
  });

export const deleteCourseFromPlaylist = (playlistId, courseId) =>
  getHttp(`/playlists/${playlistId}`).then((playlist) => {
    const courses = playlist.courses.filter(
      (course) => course.id !== courseId
    );
    return patchHttp(`playlist`, { courses: courses });
  });
