import { View, Text, Image,ScrollView } from 'react-native'
import React from 'react'

const Rank = () => {
    return (
        <View className="flex-1 bg-purple">
            <View className=" mt-4">
                <Text className="text-2xl text-center text-white font-nunitoExtraBold">En Yüksek Puanlar</Text>
            </View>

            <View className="flex-row items-center justify-center gap-x-6">
                <View className="flex justify-center items-center">
                    <View className="w-20 h-20 rounded-full mt-12 bg-green-300">
                        <Image
                            className="w-20 h-20 rounded-full"
                            source={{
                                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
                            }}
                            style={{ resizeMode: "cover" }}
                        />
                    </View>
                    <View><Text className="text-sm text-white font-nunitoSemiBold">Ali Akkaya</Text></View>
                </View>

                <View className="flex justify-center items-center">
                    <View className="w-24 h-24 rounded-full bg-green-300">
                        <Image
                            className="w-24 h-24 rounded-full"
                            source={{
                                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
                            }}
                            style={{ resizeMode: "cover" }}
                        />
                    </View>
                    <View><Text className="text-lg text-white font-nunitoSemiBold">Ali Akkaya</Text></View>
                </View>

                <View className="flex justify-center mt-12 items-center">
                    <View className="w-20 h-20 rounded-full bg-green-300">
                        <Image
                            className="w-20 h-20 rounded-full"
                            source={{
                                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
                            }}
                            style={{ resizeMode: "cover" }}
                        />
                    </View>
                    <View><Text className="text-sm text-white font-nunitoSemiBold">Ali Akkaya</Text></View>
                </View>
            </View>

            <View className="bg-white  flex-1 mt-8 mx-2 rounded-tl-xl rounded-tr-xl">
                <ScrollView
                
                
                >
                    <View className="">
                        <View className="flex flex-row   p-2 m-2  rounded-lg">
                            <View className="w-16 h-16  mr-3 rounded-full bg-green-300">
                                <Image
                                    className="w-16 h-16 rounded-full"
                                    source={{
                                        uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
                                    }}
                                    style={{ resizeMode: "cover" }}
                                />
                            </View>
                            <View className=" flex justify-center">
                                <Text className="text-lg text-black font-nunitoSemiBold">Ali Akkaya</Text>
                                <Text className="text-sm text-black font-nunitoRegular">34. sıra</Text>
                            </View>
                        </View>
                    </View>

                    <View className="-mt-6">
                        <View className="flex flex-row   p-2 m-2  rounded-lg">
                            <View className="w-16 h-16  mr-3 rounded-full bg-green-300">
                                <Image
                                    className="w-16 h-16 rounded-full"
                                    source={{
                                        uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
                                    }}
                                    style={{ resizeMode: "cover" }}
                                />
                            </View>
                            <View className=" flex justify-center">
                                <Text className="text-lg text-black font-nunitoSemiBold">Ali Akkaya</Text>
                                <Text className="text-sm text-black font-nunitoRegular">34. sıra</Text>
                            </View>
                        </View>
                    </View>

                    <View className="-mt-6">
                        <View className="flex flex-row   p-2 m-2  rounded-lg">
                            <View className="w-16 h-16  mr-3 rounded-full bg-green-300">
                                <Image
                                    className="w-16 h-16 rounded-full"
                                    source={{
                                        uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
                                    }}
                                    style={{ resizeMode: "cover" }}
                                />
                            </View>
                            <View className=" flex justify-center">
                                <Text className="text-lg text-black font-nunitoSemiBold">Ali Akkaya</Text>
                                <Text className="text-sm text-black font-nunitoRegular">34. sıra</Text>
                            </View>
                        </View>
                    </View>

                    <View className="-mt-6">
                        <View className="flex flex-row   p-2 m-2  rounded-lg">
                            <View className="w-16 h-16  mr-3 rounded-full bg-green-300">
                                <Image
                                    className="w-16 h-16 rounded-full"
                                    source={{
                                        uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
                                    }}
                                    style={{ resizeMode: "cover" }}
                                />
                            </View>
                            <View className=" flex justify-center">
                                <Text className="text-lg text-black font-nunitoSemiBold">Ali Akkaya</Text>
                                <Text className="text-sm text-black font-nunitoRegular">34. sıra</Text>
                            </View>
                        </View>
                    </View>

                    <View className=" -mt-6">
                        <View className="flex flex-row   p-2 m-2  rounded-lg">
                            <View className="w-16 h-16  mr-3 rounded-full bg-green-300">
                                <Image
                                    className="w-16 h-16 rounded-full"
                                    source={{
                                        uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
                                    }}
                                    style={{ resizeMode: "cover" }}
                                />
                            </View>
                            <View className=" flex justify-center">
                                <Text className="text-lg text-black font-nunitoSemiBold">Ali Akkaya</Text>
                                <Text className="text-sm text-black font-nunitoRegular">34. sıra</Text>
                            </View>
                        </View>
                    </View>

                    <View className=" -mt-6">
                        <View className="flex flex-row   p-2 m-2  rounded-lg">
                            <View className="w-16 h-16  mr-3 rounded-full bg-green-300">
                                <Image
                                    className="w-16 h-16 rounded-full"
                                    source={{
                                        uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
                                    }}
                                    style={{ resizeMode: "cover" }}
                                />
                            </View>
                            <View className=" flex justify-center">
                                <Text className="text-lg text-black font-nunitoSemiBold">Ali Akkaya</Text>
                                <Text className="text-sm text-black font-nunitoRegular">34. sıra</Text>
                            </View>
                        </View>
                    </View>

                    <View className=" -mt-6">
                        <View className="flex flex-row   p-2 m-2  rounded-lg">
                            <View className="w-16 h-16  mr-3 rounded-full bg-green-300">
                                <Image
                                    className="w-16 h-16 rounded-full"
                                    source={{
                                        uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
                                    }}
                                    style={{ resizeMode: "cover" }}
                                />
                            </View>
                            <View className=" flex justify-center">
                                <Text className="text-lg text-black font-nunitoSemiBold">Ali Akkaya</Text>
                                <Text className="text-sm text-black font-nunitoRegular">34. sıra</Text>
                            </View>
                        </View>
                    </View>

                    <View className=" -mt-6">
                        <View className="flex flex-row   p-2 m-2  rounded-lg">
                            <View className="w-16 h-16  mr-3 rounded-full bg-green-300">
                                <Image
                                    className="w-16 h-16 rounded-full"
                                    source={{
                                        uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
                                    }}
                                    style={{ resizeMode: "cover" }}
                                />
                            </View>
                            <View className=" flex justify-center">
                                <Text className="text-lg text-black font-nunitoSemiBold">Ali Akkaya</Text>
                                <Text className="text-sm text-black font-nunitoRegular">34. sıra</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </View>
        </View>
    )
}

export default Rank