import React from 'react'
import PropTypes from 'prop-types'

const YelpSearchBusiness = ({ yelp }) => {
  const item = yelp.business
  return (
    <div className='business'>
      <h2>{item.name}</h2>
      {item.image_url ? <img src={item.image_url} alt='main' /> : null}
      <p>
        <span key='rate'>{`Rating: ${item.rating}`}</span><br />
        <span key='phone'>{`Phone: ${item.phone}`}</span>
      </p>
      <a href={item.url}>View on yelp</a>
    </div>
  )
}

YelpSearchBusiness.propTypes = {
  yelp: PropTypes.object.isRequired
}

export default YelpSearchBusiness
