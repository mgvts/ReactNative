import {NavigationContainer} from "@react-navigation/native";
import {BlancScreen} from "../screens/BlancScreen";
import {AccountScreen} from "../screens/AccountScreen";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button, Image, View} from "react-native";
import {Icons} from "../assets/icons/export";
import * as React from 'react';

const Tab = createBottomTabNavigator();


export const Router = (props) => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                }}
            >
                <Tab.Screen name="Account" component={AccountScreen}
                            options={{
                                tabBarLabel: '',
                                tabBarIcon: ({color, size}) =>  (
                                    <View style={{
                                        backgroundColor: 'green',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 50,
                                        height: 24,
                                        width: 24
                                    }}>
                                        <Icons.Person size={size}/>
                                    </View>
                                )
                            }}
                />
                <Tab.Screen name="Blanc" component={BlancScreen}
                            options={{
                                tabBarLabel: '',
                                tabBarIcon: ({color, size}) => (
                                    <View style={{
                                        backgroundColor: 'green',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 50,
                                        height: 24,
                                        width: 24
                                    }}>
                                        <Icons.Search size={size}  />
                                    </View>
                                )
                            }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}