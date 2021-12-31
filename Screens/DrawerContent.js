import React, {useState} from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Drawer } from 'react-native-paper';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../component/context';

export default function DrawerContent(props) {

  const {signOut} = React.useContext(AuthContext);

    const [focus1, setfocus1] = useState(0);
    const [focus2, setfocus2] = useState(0);
    const [focus3, setfocus3] = useState(0);
    const [focus4, setfocus4] = useState(0);
    const [focus5, setfocus5] = useState(0);
    const [NestedDrawerItem1, setNestedDrawerItem1] = useState(false);
    const [NestedDrawerItem2, setNestedDrawerItem2] = useState(false);
    const [NestedDrawerItem3, setNestedDrawerItem3] = useState(false);
    const [NestedDrawerItem4, setNestedDrawerItem4] = useState(false);
    const [NestedDrawerItem5, setNestedDrawerItem5] = useState(false);

    const NestedDrawerItemFun = (arg) => {
      if (arg == 'module 1'){
        if (NestedDrawerItem1 == true){
          setNestedDrawerItem1(false);
        }
        else{
          setNestedDrawerItem1(true);
        }  
      }
      if (arg == 'module 2'){
        if (NestedDrawerItem2 == true){
          setNestedDrawerItem2(false);
        }
        else{
          setNestedDrawerItem2(true);
        }  
      }
      if (arg == 'module 3'){
        if (NestedDrawerItem3 == true){
          setNestedDrawerItem3(false);
        }
        else{
          setNestedDrawerItem3(true);
        }  
      }
      if (arg == 'module 4'){
        if (NestedDrawerItem4 == true){
          setNestedDrawerItem4(false);
        }
        else{
          setNestedDrawerItem4(true);
        }  
      }
      if (arg == 'module 5'){
        if (NestedDrawerItem5 == true){
          setNestedDrawerItem5(false);
        }
        else{
          setNestedDrawerItem5(true);
        }  
      }
    };

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={{fontWeight:'bold', fontSize:20}}>Content</Text>
          <View style={{paddingLeft:'55%'}}>
            <Icon.Button name='close' size={25} backgroundColor="#fff" iconStyle={{color:'#000'}} onPress={()=>{}}></Icon.Button>
          </View>
        </View>
        <DrawerContentScrollView {...props}>
          <View>
            <Drawer.Section>
              <DrawerItem
                 focused={focus1 == 1 ? true:false}
                label={({focused, color}) => (
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontWeight:'bold'}}>Module 1</Text>
                    {
                      NestedDrawerItem1 == true && 
                      <AntDesign name='up' size={25} />
                    }
                    {
                      NestedDrawerItem1 == false && 
                      <AntDesign name='down' size={25} />
                    }
                  </View>
                )}
                onPress ={() =>{
                  setfocus1(1);
                  setfocus2(0);
                  setfocus3(0);
                  setfocus4(0);
                  setfocus5(0);
                  //props.navigation.navigate();
                  NestedDrawerItemFun('module 1');
                }}
                
              />
              {NestedDrawerItem1 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='play-circle-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop</Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
              {NestedDrawerItem1 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='reader-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop </Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
              {NestedDrawerItem1 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='play-circle-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop </Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
              {NestedDrawerItem1 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='play-circle-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop </Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
            </Drawer.Section>
            <Drawer.Section>
              <DrawerItem
                 focused={focus2 == 1 ? true:false}
                label={({focused, color}) => (
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontWeight:'bold'}}>Module 2</Text>
                    {
                      NestedDrawerItem2 == true && 
                      <AntDesign name='up' size={25} />
                    }
                    {
                      NestedDrawerItem2 == false && 
                      <AntDesign name='down' size={25} />
                    }
                  </View>
                )}
                onPress ={() =>{
                  setfocus1(0);
                  setfocus2(1);
                  setfocus3(0);
                  setfocus4(0);
                  setfocus5(0);
                  //props.navigation.navigate();
                  NestedDrawerItemFun('module 2');
                }}
              />
              {NestedDrawerItem2 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='play-circle-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop </Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
              {NestedDrawerItem2 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='reader-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop </Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
              {NestedDrawerItem2 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='play-circle-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop</Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
              {NestedDrawerItem2 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='play-circle-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop </Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
            </Drawer.Section>
            <Drawer.Section>
              <DrawerItem
                 focused={focus3 == 1 ? true:false}
                label={({focused, color}) => (
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontWeight:'bold'}}>Module 3</Text>
                    {
                      NestedDrawerItem3 == true && 
                      <AntDesign name='up' size={25} />
                    }
                    {
                      NestedDrawerItem3 == false && 
                      <AntDesign name='down' size={25} />
                    }
                  </View>
                )}
                onPress ={() =>{
                  setfocus1(0);
                  setfocus2(0);
                  setfocus3(1);
                  setfocus4(0);
                  setfocus5(0);
                  //props.navigation.navigate();
                  NestedDrawerItemFun('module 3');
                }}
              />
              {NestedDrawerItem3 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='play-circle-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop </Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
              {NestedDrawerItem3 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='reader-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop </Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
              {NestedDrawerItem3 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='play-circle-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop</Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
              {NestedDrawerItem3 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='play-circle-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop</Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
            </Drawer.Section>
            <Drawer.Section>
              <DrawerItem
                 focused={focus4 == 1 ? true:false}
                label={({focused, color}) => (
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontWeight:'bold'}}>Module 4</Text>
                    {
                      NestedDrawerItem4 == true && 
                      <AntDesign name='up' size={25} />
                    }
                    {
                      NestedDrawerItem4 == false && 
                      <AntDesign name='down' size={25} />
                    }
                  </View>
                )}
                onPress ={() =>{
                  setfocus1(0);
                  setfocus2(0);
                  setfocus3(0);
                  setfocus4(1);
                  setfocus5(0);
                  //props.navigation.navigate();
                  NestedDrawerItemFun('module 4');
                }}
              />
              {NestedDrawerItem4 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='play-circle-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop </Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
              {NestedDrawerItem4 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='reader-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop</Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
              {NestedDrawerItem4 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='play-circle-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop</Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
              {NestedDrawerItem4 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='play-circle-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop</Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
            </Drawer.Section>
            <Drawer.Section>
              <DrawerItem
                 focused={focus5 == 1 ? true:false}
                label={({focused, color}) => (
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontWeight:'bold'}}>Module 5</Text>
                    {
                      NestedDrawerItem5 == true && 
                      <AntDesign name='up' size={25} />
                    }
                    {
                      NestedDrawerItem5 == false && 
                      <AntDesign name='down' size={25} />
                    }
                  </View>
                )}
                onPress ={() =>{
                  setfocus1(0);
                  setfocus2(0);
                  setfocus3(0);
                  setfocus4(0);
                  setfocus5(1);
                  //props.navigation.navigate();
                  NestedDrawerItemFun('module 5');
                }}
              />
              {NestedDrawerItem5 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='play-circle-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop</Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
              {NestedDrawerItem5 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='reader-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop</Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
              {NestedDrawerItem5 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='play-circle-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop</Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
              {NestedDrawerItem5 == true && 
                <DrawerItem
                  icon = {({color,size,focused}) => (
                    <Icon name='play-circle-outline' color ={color} size = {size} />
                  )}
                  label={({focused, color}) => <Text>Getting started with haddoop</Text>}
                  onPress ={() =>{
                    //props.navigation.navigate();
                  }}
                />
              }
            </Drawer.Section>
          </View>
        </DrawerContentScrollView> 
        <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <IconM 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>    
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop:40,
    paddingLeft:20,
  },
  content:{
    flexDirection:'row',
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
});