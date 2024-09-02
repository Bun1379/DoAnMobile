import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import api from '../api';

function Signup({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const response = await api.post('/user/signup', { // Sử dụng endpoint API
                email,
                password,
            });
            // console.log('Kết quả:', response.data);
            if (response.data.EM == "Create user successfully") {
                Alert.alert('Đăng ký thành công!');
                navigation.navigate('Login'); // Chuyển đến màn hình Login
            } else {
                Alert.alert('Đăng ký thất bại', response.data.message);
            }
        } catch (error) {
            Alert.alert('Lỗi', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đăng nhập</Text>
            <TextInput
                style={styles.input}
                placeholder="Tên đăng nhập"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Đăng ký" onPress={handleSignup} />
            <Button title="Back" onPress={() => navigation.navigate('Login')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    Button: {
        margin: 10
    }
});

export default Signup;
