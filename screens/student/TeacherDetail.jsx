import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Goback from "../../components/GoBackHeader";
import { useRoute } from "@react-navigation/native";
import { Avatar } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const TeacherDetail = () => {
  const route = useRoute();
  const { item } = route.params;
  console.log("====================================");
  console.log(item);
  console.log("====================================");

  return (
    <View>
      <Goback />
      <View className="bg-yesil  absolute bottom-14 h-14 w-[100%]">
      <TouchableOpacity className="w-full h-full items-center justify-center ">
        <Text className="text-white font-nunitoExtraBold text-lg">İletişime Geç</Text>
        
      </TouchableOpacity>
      </View>
      <ScrollView className="mb-28"
        showsVerticalScrollIndicator={false}
      >
        <View className=" justify-start items-center p-2 m-2 flex-row ">
          <Avatar
            bg="green.500"
            className="w-24 h-24"
            source={{
              uri: item.img,
            }}
          >
            AJ
          </Avatar>
          <View className="ml-2">
            <Text className="font-nunitoExtraBold text-sm text-griAcik">
              {item.title}
            </Text>
            <Text className="font-nunitoExtraBold text-3xl text-yesil">
              {item.name}
            </Text>
          </View>
        </View>
        <View className="w-full h-16 flex-row justify-evenly mb-2  px-2 ">
          <View className="flex-1 bg-white rounded-full shadow shadow-gri items-center justify-center ">
            <Text className="text-center font-nunitoBold text-gri text-base">
              Toplam Öğrenci
            </Text>
            <Text className="text-center font-nunitoExtraBold text-turunc text-2xl">
              1247
            </Text>
          </View>
          <View className="flex-1 bg-white rounded-full shadow shadow-gri ml-2 items-center justify-center ">
            <Text className="text-center font-nunitoBold text-gri text-base">
              Beğenilme
            </Text>
            <Text className="text-center font-nunitoExtraBold text-turunc text-2xl">
              4.2/5
            </Text>
          </View>
        </View>
        <View className="min-h-[150px] bg-white shadow shadow-gri mt-2 m-2  rounded-xl">
          <Text className=" text-2xl font-nunitoExtraBold text-gri m-2">
            Hakkında
          </Text>
          <Text className=" text-sm font-nunitoExtraBold text-griAcik mx-2 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>

        <Text className="text-2xl font-nunitoExtraBold ml-2 mt-2 text-yesil ">
          Dersler
        </Text>

        <View className="w-full">
          <TouchableOpacity className="min-h-[150px] flex-1 bg-white shadow shadow-gri mt-2 m-2  rounded-xl"
            activeOpacity={0.7}
          >
            <View className="flex-row items-center justify-between">
              <Text className="text-2xl  font-nunitoExtraBold text-gri m-2">
                TYT Paket
              </Text>
              <View className="flex-row items-center justify-center">
                <AntDesign
                  name="star"
                  size={20}
                  color="#FF9900"
                  className="absolute right-0"
                />
                <Text className="text-turunc font-nunitoBold text-base mr-2">
                  4.2/5
                </Text>
              </View>
            </View>
            <Text className=" text-sm font-nunitoExtraBold text-griAcik mx-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="min-h-[150px] flex-1 bg-white shadow shadow-gri mt-2 m-2  rounded-xl"
            activeOpacity={0.7}
          >
            <View className="flex-row items-center justify-between">
              <Text className="  text-2xl  font-nunitoExtraBold text-gri m-2">
                İnkilap
              </Text>
              <View className="flex-row items-center justify-center">
                <AntDesign
                  name="star"
                  size={20}
                  color="#FF9900"
                  className="absolute right-0"
                />
                <Text className="text-turunc font-nunitoBold text-base mr-2">
                  4.2/5
                </Text>
              </View>
            </View>
            <Text className=" text-sm font-nunitoExtraBold text-griAcik mx-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="min-h-[150px] flex-1 bg-white shadow shadow-gri mt-2 m-2  rounded-xl"
            activeOpacity={0.7}
          >
            <View className="flex-row items-center justify-between">
              <Text className="  text-2xl  font-nunitoExtraBold text-gri m-2">
                Matematik
              </Text>
              <View className="flex-row items-center justify-center">
                <AntDesign
                  name="star"
                  size={20}
                  color="#FF9900"
                  className="absolute right-0"
                />
                <Text className="text-turunc font-nunitoBold text-base mr-2">
                  4.2/5
                </Text>
              </View>
            </View>
            <Text className=" text-sm font-nunitoExtraBold text-griAcik mx-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="min-h-[150px] flex-1 bg-white shadow shadow-gri mt-2 m-2  rounded-xl"
            activeOpacity={0.7}
          >
            <View className="flex-row items-center justify-between">
              <Text className="  text-2xl  font-nunitoExtraBold text-gri m-2">
                Fizik
              </Text>
              <View className="flex-row items-center justify-center">
                <AntDesign
                  name="star"
                  size={20}
                  color="#FF9900"
                  className="absolute right-0"
                />
                <Text className="text-turunc font-nunitoBold text-base mr-2">
                  4.2/5
                </Text>
              </View>
            </View>
            <Text className=" text-sm font-nunitoExtraBold text-griAcik mx-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default TeacherDetail;
