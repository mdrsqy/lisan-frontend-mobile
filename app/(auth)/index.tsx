import { icons } from "@/constants/icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const primaryPurple = "#6d28d9";

const LandingScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-end p-8">
      <View className="absolute top-1/4 items-center">
        <Image
          source={icons.logo}
          className="w-40 h-40 mb-6 rounded-2xl"
          resizeMode="contain"
        />
        <Text
          className="text-4xl font-extrabold text-center"
          style={{ color: primaryPurple }}
        >
          LISAN
        </Text>
        <Text className="text-base text-gray-600 text-center">
          Teknologi yang Mengerti Isyaratmu
        </Text>
      </View>

      {/* action */}
      <View className="w-full">
        <TouchableOpacity
          onPress={() => router.push("/register" as any)}
          className="w-full py-4 rounded-xl shadow-md mb-4 bg-black"
        >
          <Text className="text-xl font-bold text-white text-center">
            Mulai
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/register",
              params: { initialTab: "Masuk" },
            } as any)
          }
          className="w-full py-4 rounded-xl border border-black"
        >
          <Text className="text-xl font-bold text-black text-center">
            Sudah punya akun
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default LandingScreen;
