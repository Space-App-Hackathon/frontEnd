import { View, Text, FlatList, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  //const user = useSelector((state) => state.user.user);

  const user = {
    categories: [
      {
        id: "Gezegenler",
        ilerleme: 0.67,
      },
      {
        id: "Deneyler",
        ilerleme: 0.21,
      },
      {
        id:"Makaleler",
        ilerleme: 0.34,
      }
    ],
  };

  const renderItem = ({ item }) => (
    <View className="bg-white shadow shadow-gri rounded-md p-2 m-2 ">
      <Text className="text-gri text-xl font-nunitoExtraBold">{item.id}</Text>
      <View className="flex-row py-2">
        <View className="">
          <Progress.Circle
            size={120}
            progress={item.ilerleme}
            showsText={true}
            color={"#6CBA0E"}
            borderWidth={0}
            thickness={10}
            strokeCap={"round"}
            animated={true}
          />
        </View>
        <View className="h-24 flex-1 ml-3">
          <Text className="text-gri text-base">
            {/* gezegenler  */}
            {item.id} kategorisinde daha araştırmacı bir ruha bütünmeli ve ilerlemelisin
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View className="flex-1 ">
      <Header />
      <ScrollView>
        <View className="bg-white shadow  shadow-gri rounded-md p-2 m-2">
          <Text className="text-gri text-2xl font-nunitoExtraBold text-start ml-2">
            Günlük Görevler
          </Text>
          <Text className="text-griAcik text-xs font-nunitoExtraBold text-start ml-2 -mt-1">
            Görevleri tamamlayarak tecrübe puanı kazan
          </Text>


          <View className="flex-row my-2 ">
            <View className="justify-center items-center w-16">
              <Image
                source={require("../../assets/ducky.png")}
                className="w-12 h-12"
                resizeMode="contain"
              />
            </View>
            <View className=" flex-1 h-12 ml-2 ">
              <Text className="text-lg font-nunitoSemiBold text-gri">
                Monki ile konuş
              </Text>
              <Text className="text-sm font-nunitoSemiBold text-griAcik -mt-1">
                5 dakika monki ile konuş
              </Text>
              <Text className="text-sm font-nunitoSemiBold text-turunc -mt-1">
                30 monki puan
              </Text>
            </View>
          </View>

          <View className="flex-row my-2 ">
            <View className="justify-center items-center w-16">
              <Image
                source={require("../../assets/blog.png")}
                className="w-14 h-14"
                resizeMode="contain"
              />
            </View>
            <View className=" flex-1 h-12 ml-2 ">
              <Text className="text-lg font-nunitoSemiBold text-gri">
                3 Blog oku
              </Text>
              <Text className="text-sm font-nunitoSemiBold text-griAcik -mt-1">
                3 adet blog okuyun
              </Text>
              <Text className="text-sm font-nunitoSemiBold text-turunc -mt-1">
                45 monki puan
              </Text>
            </View>
          </View>
        </View>
        <View className="">
          <FlatList
            data={user.categories}
            keyExtractor={(item, index) => index}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
