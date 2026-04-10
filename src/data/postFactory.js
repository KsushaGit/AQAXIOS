import{faker} from '@faker-js/faker';

export const generatedCommentBody = () => ({
    postId: faker.number.int ({min:1, max:10}),
    name: faker.lorem.words(2),
    email: faker.internet.email(),
    body: faker.lorem.sentence()
    });

export const generatedPhotoBody =(overrides ={}) =>({
   albumId:1,
   title: faker.lorem.word(),
   url: faker.internet.url(),
   thumbnailUrl: faker.internet.url(),
   ...overrides

})

