import React, { Component } from 'react';
import { View } from 'react-native';
import { name as appName } from '../app.json';

import Header from './components/header';
import AlbumList from './components/albumlist';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title={appName} />
        <AlbumList />
      </View>
    );
  }
}
