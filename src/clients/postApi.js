// створити 5 запитів за допомогою методів GET, POST
//обов'язково має бути перевірка респонсу - response status, data 
// на коректність згідно з документацією по АПІ

import { apiClient } from '../utils/axiosinstance.js';

const getAllPosts = () => apiClient.get('/posts');
const getPostById =(id) => apiClient.get('/posts/${id}');
const createPost =(body) => apiClient.post('/posts', body);
const createComment = (body) => apiClient.post('/comments', body);
const getAllComments = () => apiClient.get('comments');
const getAllPhotos =() => apiClient.get ('/photos');
const createPhotos =(body) =>apiClient.post ('photos',body)

export {

    getAllPosts,
    getPostById,
    createComment,
    getAllComments,
    getAllPhotos,
    createPost,
    createPhotos 
}