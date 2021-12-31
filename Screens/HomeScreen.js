import React from 'react';
import { StyleSheet, Text, View ,Image, ImageBackground,TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import RegisterScreen from './RegisterScreen';

const HomeScreen = ({navigation}) => {

    const { colors } = useTheme();

    const renderContent = () => (
        <Animatable.View style={[styles.contain]} animation='fadeInUpBig'>
        <View style={{alignItems:'flex-start'}}>
            <View style={{flexDirection:'row'}}>
                <Text style={[styles.title,{paddingRight:50}]}>Join us</Text>
                <TouchableOpacity style={{paddingLeft:150,marginTop:15}} onPress={()=> sheetRef.current.snapTo(1)}>
                    <FontAwesome 
                        name="times"
                        color={colors.text}
                        size={25}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.description}>To begin this journey, tell us what type of account you'd be opening.</Text>
        
            <View style={styles.context}>
                <TouchableOpacity onPress={()=> {navigation.navigate(RegisterScreen)}}>  
                    <View style={styles.context}>
                        <FontAwesome 
                            name="user"
                            color={colors.text}
                            size={20}
                        />
                        <Text style={styles.headername}>Student</Text>
                    </View>
                    <View>
                        <Text style={[styles.des]}>Personal account to manage all your activities</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> sheetRef.current.snapTo(1)}>
                    <View>
                        <FontAwesome 
                            name="arrow-right"
                            color={colors.text}
                            size={20}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.context}>
                <TouchableOpacity onPress={()=> {}}>  
                    <View style={styles.context}>
                        <FontAwesome 
                            name="id-card"
                            color={colors.text}
                            size={20}
                        />
                        <Text style={styles.headername}>Employee</Text>
                    </View>
                    <View>
                        <Text style={[styles.des]}>Personal account to manage all your activities</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> sheetRef.current.snapTo(1)}>
                    <View>
                        <FontAwesome 
                            name="arrow-right"
                            color={colors.text}
                            size={20}
                        />
                    </View>
                </TouchableOpacity>
            </View>




            <View style={styles.context}>
                <TouchableOpacity onPress={()=> {}}>  
                    <View style={styles.context}>
                        <FontAwesome 
                            name="building"
                            color={colors.text}
                            size={20}
                        />
                        <Text style={styles.headername}>Enterprise</Text>
                    </View>
                    <View>
                        <Text style={[styles.des]}>Personal account to manage all your activities</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> sheetRef.current.snapTo(1)}>
                    <View>
                        <FontAwesome 
                            name="arrow-right"
                            color={colors.text}
                            size={20}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            </View>
      </Animatable.View>
    );

    const sheetRef = React.createRef();
    const fall = new Animated.Value(1);

    return(
            <View style={styles.container }>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[330, 0]}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
                enabledContentTapInteraction={false}
                renderContent={renderContent}
     
            />
                <ImageBackground source={require('../assets/Home.png')} style = {{width:'100%', height:'90%'}}/>
                <View style={styles.button}>
                    <View style={styles.btn}>
                        <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
                            <LinearGradient
                                colors={['#000', '#000']}
                                style={styles.signIn}
                            ><Text style={{color:"#fff"}}>Join Us</Text>
                            </LinearGradient>    
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=> navigation.navigate('SignInScreen')}>
                            <LinearGradient
                                colors={['#fff', '#f2f2f2']}
                                style={[styles.signIn,{borderColor:'#00f', borderWidth:1}]}
                            ><Text style={{color:'#00f'}}>Login</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    button:{
      flexDirection:'row',
      justifyContent:'center',
    },
    btn:{
        paddingRight:20
    },
    signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    contain: {
        flex: 1, 
        backgroundColor: '#fff',
        paddingBottom:40,
        alignItems:'center',
        left:0,
        right:0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop:15,
      },
    
      title:{
        paddingLeft:20,
        fontWeight:'bold',
        fontSize: 30,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        paddingBottom:10,
      },
      description:{
          fontSize:15,
          paddingBottom:10,
          paddingLeft:20,
          paddingRight:20,
      },
      headername:{
          fontSize:20,
          fontWeight:'bold',
          paddingLeft:20,
      },
      des:{
          fontSize:13,
          paddingLeft:45,
          marginTop:-10,
      },
      context:{
          flexDirection:'row',
          paddingLeft:10,
          paddingBottom:20,
      },
  });
  