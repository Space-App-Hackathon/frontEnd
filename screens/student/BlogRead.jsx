import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import GoBackHeader from "../../components/GoBackHeader";
import { Avatar } from "native-base";
import { useColorScheme } from "nativewind";
import { FontAwesome, Feather } from "@expo/vector-icons";

const BlogRead = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const route = useRoute();
  const { item } = route.params;
  console.log("====================================");
  console.log(item);
  console.log("====================================");

  return (
    <View className="bg-[#F9F9F9] dark:bg-gri ">
      <GoBackHeader />
      <TouchableOpacity
        className=" h-14 w-12 justify-center items-center absolute top-0 right-0 z-50"
        onPress={toggleColorScheme}
      >
        {colorScheme === "dark" ? (
          <Feather name="sun" size={24} color="black" />
        ) : (
          <FontAwesome name="moon-o" size={24} color="black" />
        )}
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false} className="mb-14">
        <View className="p-2 flex-row items-center">
          <Avatar
            bg="green.500"
            className="w-20 h-20"
            source={{
              uri: item.img,
            }}
          >
            AJ
          </Avatar>

          <View>
            <Text className="ml-2 text-2xl font-nunitoExtraBold text-purple">
              {item.name}
            </Text>
            <Text className="ml-2 text-sm font-nunitoExtraBold text-griAcik">
              {item.title}
            </Text>
          </View>
        </View>
        <View className="m-2">
          <Text className="text-base font-nunitoBold text-gri dark:text-beyazark  ">
            {item.blog}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default BlogRead;
