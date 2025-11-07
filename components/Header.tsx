import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  userName: string;
  onNotificationPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ userName, onNotificationPress }) => {
  return (
    <View className="flex-row justify-between items-center mb-4">
      <View>
        <Text className="text-3xl font-bold text-gray-800">
          Halo, <Text className="text-purple-700">{userName}</Text>
        </Text>
      </View>
      <TouchableOpacity
        onPress={onNotificationPress}
        className="p-3 bg-white rounded-full shadow-md border border-gray-200"
      >
        <Image source={icons.bell} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
