import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import blankGif from './blank.gif';

const DATA_LOADED = 'data-loaded';
const BOOL_TRUE = 'true';

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

  get loaded() {
    return this.state.loaded || this.root.getAttribute(DATA_LOADED) === BOOL_TRUE;
  }

  state = {
    loaded: false
  };

  shouldComponentUpdate() {
    return !(this.props.once && this.loaded);
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
        ref={root => this.root = root}
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
