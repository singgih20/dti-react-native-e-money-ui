import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { GetStarted, Splash, Login, Register, Home, History, Profile, TopUp, FinishTopUp, Transfer, TransferSecond, TransferSuccess, QRConfirm, QRSuccess, QRScan } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name="TopUp" component={TopUp} />
            <Stack.Screen name="FinishTopUp" component={FinishTopUp} options={{ headerShown: false }} />
            <Stack.Screen name="Transfer" component={Transfer} />
            <Stack.Screen name="TransferSecond" component={TransferSecond} />
            <Stack.Screen name="TransferSuccess" component={TransferSuccess} />
            <Stack.Screen name="QRConfirm" component={QRConfirm} />
            <Stack.Screen name="QRSuccess" component={QRSuccess} />
            <Stack.Screen name="QRScan" component={QRScan} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router;