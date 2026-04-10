// створити 5 запитів за допомогою методів GET, POST
//обов'язково має бути перевірка респонсу - response status, data 
// на коректність згідно з документацією по АПІ

import { apiClient } from '../utils/axiosinstance.js';

export const getAllPosts = () => apiClient.get('/posts');
export const getPostById =(id) => apiClient.get('/posts/${id}');
export const createPost =(body) => apiClient.post('/posts', body);
export const createComment = (body) => apiClient.post('/comments', body);
export const getAllComments = () => apiClient.get('comments');
export const getAllPhotos =() => apiClient.get ('/photos');
export const createPhotos =(body) =>apiClient.post ('photos',body);
