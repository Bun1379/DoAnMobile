import { useEffect, useState } from 'react'; //nạp useEffect, useState từ react để lưu trạng thái
import { Text, StyleSheet, View, Image } from 'react-native'; //nạp các component từ react - native
function Introduce({ navigation }) { //hàm chính của component
    // useEffect(() => {
    // const timeoutId = setTimeout(() => {
    // navigation.navigate('Home');
    // }, 10000);
    // return () => clearTimeout(timeoutId);
    // }, []);
    const [countdown, setCountdown] = useState(1); //khai báo các biến lưu trữ
    useEffect(() => {
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
                <Text className="text-lg mb-2">Triệu Nhật Nam</Text>
                <Text className="text-lg">21110251</Text>
            </View>
        </View>
    );
}

export default Introduce; 