import React, { useState } from 'react'
import 'omim/icon-button'
import 'omim/bottom-nav'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <m-icon-button color='red' icons='["favorite", "favorite_border"]' />
        <m-bottom-nav selected-color='blue' id='myNav'
          items='[
          { icon: "favorite", label: "Favorites", selected: true },
          { icon: "location_on", label: "Nearby" },
          { icon: "restore", label: "Recents" }
          ]'
        >
        </m-bottom-nav>
      </div >
    )
  }
}
