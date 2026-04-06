import {
   createComment,
   createPhotos 
    
} from '../src/clients/postApi.js'

describe('JSONplaceholder API/comments', () =>{
test('Post /comments', async()=> {
    const newComment = {
        "postId": 1,
    "name": "Some text name",
    "email": "Elshshiseo@gardner.com",
    "body": " some text"

    }
    const response = await createComment(newComment)
    expect(response.status).toBe(201)
    expect(response.data.email).toBe('Elshshiseo@gardner.com')

})
describe ('JSONplaceholder API/photos', () => {
    test ('Post /photos', async()=>{
const newPhotos ={
    "albumId": 1,
    "title": "Spam smth",
    "url": "https://via.placeholder.com/600/771r796",
    "thumbnailUrl": "https://via.placeholder.com/150/771r796"
}
const response = await createPhotos(newPhotos)
expect(response.data).not.toBeNull()
expect(response.data).toHaveProperty('albumId')
expect(response.data).toHaveProperty('title')

    })
})

})
