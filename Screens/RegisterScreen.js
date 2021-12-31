import React, {useState} from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity,TextInput,ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'react-native-paper';
import SignInScreen from './SignInScreen';
import HomeScreen from './HomeScreen';


const RegisterScreen = ({navigation}) => {

    const { colors } = useTheme();

    const [data, setData] = useState({
        email:'',
        password:'',
        confirm_password:'',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
      });
    
      const textInputChange = (val) => {
        if(val.length != 0 ){
          setData({
            ...data,
            email: val,
            check_textInputChange: true
          });
        }else{
          setData({
            ...data,
            email: val,
            check_textInputChange: false
          });
        }
      };
    
      const handlePasswordChange = (val) => {
        setData({
          ...data,
          password:val
        });
      };

      const handleConfirmPasswordChangeEntry = (val) => {
        setData({
            ...data,
            confirm_password:val
          });
      };
    
      const updateSecureTextEntry = () => {
        setData({
          ...data,
          secureTextEntry: !data.secureTextEntry
        });
      };

      const updateConfirmSecureTextEntry = () => {
        setData({
          ...data,
          confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
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
            <Text style={styles.title}>Register individual account</Text>
        </View>
        <ScrollView>
            <View style={styles.content}>
                <Text style={styles.subtitle}>Register with </Text>
                <View style={styles.regwith}>
                    <TouchableOpacity>
                        <FontAwesome 
                            name="google"
                            color='#8c5'
                            size={25}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.regwith}>
                    <TouchableOpacity>
                        <FontAwesome 
                            name="facebook"
                            color='blue'
                            size={25}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.regwith}>
                    <TouchableOpacity>
                        <FontAwesome 
                            name="linkedin"
                            color='#09f'
                            size={25}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={{textAlign:'center',color:'#000'}}>Or</Text>
            <Text style={{paddingLeft:15,marginTop:10}}>First Name</Text>
            <TextInput 
                placeholder='jezeniel' 
                placeholderTextColor="#666666" 
                style={styles.textinput} 
            />
            <Text style={{paddingLeft:15,marginTop:10}}>Last Name</Text>
            <TextInput 
                placeholder='zapanta' 
                placeholderTextColor="#666666" 
                style={styles.textinput} 
            />
            <Text style={{paddingLeft:15,marginTop:10}}>Email Address</Text>
            <TextInput 
                placeholder='Enter your email address' 
                placeholderTextColor="#666666" 
                style={styles.textinput}
                onChangeText = {(val) => textInputChange(val)}
            />
            <Text style={{paddingLeft:15,marginTop:10}}>Password</Text>
            <View style={styles.textinput}>
                <TextInput 
                    placeholder='Enter password' 
                    secureTextEntry={data.secureTextEntry ? true:false}
                    placeholderTextColor="#666666" 
                    underlineColorAndroid="transparent"
                    style={{width:'100%',height:50}}
                    onChangeText = {(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity style={{paddingTop:10}} onPress={updateSecureTextEntry}>
                <Text style={{color:'#00f'}}>Show</Text>
                </TouchableOpacity>
            </View>
            <Text style={{paddingLeft:15}}>. Passsword should be 8-20 characters</Text>
            <Text style={{paddingLeft:15}}>. Passsword should have a lower case letter</Text>
            <Text style={{paddingLeft:15}}>. Passsword should have a upper case letter</Text>
            <Text style={{paddingLeft:15}}>. Passsword should have a number or acceptable characters</Text>
            <Text style={{paddingLeft:15,marginTop:10}}>Confirm Password</Text>
            <View style={styles.textinput}>
                <TextInput 
                    placeholder='Re-type password'
                    secureTextEntry={data.confirm_secureTextEntry? true:false}
                    onChangeText={(val) => handleConfirmPasswordChangeEntry(val)}
                    placeholderTextColor="#666666" 
                    underlineColorAndroid="transparent"
                    style={{width:'100%',height:50}}
                />
                <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                <Text style={{color:'#00f',paddingTop:8}}>Show</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={()=> navigation.navigate(HomeScreen)} 
                style={{height:50, width:'98%',backgroundColor:'#30839f',margin:20}}>
                <Text style={{textAlign:'center', paddingTop:15}}>Register account</Text>
            </TouchableOpacity>
        </ScrollView>
      </View>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop:60,
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
  subtitle:{
    fontWeight:'bold',
    fontSize: 15,
    paddingBottom:25,
    paddingRight:30,
  },
  regwith:{
      paddingRight:50,
  },
  textinput:{
      flexDirection:'row',
      paddingLeft:20,
      color: '#05375a',
      height: 50,
      marginHorizontal:12,
      borderWidth: 1,
      marginBottom:20,
  },
});