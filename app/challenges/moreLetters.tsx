import ChallengeCard from "@/components/ChallengeCard";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MoreLetters = () => {
  const router = useRouter();

  const allLetters = [
    { letter: "A", color: "#FFB6C1", status: "done" },
    { letter: "B", color: "#B0C4DE", status: "done" },
    { letter: "C", color: "#F08080", status: "locked" },
    { letter: "D", color: "#ADD8E6", status: "unlocked" },
    { letter: "E", color: "#A0C4FF", status: "unlocked" },
    { letter: "F", color: "#90EE90", status: "unlocked" },
    { letter: "G", color: "#F0E68C", status: "unlocked" },
    { letter: "H", color: "#FFE1BD", status: "unlocked" },
    { letter: "I", color: "#D8BFD8", status: "unlocked" },
    { letter: "J", color: "#778899", status: "unlocked" },
    { letter: "K", color: "#87CEEB", status: "unlocked" },
    { letter: "L", color: "#D0C6FF", status: "unlocked" },
  ];

  const handleCardSelect = (letter: string) => {
    router.push({
      pathname: "/challenges/[letter]",
      params: { letter },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-5">
        <View className="flex-row flex-wrap justify-between gap-3 -mx-[2px]">
          {allLetters.map((item, index) => (
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoreLetters;
