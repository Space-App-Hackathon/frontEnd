import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Entry = ({ navigation }) => {
    const imagePositions = [
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
    ];

    const animateImages = () => {
        Animated.loop(
            Animated.parallel([
                Animated.sequence([
                    Animated.timing(imagePositions[0], {
                        toValue: -3,
                        duration: 2500,
                        useNativeDriver: false,
                    }),
                    Animated.timing(imagePositions[0], {
                        toValue: 0,
                        duration: 2500,
                        useNativeDriver: false,
                    }),
                ]),
                Animated.sequence([
                    Animated.timing(imagePositions[1], {
                        toValue: 3,
                        duration: 2500,
                        useNativeDriver: false,
                    }),
                    Animated.timing(imagePositions[1], {
                        toValue: 0,
                        duration: 2500,
                        useNativeDriver: false,
                    }),
                ]),
                Animated.sequence([
                    Animated.timing(imagePositions[2], {
                        toValue: -3,
                        duration: 2500,
                        useNativeDriver: false,
                    }),
                    Animated.timing(imagePositions[2], {
                        toValue: 0,
                        duration: 2500,
                        useNativeDriver: false,
                    }),
                ]),
                Animated.sequence([
                    Animated.timing(imagePositions[3], {
                        toValue: 3,
                        duration: 2500,
                        useNativeDriver: false,
                    }),
                    Animated.timing(imagePositions[3], {
                        toValue: 0,
                        duration: 2500,
                        useNativeDriver: false,
                    }),
                ]),
            ])
        ).start();
    };

    useEffect(() => {
        animateImages();
    }, []);

    return (
        <SafeAreaView className="flex-1 items-center flex bg-purple">
            <View className="flex-1 flex-row items-end -mb-20">
                <Animated.Image
                    key={0}
                    source={require("../../assets/entryHuman1.png")}
                    className="-mx-4"
                    resizeMode="cover"
                    style={{ transform: [{ translateY: imagePositions[0] }] }}
                />
                <Animated.Image
                    key={1}
                    source={require("../../assets/entryHuman2.png")}
                    className="-mx-4 mt-24"
                    resizeMode="cover"
                    style={{ transform: [{ translateY: imagePositions[1] }] }}
                />
                <Animated.Image
                    key={2}
                    source={require("../../assets/entryHuman3.png")}
                    className="-mx-4"
                    resizeMode="cover"
                    style={{ transform: [{ translateY: imagePositions[2] }] }}
                />
                <Animated.Image
                    key={3}
                    source={require("../../assets/entryHuman4.png")}
                    className="-mx-4 overflow-hidden"
                    resizeMode="cover"
                    style={{ transform: [{ translateY: imagePositions[3] }] }}
                />
            </View>
            <View className="w-full h-[50vh] justify-around p-4 -z-50">
                <View>
                    <Text className="text-white font-nunitoBold text-3xl">
                    Evrenin derinliklerinde, gezegenlerin sırlarını keşfet! 
                    </Text>
                    <Text className="text-white font-normal text-base">
                    Sonsuz yıldızlar arasında kaybol ve kozmosun büyüleyici hikayelerine adım at.
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("AuthEntryQuestion")}
                        activeOpacity={0.8}
                        className="w-full self-center mt-12 bg-white h-16 relative rounded-lg items-center justify-center"
                    >
                        <Text className="text-xl font-boldNunito shadow shadow-black tracking-wider text-purple self-center">
                            Hemen Kayıt Ol
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                    activeOpacity={0.8}
                    className="self-center"
                >
                    <Text className="text-white">
                        Zaten bir hesabın var mı?{" "}
                        <Text className="text-white font-extrabold">
                            Hemen giriş yap
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Entry;
