import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Stack, Input, Avatar } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import { chatBot } from "../../utils/OpenAiOperations";

const Ai = () => {
  const [messageList, setMessageList] = useState([{
    username: "ducky",
    message: "Merhaba Erkan, Sana Nasıl Yardımcı Olabilirim ?",
    date: new Date().toLocaleString(),
  }]);
  const [message, setMessage] = useState("");



  const handleChat = async () => {
    const messageContent = {
      username: "user",
      message: message,
      date: new Date().toLocaleString(),
    };
    setMessageList((prev)=>[...prev, messageContent]);
    setMessage("")

    const newMessage = await chatBot(message)

    const messageContent1 = {
      username: "ducky",
      message: newMessage,
      date: new Date().toLocaleString(),
    };
    setMessageList((prev)=>[...prev, messageContent1]);

  }

  const renderItem = ({ item }) => (
    <View>
      {item.username === "user" ? (
        <View className="  mr-3 mb-2 flex-row self-end">
          <View className="bg-purple shadow shadow-gri max-w-xs rounded-2xl rounded-br-none min-h-[40px] px-2 justify-center">
            <Text className="text-white text-[13px] p-2 font-nunitoBold">
             {item.message}
            </Text>
          </View>
        </View>
      ) : (
        <View className=" ml-3 mb-2 flex-row">
          <View className="bg-white shadow shadow-gri max-w-xs min-h-[40px] px-2 justify-center rounded-2xl rounded-bl-none">
            <Text className="p-2 pt-1 pb-0 text-purple text-end">Ducky</Text>
            <Text className="text-gri text-[13px] p-2 pt-0 font-nunitoBold">
              {item.message}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
  return (
    <View className="flex-1">
      <View className="p-4 flex-row">
        <Image
          className="w-20 h-14 "
          source={require("../../assets/ducky.png")}
          resizeMode="contain"
        />
        <View className="justify-center">
          <Text className="text-2xl font-nunitoBold">
            Merhaba{" "}
            <Text className="text-2xl font-nunitoBold text-purple">Erkan</Text>
          </Text>
{/*           <Text className=" font-nunitoBold">
            Sana Nasıl Yardımcı Olabilirim ?{" "}
          </Text> */}
        </View>
      </View>
      <View className="flex-1 justify-between">
        <FlatList
          data={messageList}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />

        <Stack
          space={2}
          w="100%"
          p="2"
          className="flex-row items-center justify-center"
          mx="auto"
          px={4}
        >
          <Input
            className=" bg-beyaz text-[14px] items-center justify-center text-gri "
            variant="rounded"
            width={"80%"}
            placeholder="Mesaj Yaz"
            placeholderTextColor={"black"}
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
          <TouchableOpacity className=" w-12 h-10 rounded-3xl justify-center items-center ml-2"
          onPress={handleChat}>
            <Ionicons name="send" size={30} color={"#6CBA0E"} />
          </TouchableOpacity>
        </Stack>
      </View>
    </View>
  );
};

export default Ai;
