import React, { useRef,useState } from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity,TextInput, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';
import RegisterScreen from './RegisterScreen';
import ProfileScreen from './ProfileScreen';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../component/context';
import Users from '../BackendApi/users';

const SignInScreen = ({navigation}) => {

  const { colors } = useTheme();
  const [checked, setChecked] = React.useState(false);

  const [data, setData] = useState({
    username:'',
    password:'',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if(val.trim().length >= 4 ){
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser:true,
      });
    }else{
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser:false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if(val.length >= 8 ){
      setData({
        ...data,
        password:val,
        isValidPassword:true,
      });
    }else{
      setData({
        ...data,
        password:val,
        isValidPassword:false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  };

  const handleValidUser = (val) => {
    if(val.trim().length >= 4){
      setData({
        ...data,
        isValidUser:true,
      });
    }else{
      setData({
        ...data,
        isValidUser:false,
      });
    }
  };

  const loginHandle = (userName, password) => {
    const foundUser = Users.filter( item => {
      return userName == item.username && password == item.password;
  } );

  if ( data.username.length == 0 || data.password.length == 0 ) {
      Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
          {text: 'Okay'}
      ]);
      return;
  }

  if ( foundUser.length == 0 ) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
          {text: 'Okay'}
      ]);
      return;
  }
  signIn(foundUser);
  };
    
    return (
      <View style={styles.container}>
          <View style={styles.content}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <FontAwesome 
                    name="angle-left"
                    color={colors.text}
                    size={25}               
                />
            </TouchableOpacity>
            <Text style={styles.title}>Login as</Text>
          </View>
          <View 
            style={{flexDirection:'row', justifyContent: 'space-evenly', marginHorizontal:0}}>
            <TouchableOpacity onPress={()=>{}}
            style={{height:40, width:120, backgroundColor:'#fddcb4'}}>
              <Text style={{textAlign:"center", paddingTop:10}}>Employee</Text>  
            </TouchableOpacity>    
            <TouchableOpacity onPress={()=>{}}
            style={{height:40, width:120, backgroundColor:'#fddcb4'}}>
              <Text style={{textAlign:"center", paddingTop:10}}>Corporate</Text>  
            </TouchableOpacity>    
          </View>
          <TextInput 
                placeholder='Email-id' 
                placeholderTextColor="#666666" 
                style={styles.textinput} 
                onChangeText = {(val) => textInputChange(val)}
                onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            } 
          <View style={styles.textinput}>
            <TextInput 
                  placeholder='Enter password' 
                  placeholderTextColor="#666666" 
                  underlineColorAndroid="transparent"
                  secureTextEntry={data.secureTextEntry ? true : false}
                  style={{width:'100%',height:50}}
                  onChangeText = {(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity style={{paddingTop:10}} onPress={updateSecureTextEntry} >
              <Text style={{color:'#00f'}}>Show</Text>
            </TouchableOpacity>
          </View>
          { data.isValidPassword ? null : 
              <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Password must be 8-20 characters long.</Text>
              </Animatable.View>
            }
          <View style={[styles.content, {marginVertical:25}]}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={{paddingTop:7}}>Remember me</Text>
            <TouchableOpacity >
              <Text style={{color:'#00f',paddingTop:8,paddingLeft:'30%'}}>Forget password ?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => {loginHandle(data.username, data.password)}}
            style={{width:'96%', height:50,margin:20,backgroundColor:'#ADD8E6'}}
          >
            <Text style={{textAlign:'center', paddingTop:12,fontSize:18,color:'#fff'}}>Log in</Text>
          </TouchableOpacity>
          <View style={styles.content}>
            <Text> Don't have an account? </Text>
            <TouchableOpacity onPress={()=>navigation.navigate(RegisterScreen)}>
              <Text style={{color:'#00f'}}>Create new account</Text>
            </TouchableOpacity>
          </View>
      </View>
    );

};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop:50,
  },
  content:{
    flexDirection:'row',
        paddingLeft:20,
  },
  title:{
    paddingLeft:20,
    fontWeight:'bold',
    fontSize: 20,
    paddingBottom:40,
  },
  textinput:{
    flexDirection:'row',
    marginTop:40,
    paddingLeft:20,
    height: 50,
    marginHorizontal:12,
    borderWidth: 1,
    
},
errorMsg: {
  color: '#FF0000',
  fontSize: 14,
  paddingLeft:10,
},
});