import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {Carte} from './Carte';
import {ApiVelibGet} from './ApiVelibGet';
import {VelibStation} from './VelibStation';



const ListStack = createStackNavigator({
        ApiVelib: {screen: ApiVelibGet},
        VelibStation: {screen: VelibStation},

    },
    {
        initialRouteName: 'ApiVelib',
    }
);


const TabNavigator = createMaterialBottomTabNavigator({
        Liste: {screen: ListStack},
        Carte: {screen: Carte},
    },
    {
        initialRouteName: 'Liste',
        barStyle: { backgroundColor: '#517fa4' },
    }
);


export default createAppContainer(TabNavigator);