import * as React from 'react';
import { TextInput } from 'react-native-paper';

export default class EmailInput extends React.Component {
    state = {
        text: ''
    };

    render() {
        return (
            <TextInput
                label='Email'
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
            />
        );
    }
}