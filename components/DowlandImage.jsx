import React, { useCallback, useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

export default function DowlandImage({ values }) {
  const [image, setImage] = useState(null);

  const pickImage = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }, []);

  return (
    <View className="flex justify-center items-center">
      <TouchableOpacity onPress={pickImage}
        activeOpacity={.9}
      >
        <View className="border border-beyazbo shadow-sm shadow-yesil2 bg-beyaz   justify-center items-center rounded-full w-28 h-28">
          {image ? (
            <Image
              source={{ uri: image }}
              value={(values.image = image)}
              className="rounded-full w-28 h-28"
            />
          ) : (
            <MaterialIcons
              name="add-photo-alternate"
              size={28}
              color="#949494"
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}
