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
    lazy: PropTypes.bool,
    value: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    lazy: false,
    value: false,
    onChange: noop
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: inProps.value
    };
  }

  _onLoad = (inEvent) => {
    const { lazy, onChange } = this.props;
    if (!lazy) {
      this.setState({ value: true }, () => {
        onChange();
      });
    } else {
      onChange();
    }
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
