import Yelp from 'yelp-v3'
import yelpTokenSecret from '../../yelp.cfg.json'

const yelp = new Yelp(yelpTokenSecret)

// A good practice is reduce api results before you return it,
// then the response size of client side service execution will be smaller.
const services = {
  search: params => (params.term
  ? yelp.search(params).then(result =>
    (result.businesses
      ? result.businesses.map(B => ({
        review_count: B.review_count,
        id: B.id,
        name: B.name,
        image_url: B.image_url
      }))
      : []
    ))
  : false),
  business: {
    service: params => yelp.businesses(params),
    selector: B => ({
      name: B.name,
      id: B.id,
      rating: B.rating,
      url: B.url,
      phone: B.phone,
      image_url: B.image_url
    })
  }
}

export default services
