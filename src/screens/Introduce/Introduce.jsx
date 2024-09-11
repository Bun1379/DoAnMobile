import { useEffect, useState } from 'react'; //nạp useEffect, useState từ react để lưu trạng thái
import { Text, StyleSheet, View, Image } from 'react-native'; //nạp các component từ react - native
import AsyncStorage from "@react-native-async-storage/async-storage";


function Introduce({ navigation }) { //hàm chính của component
    const [countdown, setCountdown] = useState(1); // biến lưu trữ cho countdown
    const [userInfo, setUserInfo] = useState({ username: '', email: '' }); // biến lưu trữ thông tin người dùng

    useEffect(() => {
        const getUserData = async () => {
            try {
                const user = await AsyncStorage.getItem("user");
                if (user !== null) { // Kiểm tra nếu có dữ liệu từ AsyncStorage
                    const parsedUser = JSON.parse(user);
                    const { username, email } = parsedUser;
                    setUserInfo({ username, email });
                }
            } catch (error) {
                console.log('Lỗi khi lấy dữ liệu từ AsyncStorage:', error);
            }
        };

        getUserData(); // Gọi hàm lấy dữ liệu

        // Countdown logic
        const timeout = setTimeout(() => {
            navigation.navigate('Home');
        }, countdown * 10000);
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 10000);
        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [countdown, navigation]);

    return (//trả về view
        <View className="flex-1 justify-center items-center bg-[#F2F7FF] px-10">
            <View className="justify-center items-center p-5 w-36 h-36">
                <Image
                    source={require('../../../assets/edit.jpg')}
                    style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 20 }}
                />
            </View>
            <View className="text-center">
                <Text className="text-lg mb-2">Tên: {userInfo.username}</Text>
                <Text className="text-lg">Email: {userInfo.email}</Text>
            </View>
        </View>
    );
}

export default Introduce; 