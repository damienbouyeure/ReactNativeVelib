import * as React from 'react';
import {Text, View, Dimensions, AsyncStorage, Image} from 'react-native';
import MapView from 'react-native-maps';
import {DataContext} from './DataContext';
import {useContext} from 'react';


export const  Carte = props => {
    const {  data, myPosition} = useContext(DataContext);
        return (

                    <View>
                        <MapView
                            initialRegion={{
                                latitude: myPosition.latitude,
                                longitude: myPosition.longitude,
                                latitudeDelta: 0.01,
                                longitudeDelta: 0.02,
                            }}
                            style={{
                                width: Dimensions.get('window').width,
                                height: Dimensions.get('window').height,
                            }}
                            showsUserLocation={true}
                        >
                            {data.map((station, key) => (

                                <MapView.Marker
                                    coordinate={{
                                        latitude: station.fields.geo[0],
                                        longitude: station.fields.geo[1],
                                    }}
                                    title={station.fields.station_name}
                                    key={station.recordid}
                                >
                                    <Image
                                        source={{uri: 'http://lh3.ggpht.com/IWpnHYF_1CziVV6d9MNsuIK3NcbUzz_ieFGBO_NNw2gQ50Xm47Ei11Ol6_WPIgHJ3A'}}
                                        style={{height: 35, width: 35}}/>

                                </MapView.Marker>),
                            )}
                        </MapView>
                    </View>
        );
}