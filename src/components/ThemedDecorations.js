import React, { Component } from 'react';

class ThemedDecorations extends Component {
  render() {
    const childrenWithExtraProp = React.Children.map(
      this.props.children,
      child =>
        React.cloneElement(child, {
          className: this.props.theme,
        }),
    );

    return <div>{childrenWithExtraProp}</div>;
  }
}

export default ThemedDecorations;
