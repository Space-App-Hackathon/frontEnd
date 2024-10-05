import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import { useState } from "react";
import { BACKEND_URL } from "../../env";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";
import { AlertDialog, Button, Center, Checkbox, HStack } from "native-base";

const Category = ({ navigation }) => {
  const DATA = [
    {
      id: "İngilizce",
      blogName: "İngilizce",
      img: "https://cdnstorage.sendbig.com/unreal/female.webp",
    },
    {
      id: "Hafıza Egzersizleri",
      blogName: "Hafıza Egzersizleri",
      img: "https://cdnstorage.sendbig.com/unreal/female.webp",
    },
    {
      id: "Yazılım",
      blogName: "Yazılım",
      img: "https://cdnstorage.sendbig.com/unreal/female.webp",
    },
    {
      id: "Matematik",
      blogName: "Matematik",
      img: "https://cdnstorage.sendbig.com/unreal/female.webp",
    },
    {
      id: "Fizik",
      blogName: "Fizik",
      img: "https://cdnstorage.sendbig.com/unreal/female.webp",
    },
    {
      id: "Almanca",
      blogName: "Almanca",
      img: "https://cdnstorage.sendbig.com/unreal/female.webp",
    },
    {
      id: "Hızlı Okuma",
      blogName: "Hızlı Okuma",
      img: "https://cdnstorage.sendbig.com/unreal/female.webp",
    },
    {
      id: "Genel Kültür",
      blogName: "Genel Kültür",
      img: "https://cdnstorage.sendbig.com/unreal/female.webp",
    },
  ];

  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSelectTime = (time) => {
    setSelectedTime(time);
  };

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
      if(data.status === "success"){
        dispatch(updateUser(data.data));
        await AsyncStorage.setItem("user", JSON.stringify(data.data));
        navigation.navigate("BusinessBottomTab")
      }

    } catch (error) {
      console.log(error);
    }

    
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      className={` w-40 h-40 relative m-2 justify-center items-center overflow-hidden shadow-sm shadow-griAcik 
      rounded-md bg-beyaz   `}
      activeOpacity={0.8}
      onPress={() => handleSelect(item.id)}
    >
      <Text className="text-center font-nunitoExtraBold text-xl text-black px-1">
        {item.blogName}
      </Text>

      {selectedIds.includes(item.id) ? (
        <View
          source={{ uri: item.img }}
          className="w-40 h-40   absolute justify-center items-center bg-purple/60"
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
    <View className="flex-[0.95] ">
      <Text className="font-nunitoExtraBold text-2xl text-center mt-2">
        Ne Öğrenmek İstersin ?
      </Text>
      <Center>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>
              <Text>Ne kadar sıklıkla çalışmak </Text>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <Text className="mb-2">Günde derslerine ne kadar vakit ayırmak istersin?</Text>
              <View className="flex-row flex-wrap">
                <TouchableOpacity
                  className={`p-1 w-14 m-1 justify-center items-center rounded-full  bg-beyaz shadow shadow-gri  ${selectedTime === 10 ? "bg-purple" : ""} `}
                  onPress={() => handleSelectTime(10)}
                >
                  <Text className={`text-gri font-nunitoBold  ${selectedTime === 10 ? "text-beyaz" : ""}`}>10 dk</Text>
                </TouchableOpacity>
                <TouchableOpacity
                   className={`p-1 w-14 m-1 justify-center items-center rounded-full  bg-beyaz shadow shadow-gri ${selectedTime === 15 ? "bg-purple" : ""}`}
                  onPress={() => handleSelectTime(15)}
                >
                  <Text className={`text-gri font-nunitoBold  ${selectedTime === 15 ? "text-beyaz" : ""}`}>15 dk</Text>
                </TouchableOpacity>
                <TouchableOpacity
                   className={`p-1 w-14 m-1 justify-center items-center rounded-full  bg-beyaz shadow shadow-gri ${selectedTime === 25 ? "bg-purple" : ""}`}
                  onPress={() => handleSelectTime(25)}
                >
                  <Text className={`text-gri font-nunitoBold  ${selectedTime === 25 ? "text-beyaz" : ""}`}>20 dk</Text>
                </TouchableOpacity>
                <TouchableOpacity
                   className={`p-1 w-14 m-1 justify-center items-center rounded-full  bg-beyaz shadow shadow-gri ${selectedTime === 40 ? "bg-purple" : ""}`}
                  onPress={() => handleSelectTime(40)}
                >
                  <Text className={`text-gri font-nunitoBold  ${selectedTime === 40 ? "text-beyaz" : ""}`}>25 dk</Text>
                </TouchableOpacity>
              </View>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button
                  variant="unstyled"
                  colorScheme="coolGray"
                  onPress={onClose}
                  ref={cancelRef}
                >
                  <Text>Geri</Text>
                </Button>
                <Button className="bg-purple" 
                  onPress={() => {
                    handleCategory();
                    onClose();
                  }}
                >
                  <Text className="text-beyaz">Devam Et</Text>
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Center>
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
          className="justify-center items-center bg-purple h-14 w-full absolute -bottom-10"
          // onPress={handleCategory}
          onPress={() => setIsOpen(!isOpen)}
        >
          <Text className="text-beyaz font-nunitoExtraBold text-lg">
            Haydi Öğrenmeye Başla
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Category;
