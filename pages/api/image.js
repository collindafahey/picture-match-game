import { createApi } from "unsplash-js";

const serverApi = createApi({
  accessKey: process.env.ACCESS_KEY,
  //...other fetch options
});

// call my collection from unsplash api
export default function handleGetImages(req, res) {
  serverApi.collections
    .getPhotos({ collectionId: "52048212", perPage: 12 })
    .then((result) => {
      // set status code
      res.statusCode = result.status;
      if (result.errors) {
        // handle errors
        res.json({ errors: result.errors });
      } else {
        // handle success
        const feed = result.response;
        // extract total & results array from response
        const { total, results } = feed;
        console.log(`received ${results.length} photos out of ${total}`);
        res.json({ images: feed });
      }
    });
}
