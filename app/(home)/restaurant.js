import { StyleSheet, Text, View, ScrollView, Pressable, Animated, Image } from 'react-native'
import React, {useState, useRef}from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FoodItem from '../../components/FoodItem';
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal';
const restaurant = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const cart = useSelector((state) => state.cart.cart)
  console.log(cart)
  const menu = [
    {
      id: "20",
      name: "Recomended",
      items: [
        {
          id: "101",
          name: "Spaghetti 1",
          price: 275,
          description:
            "This is served with ...",
          rating: 4.0,
          ratings: 50,
          image: "https://images.dolenglish.vn/rs:auto:::0/w:768/q:70/aHR0cHM6Ly9zdWlqbTljbG91b2JqLnZjZG4uY2xvdWQvUFVCTElDL01FRElBL2M0MzYwYmY5LWRmZWQtNDQ4ZC1hM2FkLWUxZDgwZThjZGNjYy5qcGc=",
          veg: true,
          bestSeller: false,
          quantity: 1,
        },
        {
          id: "102",
          name: "Spaghetti 2",
          price: 275,
          description:
            "This is served with ...",
          rating: 4.0,
          ratings: 50,
          image: "https://images.dolenglish.vn/rs:auto:::0/w:768/q:70/aHR0cHM6Ly9zdWlqbTljbG91b2JqLnZjZG4uY2xvdWQvUFVCTElDL01FRElBL2M0MzYwYmY5LWRmZWQtNDQ4ZC1hM2FkLWUxZDgwZThjZGNjYy5qcGc=",
          veg: true,
          bestSeller: false,
          quantity: 1,
        },
        {
          id: "103",
          name: "Spaghetti 3",
          price: 275,
          description:
            "This is served with ...",
          rating: 4.0,
          ratings: 50,
          image: "https://images.dolenglish.vn/rs:auto:::0/w:768/q:70/aHR0cHM6Ly9zdWlqbTljbG91b2JqLnZjZG4uY2xvdWQvUFVCTElDL01FRElBL2M0MzYwYmY5LWRmZWQtNDQ4ZC1hM2FkLWUxZDgwZThjZGNjYy5qcGc=",
          veg: true,
          bestSeller: false,
          quantity: 1,
        },

      ]
    },
    {
      id: "11",
      name: "Rice",
      items: [
        {
          id: "201",
          name: "Spaghetti 1",
          price: 275,
          description:
            "This is served with ...",
          rating: 4.0,
          ratings: 50,
          image: "https://images.dolenglish.vn/rs:auto:::0/w:768/q:70/aHR0cHM6Ly9zdWlqbTljbG91b2JqLnZjZG4uY2xvdWQvUFVCTElDL01FRElBL2M0MzYwYmY5LWRmZWQtNDQ4ZC1hM2FkLWUxZDgwZThjZGNjYy5qcGc=",
          veg: true,
          bestSeller: false,
          quantity: 1,
        },
        {
          id: "202",
          name: "Spaghetti 2",
          price: 275,
          description:
            "This is served with ...",
          rating: 4.0,
          ratings: 50,
          image: "https://images.dolenglish.vn/rs:auto:::0/w:768/q:70/aHR0cHM6Ly9zdWlqbTljbG91b2JqLnZjZG4uY2xvdWQvUFVCTElDL01FRElBL2M0MzYwYmY5LWRmZWQtNDQ4ZC1hM2FkLWUxZDgwZThjZGNjYy5qcGc=",
          veg: true,
          bestSeller: false,
          quantity: 1,
        },
        {
          id: "203",
          name: "Spaghetti 3",
          price: 275,
          description:
            "This is served with ...",
          rating: 4.0,
          ratings: 50,
          image: "https://images.dolenglish.vn/rs:auto:::0/w:768/q:70/aHR0cHM6Ly9zdWlqbTljbG91b2JqLnZjZG4uY2xvdWQvUFVCTElDL01FRElBL2M0MzYwYmY5LWRmZWQtNDQ4ZC1hM2FkLWUxZDgwZThjZGNjYy5qcGc=",
          veg: true,
          bestSeller: false,
          quantity: 1,
        },

      ]
    }
  ]

  const scrollViewRef = useRef(null)
  const scrollAnim = useRef(new Animated.Value(0)).current
  const ITEM_HEIGHT = 650
  const scrollToCategory = (index) => {
    const yOffset = index * ITEM_HEIGHT
    Animated.timing(scrollAnim, {
      toValue: yOffset,
      duration: 500,
      useNativeDriver: true,
    }).start()
    scrollViewRef.current.scrollTo({ y: yOffset, animated: true })
  }
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
      <ScrollView ref={scrollViewRef}
        style={{
          backgroundColor: "white"
        }}>
        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
          <Ionicons onPress={() => router.back()} style={{ padding: 5, }} name="arrow-back" size={24} color="black" />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 14,
            }}>
            <SimpleLineIcons name="camera" size={24} color="black" />
            <Ionicons name="bookmark-outline" size={24} color="black" />
            <MaterialCommunityIcons name="share-outline" size={24} color="black" />
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 12,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold"
            }}>{params?.name}</Text>
          <Text
            style={{
              marginTop: 5,
              color: "gray",
              fontWeight: "500",
              fontSize: 15
            }}>Hanoi • Fast Food • 160 for one</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#006A4E",
                borderRadius: 4,
                paddingHorizontal: 4,
                paddingVertical: 5,
                gap: 4
              }}>
              <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>{params?.aggregate_rating}</Text>
              <Ionicons name="star" size={15} color="white" />
            </View>
            <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 5 }}>
              4K Ratings
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#D0F0C0",
              borderRadius: 20,
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginTop: 12,

            }}>
            <Text>30 - 40 mins</Text>
          </View>
        </View>

        {menu?.map((item, index) => (
          <FoodItem key={index} item={item} />
        ))}
      </ScrollView>
      <View style={{ flexDirection: "row", backgroundColor: "white" }}>
        {menu?.map((item, index) => (
          <Pressable
            onPress={() => scrollToCategory(index)}
            style={{
              paddingHorizontal: 7,
              borderRadius: 4,
              paddingVertical: 5,
              marginVertical: 10,
              marginHorizontal: 10,
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#181818",
              borderWidth: 1
            }}>
            <Text>
              {item?.name}
            </Text>
          </Pressable>
        ))}

      </View>
      <Pressable
      onPress={() => setModalVisible(!modalVisible)} 
      style={{width:60, height:60, borderRadius:30, justifyContent:"center", alignItems:"center",position:"absolute", right:25, bottom: cart?.length > 0 ? 70 :35, backgroundColor:"black"}}>
        <Ionicons style ={{textAlign:"center"}} name="fast-food-outline" size={24} color="white" />
        <Text style={{textAlign:"center", color:"white", fontWeight:"500", fontSize:11, marginTop:3,  }}>MENU</Text>
      </Pressable>
      <Modal isVisible={modalVisible} onBackdropPress={() =>setModalVisible(!modalVisible)}>
        <View style={{height:190, width:250, backgroundColor:"black", position:"absolute", bottom: 35, right:10, borderRadius:7, }}>
          {menu?.map((item,index) => (
            <View style={{padding:10, flexDirection:"row", alignItems:"center", justifyContent:"space-between" }}>
              <Text style={{color:"#D0D0D0", fontWeight:"600", fontSize:10}}>{item?.name}</Text>
              <Text style={{color:"#D0D0D0", fontWeight:"600", fontSize:10}}>{item?.items?.length}</Text>
            </View>
          ) )}
          <View style={{justifyContent:"center", alignItems:"center"}}>
            <Image 
            style={{width: 120, height:70, resizeMode:"contain"}}
            source={{
              uri:"https://res/cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza",
            }} />
          </View>
        </View>
      </Modal>
      {cart?.length > 0 && (
        <Pressable 
        onPress={() =>
          router.push({
            pathname:"/cart",
            params:{
              name:params.name,
            }
          })
        }
        style={{ backgroundColor: "#fd5c63", paddingHorizontal: 10, paddingVertical: 10, justifyContent: "center", alignItems: "center", }} >
          <Text style={{ textAlign: "center", color: "white", fontSize: 15, fontWeight: "600" }}>{cart.length} items add</Text>
          <Text style={{ textAlign: "center", color: "white", marginTop: 5, fontWeight: "600" }}>
            Add items(s) worth 240 to reduce surge fee by Rs 35.
          </Text>
        </Pressable>
        
      )}
    </>
  )
}

export default restaurant
