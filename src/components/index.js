import noop from '@jswork/noop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const DATA_LOADED = 'data-loaded';
const BOOL_TRUE = 'true';
const CLASS_NAME = 'react-fade-image';
const BLANK_IMG =
  'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

export default class ReactFadeImage extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * If set lazy load mode.
     */
    lazy: PropTypes.bool,
    /**
     * Lazy only once.
     */
    once: PropTypes.bool,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    lazy: false,
    once: false,
    onChange: noop
  };

  get src() {
    const { lazy, src } = this.props;
    return lazy ? { 'data-src': src } : { src };
  }

  get loaded() {
    return (
      this.state.loaded || this.root.getAttribute(DATA_LOADED) === BOOL_TRUE
    );
  }

  state = {
    loaded: false
  };

  shouldComponentUpdate() {
    return !(this.props.once && this.loaded);
  }

  handleLoad = (inEvent) => {
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
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        ref={(root) => (this.root = root)}
        onLoad={this.handleLoad}
        data-loaded={loaded}
        className={classNames('react-fade-image', className)}
        src={BLANK_IMG}
        {...this.src}
        {...props}
      />
    );
  }
}
