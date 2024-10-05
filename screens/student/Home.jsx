import { View, Text, FlatList, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({navigation}) => {
  const [circleProgress, setCircleProgress] = useState(0);
  const [bar1Progress, setBar1Progress] = useState(0);
  const [bar2Progress, setBar2Progress] = useState(0);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    // Animate circle chart
    const circleInterval = setInterval(() => {
      setCircleProgress((prevProgress) => Math.min(prevProgress + 0.05, 0.8)); // Adjust animation speed as needed
    }, 50); // Adjust animation interval as needed

    // Animate bar charts
    setTimeout(() => {
      setBar1Progress(0.3);
      setBar2Progress(0.6);
    }, 1000); // Adjust delay as needed

    return () => clearInterval(circleInterval);
  }, []);

  const renderItem = ({ item }) => (
    <View className="bg-white shadow shadow-gri rounded-md p-2 m-2 ">
      <Text className="text-gri text-xl font-nunitoExtraBold">
        {item}
      </Text>
      <View className="flex-row py-2">
        <View className="">
          {/* Progress chart with animated progress value */}
          <Progress.Circle
            size={120}
            progress={circleProgress}
            showsText={true}
            color={"#6CBA0E"}
            borderWidth={0}
            thickness={10}
            strokeCap={"round"}
          />
        </View>
        <View className="h-24 flex-1 ml-3">
          <Text className="text-gri text-base">
            Felsefede en son Aristo konusuni işledin çalışmaya devam etmelisin
          </Text>
        </View>
      </View>
      <View className="flex-row justify-around">
        <View className="flex-row justify-center items-center">
          <Text className="text-gri text-base font-nunitoBold">7/30</Text>
          <Progress.Bar
            progress={bar1Progress}
            width={100}
            color={"#6CBA0E"}
            borderWidth={0}
            height={12}
            borderRadius={10}
            backgroundColor={"#F1F1F1"}
            className="ml-2"
          />
        </View>
        <View className="flex-row justify-center items-center">
          <Text className="text-gri text-base font-nunitoBold">250/5320</Text>
          <Progress.Bar
            progress={bar2Progress}
            width={100}
            color={"#6CBA0E"}
            borderWidth={0}
            height={12}
            borderRadius={10}
            backgroundColor={"#F1F1F1"}
            className="ml-2"
          />
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

          <TouchableOpacity className="flex-row my-2 " 
          onPress={()=>navigation.navigate("Test")}>
            <View className="justify-center items-center w-16">
              <Image
                source={require("../../assets/test.jpg")}
                className="w-16 h-16"
                resizeMode="contain"
              />
            </View>
            <View className=" flex-1 h-12 ml-2 ">
              <Text className="text-lg font-nunitoSemiBold text-gri">
                5 Test çöz
              </Text>
              <Text className="text-sm font-nunitoSemiBold text-griAcik -mt-1">
                5 adet testi tamamlayın
              </Text>
              <Text className="text-sm text-turunc font-nunitoSemiBold  -mt-1">
                30 ducky puan
              </Text>
            </View>
          </TouchableOpacity>

         
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
                Ducky ile konuş
              </Text>
              <Text className="text-sm font-nunitoSemiBold text-griAcik -mt-1">
                5 dakika ducky ile konuş
              </Text>
              <Text className="text-sm font-nunitoSemiBold text-turunc -mt-1">
                30 ducky puan
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
                30 ducky puan
              </Text>
            </View>
          </View>

        </View>
        <View className="">
          <FlatList
            data={user.categories}
            keyExtractor={(item,index) => index}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
