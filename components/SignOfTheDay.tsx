import React from "react";
import {Text, View } from "react-native";

interface SignOfTheDayProps {
  sign: string;
  gems: number;
  hearts: number;
}

const SignOfTheDay: React.FC<SignOfTheDayProps> = ({ sign, gems, hearts }) => {
  return (
    <View className="bg-white p-4 rounded-2xl shadow-xl overflow-hidden">
      <Text className="text-lg font-semibold text-gray-600 mb-3">
        Kata Isyarat hari ini: <Text className="text-purple-700">&quot;{sign}&quot;</Text>🔊
      </Text>

      {/* video */}
      <View className="relative w-full aspect-video bg-gray-200 rounded-xl justify-center items-center overflow-hidden">
        <View className="absolute inset-0 bg-black/30 justify-center items-center">
          <Text className="text-white text-6xl">▶️</Text>
        </View>
      </View>

      {/* skor */}
      <View className="flex-row justify-center space-x-12 mt-4 pt-4 border-t border-gray-100">
        <View className="flex-row items-center space-x-2">
          <Text className="text-3xl">🪐</Text>
          <Text className="text-2xl font-bold text-yellow-500">{gems}</Text>
        </View>
        <View className="flex-row items-center space-x-2">
          <Text className="text-3xl">💖</Text>
          <Text className="text-2xl font-bold text-red-500">{hearts}</Text>
        </View>
      </View>
    </View>
  );
};

export default SignOfTheDay;
