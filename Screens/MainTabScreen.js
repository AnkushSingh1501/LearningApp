import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from './ProfileScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchScreen from './SearchScreen';
import CategoryScreen from './CategoryScreen';
import MyCourseScreen from './MyCourseScreen';
import CartScreen from './CartScreen';


const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
//const DetailsStack = createStackNavigator();

const MainTabScreen = ({navigation}) => (
    <Tab.Navigator 
      initialRouteName="Home"
      activeColor="#0000FF"
      barStyle={{ backgroundColor: '#fff' }}
      screenOptions={{ headerShown: false}}
    >
      <Tab.Screen 
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarShowLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
          tabBarLabelPosition: 'below-icon'
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-search" color={color} size={26} />
          ),
          tabBarLabelPosition: 'below-icon'
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          tabBarShowLabel: 'Categories',
          tabBarIcon: ({ color }) => (
            <MaterialIcons 
                name="category"
                size={26}
                color={color}
            />
          ),
          tabBarLabelPosition: 'below-icon'
        }}
      />
      <Tab.Screen
        name="My Course"
        component={MyCourseScreen}
        options={{
          tabBarShowLabel: 'My Course',
          tabBarIcon: ({ color }) => (
            <AntDesign 
                name="book"
                size={26}
                color={color}
            />
          ),
          tabBarLabelPosition: 'below-icon'
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarShowLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-cart" color={color} size={26} />
          ),
          tabBarLabelPosition: 'below-icon'
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator>
            <HomeStack.Screen name="Profile" component={ProfileScreen} options={{
              headerStyle: { backgroundColor: '#CBC3E3' },
              headerLeft: () => (
                  <Icon.Button name="ios-menu-sharp" size={25} backgroundColor="#CBC3E3" iconStyle={{color:'#000'}} onPress={() => navigation.openDrawer()}></Icon.Button>
              ),
            }} />
    </HomeStack.Navigator>
    );
    
    {/*const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#1f65ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <DetailsStack.Screen name="Details" component={RegisterScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </DetailsStack.Navigator>
          );*/}