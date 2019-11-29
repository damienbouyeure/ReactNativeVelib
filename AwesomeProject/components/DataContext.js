import React, {useState, useEffect, createContext} from 'react';
import {AsyncStorage} from 'react-native';

export const DataContext = createContext();

export const DataProvider = props => {
    const [data, setData] = useState(null);
    const [myPosition, setMyPosition] = useState(null);
    const [favorite, setFavorite] = useState(null);
    _storeData = async () => {
        await fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=25&geofilter.distance=' + myPosition.latitude + '%2C' + myPosition.longitude + '%2C' + 2000)
            .then((response) => response.json())
            .then((responseJson) => {

                AsyncStorage.setItem('VelibData', JSON.stringify(responseJson.records));
                setData(responseJson.records);
            }).catch(
                AsyncStorage.getItem('VelibData').then((value) => {

                    setData(JSON.parse(value));
                }),
            );

    };

    _getPosition = async () => {
        await navigator.geolocation.getCurrentPosition(info => {

                setMyPosition(info.coords);
                this._storeData();

            },
        );

    };

    useEffect(() => {
        this._getPosition();


    }, []);

    return (
        <DataContext.Provider
            value={{
                data, setData, myPosition, setMyPosition, favorite, setFavorite,
            }}
        >
            {props.children}
        </DataContext.Provider>
    );

};