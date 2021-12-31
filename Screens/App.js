import  React ,{useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator } from 'react-native-paper';
import RootStackScreen from './RootStackScreen';
import MainTabScreen from './MainTabScreen';
import DrawerContent from './DrawerContent';
import {AuthContext} from '../component/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

export default function App() {

  //const [isloading, setIsloading] = useState(true);
  //const [userToken, setUserToken] = useState(null);

  const initialLoginState = {
    isloading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return{
          ...prevState,
          userToken: action.token,
          isloading: false
        };
      case 'LOGIN':
        return{
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isloading: false
        };
      case 'LOGOUT':
        return{
          ...prevState,
          userName: null,
          userToken: null,
          isloading: false
        };
      case 'REGISTER':
        return{
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isloading: false
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      //setUserToken('cnc');
      //setIsloading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      try{
        userToken='cdjn';
        await AsyncStorage.setItem('userToken', userToken)
      }catch(e){
        console.log(e);
      }  
      //console.log('userToken:',userToken);
      dispatch({type:'LOGIN', id:userName, token: userToken});
    },
    signOut: async() => {
      //setUserToken(null);
      //setIsloading(false);
      try{
        await AsyncStorage.removeItem('userToken')
      }catch(e){
        console.log(e);
      }
      dispatch({type:'LOGOUT'});
    },
    signUp: () => {
      //setUserToken('cnc');
      //setIsloading(false);
    },
  }),[]);

  useEffect(() => {
    setTimeout(async()=> {
    //setIsloading(false);
    let userToken;
    userToken = null;
    try{
      userToken = await AsyncStorage.getItem('userToken')
    }catch(e){
      console.log(e);
    }
    //console.log('userToken:',userToken);
    dispatch({type:'RETRIEVE_TOKEN', token: userToken});
  },1000);
  }, []);

  if(loginState.isloading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size='large'/>
      </View>
    );
  };

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken != null ? (
          <Drawer.Navigator screenOptions={{ headerShown: false}} drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={MainTabScreen} />
          </Drawer.Navigator>
        ):
        <RootStackScreen></RootStackScreen>
        }
        
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
