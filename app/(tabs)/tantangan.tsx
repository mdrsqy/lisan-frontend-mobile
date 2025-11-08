import ChallengeCard from "@/components/ChallengeCard";
import Header from "@/components/Header";
import StreakCalendar from "@/components/StreakCalendar";
import { icons } from "@/constants/icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
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

  const displayLetters = [
    { letter: "A", color: "#FFB6C1", status: "done" },
    { letter: "B", color: "#B0C4DE", status: "done" },
    { letter: "C", color: "#F08080", status: "locked" },
  ];

  const handleCardSelect = (letter: string) => {
    router.push({
      pathname: "/challenges/[letter]",
      params: { letter },
    });
  };

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
        <View className="flex-row flex-wrap justify-between gap-3 -mx-[2px]">
          {displayLetters.map((item, index) => (
            <ChallengeCard
              key={item.letter}
              letter={item.letter}
              color={item.color}
              onSelect={() => handleCardSelect(item.letter)}
              className="w-[32%] mb-3 mx-[2px]"
              onRemove={
                item.status === "done"
                  ? () => alert(`Lihat hasil ${item.letter}`)
                  : undefined
              }
            />
          ))}
          {/* lebih banyak */}
          <TouchableOpacity
            className="basis-[48%] rounded-xl shadow-md justify-center items-center"
            style={{ backgroundColor: "#F0F0F0", aspectRatio: 1 }}
            onPress={() => router.push("/challenges/moreLetters")}
          >
            <Image source={icons.more} className="size-20" />
            <Text className="text-base text-gray-600 mt-1">Lebih banyak</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row flex-wrap justify-between gap-3"></View>

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
