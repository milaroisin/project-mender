import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Image, View, Text } from 'react-native';
import React from 'react';
import BottomNavigator from './BottomNavigator';
import WorkOrderPage from '../pages/WorkOrderPage';
import HeaderAddress from '../components/HeaderAddress';
import HeaderButton from '../components/HeaderButton';

const menderLogo = require('../../assets/menderlogo.png')

//Navigator for top header
const BottomStackNavigatorRoot = createStackNavigator({
    BottomNavigator: BottomNavigator
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Image style={{ marginLeft: 10, width: 50, height: 50 }} source={menderLogo} />
            ),
            headerTitle: (
                <View style={{ alignItems: 'center', width: '100%' }}>
                    <HeaderAddress/>
                </View>
            ),
            headerRight: (
                <View style={{ marginRight: 10, width: 50, height: 50 }}>
                    <HeaderButton navigation={navigation}/>
                </View>
            )
        }
    }
})

//navigator at root level for Work Order Modal
const RootNavigator = createStackNavigator({
    MainApp: {
        screen: BottomStackNavigatorRoot,
    },
    Modal: {
        screen: WorkOrderPage,
    },
},{
    headerMode: 'none',
    mode: 'modal',
})
const BottomStackNavigator = createAppContainer(RootNavigator);

export default BottomStackNavigator;
