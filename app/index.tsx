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
        className="-mt-[150px] bg-gray-700 w-[410px]  h-[40vh] -mt-20 mb-5 rounded-[100px] text-[25px] flex justify-end"
      >
        <View className=" mr-10 flex-1 "> 
          {/* Added dots to show the design of sidebar as just for UI */}
          <Text className="text-white font-black text-3xl text-right mt-10">.</Text>
          <Text className="text-white font-black text-3xl text-right -mt-7">.</Text>
          <Text className="text-white font-bold text-3xl text-right -mt-7">.</Text>
        </View>
        <TextInput
          className="text-white text-right mr-10 text-[75px] font-normal"
          value={equation}
          placeholder="|"
          editable={false}
        />
        <View className="mb-20 ">
          <Text className="font-bold text-gray-300 font-normal text-right text-[45px] mr-12">
            {result}
          </Text>
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
