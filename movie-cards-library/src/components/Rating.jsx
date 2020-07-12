// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    return (
      <p className="rating">{this.props.rating}</p>
    );
  }
}

export default Rating;
