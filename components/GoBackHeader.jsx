import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const GoBackHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View className="bg-beyaz  h-14 w-full justify-between flex-row  items-center px-4  ">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="h-full flex-[.2] justify-start items-center flex-row"
      >
        <Octicons
          name="chevron-left"
          size={32}
          color={"#3a3a3a"}
        />
        <Text className="text-[16px]  ml-2">Geri</Text>
      </TouchableOpacity>
      <View className="h-full flex-1 items-center justify-center flex-row">
        <Text
          className={`text-[16px]  font-nunitoExtraBold ${
            title && ("#3a3a3a")
          }`}
        >
          {title || ""}
        </Text>
      </View>
      <View className="h-full flex-[.2] justify-start items-center flex-row"></View>
    </View>
  );
};

export default GoBackHeader;
