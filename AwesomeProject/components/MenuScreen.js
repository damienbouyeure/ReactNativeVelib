import * as React from 'react';
import { Button, View, Text } from 'react-native';


export default class MenuScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{alignItems: 'center'}}>Choice your App</Text>
                <Button
                    title="Animation"
                    onPress={() =>
                        this.props.navigation.navigate('Animated')
                    }
                />

                <Button
                    title="Go Home"
                    onPress={() =>
                        this.props.navigation.navigate('ApiVelib')
                    }
                />

            </View>
        );
    }
}


