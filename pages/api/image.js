import { createApi } from "unsplash-js";

const serverApi = createApi({
  accessKey: '',
  //...other fetch options
});

// call my collection from unsplash api
export default function handleGetImages(req, res) {
  serverApi.collections.getPhotos({ collectionId: '52048212' }).then(result => {
    if (result.errors) {
      // handle error here
      console.log('error occurred: ', result.errors[0]);
    } else {
      const feed = result.response;
  
      // extract total and results array from response
      const { total, results } = feed;
  
      // handle success here
      console.log(`received ${results.length} photos out of ${total}`);
      // console.log('first photo: ', results[0]);

      res.statusCode = 200;
      res.json({ images: feed });
    }
  });
}
