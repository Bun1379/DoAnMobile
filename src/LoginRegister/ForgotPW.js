import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AuthorAPI from '../API/AuthorAPI';

function ForgotPW({ navigation }) {
    const [email, setEmail] = useState('');

    const handleForgotPW = async () => {
        try {
            const response = await AuthorAPI.SendOTP({ // Sử dụng endpoint API
                email
            });
            // console.log('Kết quả:', response.data);
            if (response.data.EM == "OTP sent") {
                navigation.navigate('ResetPW', { email }); // Chuyển đến màn hình resetPW
            } else {
                Alert.alert('Lỗi:', response.data.message);
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
            <Button title="Xác nhận" onPress={handleForgotPW} />
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

export default ForgotPW;
