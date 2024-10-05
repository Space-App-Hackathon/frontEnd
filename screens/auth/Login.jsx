import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

import GoBackHeader from "../../components/GoBackHeader";
import { Input, Stack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { teacherLogin } from "../../utils/TeacherOperations";
import { useDispatch } from "react-redux";

const BusRegister = ({ navigation }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");


  const validateEmail = (text) => {
    // Email için bir regex kullanarak doğrulama yapalım
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(text);
    setIsValidEmail(isValid);
    setEmail(text);
  };


  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Tüm alanları doldurunuz");
    } else if (!isValidEmail) {
      alert("Geçerli bir email giriniz");
    }
    else {
      teacherLogin({ email, password }, dispatch);
    }
  }
  return (
    <View className="flex-1 bg-beyazark  ">
      {/* header */}
      <GoBackHeader title={"Giriş Yap"} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1  justify-center items-center ">
          <Image
            source={require("../../assets/ducky.png")}
            className="w-52 h-20 mb-8"
            resizeMode="contain"
          />

          <Stack space={2} w="80%" my="8" mx="auto" px={8}>
            <Input
              className=" bg-beyaz  text-[14px] text-gri  "
              variant="filled"
              placeholder="Email"
              keyboardType="email-address"
              shadow={1}
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
            <View className="w-full items-end">
              <TouchableOpacity
                onPress={() => navigation.navigate("RenewPassword")}
              >
                <Text className=" text-yesil2 ">
                  Şifreyi sıfırla
                </Text>
              </TouchableOpacity>
            </View>
          </Stack>
          <TouchableOpacity
            className="w-[55%] h-14 shadow shadow-yesil2 justify-center items-center rounded-md mb-4 bg-purple "
            activeOpacity={0.7}
            onPress={handleLogin}
          >
            <Text className="font-semibold text-lg text-beyaz font-nunitoBold">
              Giriş Yap
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className="w-full h-16 justify-center items-center mb-4 "
          onPress={() => navigation.navigate("Login")}
          activeOpacity={0.7}
        >
          <Text className="font-semibold text-base px-1 text-center text-purple ">
            <Text className="text-gri font-normal">Bir hesabın yok mu?</Text> Kayıt ol
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default React.memo(BusRegister);
