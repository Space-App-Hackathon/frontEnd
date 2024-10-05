import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { BACKEND_URL } from "../../env";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";

const Category = ({ navigation }) => {
  const DATA = [
    {
      id: "Gezegenler",
    },
    {
      id: "Yıldızlar",
    },
    {
      id: "Galaksiler",
    },
    {
      id: "Uzay Keşifleri",
    },
    {
      id: "Kara Delikler",
    },
    {
      id: "Roket Bilimi",
    },
    {
      id: "Astronotlar ve Uzay İstasyonları",
    },
    {
      id: "Uzay Teknolojisi",
    },
    {
      id: "Uzayda Yaşam",
    },
    {
      id: "Uzay Fiziği ve Kuantum Evreni",
    },
  ];

  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelect = (id) => {
    if (!selectedIds) {
      setSelectedIds([id]);
    } else {
      const index = selectedIds.indexOf(id);
      if (index === -1) {
        setSelectedIds([...selectedIds, id]);
      } else {
        const updatedIds = [...selectedIds];
        updatedIds.splice(index, 1);
        setSelectedIds(updatedIds);
      }
    }
  };

  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const handleCategory = async () => {
    const id = user._id;
    console.log(token);
    try {
      const response = await fetch(
        `${BACKEND_URL}/api/v1/students/${id}/add-category`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ categories: selectedIds }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.status === "success") {
        dispatch(updateUser(data.data));
        await AsyncStorage.setItem("user", JSON.stringify(data.data));
        navigation.navigate("BusinessBottomTab");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      className={` w-40 h-36 relative m-2 justify-center items-center overflow-hidden shadow-sm shadow-griAcik 
      rounded-md bg-beyaz   `}
      activeOpacity={0.8}
      onPress={() => handleSelect(item.id)}
    >
      <Text className="text-center font-nunitoExtraBold text-lg text-black px-1">
        {item.id}
      </Text>

      {selectedIds.includes(item.id) ? (
        <View
          source={{ uri: item.img }}
          className="w-40 h-40   absolute justify-center items-center bg-purple/40"
        >
          <Entypo name="check" size={80} color="white" className="" />
        </View>
      ) : null}
    </TouchableOpacity>
  );

  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);

  return (
    <View className="flex-[0.87] ">
      <Text className="font-nunitoExtraBold text-2xl mt-6 px-7">
        Ne Öğrenmek İstersin ?
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: "gray",
          marginBottom: 5,
        }}
        className="font-mediumNunito px-7"
      >
        İlgi alanlarınızdan birkaçını seçin ve herkesin neye tutkulu olduğunuzu
        bilmesini sağlayın.
      </Text>
      <View className=" items-center">
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          className="h-[95%] "
        />
        <TouchableOpacity
          className="justify-center items-center bg-purple h-14 w-full absolute -bottom-10 rounded-t-3xl"
          // onPress={handleCategory}
          onPress={() => setIsOpen(!isOpen)}
        >
          <Text className="text-beyaz font-nunitoExtraBold text-lg">
            Haydi Başlayalım
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Category;
