import { View, Text, Image } from "react-native";
import React from "react";


const Header = () => {

  return (
    <View className="bg-beyaz  h-14 w-full flex-row justify-between items-center px-2 ">
      <View className="">
        <Image
          className="w-10 h-9 "
          source={require("../assets/ducky.png")}
          resizeMode="contain"
        />
      </View>
      <View className="flex-1 h-full "></View>
      <View className="w-24 h-full "></View>
    </View>
  );
};

export default Header;
 