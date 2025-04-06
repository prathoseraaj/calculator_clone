import {
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import "./global.css";
import { useState } from "react";

export default function Index() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: string) => {
    if (value == "=") {
      try {
        const sanitizedEquation = equation.replace(/x/g, "*");
        setResult(eval(sanitizedEquation).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value == "C") {
      setEquation("");
      setResult("");
    } else {
      setEquation((prev) => prev + value);
    }
  };

  return (
    <View className="flex-1 justify-center items-center w-full bg-black ">
      <View
        style={{ borderRadius: 30 }}
        className="-mt-[150px] bg-gray-700 w-[410px]  h-[50vh] -mt-20 mb-5 rounded-[100px] text-[25px] flex justify-end"
      >
        <TextInput
          className="text-white"
          value={equation}
          textAlign="center"
          placeholder="|"
          editable={false}
        />
        <View>
          <Text className="font-bold text-white">{result}</Text>
        </View>
      </View>
      <View className="flex-row flex-wrap w-full justify-center items-center mt-20 -mb-20">
        {[
          "C",
          " ",
          "%",
          "/",
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
            className={`h-20 w-20 m-2 rounded-full justify-center items-center 
                 ${item === "=" ? "bg-blue-900" : "bg-gray-900 "}
              `}
            onPress={() => handleClick(item)}
          >
            <Text className="text-white text-3xl">{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
