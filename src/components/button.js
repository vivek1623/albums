import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { buttonContainerStyle, buttonTextStyle } = styles;
    const { onPress, text } = props;

    return (
        <TouchableOpacity style={buttonContainerStyle} onPress={onPress}>
            <Text style={buttonTextStyle}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = {
    buttonContainerStyle: {
        padding: 10,
        borderColor: '#007aff',
        borderWidth: 1,
        borderRadius: 3,
    },
    buttonTextStyle: {
        textAlign: 'center',
        color: '#007aff',
        fontWeight: '600',
        fontSize: 16,
    }
};
