import React, {useState, useEffect, useContext, StyleSheet} from 'react';
import {AsyncStorage, View , FlatList} from 'react-native';
import { Button } from 'react-native-elements';
import VelibStation from './VelibStation';
import {DataContext} from './DataContext';

export const ApiVelibGet= props => {

    const {  data} = useContext(DataContext);
        return (
                        <View>
                            <FlatList
                                data={data}
                                renderItem={({item}) => <Button
                                    title={item.fields.station_name}
                                    onPress={() =>
                                        props.navigation.navigate('VelibStation', {station: item.fields, recordId: item.recordid})
                                    }
                                    type="outline"
                                />}
                                keyExtractor={item => item.fields.station_code}
                            />
                        </View>
        );
}

ApiVelibGet.navigationOptions = ({navigation}) => ({

    title: 'Liste des Stations',
    headerTitleStyle: {
        width: '90%',
        textAlign: 'center',
    },

});

