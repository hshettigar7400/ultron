import React from 'react';
import PropTypes from 'prop-types';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';

export default class Checkbox extends React.Component {
  static defaultProps = {
    prefixCls: 'rc-checkbox',
    className: '',
    style: {},
    type: 'checkbox',
    defaultChecked: false,
    onFocus() {},
    onBlur() {},
    onChange() {},
  };

  constructor(props) {
    super(props);
    const checked = 'checked' in props ? props.checked : props.defaultChecked;
    this.state = {
      checked,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: nextProps.checked,
      });
    }
    if (nextProps.reset) {
      this.setState({
        checked: nextProps.checked,
      });
    }
  }

  shouldComponentUpdate(...args) {
    return PureRenderMixin.shouldComponentUpdate.apply(this, args);
  }

  handleChange = (e) => {
    const { props } = this;
    if (props.disabled) {
      return;
    }
    if (!('checked' in props)) {
      this.setState({
        checked: e.target.checked,
      });
    }
    props.onChange({
      target: {
        ...props,
        checked: e.target.checked,
      },
      stopPropagation() {
        e.stopPropagation();
      },
      preventDefault() {
        e.preventDefault();
      },
    });
  };

  render() {
    console.log("sdfgsdfsdfd")
    const {
      prefixCls,
      className,
      style,
      name,
      type,
      disabled,
      key,
      readOnly,
      reset,
      tabIndex,
      onClick,
      onFocus,
      onBlur,
      ...others,
    } = this.props;

    const globalProps = Object.keys(others).reduce((prev, key) => {
      if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        prev[key] = others[key];
      }
      return prev;
    }, {});

    const { checked } = this.state;
    const classString = classNames(prefixCls, className, {
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled,
    });

    return (
      <span className={classString} style={style}>
        <input
          key={key}
          name={name}
          type={type}
          readOnly={readOnly}
          disabled={disabled}
          tabIndex={tabIndex}
          className={`${prefixCls}-input`}
          checked={!!checked}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={this.handleChange}
          {...globalProps}
        />
        <span className={`${prefixCls}-inner`} />
      </span>
    );
  }
}
