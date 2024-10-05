import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Input, Stack, useToast, Box } from "native-base";
import GoBackHeader from "../../components/GoBackHeader";

const RenewPassword = ({ navigation }) => {
  const toast = useToast();

  const alert = (message, color) => {
    toast.show({
      render: () => {
        return (
          <Box bg={color} px="2" py="1" rounded="sm" mb={5}>
            <Text className="text-beyaz">{message}</Text>
          </Box>
        );
      },
    });
  };

  return (
    <>
      <GoBackHeader   />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 bg-beyazark    justify-center items-center   ">
          <Text className="max-w-xs font-semibold text-center text-lg text-yesil2 ">
            Şifrenizi sıfırlamak için e-postanızı girin.
          </Text>
          <Stack space={2} w="80%" my="4" mb="8" px={8}>
            <Input
              className=" bg-beyaz   text-[14px] text-gri "
              variant="filled"
              placeholder="Email"
              shadow={1}
              maxLength={40}
              keyboardType="email-address"
            />
            <TouchableOpacity
              onPress={() => alert("Mail yeniden gönderildi", "green.500")}
            >
              <Text className="text-right text-gri ark">
                Yeniden gönder
              </Text>
            </TouchableOpacity>
          </Stack>
          <TouchableOpacity
            className="w-[55%] h-14 shadow shadow-gri justify-center items-center rounded-md bg-beyaz 2"
            activeOpacity={0.7}
            onPress={() => {
              alert("Mail gönderildi", "green.500"),
                navigation.navigate("Login");
            }}
          >
            <Text className="font-semibold text-lg text-yesil2 ">
              Gönder
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default React.memo(RenewPassword);
