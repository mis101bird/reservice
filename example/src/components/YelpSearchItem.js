import React from 'react'
import PropTypes from 'prop-types'

const YelpSearchItem = ({ item }) => <li onClick={() => (global.window.location.href = `/business/${encodeURIComponent(item.id)}`)} >
  <h2>{item.name}</h2>
  <p>{`Review Count: ${item.review_count}`}</p>
  <img src={item.image_url} alt='photo' />
</li>

YelpSearchItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default YelpSearchItem
