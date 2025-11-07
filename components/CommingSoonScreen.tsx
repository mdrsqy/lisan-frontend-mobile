import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const ComingSoonScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View className="flex-1 px-5 pt-4">
        {/* Konten Utama Minimalis */}
        <View className="flex-1 items-center justify-center p-8 -mt-20">
          <Text className="text-7xl mb-6">⏳</Text>

          <Text className="text-2xl font-bold text-center mb-3">
            Coming Soon ...
          </Text>

          <Text className="text-base text-gray-600 text-center leading-relaxed"></Text>
        </View>

        {/* Footer Minimalis */}
        <View className="items-center mb-8">
          <Text className="text-sm text-gray-400">
            Terima kasih atas kesabaran Anda!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ComingSoonScreen;
