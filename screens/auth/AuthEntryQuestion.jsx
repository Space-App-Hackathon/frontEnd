import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const AuthEntryQuestion = ({ navigation }) => {
  return (
    <View className="flex-1 bg-beyazark justify-center">
      {/* header */}
      <View className="justify-between items-center h-[80%]  ">
        <Image
          source={require("../../assets/ducky.png")}
          className="w-52 h-40"
          resizeMode="contain"
        />

        <View className="w-full justify-center items-center">
          <View className="w-[55%]">
            <Text
              className="text-4xl mb-4 text-yesil font-extrabold"
            >
              Kaydol
            </Text>
          </View>
          <TouchableOpacity
            className="w-[55%] h-16 shadow shadow-yesil2 justify-center items-center rounded-md mb-4 bg-beyaz "
            activeOpacity={0.7}
            onPress={() => navigation.navigate("CusRegister")}
          >
            <Text
              className="font-semibold text-lg text-gri2 font-nunitoExtraBold  "
            >
              Öğretmen
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-[55%] h-16 shadow shadow-yesil2 justify-center items-center rounded-md bg-beyaz "
            activeOpacity={0.7}
            onPress={() => navigation.navigate("BusRegister")}
          >
            <Text
              className="font-semibold text-lg text-gri2 font-nunitoExtraBold "
     
            >
              Öğrenci
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="w-[70%] h-16 shadow shadow-yesil2 justify-center items-center rounded-full bg-yesil "
          onPress={() => navigation.navigate("Login")}
          activeOpacity={0.7}
        >
          <Text className="font-semibold text-base px-1 text-center text-beyaz ">
            Zaten bir hesabın var mı?
          </Text>
          <Text className="font-semibold text-base  text-center text-beyaz ">
            Giriş yap
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(AuthEntryQuestion);
