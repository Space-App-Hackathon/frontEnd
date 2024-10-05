import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import GoBackHeader from "../../components/GoBackHeader";
import { Input, Stack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { studentRegister } from "../../utils/StudentOperations";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";

const BusRegister = ({ navigation }) => {
  
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleRegister = () => {
    if (name === "" || email === "" || password === "" || password2 === "") {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: "Hata",
        textBody: "Tüm alanları doldurunuz",
      });
    } else if (password !== password2) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: "Hata",
        textBody: "Şifreler uyuşmuyor",
      });
    } else if (!isValidEmail) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: "Hata",
        textBody: "Geçerli bir email giriniz",
      });
    }
    else {
      studentRegister({ name, email, password },navigation);
    }
  };


  const validateEmail = (text) => {
    // Email için bir regex kullanarak doğrulama yapalım
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(text);
    setIsValidEmail(isValid);
    setEmail(text);
  };

  return (
    <View className="flex-1 bg-beyazark    ">
      {/* header */}
      <GoBackHeader title={"Öğrenci Kayıt"} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1  justify-center items-center ">
          <Stack space={2} w="80%" my="8" mx="auto" px={8}>
            <Input
              className=" bg-beyaz  text-[14px] text-gri "
              variant="filled"
              placeholder="Ad Soyad"
              shadow={1}
              maxLength={20}
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <Input
              className=" bg-beyaz  text-[14px] text-gri  "
              variant="filled"
              placeholder="Email"
              keyboardType="email-address"
              shadow={1}
              maxLength={50}
              value={email}
              onChangeText={validateEmail}
              borderColor={isValidEmail ? "transparent" : "red.900"}

            />
            <Input
              className=" bg-beyaz relative  text-[14px] text-gri  "
              variant="filled"
              placeholder="Şifre"
              shadow={1}
              maxLength={20}
              secureTextEntry={!show}
              value={password}
              onChangeText={(text) => setPassword(text)}
              InputRightElement={
                <TouchableOpacity
                  onPress={() => setShow(!show)}
                  className="absolute right-2"
                >
                  <Ionicons
                    name={show ? "eye-off" : "eye"}
                    size={24}
                    color={"#3a3a3a"}
                  />
                </TouchableOpacity>
              }
            />
            <Input
              className=" bg-beyaz  text-[14px] text-gri  "
              variant="filled"
              placeholder="Şifre yeniden"
              shadow={1}
              maxLength={20}
              secureTextEntry={!show}
              value={password2}
              onChangeText={(text) => setPassword2(text)}
            />
          </Stack>
          <TouchableOpacity
            className="w-[55%] h-14 justify-center items-center rounded-md mb-4 bg-purple "
            activeOpacity={0.7}
            onPress={handleRegister}
          >
            <Text className="font-semibold text-lg font-nunitoBold text-beyaz ">
              Kayıt Ol
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default React.memo(BusRegister);
