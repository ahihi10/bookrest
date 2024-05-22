import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View}from 'react-native'

export default function App() {
    return(
        <View style={Styles.container}>
            <Text>Start your app!</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent: "center"
    }
})

// https://hliqjmlupytjtcahkcef.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsaXFqbWx1cHl0anRjYWhrY2VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMzcxMjAsImV4cCI6MjAzMTcxMzEyMH0.kZ5Jpv8e-KzqTvMZ_7LRMN6FRctW6NXreJhkNHht4oY