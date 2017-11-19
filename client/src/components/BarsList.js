import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem'
import FontAwesome from 'react-fontawesome'
import Loader from 'halogen/ScaleLoader'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchBars, fetchFavoriteBars } from '../actions/barActions'
import { fetchPlaces } from '../actions/locationActions'

class BarsList extends Component {
  componentWillMount() {
    this.setLocation()
    this.props.fetchBars()
    this.props.fetchFavoriteBars()
  }

  setLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.fetchPlaces(position.coords.latitude, position.coords.longitude)
    })
  }


  render() {
    let renderBars, renderFavoriteBars

    if (this.props.favoriteBars.length > 0) {
      renderFavoriteBars = this.props.favoriteBars.map(bar =>
        <MenuItem>
          <FontAwesome name='star' /> <Link key={bar.name} to={`/bars/${bar.place_id}`}>{bar.name}</Link>
        </MenuItem>
      )
    }

    if (this.props.fetchedBars.length > 0) {
      renderBars = this.props.fetchedBars.map(bar =>
        <MenuItem>
          <Link key={bar.name} to={`/bars/${bar.place_id}`}>{bar.name}</Link>
        </MenuItem>
      )
    } else {
      renderBars = <Loader className="spinner" color="#ffffff" size="16px" margin="4px"/>
    }



    return (
      <div className="sidebar">
        <h3 style={{ color: '#b1b1b1' }}>
          Your Local Bars <FontAwesome name='glass' />
        </h3>
        {renderFavoriteBars}
        {renderBars}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // filter out favorite bars from fetched bars
  let favNames = state.bars.favoriteBars.map(bar => bar.name)

  let filterFetchedBars = state.bars.fetchedBars.filter(bar => {
    if (favNames.includes(bar.name)) {
      return false
    } else {
      return true
    }
  })

  return {
    fetchedBars: filterFetchedBars,
    favoriteBars: state.bars.favoriteBars
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBars,
    fetchPlaces,
    fetchFavoriteBars
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BarsList)
