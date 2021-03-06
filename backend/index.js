require('newrelic');
const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const redis = require('redis');

const redisClient = redis.createClient(process.env.REDIS_URI);

const { reviews } = require('../database');

const avatarImgUrl = 'https://d1sa5mhlkaaod3.cloudfront.net/Archive/';
const imgPath = 'https://d20osmzbr4jjn3.cloudfront.net/SDC/images/image';

const getTotal = (shopReviews) => (
  shopReviews.length
);

const getAverage = (shopReviews) => {
  const result = Math.floor(shopReviews.length / 4);
  if (result < 1) {
    return 1;
  }
  return result;
};

const getShopReviews = (reviews) => {
  reviews.row.map((review) => {
    const singleReview = {
      _id: id,
      avatar: `${avatarImgUrl + review.avatar}.jpg`,
      name: review.name,
      date: review.date,
      rating: review.rating,
      description: review.description,
      imageUrl: `${imgPath + review.imageurl}.jpg`,
      purchasedItem: review.purchaseditem,
      shopImage: `${imgPath + review.shopimage}.jpg`,
    };
    return singleReview;
  });

}

const PUBLIC_DIR = path.resolve(__dirname, '../public');

const app = express();
const PORT = process.env.PORT || 3001;

// api handler for given front end json structure.
// returns review with desired product id
app.get('/api/reviews/:id', (req, res) => {
  const { id } = req.params;
  client.get(id, async (err, find_id) => {
    if (err) throw err;

    if (find_id) {
      res.status(200).send({
        jobs: json_decode( $id, TRUE ),
        message: "data retrieved from the cache"
      });
    } else {

      const retrieveReviews = reviews.query(`select * from reviews where product_id = ${id}`,
      (err, data) => {

        if (err) {
          res.send(err);
        }
        const getReviews = {
          _id: id,
          shopReviews: [],
          total: 0,
          average: 1,
        };
        shopReview.push(getShopReviews(data));
        getReviews.total = getTotal(getReviews.shopReviews);
        getReviews.average = getAverage(getReviews.shopReviews);
      });
      client.setex(retrieveReviews, 600, json_decode( find_id, TRUE ));
      res.status(200).send({
        jobs: retrieveReviews,
        message: "cache miss"
      });
    }
  });

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.static(PUBLIC_DIR));

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});