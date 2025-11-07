import ChallengeCard from "@/components/ChallengeCard";
import Header from "@/components/Header";
import StreakCalendar from "@/components/StreakCalendar";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const userData = {
  name: "First User",
  dailySign: "Terima Kasih",
};

const Tantangan = () => {
  const router = useRouter();

  const notifPress = () => {
    router.push("/notifications");
  };

  const primaryColor = "#6d28d9";

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-5 pt-2">
        {/* header */}
        <Header userName={userData.name} onNotificationPress={notifPress} />

        {/* streak calendar */}
        <View className="mb-8">
          <StreakCalendar />
        </View>

        {/* tantangan */}
        <Text className="text-xl font-bold mb-3">Tantangan Huruf</Text>
        <View className="flex-row flex-wrap justify-between gap-3">
          <ChallengeCard
            letter="A"
            color="#FFB6C1"
            onRemove={() => {}}
            onSelect={() => {}}
          />
          <ChallengeCard
            letter="B"
            color={primaryColor}
            onRemove={() => {}}
            onSelect={() => {}}
          />
          <ChallengeCard
            letter="C"
            color="#FADADD"
            onRemove={() => {}}
            onSelect={() => {}}
          />

          {/* lebih banyak */}
          <TouchableOpacity
            className="basis-[48%] rounded-xl shadow-md justify-center items-center"
            style={{ backgroundColor: "#F0F0F0", aspectRatio: 1 }}
          >
            <Text className="text-4xl">::</Text>
            <Text className="text-base text-gray-600 mt-1">Lebih banyak</Text>
          </TouchableOpacity>
        </View>

        {/* Tantangan Kata */}
        <Text className="text-xl font-bold mt-8 mb-3">Tantangan Kata</Text>
        <View className="h-40 bg-gray-100 rounded-xl justify-center items-center">
          <Text className="text-gray-500">List Tantangan Kata di sini</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tantangan;
