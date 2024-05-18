import { 
    Alert, 
    StyleSheet, 
    Text, 
    View, 
    ScrollView, 
    Pressable,
    TextInput,
    Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Location from "expo-location"
import * as LocationGeoCoding from "expo-location"
import { Octicons, Ionicons  } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import Carousel from '../../components/Carousel'
import Categorories from '../../components/Categorories'
import Restaurant from '../../components/Restaurant'

const index = () => {
    const [locationServicesEnabled, setLocationServicesEnabled] = useState(false)
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState("fetching your location...")

    useEffect(() => {
        CheckIfLocationEnabled()
        GetCurrentLocation()
    }, [])
    const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync()
        if (!enabled) {
            Alert.alert(
                "Location Services not enabled",
                "Please enable your location services to continue",
                [{ text: "Ok" }],
                { cancelable: false })
        }
        else {
            setLocationServicesEnabled(true)
        }
    }

    const GetCurrentLocation = async () => {
        let { status } = await Location.requestBackgroundPermissionsAsync()
        if (status !== granted) {
            Alert.alert(
                "Permission not granted",
                "Allow the app to use the location service",
                [{ text: "Ok" }],
                { cancelable: false }
            )
        }

        const location = await Location.getCurrentPositionAsync(
            {
                accuracy: Location.Accuracy.High,
            }
        )
        console.log(location)
        let { coords } = await Location.getCurrentPositionAsync()
        if (coords) {
            const { latitude, longitude } = coords
            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude
            })

            const address = await LocationGeoCoding.reverseGeocodeAsync({
                latitude,
                longitude
            })

            const streetAddress = address[0].name
            for (let item of response) {
                let address = `${item.name}, ${item?.postalCode}, ${item?.city}`
                setDisplayCurrentAddress(address)
            }
        }
    }
    console.log("my address", displayCurrentAddress)
    const recomended = [
        {
            id:0,
            name:"Hai Ba Trung",
            image: "https://www.google.com/maps/vt/data=JtVR9s04wyIV-Leeww7xwrxbHdEdwq-mKjI4bXrEhfXKkTOOvsbQ9FnUc5C7B9_cPSOeiDLo53Q3gPlOTWuTb1cfzgU-jO-GTj_wmBc85m59IoLK5lQdY9ir0wtLnjhf0eKMvn0DpJfagXm6T9Tx4bwJ0lfDOJcePGUkZ0Du4XXKMC2jUm5JeyHZIhk4oNUgsCWecSqgfES2rMtm8WpMwIbsWDzoteUcyI7ijoXMPBsjL7vEU2mhurlaNtkkDKddhG4Dd7BDSBKQsxuQfAX68FAsnFJerhvO",
            type:"Vietnam"
        },
        {
            id:0,
            name:"Hai Ba Trung",
            image: "https://www.google.com/maps/vt/data=JtVR9s04wyIV-Leeww7xwrxbHdEdwq-mKjI4bXrEhfXKkTOOvsbQ9FnUc5C7B9_cPSOeiDLo53Q3gPlOTWuTb1cfzgU-jO-GTj_wmBc85m59IoLK5lQdY9ir0wtLnjhf0eKMvn0DpJfagXm6T9Tx4bwJ0lfDOJcePGUkZ0Du4XXKMC2jUm5JeyHZIhk4oNUgsCWecSqgfES2rMtm8WpMwIbsWDzoteUcyI7ijoXMPBsjL7vEU2mhurlaNtkkDKddhG4Dd7BDSBKQsxuQfAX68FAsnFJerhvO",
            type:"Vietnam"
        },
        
        {
            id:0,
            name:"Hai Ba Trung",
            image: "https://www.google.com/maps/vt/data=JtVR9s04wyIV-Leeww7xwrxbHdEdwq-mKjI4bXrEhfXKkTOOvsbQ9FnUc5C7B9_cPSOeiDLo53Q3gPlOTWuTb1cfzgU-jO-GTj_wmBc85m59IoLK5lQdY9ir0wtLnjhf0eKMvn0DpJfagXm6T9Tx4bwJ0lfDOJcePGUkZ0Du4XXKMC2jUm5JeyHZIhk4oNUgsCWecSqgfES2rMtm8WpMwIbsWDzoteUcyI7ijoXMPBsjL7vEU2mhurlaNtkkDKddhG4Dd7BDSBKQsxuQfAX68FAsnFJerhvO",
            type:"Vietnam"
        },
        
        {
            id:0,
            name:"Hai Ba Trung",
            image: "https://www.google.com/maps/vt/data=JtVR9s04wyIV-Leeww7xwrxbHdEdwq-mKjI4bXrEhfXKkTOOvsbQ9FnUc5C7B9_cPSOeiDLo53Q3gPlOTWuTb1cfzgU-jO-GTj_wmBc85m59IoLK5lQdY9ir0wtLnjhf0eKMvn0DpJfagXm6T9Tx4bwJ0lfDOJcePGUkZ0Du4XXKMC2jUm5JeyHZIhk4oNUgsCWecSqgfES2rMtm8WpMwIbsWDzoteUcyI7ijoXMPBsjL7vEU2mhurlaNtkkDKddhG4Dd7BDSBKQsxuQfAX68FAsnFJerhvO",
            type:"Vietnam"
        },
        
        {
            id:0,
            name:"Hai Ba Trung",
            image: "https://www.google.com/maps/vt/data=JtVR9s04wyIV-Leeww7xwrxbHdEdwq-mKjI4bXrEhfXKkTOOvsbQ9FnUc5C7B9_cPSOeiDLo53Q3gPlOTWuTb1cfzgU-jO-GTj_wmBc85m59IoLK5lQdY9ir0wtLnjhf0eKMvn0DpJfagXm6T9Tx4bwJ0lfDOJcePGUkZ0Du4XXKMC2jUm5JeyHZIhk4oNUgsCWecSqgfES2rMtm8WpMwIbsWDzoteUcyI7ijoXMPBsjL7vEU2mhurlaNtkkDKddhG4Dd7BDSBKQsxuQfAX68FAsnFJerhvO",
            type:"Vietnam"
        },
        
        {
            id:0,
            name:"Hai Ba Trung",
            image: "https://www.google.com/maps/vt/data=JtVR9s04wyIV-Leeww7xwrxbHdEdwq-mKjI4bXrEhfXKkTOOvsbQ9FnUc5C7B9_cPSOeiDLo53Q3gPlOTWuTb1cfzgU-jO-GTj_wmBc85m59IoLK5lQdY9ir0wtLnjhf0eKMvn0DpJfagXm6T9Tx4bwJ0lfDOJcePGUkZ0Du4XXKMC2jUm5JeyHZIhk4oNUgsCWecSqgfES2rMtm8WpMwIbsWDzoteUcyI7ijoXMPBsjL7vEU2mhurlaNtkkDKddhG4Dd7BDSBKQsxuQfAX68FAsnFJerhvO",
            type:"Vietnam"
        },
        
        {
            id:0,
            name:"Hai Ba Trung",
            image: "https://www.google.com/maps/vt/data=JtVR9s04wyIV-Leeww7xwrxbHdEdwq-mKjI4bXrEhfXKkTOOvsbQ9FnUc5C7B9_cPSOeiDLo53Q3gPlOTWuTb1cfzgU-jO-GTj_wmBc85m59IoLK5lQdY9ir0wtLnjhf0eKMvn0DpJfagXm6T9Tx4bwJ0lfDOJcePGUkZ0Du4XXKMC2jUm5JeyHZIhk4oNUgsCWecSqgfES2rMtm8WpMwIbsWDzoteUcyI7ijoXMPBsjL7vEU2mhurlaNtkkDKddhG4Dd7BDSBKQsxuQfAX68FAsnFJerhvO",
            type:"Vietnam"
        },
    ]

    const items = [
        {
            id:"0",
            name:"Offers",
            description: "Upto 50% off",
            image:"https://cdn-icons-png.flaticon.com/128/9356/9356378.png" ,
        },
        {
            id:"1",
            name:"Legends",
            description:"Across",
            image:"https://cdn-icons-png.flaticon.com/128/8302/8302686.png",
        },
        {
            id:"2",
            name:"Gourmet",
            description:"Selections",
            image:"https://cdn-icons-png.flaticon.com/128/1065/1065715.png",
        },
        {
            id:"3",
            name:"Healthy",
            description:"CUrated dishes",
            image:"https://cdn-icons-png.flaticon.com/128/415/415744.png"

        }

    ]

    const restaurants = [
        {
            id:"0",
            featured_image: "D",
            images: [
                { id:"0",
                image: "D",
                description: "D"
            },
            {
                id:"0",
                image: "D",
                description: "D"
            },
            ],
            name: "Social",
            cuisines: "Hanoi • Fast Food • 160 for one ",
            time: "35 - 40 min  • 1Km",
            average_cost_for_two: 1600,
            aggregate_rating:4.3,
            adress: "9-A & 12, Hauz Khas Village, New Delhi",
            smalladress: "Hauz Khas Village, New Delhi",
            offer: "80 Off",
            no_of_Delivery: 1500,
            latitude: 12.9916,
            longitude: 77.5712,
        },
        {
            id:"1",
            featured_image:"",
            name: "Qubitos - The Terrace Cafe",
            cuisines: "Thai, European, Mexican",
            average_cost_for_two: 1500,
            aggregate_rating:4.5,
            adress: "C-7, Vishal Enclave, Opposite Metro",
            smalladress: "Rajouri Garden",

        }
    ]
    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: "#f8f8f8"
            }}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                    padding: 10
                }}>
                <Octicons name="location" size={24} color="#E52850" />
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>Deliver To</Text>
                    <Text style={{ color: "gray", fontSize: 16, marginTop: 3 }}>{displayCurrentAddress}</Text>
                </View>
                <Pressable
                    style={{
                        backgroundColor: "#6CB4EE",
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>
                        S
                    </Text>
                </Pressable>
            </View>
            <View 
            style={{ 
                flexDirection: "row", 
                alignItems: "center", 
                justifyContent: "space-between", 
                borderWidth: 1, 
                borderColor: "#C0C0C0",
                paddingVertical:8,
                paddingHorizontal:10,
                borderRadius:11,
                marginTop:10,
                marginHorizontal:10
                 }}>
                <TextInput placeholder='Search...' />
                <AntDesign name="search1" size={24} color="black" />

            </View>
            <Carousel/>
            <Categorories/>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                 {recomended?.map((item,index) =>(
                    <View style={{backgroundColor:"white", flexDirection:"row", margin:10, borderRadius:8}}>
                        <View>
                            <Image 
                            style={{
                                width:100, 
                                height:100, 
                                resizeMode:"cover", 
                                borderTopLeftRadius:8, 
                                borderBottomLeftRadius:7}} 
                                source={{uri:item?.image}}/>
                        </View>
                        <View style={{padding:10, flexDirection:"column"}}>
                            <Text style={{fontSize:15, fontWeight:"500"}}>
                                {item?.name}
                            </Text>
                            <Text style={{flex:1, marginTop:3, color:"gray", fontWeight:"500" }}>
                                {item?.type}
                            </Text>
                            <View style={{flexDirection:"row", alignItems:"center", gap:3}}>
                            <Ionicons name="time-sharp" size={24} color="green" />
                            <Text>{item?.time} mins</Text>
                            </View>
                        </View>
                    </View>
                 ) )}
            </ScrollView>
            <Text>
                <Text style={{textAlign:"center", marginTop:7, letterSpacing:4, marginBottom:5, color:"gray"    }}>EXPLORE</Text>
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items?.map((item, index)=> (
                    <View 
                    key={index} 
                    style={{
                        width:90, 
                        borderColor:"#E0E0E0", 
                        borderWidth:1, 
                        paddingVertical:5, 
                        paddingHorizontal:1, 
                        borderRadius:5,
                        marginLeft: 10,
                        marginVertical:10,
                        alignItems:"center" ,
                        justifyContent:"center",
                        backgroundColor:"white"}}>
                        <Image style={{width:50, height:50 }} source={{uri:item?.image}}/>
                        <Text style={{fontSize:14, fontWeight:"500", marginTop:6}}>{item?.name}</Text>
                        <Text style={{fontSize:12, color:"gray", marginTop:3, }}>{item?.description}</Text>
                    </View>
                ))}
            </ScrollView>
            <Text style={{textAlign:"center", marginTop:7,letterSpacing:4, marginBottom:5, color:"gray" }}>ALL RESTAURANTS</Text>
            <View style={{marginHorizontal:8, }}>
                {restaurants?.map((item, index) => (
                    <Restaurant key={index} item={item}/>
                ))}
            </View>
        </ScrollView>
    )
}

export default index



// https://www.youtube.com/watch?v=pAMGBqomIZ0