import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AuthorAPI from '../API/AuthorAPI';

function ResetPW({ navigation, route }) {
    const { email } = route.params; // Lấy giá trị email từ route.params
    const [otp, setOTP] = useState('');
    const [newPassword, setnewPassword] = useState('');

    const handleForgotPW = async () => {
        try {
            const response = await AuthorAPI.ResetPW({ // Sử dụng endpoint API
                email,
                otp,
                newPassword
            });
            if (response.data.EM == "Reset password successfully") {
                Alert.alert('Reset mật khẩu thành công!');
                navigation.navigate('Login'); // Chuyển đến màn hình Login
            } else {
                Alert.alert('Lỗi:', response.data.message);
            }
        } catch (error) {
            Alert.alert('Lỗi', 'Không thể kết nối đến máy chủ');
            console.error(error); // Log lỗi để giúp gỡ lỗi dễ hơn
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reset mật khẩu</Text>
            <TextInput
                style={styles.input}
                placeholder="Tên đăng nhập"
                value={email} // Hiển thị email đã được truyền qua route.params
                editable={false} // Ngăn chỉnh sửa email
            />
            <TextInput
                style={styles.input}
                placeholder="OTP"
                value={otp}
                onChangeText={setOTP}
            />
            <TextInput
                style={styles.input}
                placeholder="Mật khẩu mới"
                value={newPassword}
                onChangeText={setnewPassword}
                secureTextEntry
            />
            <Button title="Xác nhận" onPress={handleForgotPW} />
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

export default ResetPW;
