import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { updateToken, updateUser } from "../../redux/userSlice";
import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import { AntDesign } from "@expo/vector-icons";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "native-base";
import { useSelector } from "react-redux";

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  
  const logOut = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");
    dispatch(updateToken(false));
    dispatch(updateUser(false));
  };
  const user = useSelector((state) => state.user.user);

  return (
    <View className="flex-1  ">
      <Header />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1  ">
          <View className="w-full">
            <TouchableOpacity className="absolute right-3 top-4 w-11 h-12 z-40 bg-slate-50 rounded-2xl justify-center items-center">
              <AntDesign name="logout" size={24} color="black" onPress={logOut}  />
            </TouchableOpacity>
            <Image
              className="w-full h-[150] "
              source={{
                uri: "https://img.freepik.com/premium-photo/beautiful-ultra-hd-wallpaper-space-nebula-stars-sky-photot_1265429-96.jpg",
              }}
              style={{ resizeMode: "cover" }}
            />
          </View>
          <View className="flex-1  items-center -mt-20">
            <Image
              className="w-[140] h-[140] rounded-full"
              source={{
                uri: "https://petapixel.com/assets/uploads/2019/02/aYmax6O3-800x800.jpg",
              }}
              style={{
                resizeMode: "cover",
                borderColor: "#F1F1F1",
                borderWidth: 3,
              }}
            />
            <View className="w-full   justify-center items-center rounded-md">
              <Text className="text-2xl font-nunitoExtraBold">Sıla Ertürk</Text>
            </View>

            <View className="w-full h-14 flex-row justify-evenly mb-2  px-2 ">
              <View className="flex-1 bg-white flex-row rounded-full shadow shadow-gri items-center justify-center ">
                <View className="h-full justify-center items-center ">
                  <AntDesign name="star" size={30} color="#FF9900" />
                </View>
                <View className="h-full justify-center ml-2 ">
                  <Text className="text-2xl font-nunitoBold text-gri">378</Text>
                  <Text className="-mt-1 text-griAcik">Toplam Puan</Text>
                </View>
              </View>
              <View className="flex-1 bg-white flex-row rounded-full shadow shadow-gri ml-2 items-center justify-center ">
                <View className="h-full justify-center   ">
                  <Text className="text-2xl font-nunitoBold text-gri">
                    34. sıra
                  </Text>
                  <Text className="-mt-1 text-griAcik text-center">Sıralaman</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity onPress={navigation.navigate("Rank")} activeOpacity={.8} className="flex items-center justify-center">
              <View className="w-[97%] bg-white h-14 shadow shadow-gri rounded-full p-2 mx-6 my-1 flex-row items-center">
                <View className="w-full flex justify-center items-center flex-row gap-x-2">
                <FontAwesome name="diamond" size={24} color="#FF9900" />
                <Text className="text-lg font-nunitoExtraBold text-gri">
                  Sıralamamı Gör
                </Text>
                </View>
              </View>
            </TouchableOpacity>

            <Text className="text-gri text-2xl font-nunitoExtraBold text-start w-full ml-4">
              Aldığın dersler
            </Text>
            <View className="w-full">
                <View
                  className="bg-white h-14 shadow flex-row items-center shadow-gri rounded-md p-2 mx-2  my-1"
                >
                  <Entypo name="dot-single" size={24} color="#FF9900" />
                  <Text className="text-lg font-nunitoExtraBold text-gri">
                    asdasdasd
                  </Text>
                </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
