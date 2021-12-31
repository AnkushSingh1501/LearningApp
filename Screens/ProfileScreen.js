import React from 'react';
import { View, Text, Button, StyleSheet, TextInput,Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const Progress =({step, steps, height}) => {
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  },[]);

  React.useEffect(() => {
    reactive.setValue(-width +(width*step) / steps);
  }, [step, width]);

  return (
    <>
      <Text>
        Progress ({(step/steps) * 100} %)
      </Text>
      <View 
        onLayout={e => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          height,
          backgroundColor:'rgba(0,0,0,0.1)',
          borderRadius:height,
          overflow:'hidden'
        }}
      >
        <Animated.View 
          style={{
            height,
            width:'100%',
            borderRadius: height,
            backgroundColor: '#009387',
            position:'absolute',
            left:0,
            top: 0,
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          }}
        />
      </View>
    </>
  );
};

const ProfileScreen = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % (10 + 1))
    }, 1000);
    return () =>{
      clearInterval(interval);
    }
  }, [index])

    return (
      <View style={styles.container}>
        <View style={{alignItems:'flex-end',justifyContent:'flex-end',paddingRight:"1%",flexDirection:'row',paddingBottom:'1%'}}>
          <Icon.Button name= 'notifications-outline' size={20} backgroundColor="#CBC3E3" iconStyle={{color:'#000'}} onPress={()=>{}}></Icon.Button>
          <Avatar.Image 
            source={{
              uri: 'https://media.istockphoto.com/photos/energy-in-the-city-picture-id1303237166'
            }}
            size={35}
            />
        </View>
        <View>
          <Text style={{fontWeight:'bold',paddingLeft:'2%'}}>Continue learning</Text>
        </View>
        <View style={{height:'25%', width:'95%',marginHorizontal:'2%',backgroundColor:'#fff', marginTop:'1%'}}>
          <Text style={{fontWeight:'bold', paddingLeft:'2%'}}>Introduction to hadoop</Text>
          <Text style={{paddingLeft:'2%'}}>Learn ipsum doice sit amet, consecetur adipicinsg edit. Omare premium placemnt ut pioter</Text>
          <View style={{paddingHorizontal:'2%', paddingVertical:'1%'}}>
            <Progress step={index} steps={10} height={10} />
          </View>
          <View style={{alignItems:'flex-end',paddingRight:'2%'}}>
            <TouchableOpacity style={{flexDirection:'row',marginTop:'1.5%',height:'100%',width:'100%',backgroundColor:'#074BB4'}}>
              <Text style={{color:'#fff'}}>   Continue learning </Text>
              <Icon name ='arrow-forward' style={{fontSize:20,color:'#fff',paddingLeft:10}} />
            </TouchableOpacity>
            </View>
        </View>
      </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#CBC3E3'
  },
  btn:{
    flexDirection:'row',
  },
});