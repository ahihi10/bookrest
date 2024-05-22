import { Pressable, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import moment from 'moment'
import MapView, { Marker, Polyline } from 'react-native-maps'
import { FontAwesome5 } from '@expo/vector-icons'


const order = () => {
  const params = useLocalSearchParams()
  const [tip,setTip] = useState(0)
  const time = moment().format("LT")
  const mapView = useRef(null)
  const [coordinates] = useState([
    {
      latitude:12.9716,
      longtitude:77.5946
    },
    {
      latitude:13.0451,
      longtitude:77.6269
    }
  ])
  useEffect(() =>{
    mapView.current.fitToCoordinates(coordinates,{
      edgePadding:{
        top:50,
        bottom:50,
        left:50,
        right:50
      }
    })
  },[])
  return (
    <SafeAreaView>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", height:60, backgroundColor:"#fd5c63", padding:10}}>
        <View>
          <Text style={{color:"white", fontSize:15, fontWeight:"600"}}>Delivery in 25 mins</Text>
          <Text style={{color:"white", fontSize:15, fontWeight:"600"}}>Order placed at {time}</Text>
        </View>
        <Text style={{color:"white", fontSize:15, fontWeight:"600"}}>HELP</Text>
      </View>
      <MapView
        ref={mapView}
        initialRegion={{
          latitude:37.78825,
          longtitude:-122.4324,
          latitudeDelta: 0.0922,
          longtitudeDelta: 0.0421,
        }}
        style={{width:"100%", height:400}}>
          <Marker coordinate={coordinates[0]} />
          <Marker coordinate={coordinates[1]} />
          <Polyline coordinates={coordinates} strokeColor='black' lineDashPattern={[4]} strokeWidth={1}/>
      </MapView>
      <View 
      style={{
        height:320,
        width:"100%",
        backgroundColor:"white",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
      }}
      >
        <View style={{padding:10}}>
          <View>
            <Text style={{fontWeight:"500", fontSize:17, textAlign:"center"}}>
              {params?.name} has accepted your order
            </Text>
            <View style={{flexDirection:"row", marginTop:20}}>
              <FontAwesome5 
              name="hand-holding-heart"
              size={28}
              color="#fc8019" />
              <View style={{marginLeft:10}}>
                <Text 
                style={{
                  fontSize:18,
                  fontWeight:"500",
                  paddingHorizontal:2,
                  marginBottom:6,
                }}>
                  Tip your hunger Saviour
                </Text>
                <Text 
                style={{
                  fontSize:16,
                  fontWeight:"600",
                  color : "#696969",
                  marginHorizontal:2
                }}
                >
                  Thank your delivery
                </Text>
                <Pressable
                style={{
                  paddingTop:20,
                  flexDirection:"row",
                  alignItems:"center"
                }}
                >
                  <TouchableOpacity 
                  activeOpacity={0.6}
                  onPress={() => setTip(30)}
                  style={{
                    backgroundColor:"#F5F5F5",
                    marginHorizontal:10,
                    paddingHorizontal:10,
                    borderRadius:7,
                  }}
                  >
                    <Text
                    style={{
                      padding:10,
                      color:"#002D62",
                      fontWeight:"bold"
                    }}
                    >
                      30vnd
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  activeOpacity={0.6}
                  onPress={() => setTip(50)}
                  style={{
                    backgroundColor:"#F5F5F5",
                    marginHorizontal:10,
                    paddingHorizontal:10,
                    borderRadius:7,
                  }}
                  >
                    <Text
                    style={{
                      padding:4,
                      color:"#002D62",
                      fontWeight:"bold"
                    }}
                    >
                      50vnd
                    </Text>
                    <Text
                    style={{
                      backgroundColor:"orange",
                      paddingHorizontal:10,
                      fontSize:14,
                      fontWeight:"bold",
                      color:"white"
                    }}>
                        Host Tipped
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  activeOpacity={0.6}
                  onPress={() => setTip(70)}
                  style={{
                    backgroundColor:"#F5F5F5",
                    marginHorizontal:10,
                    paddingHorizontal:10,
                    borderRadius:7,
                  }}
                  >
                    <Text
                    style={{
                      padding:10,
                      color:"#002D62",
                      fontWeight:"bold"
                    }}
                    >
                      70vnd
                    </Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
            </View>
            {tip ? (
              <View>
                <Text
                style={{
                  color:"#fc8019",
                  padding:10,
                  marginLeft: 10,
                  marginRight:10,
                  fontSize:16,
                  fontWeight:"600"
                }}>
                    please pay {"vnd"}
                    {tip} to your delivery
                </Text>
                <TouchableOpacity
                onPress={() =>setTip(0)}
                activeOpacity={0.7}
                style={{
                  padding:10,
                  marginLeft:10,
                  marginRight:10,
                  position:"absolute",
                  top: 40,
                  paddingBottom:40
                }}>
                  <Text style={{color:"red", fontSize: 14, fontWeight: "700"}}>
                    (Cancel)
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default order

const styles = StyleSheet.create({})