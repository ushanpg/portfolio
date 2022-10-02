import React, { Component } from 'react'
import Typical from 'react-typical'
 
export class Typing extends React.Component {
  render () {
    return (
      <Typical
        steps={[this.props.desc, 0]} wrapper={this.props.wrapper}
      />
    )
  }
}