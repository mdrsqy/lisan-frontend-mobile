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

// mockup
const mockFriends = [
  { name: "Ade", exp: 1000, rank: 4 },
  { name: "Ikmal", exp: 1000, rank: 5 },
  { name: "Maulana", exp: 1000, rank: 6 },
  { name: "Jevon", exp: 1000, rank: 7 },
];
const mockLeaderboard = [
  { name: "Ade", score: 2430, rank: 1, icon: "👑" },
  { name: "Jevon", score: 2000, rank: 2, icon: "🥈" },
  { name: "Dzaky", score: 1800, rank: 3, icon: "🥉" },
];

// search bar
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
    className="flex-row items-center p-3 rounded-xl mx-5 mt-4 overflow-hidden"
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.3)",
    }}
  >
    <Image source={icons.search} />
    <TextInput
      placeholder="Cari Teman"
      placeholderTextColor="#6b7280"
      value={searchQuery}
      onChangeText={setSearchQuery}
      className="flex-1 text-base text-gray-800"
    />
  </BlurView>
);

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
      <View className="px-5 pt-2 flex-row justify-between items-center">
        <Text className="text-3xl font-bold text-gray-800">Cari Temanmu.</Text>
        <TouchableOpacity
          className="p-3 bg-white rounded-full shadow-md border border-gray-200"
          onPress={() => router.push("/notifications")}
        >
          <Image source={icons.bell} />
        </TouchableOpacity>
      </View>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* cari | leaderboard */}
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

      {/* list teman */}
      <ScrollView>
        {activeTab === "Cari" && (
          <View>
            {filteredFriends.map((friend, index) => (
              <View
                key={index}
                className="flex-row justify-between items-center p-3 mx-4 border-b border-gray-100"
              >
                <Text className="text-lg text-gray-800">{friend.name}</Text>
                <Text className="text-base text-gray-500">{friend.exp}</Text>
              </View>
            ))}
          </View>
        )}

        {/* leaderboard */}
        {activeTab === "Leaderboard" && (
          <View>
            {/* top 3 */}
            <View className="flex-row justify-around items-end h-40 mb-6">
              {mockLeaderboard.map((item, index) => (
                <View key={index} className="items-center">
                  <Text>{item.icon}</Text>
                  <Text>{item.name}</Text>
                  <Text>{item.score}</Text>
                </View>
              ))}
            </View>

            {/* sisanya */}
            {mockFriends.slice(0, 5).map((friend, index) => (
              <View
                key={index}
                className="flex-row justify-between items-center p-3 mx-4 border-b border-gray-100"
              >
                <Text>{friend.rank}</Text>
                <Text>{friend.name}</Text>
                <Text>{friend.exp} Exp</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Teman;
