import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppNavigator from './components/AppNavigator';
import {DataProvider} from './components/DataContext';

export default class App extends React.Component {
    render() {
        return (
            <DataProvider>
                <AppNavigator/>
            </DataProvider>);
    }
}
