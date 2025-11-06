import { icons } from "@/constants/icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const Header = ({ userName }) => {
  return (
    <View className="flex-row justify-between items-center mb-4">
      <View>
        <Text className="text-3xl font-bold text-gray-800">
          Halo, <Text className="text-purple-700">{userName}</Text>
        </Text>
      </View>
      <TouchableOpacity className="p-3 bg-white rounded-full shadow-md border border-gray-200">
        <Image source={icons.bell} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
