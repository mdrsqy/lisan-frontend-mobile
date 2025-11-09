// app/users/[id].tsx
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Mock Data
const getUserData = (id: string) => ({
  name: "Other User",
  email: "user@example.com",
  profilePic: "https://via.placeholder.com/150/FF7F50/FFFFFF?Text=OU",
  followers: id === "1" ? 0 : 1,
  following: id === "1" ? 0 : 5,
  gems: 0,
});

const OtherUserDetailScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const id = params.id as string;
  const userData = getUserData(id);

  const [isFollowing, setIsFollowing] = useState(userData.followers > 0);
  const primaryOrange = "#FF7F50";

  const handleFollowToggle = () => {
    setIsFollowing((prev) => !prev);
    alert(isFollowing ? "Berhenti mengikuti!" : "Mulai mengikuti!");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        {/* header */}
        <View
          className="items-center py-8 px-5"
          style={{
            backgroundColor: primaryOrange,
            minHeight: 300,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          <View className="flex-row justify-between w-full mb-4">
            <TouchableOpacity onPress={() => router.back()}>
              <Text className="text-2xl text-white font-light">&lt;</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFollowToggle}>
              <Text
                className="text-base font-bold px-3 py-1 rounded-full"
                style={{
                  backgroundColor: isFollowing ? "white" : "black",
                  color: isFollowing ? primaryOrange : "white",
                }}
              >
                {isFollowing ? "Diikuti" : "Ikuti"}
              </Text>
            </TouchableOpacity>
          </View>

          <Image
            source={{ uri: userData.profilePic }}
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <Text className="text-xl font-bold text-white mt-3">
            {userData.name}
          </Text>
          <Text className="text-base text-white/80">{userData.email}</Text>

          <View className="flex-row mt-4 space-x-6">
            <Text className="text-base font-semibold text-white">
              Pengikut {userData.followers}
            </Text>
            <Text className="text-base font-semibold text-white">
              Diikuti {userData.following}
            </Text>
          </View>
        </View>

        {/* prestasi*/}
        <View className="p-5">
          <View className="flex-row items-center py-4 px-3 bg-white rounded-xl shadow-sm justify-center mb-6">
            <Text className="text-3xl mr-2">⚡</Text>
            <Text className="text-2xl font-bold text-yellow-500">
              {userData.gems}
            </Text>
          </View>

          <Text
            className="text-2xl font-bold mb-3"
            style={{ color: primaryOrange }}
          >
            Pencapaian
          </Text>
          <View className="flex-row justify-around mx-5 mt-3 space-x-4">
            <Text className="text-5xl">🏅</Text>
            <Text className="text-5xl">🏅</Text>
            <Text className="text-5xl">🏅</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtherUserDetailScreen;
