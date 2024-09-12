import { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";


function UserProfile({ navigation }) { //hàm chính của component
    const [userInfo, setUserInfo] = useState({ username: '', email: '', gender: '', address: '' }); // biến lưu trữ thông tin người dùng
    useEffect(() => {
        const getUserData = async () => {
            try {
                const user = await AsyncStorage.getItem("user");
                if (user !== null) { // Kiểm tra nếu có dữ liệu từ AsyncStorage
                    const parsedUser = JSON.parse(user);
                    const { username, email, gender, address } = parsedUser;
                    setUserInfo({ username, email, gender, address });
                }
            } catch (error) {
                console.log('Lỗi khi lấy dữ liệu từ AsyncStorage:', error);
            }
        };

        getUserData(); // Gọi hàm lấy dữ liệu

    });

    return (
        <View className="flex-1 justify-center items-center bg-[#F2F7FF] px-10">
            <View className="justify-center items-center p-5 w-40 h-40 bg-white shadow-lg rounded-full mb-6">
                <Image
                    source={require('../../../assets/edit.jpg')}
                    style={{ width: 160, height: 160, borderRadius: 80 }}
                />
            </View>
            <View className="bg-white w-full p-6 rounded-xl shadow-md">
                <Text className="text-xl font-bold text-gray-800 mb-4 text-center">
                    Thông tin cá nhân
                </Text>
                <View className="space-y-3">
                    <View className="flex-row justify-between">
                        <Text className="text-lg font-medium text-gray-600">Tên:</Text>
                        <Text className="text-lg text-gray-800">{userInfo.username}</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-lg font-medium text-gray-600">Email:</Text>
                        <Text className="text-lg text-gray-800">{userInfo.email}</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-lg font-medium text-gray-600">Giới tính:</Text>
                        <Text className="text-lg text-gray-800">{userInfo.gender}</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-lg font-medium text-gray-600">Địa chỉ:</Text>
                        <Text className="text-lg text-gray-800">{userInfo.address}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default UserProfile; 