import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Button from './button';

const AlbumCard = (props) => {
    const { albumCardContainerStyle, cardHeaderContainer, avatarStyle, titleStyle, subTitleStyle, imageStyle } = styles;
    const { album } = props;

    return (
        <View style={albumCardContainerStyle}>
            <View style={cardHeaderContainer}>
                <Image source={{ uri: album.thumbnail_image }} style={avatarStyle} />
                <View>
                    <Text style={titleStyle}>{ album.title }</Text>
                    <Text style={subTitleStyle}>{ album.artist }</Text>
                </View>
            </View>
            <Image source={{ uri: album.image }} style={imageStyle} />
            <View style={{ padding: 5 }}>
                <Button onPress={() => { Linking.openURL(album.url); }} text="Buy Now" />
            </View>
        </View>
    );
};

export default AlbumCard;

const styles = {
    albumCardContainerStyle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    cardHeaderContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    avatarStyle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#f8f8f8',
        marginRight: 10,
    },
    titleStyle: {
        textTransform: 'uppercase',
        fontSize: 14,
    },
    subTitleStyle: {
        fontSize: 12,
        color: 'grey'
    },
    imageStyle: {
        width: '100%',
        height: 300
    },
};
