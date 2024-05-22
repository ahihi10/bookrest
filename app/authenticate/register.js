import { StyleSheet, Text, View, SafeAreaView, Pressable, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
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
                    <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 12, color: "red" }}>Register to your account</Text>
                </View>
                <View style={{ marginTop: 70 }}>

                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#E0E0E0", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
                        <Ionicons name="person" size={24} color="pink" />
                        <TextInput  style={{ color: "gray", marginVertical: 10, width: 300 }} placeholder='enter your name' />
                    </View>
                    value={name} onChangeText={(text) => setName(text)}
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#E0E0E0", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
                        <MaterialIcons style={{ marginLeft: 8 }} name="email" size={24} color="pink" />
                        <TextInput value={email} onChangeText={(text) => setEmail(text)} style={{ color: "gray", marginVertical: 10, width: 300 }} placeholder='enter your email' />
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#E0E0E0", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
                        <MaterialIcons style={{ marginLeft: 8 }} name="password" size={24} color="pink" />
                        <TextInput value={password} onChangeText={(text) => setPassword(text)} style={{ color: "gray", marginVertical: 10, width: 300 }} placeholder='enter your password' />
                    </View>
                </View>

                
                <Pressable style={{ width: 200, backgroundColor: "pink", borderRadius: 6, marginLeft: "auto", marginRight: "auto", padding: 15, marginTop: 50 }}>
                    <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 16, color: "white" }}>Login</Text>
                </Pressable>
                <Pressable onPress={() => router.replace("/login")} style={{ marginTop: 15 }}>
                    <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>Already have an account? Sign In</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default register

const styles = StyleSheet.create({})