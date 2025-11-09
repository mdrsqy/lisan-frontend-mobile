import LisanBacground from "@/components/LisanBacground";
import { icons } from "@/constants/icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const mockFriends = [
  { id: "101", name: "Ade", exp: 1000, rank: 4 },
  { id: "102", name: "Ikmal", exp: 1000, rank: 5 },
  { id: "103", name: "Maulana", exp: 1000, rank: 6 },
  { id: "104", name: "Jevon", exp: 1000, rank: 7 },
];
const mockLeaderboard = [
  {
    id: "201",
    name: "Ade",
    score: 2430,
    rank: 1,
    icon: "👑",
    color: "#FFD700",
  }, // Gold
  {
    id: "202",
    name: "Jevon",
    score: 2000,
    rank: 2,
    icon: "🥈",
    color: "#C0C0C0",
  }, // Silver
  {
    id: "203",
    name: "Dzaky",
    score: 1800,
    rank: 3,
    icon: "🥉",
    color: "#CD7F32",
  }, // Bronze
];

const SearchBar = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}) => (
  <BlurView
    intensity={90}
    tint="light"
    className="flex-row items-center p-3 rounded-3xl mx-5 mt-4 overflow-hidden"
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.3)",
    }}
  >
    <Text className="text-xl mr-2">🔍</Text>
    <TextInput
      placeholder="Cari Teman"
      placeholderTextColor="#6b7280"
      value={searchQuery}
      onChangeText={setSearchQuery}
      className="flex-1 text-base text-gray-800"
    />
  </BlurView>
);

const FriendListItem = ({
  friend,
  isLeaderboard = false,
}: {
  friend: (typeof mockFriends)[0] & { score?: number };
  isLeaderboard?: boolean;
}) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/users/${friend.id}` as any);
  };

  return (
    <TouchableOpacity
      key={friend.id}
      onPress={handlePress}
      className="flex-row justify-between items-center p-3 mx-4 border-b border-gray-100"
    >
      <View className="flex-row items-center">
        {isLeaderboard && (
          <Text className="text-base text-gray-500 w-10 text-left">
            {friend.rank}
          </Text>
        )}

        <View className="w-8 h-8 rounded-full bg-gray-300 mr-3" />

        <Text className="text-lg text-gray-800">{friend.name}</Text>
      </View>

      {/* exp */}
      <Text
        className="text-base font-semibold"
        style={{ color: isLeaderboard ? "#3b82f6" : "gray" }}
      >
        {isLeaderboard ? friend.score?.toString() : friend.exp} Exp
      </Text>
    </TouchableOpacity>
  );
};

const Teman = () => {
  const [activeTab, setActiveTab] = useState<"Cari" | "Leaderboard">("Cari");
  const [searchQuery, setSearchQuery] = useState("");
  const primaryColor = "#6d28d9";

  const router = useRouter();

  const filteredFriends = mockFriends.filter((f) =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <LisanBacground />
      {/* header */}
      <View className="px-5 pt-2 flex-row justify-between items-center">
        <Text className="text-3xl font-bold text-gray-800">Cari Temanmu.</Text>
        <TouchableOpacity
          className="p-3 bg-white rounded-full shadow-md border border-gray-200"
          onPress={() => router.push("/notifications" as any)}
        >
          {/* icon */}
          <Image source={icons.bell} />
        </TouchableOpacity>
      </View>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* tab */}
      <View className="flex-row mx-5 mt-4 border-b border-gray-200">
        {["Cari", "Leaderboard"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab as "Cari" | "Leaderboard")}
            className="flex-1 pb-2 relative"
          >
            <View className="w-full items-center">
              <Text
                className="text-lg font-semibold"
                style={{ color: activeTab === tab ? primaryColor : "gray" }}
              >
                {tab}
              </Text>
            </View>
            {activeTab === tab && (
              <View
                className="absolute bottom-[-2px] h-0.5 w-full rounded-full"
                style={{ backgroundColor: primaryColor }}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* list */}
      <ScrollView>
        {activeTab === "Cari" && (
          <View className="pt-4">
            {/* user komponen */}
            {filteredFriends.map((friend) => (
              <FriendListItem key={friend.id} friend={friend} />
            ))}
          </View>
        )}

        {activeTab === "Leaderboard" && (
          <View className="pt-4">
            {/* 3 besar */}
            <View className="flex-row justify-around items-end h-40 mb-6">
              {mockLeaderboard.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => router.push(`/users/${item.id}` as any)}
                  className="items-center"
                >
                  <View
                    className="w-16 h-16 rounded-full bg-gray-200 items-center justify-center border-4"
                    style={{ borderColor: item.color }}
                  >
                    <Text className="text-2xl">{item.icon}</Text>
                  </View>
                  <Text className="text-base font-bold mt-1">{item.name}</Text>
                  <Text className="text-sm text-gray-600">
                    {item.score} Poin
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* sisanya */}
            {mockFriends.slice(0, 5).map((friend) => (
              <FriendListItem
                key={friend.id}
                friend={{ ...friend, score: friend.exp, rank: friend.rank }}
                isLeaderboard={true}
              />
            ))}
          </View>
        )}
        <View className="h-32" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Teman;
