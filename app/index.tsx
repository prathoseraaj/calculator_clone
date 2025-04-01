import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import "./global.css";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <View className=""></View>
      <View className="flex-row flex-wrap">
        {[
          "7",
          "8",
          "9",
          "x",
          "4",
          "5",
          "6",
          "+",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "⌫",
          "=",
        ].map((item) => (
          <TouchableOpacity
            key={item}
            className="h-20 w-20 rounded-full justify-center items-center bg-gray-500"
          >
            <Text className="text-white text-3xl">{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
