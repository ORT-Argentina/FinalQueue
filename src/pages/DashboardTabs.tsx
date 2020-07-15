import React, { memo } from 'react';
import { StyleSheet, Platform } from 'react-native';
import Students from './Students';
import StudentsB from './StudentsB';
import Dashboard from './Dashboard';
import { Navigation } from '../types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type Props = {
    navigation: Navigation;
};

const getTabBarIcon = (name: string) => ({
    color,
    size,
}: {
    color: string;
    size: number;
}) => <MaterialCommunityIcons name={name} color={color} size={size} />;

type BottomTabParams = {
    Dashboard: undefined;
    Contacts: undefined;
};

const BottomTabs = createBottomTabNavigator<BottomTabParams>();
const Stack = createStackNavigator();

const DashboardTabs = ({ navigation }: Props) => {

    return (
        <BottomTabs.Navigator
        screenOptions={{
            tabBarButton:
            Platform.OS === 'web'
                ? undefined
                : (props) => <TouchableBounce {...props} />,
            
        }}
        >
        <BottomTabs.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
            title: 'Dashboard',
            tabBarIcon: getTabBarIcon('file-document-box'),
            }}
            initialParams={{ itemId: 42 }}
        />
        <BottomTabs.Screen
            name="AlumnosA"
            component={Students}
            options={{
            title: 'Alumnos A',
            tabBarIcon: getTabBarIcon('contacts'),
            }}
            />
            <BottomTabs.Screen
                name="AlumnosB"
                component={StudentsB}
                options={{
                    title: 'Alumnos B',
                    tabBarIcon: getTabBarIcon('contacts'),
                }}
            />
        </BottomTabs.Navigator>
    )
};


const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        padding: 8,
    },
    button: {
        margin: 8,
    },
});

export default memo(DashboardTabs);