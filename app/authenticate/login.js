import { StyleSheet, Text, View, SafeAreaView, Pressable, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

const login = () => {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
            <View style={{ marginTop: 50, }}>
                <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
                    Restaurant reservation app
                </Text>
            </View>
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center", }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 12, color: "red" }}>Log in to your account</Text>
                </View>
                <View style={{ marginTop: 70 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#E0E0E0", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
                        <MaterialIcons style={{ marginLeft: 8 }} name="email" size={24} color="pink" />
                        <TextInput value={email} onChangeText={(text) => setEmail(text)} style={{ color: "gray", marginVertical: 10, width: 300 }} placeholder='enter your email' />
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#E0E0E0", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
                    <MaterialIcons style={{ marginLeft: 8 }} name="password" size={24} color="pink" />
                        <TextInput value={password} onChangeText={(text) => setPassword(text)} style={{ color: "gray", marginVertical: 10, width: 300 }} placeholder='enter your password' />
                    </View>
                </View>

                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:12}}>
                    <Text>Keep me Logged In</Text>
                    <Text>Forgot Password</Text>
                </View>
                <Pressable style={{width:200, backgroundColor:"pink", borderRadius:6, marginLeft:"auto",marginRight:"auto",padding:15, marginTop: 50 }}>
                    <Text style={{textAlign:"center", fontWeight:"bold",fontSize:16, color:"white" }}>Login</Text>
                </Pressable>
                <Pressable  onPress={() => router.replace("/register")} style={{marginTop:15}}>
                    <Text style={{textAlign:"center", color:"gray",fontSize: 16 }}>Don't have an account? Sign Up</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default login

const styles = StyleSheet.create({})