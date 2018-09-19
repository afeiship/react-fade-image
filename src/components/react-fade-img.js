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
    onChange: PropTypes.func,
    value: PropTypes.bool
  };

  static defaultProps = {
    onChange: noop,
    value: false
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: inProps.value
    };
  }

  componentWillReceiveProps(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      this.setState({ value });
    }
  }

  _onLoad = (inEvent) => {
    const { onChange } = this.props;
    const { value } = this.state;
    const target = { value };
    if (onChange === noop) {
      this.setState({ value: true });
    } else {
      onChange({ target });
    }
  };

  render() {
    const { value, className, ...props } = this.props;
    const _value = this.state.value;

    return (
      <img
        onLoad={this._onLoad}
        data-loaded={_value}
        className={classNames('react-fade-img', className)}
        {...props}
      />
    );
  }
}
