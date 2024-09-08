import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AuthorAPI from '../API/AuthorAPI';

function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await AuthorAPI.Login({
                email,
                password,
            });

            if (response.data.EM === "Login successfully") {
                const token = response.data.token; // Lưu token nếu cần
                Alert.alert('Đăng nhập thành công!');
                navigation.navigate('Introduce'); // Chuyển đến màn hình Introduce
            } else {
                Alert.alert('Đăng nhập thất bại', response.data.message);
            }
        } catch (error) {
            console.error('Chi tiết lỗi:', error.message);
            Alert.alert('Lỗi', error.message || 'Đã xảy ra lỗi');
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
            <Button title="Đăng nhập" onPress={handleLogin} />
            <Button title="Đăng ký" onPress={() => navigation.navigate('Signup')} />
            <Button title="Quên mật khẩu" onPress={() => navigation.navigate('ForgotPW')} />
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

export default Login;
