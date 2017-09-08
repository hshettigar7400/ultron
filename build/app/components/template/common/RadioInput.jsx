import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';

export default class RadioInput extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.optionsRadios);
    node.checked = false;
  }

  handleClick(e) {
		this.props.onChoiceSelect(e, this.props.choice );
	}

  render() {
    var disabled = this.props.disabled;
		var classString = !disabled ?  "radio" :  "radio disabled";
    return (
      <div className={classString}>
				<label className="option-container">
          <div className="answer-icon"></div>
          <div>
  					<input
              className="radio-input"
              ref="optionsRadios"
              type="radio"
              name="optionsRadios"
              id={this.props.index}
              value={this.props.choice}
              onChange={this.handleClick.bind(this)}
            />
          </div>
          <div className="option-text">
	           {this.props.choice}
          </div>
				</label>
			</div>
    )
  }
}
