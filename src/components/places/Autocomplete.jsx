/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
import invariant from "invariant"
import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../../utils/MapChildHelper"

import { AUTOCOMPLETE } from "../../constants"

/**
 * A wrapper around `google.maps.places.Autocomplete` without the map
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
 */
class Autocomplete extends React.PureComponent {
  static displayName = "Autocomplete"

  static propTypes = {
    /**
     * @type LatLngBounds|LatLngBoundsLiteral
     */
    defaultBounds: PropTypes.any,

    /**
     * @type LatLngBounds|LatLngBoundsLiteral
     */
    bounds: PropTypes.any,

    /**
     * function
     */
    onPlacesChanged: PropTypes.func,
  }

  state = {
    [AUTOCOMPLETE]: null,
  }

  componentDidMount() {
    invariant(
      google.maps.places,
      `Did you include "libraries=places" in the URL?`
    )
    const element = ReactDOM.findDOMNode(this)
    /*
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
     */
    const autocomplete = new google.maps.places.Autocomplete(
      element.querySelector("input") || element
    )
    construct(Autocomplete.propTypes, updaterMap, this.props, autocomplete)

    componentDidMount(this, autocomplete, eventMap)
    this.setState({
      [AUTOCOMPLETE]: autocomplete,
    })
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[AUTOCOMPLETE],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
  }

  render() {
    return React.Children.only(this.props.children)
  }

  /**
   * Returns the bounds to which query predictions are biased.
   * @type LatLngBounds
   * @public
   */
  getBounds() {
    return this.state[AUTOCOMPLETE].getBounds()
  }

  /**
   * Returns the query selected by the user, or `null` if no places have been found yet, to be used with `places_changed` event.
   * @type Array<PlaceResult>nullplaces_changed
   * @public
   */
  getPlaces() {
    return this.state[AUTOCOMPLETE].getPlaces()
  }

  setTypes(types) {
    //['address']
    return this.state[AUTOCOMPLETE].setTypes(types);
  }

  setOptions(options) {
    return this.state[AUTOCOMPLETE].setOptions(options);
  }
}

export default Autocomplete;

const eventMap = {
  onPlacesChanged: "place_changed",
}

const updaterMap = {
  bounds(instance, bounds) {
    instance.setBounds(bounds)
  },
  //ou passar ooptins e types via props por aqui
}