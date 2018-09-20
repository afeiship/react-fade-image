import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import blankGif from './blank.gif';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    lazy: PropTypes.bool,
    once: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    lazy: false,
    once: false,
    onChange: noop
  };
  /*===properties end===*/

  get src() {
    const { lazy, src } = this.props;
    return lazy ? { 'data-src': src } : { src };
  };

  state = {
    loaded: false
  };

  shouldComponentUpdate() {
    return !(this.props.once && this.state.loaded);
  }

  _onLoad = (inEvent) => {
    const { lazy, onChange } = this.props;
    if (!lazy) {
      this.setState({ loaded: true }, () => {
        onChange(inEvent);
      });
    }
  };

  render() {
    const { once, lazy, src, className, ...props } = this.props;
    const { loaded } = this.state;

    return (
      <img
        onLoad={this._onLoad}
        data-loaded={loaded}
        className={classNames('react-fade-image', className)}
        src={blankGif}
        {...this.src}
        {...props}
      />
    );
  }
}
