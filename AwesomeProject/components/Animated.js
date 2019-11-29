import React, {useState, useEffect, Component} from 'react';
import {Animated, Text, View, ScrollView, Button} from 'react-native';

const SlideInView = props => {
    const [slideAnime] = useState(new Animated.Value(0.15));  // Initial value for opacity: 0
    React.useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(slideAnime, {
                    toValue: 0.85,
                    duration: 1000
                }), Animated.timing(slideAnime, {
                    toValue: 0.15,
                    duration: 1000
                })
            ]),
            {
                iterations: 100
            }
        ).start();
    }, []);

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                flex: slideAnime,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default class AnimatedScroll extends Component {
    render() {
        return (
        <View style={{flex: 1,backgroundColor: 'black'}}>
            <SlideInView style={{backgroundColor: 'white'}} >
                <SlideInView style={{backgroundColor: 'black'}} >
                    <Button
                        title="Go Home"
                        onPress={() =>
                            this.props.navigation.popToTop()
                        }
                    />
                </SlideInView>


            </SlideInView>

        </View>
    )
    }


}
