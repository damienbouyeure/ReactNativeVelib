import * as React from 'react';
import { Button, View, Text } from 'react-native';


export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Menu"
                    onPress={() =>
                        this.props.navigation.navigate('MenuScreen')
                    }
                />
            </View>
        );
    }
}


