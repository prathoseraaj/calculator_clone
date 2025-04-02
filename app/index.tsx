import { StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import "./global.css";
import { useState } from "react";

export default function Index() {

  const [equation, setEquation] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value:string) => {
    if(value== "="){
      try{
        setResult(eval(equation).toString())
      }
      catch(error){
        setResult("Error")
      }
    }
  }

  return (

    <View className="flex-1 justify-center items-center w-full bg-black">
      <View>
        <TextInput className="bg-gray-300 w-[300px] mb-5 rounded text-[25px]" value="0" textAlign="center" />
        <View>{result}</View>
      </View>
      <View className="flex-row flex-wrap w-full justify-center items-center " >
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
            className="h-20 w-20 m-2 rounded-full justify-center items-center bg-gray-500"
            onPress={()=>handleClick(item)}
          >
            <Text className="text-white text-3xl">{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
