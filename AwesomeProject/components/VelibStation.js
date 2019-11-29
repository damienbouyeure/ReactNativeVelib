import React, {useState, useEffect, useContext} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import { Button, Divider  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';
import {DataContext} from './DataContext';
import {getDistance} from 'geolib';


export const VelibStation = props => {


    const {myPosition, favorite, setFavorite} = useContext(DataContext);

    const station = props.navigation.getParam('station');
    const recordid = props.navigation.getParam('recordid');
    let icone
    useEffect(() =>
    {

            if (favorite == recordid) {
                icone = <Image
                    source={{uri: 'https://cdn2.iconfinder.com/data/icons/places-4/100/heart_place_marker_location_love-512.png'}}
                    style={{height: 35, width: 35}}/>;
            } else {
                icone = <Image
                    source={{uri: 'http://lh3.ggpht.com/IWpnHYF_1CziVV6d9MNsuIK3NcbUzz_ieFGBO_NNw2gQ50Xm47Ei11Ol6_WPIgHJ3A'}}
                    style={{height: 35, width: 35}}/>;
            }
        ;
    }, [favorite])
    ;


    return (

        <View style={{flex: 1}}>

            <View style={{flex: 0.5, alignItems: 'center'}}>
                <MapView
                    initialRegion={{
                        latitude: station.geo[0],
                        longitude: station.geo[1],
                        latitudeDelta: 0.004,
                        longitudeDelta: 0.004,
                    }}
                    style={{
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height * 0.45,
                    }}
                    showsUserLocation={true}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: station.geo[0],
                            longitude: station.geo[1],
                        }}
                        title={station.station_name}
                    >
                        <Image
                            source={{uri: 'http://lh3.ggpht.com/IWpnHYF_1CziVV6d9MNsuIK3NcbUzz_ieFGBO_NNw2gQ50Xm47Ei11Ol6_WPIgHJ3A'}}
                            style={{height: 35, width: 35}}/>
                    </MapView.Marker>

                </MapView>
            </View>


            <View style={{flex: 0.5}}>
                <View style={{flex: 0.1, flexDirection: 'row'}}>
                    <View style={{flex: 0.4, alignItems: 'flex-start', justifyContent: 'center'}}>
                        <Text> Nom de la station </Text>
                    </View>
                    <View style={{flex: 0.6, alignItems: 'flex-start', justifyContent: 'center', borderLeftWidth: 1,
                        borderLeftColor: '#517fa4',}}>
                        <Text>  {station.station_name}</Text>
                    </View>
                </View>

                <Divider style={{ backgroundColor: '#517fa4' }} />

                <View style={{flex: 0.1, flexDirection: 'row'}}>
                    <View style={{flex: 0.4, alignItems: 'flex-start', justifyContent: 'center',   }}>
                        <Text> Distance : </Text>
                    </View>
                    <View style={{flex: 0.6, alignItems: 'flex-start', justifyContent: 'center', borderLeftWidth: 1,
                        borderLeftColor: '#517fa4',}}>
                        <Text>  {getDistance(
                            {latitude: myPosition.latitude, longitude: myPosition.longitude},
                            {latitude: station.geo[0], longitude: station.geo[1]},
                        ) + ' Mètre'}</Text>
                    </View>
                </View>


                <View style={{flex: 0.1}}>
                    <Button title={'Rajouter au favori'}
                            icon={
                                <Icon
                                    name='favorite'
                                    color='#517fa4'
                                />
                            }
                            onPress={() => {
                                setFavorite(recordid);
                            }
                            }
                            type="outline"

                    />
                </View>


            </View>
        </View>


    );
};

VelibStation.navigationOptions = ({navigation}) => ({

    title: navigation.getParam('station').station_name,


});


