import {Component} from 'react';

export default class TextInputDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textInput: ''
        };
    }

    onInputChanged = (e) => {
        const textInput = e.target.value;
        this.setState({
            textInput
        });
    };

    render = () => {
        return (
            <div>
                <p>{this.props.label}:</p>
                <input type="text" value={this.state.textInput} onChange={this.onInputChanged} />
                <button onClick={() => this.props.onTextChange(this.state.textInput)}>Confirm</button>
            </div>
        );
    };

}