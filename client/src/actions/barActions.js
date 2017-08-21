import fetch from 'isomorphic-fetch'

export function fetchBars() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BARS' })
    return fetch('api/bars')
      .then(response => response.json())
      .then(bars => dispatch({ type: 'FETCH_BARS', payload: bars }))
  }
}

export function addBar(bar) {
  return {
    type: 'ADD_BAR',
    payload: bar
  }
}

export function fetchFavoriteBars() {
  return {
    type: 'FETCH_FAVORITE_BARS'
  }
}

export function addFavoriteBar(bar) {
  return {
    type: 'ADD_FAVORITE_BAR',
    payload: bar
  }
}

export function removeFavoriteBar(bar) {
  return {
    type: 'REMOVE_FAVORITE_BAR',
    payload: bar
  }
}

export function fetchPhoto() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PHOTO' })
    return fetch('api/unsplash')
      .then(response => response.json())
      .then(photo => dispatch({ type: 'FETCH_PHOTO', payload: photo }))
  }
}
