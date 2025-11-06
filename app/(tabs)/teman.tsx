import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, View } from "react-native";

const teman = () => {
  return (
    <View className="bg-black flex-1 px-10">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.teman} className="size-10" tintColor="#fff" />
        <Text className="text-gray-500 text-base">Teman</Text>
      </View>
    </View>
  );
};

export default teman;
