import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool
  };

  static defaultProps = {
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: false
    };
  }

  _onLoad = (inEvent) => {
    this.setState({ value: true });
  };

  render() {
    const { className, ...props } = this.props;
    const { value } = this.state;

    return (
      <img
        onLoad={this._onLoad}
        data-loaded={value}
        className={classNames('react-fade-image', className)}
        {...props}
      />
    );
  }
}
