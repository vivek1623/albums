import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

import AlbumCard from './albumcard';

export default class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            loading: false,
            loaded: false,
        };
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response) => {
                console.log('response', response);
                this.setState({
                    loading: false,
                    loaded: true,
                    albums: response.data,
                });
            }).catch((error) => {
                console.log('error', error);
                this.setState({
                    loading: false,
                    loaded: false,
                });
            });
        });
    }

    renderAlbumCards = () => {
        return this.state.albums.map((album, index) => <AlbumCard key={index} album={album} />);
    };

    render() {
        const { loading, loaded } = this.state;
        const { viewStyle, albumListContainerStyle } = styles;
        if (loading && !loaded) {
            return (
                <View style={viewStyle}>
                    <Text>Loading...</Text>
                </View>
            );
        } else if (!loading && loaded) {
            return (
                <ScrollView style={albumListContainerStyle}>
                    { this.renderAlbumCards() }
                </ScrollView>
            );
        } else if (!loading && !loaded) {
            return (
                <View style={viewStyle}>
                    <Text>Something went wrong.</Text>
                </View>
            );
        } 
        return null;
    }
}

const styles = {
    albumListContainerStyle: {
        padding: 5
    },
    viewStyle: {
        padding: 10,
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

