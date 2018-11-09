import React from 'react';
import { Text, View } from 'react-native';

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        paddingTop: 25,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        elevation: 2,
    },
    textStyle: {
        fontSize: 20,
        textTransform: 'capitalize',
    }
};

const Header = (props) => {
    const { viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.title}</Text>
        </View>
    );
};

export default Header;

