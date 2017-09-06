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

  handleClick() {
		this.props.onChoiceSelect( this.props.choice );
	}

  render() {
    var disable = this.props.disable;
		var classString = !disable ?  "radio" :  "radio disabled";
    return (
      <div className={classString}>
				<label className="option-container">
                    <div><FontAwesome name="" /></div>
          <div>
  					<input
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
