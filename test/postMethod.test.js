import {
   createComment,
   createPhotos, 
    
} from '../src/clients/postApi.js'
    
import {newComment,
        newPhotos

} from '../src/data/postData.js'

import { generatedCommentBody,
    generatedPhotoBody

 } from '../src/data/postFactory.js'


describe('JSONplaceholder API/comments', () =>{
test('Post /comments', async()=> {
  
    const response = await createComment(newComment)
    expect(response.status).toBe(201)
    expect(response.data.email).toBe('Elshshiseo@gardner.com')

})
describe ('JSONplaceholder API/photos', () => {
    test ('Post /photos', async()=>{

const response = await createPhotos(newPhotos)
expect(response.data).not.toBeNull()
expect(response.data).toHaveProperty('albumId')
expect(response.data).toHaveProperty('title')

    })
})

test ("POST /comments with generatedComments", async()=>{

    const generatedComment = generatedCommentBody();//remember what I sent from fake function
    const response  = await createComment(generatedComment)// sent it

    expect(response.data.postId).toBe(generatedComment.postId); //compare what I sent VS what came back
    expect(response.data.name).toBe(generatedComment.name);
    expect(response.data.email).toBe(generatedComment.email);
    expect(response.data.body).toBe(generatedComment.body);

}
)

test ("POST /comments with generatedBodyPhotos", async()=>{ // update this!!

    const generatedPhotos = generatedPhotoBody({title: 'My name OK'});//for negative cases, when we add some exclusions
    const response  = await createPhotos(generatedPhotos)// sent it

    expect(response.data.albumId).toBe(generatedPhotos.albumId); //compare what I sent VS what came back
    expect(response.data.title).toBe(generatedPhotos.title);
    expect(response.data.url).toBe(generatedPhotos.url);
    expect(response.data.thumbnailUrl).toBe(generatedPhotos.thumbnailUrl);
   
} 
)

})
