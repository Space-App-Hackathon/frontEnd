import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  Animated,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AlertDialog, Button, Center, Checkbox, HStack } from "native-base";

const Home = ({ navigation }) => {
  const [nasaImage, setNasaImage] = useState(null);
  const [loading, setLoading] = useState(true); // Başlangıçta yükleniyor
  const [progress] = useState(new Animated.Value(0)); // Animasyon için başlangıç değeri

  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);

  const user = {
    categories: [
      { id: "Gezegenler", ilerleme: 0.67 },
      { id: "Deneyler", ilerleme: 0.21 },
      { id: "Makaleler", ilerleme: 0.34 },
    ],
  };

  const getNasaImage = async () => {
    try {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=TClvkfSiMIvsf21VldGbFWGBu3NaRyCuiaWjSQcM"
      );
      const data = await response.json();
      setNasaImage(data);
      console.log(data);

      // Yükleme tamamlandığında animasyonu başlat
      Animated.timing(progress, {
        toValue: 1, // Tamamlandığında 1'e ayarla
        duration: 500, // Animasyon süresi
        useNativeDriver: false,
      }).start(() => setLoading(false)); // Animasyon tamamlandığında yüklemeyi bitir
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNasaImage();
  }, []);

  const renderItem = ({ item }) => (
    <View className="bg-white shadow shadow-gri rounded-md p-2 m-2 ">
      <Text className="text-gri text-xl font-nunitoExtraBold">{item.id}</Text>
      <View className="flex-row py-2">
        <View className="">
          <Progress.Circle
            size={120}
            progress={item.ilerleme} // İlerleme yüzdesi
            showsText={true}
            color={"#6E006C"}
            borderWidth={0}
            thickness={10}
            strokeCap={"round"}
            animated={true}
          />
        </View>
        <View className="h-24 flex-1 ml-3">
          <Text className="text-gri text-base">
            {item.id} kategorisinde daha araştırmacı bir ruha bütünmeli ve
            ilerlemelisin
          </Text>
        </View>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Animated.View style={{ marginTop: 20 }}>
          <Progress.Circle
            size={50}
            progress={progress} // Animasyonlu ilerleme
            showsText={true}
            color={"#6E006C"}
            borderWidth={0}
            thickness={10}
            strokeCap={"round"}
          />
        </Animated.View>
      </View>
    );
  }

  return (
    <View className="flex-1 ">
      <Header />
      <ScrollView>
        <View className="bg-white shadow shadow-gri rounded-md p-2 m-2 relative">
          <Text className="text-gri text-xl font-nunitoExtraBold text-start ml-2">
            Günün Resmi
          </Text>
          <Text className="text-griAcik text-xs font-nunitoExtraBold text-start ml-2 -mt-1">
            Nasa tarafından senin için seçildi
          </Text>

          <Image
            source={{ uri: nasaImage.hdurl }}
            className="w-full h-36 mx-auto mt-2"
          />
          <TouchableOpacity
            onPress={() => setIsOpen(true)}
            className="bg-white/40 absolute bottom-0 right-0 rounded-tl-lg p-1 justify-center items-center shadow shadow-griAcik w-32 mx-auto"
          >
            <Text className="text-white text-sm font-nunitoExtraBold text-start">
              Detayı Gör
            </Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white shadow shadow-gri rounded-md p-2 m-2">
          <Text className="text-gri text-xl font-nunitoExtraBold text-start ml-2">
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
            <View className="flex-1 h-12 ml-2 ">
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
            <View className="flex-1 h-12 ml-2 ">
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

        <Center>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <AlertDialog.Content>
              <AlertDialog.CloseButton />
              <AlertDialog.Header>
                <Text>{nasaImage.title} </Text>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <View className="flex-row flex-wrap">
                 <Text>
                  {nasaImage.explanation}
                 </Text>
                </View>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group space={2}>
                  <Button
                    className="bg-yesil"
                    onPress={() => {
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

        <View className="">
          <FlatList
            data={user.categories}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
