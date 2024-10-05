import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { Stack, Input, Avatar } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";

import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FindTeacher = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = React.useState("");

  // flatList
  const DATA = [
    {
      id: "1",
      name: "Zeliha Erdem",
      title: "Felsefe Öğretmeni",
      explanation:
        "Felsefe konusunda size kapsamlı ders verebilirim. İstediğiniz zaman istediğiniz soruyu sorabilirsiniz. Ayrıca 7/ 24 aktifim",
      img: "https://cdnstorage.sendbig.com/unreal/female.webp",
    },
    {
      id: "2",
      name: "Elif Elibol",
      title: "Felsefe Öğretmeni",
      explanation:
        "Felsefe konusunda size kapsamlı ders verebilirim. İstediğiniz zaman istediğiniz soruyu sorabilirsiniz. Ayrıca 7/ 24 aktifim",
      img: "https://www.w3schools.com/w3images/avatar2.png",

    },
    {
      id: "3",
      name: "Ali Akkaya",
      title: "Felsefe Öğretmeni",
      explanation:
        "Felsefe konusunda size kapsamlı ders verebilirim. İstediğiniz zaman istediğiniz soruyu sorabilirsiniz. Ayrıca 7/ 24 aktifim",
      img: "https://www.w3schools.com/w3images/avatar2.png",
    },
    {
      id: "4",
      name: "Ferhat Ergün",
      title: "Felsefe Öğretmeni",
      explanation:
        "Felsefe konusunda size kapsamlı ders verebilirim. İstediğiniz zaman istediğiniz soruyu sorabilirsiniz. Ayrıca 7/ 24 aktifim",
      img: "https://www.w3schools.com/w3images/avatar2.png",
    },
    {
      id: "5",
      name: "Erkan Kolakan",
      title: "Felsefe Öğretmeni",
      explanation:
        "Felsefe konusunda size kapsamlı ders verebilirim. İstediğiniz zaman istediğiniz soruyu sorabilirsiniz. Ayrıca 7/ 24 aktifim",
      img: "https://www.w3schools.com/w3images/avatar2.png",

    },
    {
      id: "6",
      name: "Elif Elibol",
      title: "Felsefe Öğretmeni",
      explanation:
        "Felsefe konusunda size kapsamlı ders verebilirim. İstediğiniz zaman istediğiniz soruyu sorabilirsiniz. Ayrıca 7/ 24 aktifim",
      img: "https://www.w3schools.com/w3images/avatar2.png",

    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      className="w-full bg-white  rounded-xl my-1   p-4"
      onPress={() => navigation.navigate("TeacherDetail", { item })}
    >
      <View className="flex flex-row gap-x-2 shadow shadow-gri ">
        <Avatar
          bg="green.500"
          className="w-16 h-16"
          source={{
            uri: item.img,
          }}
        >
          AJ
        </Avatar>
        <View className=" justify-center">
          <Text className="font-nunitoExtraBold text-2xl text-purple">
            {item.name}
          </Text>
          <Text className="font-nunitoExtraBold text-gri text-sm">
            {item.title}
          </Text>
        </View>
      </View>
      <Text className="font-nunitoBold text-gri mt-2  ">
        {item.explanation}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 items-center  ">
      <Header />
      <Stack space={14} w="100%" p="2" className="bg-beyaz" mx="auto" px={8}>
        <Input
          className=" bg-beyaz text-[14px] items-center justify-center text-gri "
          variant="rounded"
          placeholder="Eğitim Koçu Ara"
          placeholderTextColor={"black"}
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          InputRightElement={
            <TouchableOpacity className="justify-center items-center">
              <Icon
                className="w-12 justify-center items-center absolute right-0 bg-purple h-full pt-[10px] pl-3"
                name="search"
                size={20}
                color={"black"}
              />
            </TouchableOpacity>
          }
        />
      </Stack>

      <View className="mx-2 h-full">
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          className="mb-28"
        />
      </View>
    </View>
  );
};

export default FindTeacher;
