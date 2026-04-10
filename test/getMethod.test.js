import {
    getAllPosts,
    getAllComments,
    getAllPhotos
} from '../src/clients/postApi.js'

describe('JSONplaceholder API/posts', () =>{
test('Get /posts', async()=> {
    const response = await getAllPosts()// we wait for the response

    expect(response.status).toBe(200)
    expect(response.data).toBeInstanceOf(Array)
    expect(response.data.length).toBe(100)
})

})

describe ('JSONPlaceholder API/comments',()=> {
    test('Get /comments', async() =>{
        const response = await getAllComments();

        expect(response.data.length).toBe(500)
        expect(response.data).toBeTruthy();// data is not empty/null/undefined
        expect(response.data.length).toBeGreaterThan(0)
    }
    )
})

describe ('JSONPlaceholder API/photos',()=> {
test ('Get /albums', async() => {
    const response = await getAllPhotos();

    expect (response.data[0]).toHaveProperty('title')
    expect(response.data[3].url).toContain('https')
    expect(Array.isArray(response.data)).toBe(true)
    expect (typeof response.data[1].id).toBe('number')
})
})



/*{
    status:200;
    data:[]
}*/