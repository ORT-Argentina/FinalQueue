import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

class ButtonExample extends React.Component {
    render() {
        return (
            <Button style={[styles.button]}>
                Ejemplo sin contorno
            </Button>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        marginVertical: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
    },
});

export default memo(ButtonExample);