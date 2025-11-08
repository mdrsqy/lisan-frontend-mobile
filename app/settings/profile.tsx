import StatsWidget from "@/components/StatsWidget";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const primaryOrange = "#ff7f50";

const Profile = () => {
  // data dummy
  const user = {
    name: "First User",
    email: "user@example.com",
    profilePic: "https://via.placeholder.com/150/0000FF/808080?Text=User",
    followers: 100,
    following: 50,
    gems: 19,
    hearts: 10,
  };

  const mockAchievements = [
    { id: 1, icon: "🌟" },
    { id: 2, icon: "🏆" },
    { id: 3, icon: "🥇" },
  ];
  const router = useRouter();
  const upgradePress = () => {
    router.push("/premium");
  };

  const handleProfile = () => {
    // router.push("/settings/profile");
    alert("Coming Soon ...");
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["bottom"]}>
      <ScrollView>
        <View className="px-5 pt-7" style={{ backgroundColor: primaryOrange }}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text className="text-4xl font-extrabold text-gray-700">←</Text>
          </TouchableOpacity>
        </View>
        {/* header */}
        <View
          className="items-center justify-center py-10"
          style={{
            backgroundColor: primaryOrange,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            minHeight: 250,
          }}
        >
          
          {/* foto */}
          <View className="relative">
            <Image
              source={{ uri: user.profilePic }}
              className="w-24 h-24 rounded-full border-4 border-white"
            />

            {/* icon edit foto */}
            <TouchableOpacity className="absolute bottom-0 right-0 p-1 bg-white rounded-full shadow-md">
              <Text className="text-base">✏️</Text>
            </TouchableOpacity>
          </View>

          {/* nama & email */}
          <Text className="text-xl font-bold text-white mt-3">{user.name}</Text>
          <Text className="text-base text-white/80">{user.email}</Text>

          <View className="flex-row mt-4 justify-around w-full">
            <Text className="text-base font-semibold text-white">
              Pengikut {user.followers}
            </Text>
            <Text className="text-base font-semibold text-white">
              Diikuti {user.following}
            </Text>
          </View>
        </View>

        <View className="flex-row mt-4 pt-4 bg-white p-4 rounded-2xl shadow-xl mx-5">
          <View className="flex-1 flex-row items-center justify-start space-x-1">
            <Text className="text-3xl">🪐 </Text>
            <Text className="text-2xl font-bold text-yellow-500">
              {user.gems}
            </Text>
          </View>
          <View className="flex-1 flex-row items-center space-x-1">
            <Text className="text-3xl">💖 </Text>
            <Text className="text-2xl font-bold text-red-500">
              {user.hearts}
            </Text>
          </View>
        </View>

        {/* premium */}
        <View className="mt-5 mx-5">
          <StatsWidget
            title="Upgrade ke"
            subtitle="premium"
            color="bg-purple-500"
            icon="🩴"
            className="w-full"
            textColor="text-white"
            onPress={upgradePress}
          />
        </View>

        {/* informasi profil */}
        <TouchableOpacity onPress={handleProfile}>
          <View className="justify-center items-center bg-blue-500 rounded-2xl h-14 mt-3 mx-5">
            <Text className="text-white font-bold">Informasi Profile</Text>
          </View>
        </TouchableOpacity>

        {/* pencapaioan */}
        <Text
          className="text-2xl font-bold mx-5 mt-6 mb-3"
          style={{ color: primaryOrange }}
        >
          Pencapaian
        </Text>
        <View className="flex-row justify-around mx-5 mt-3 space-x-4">
          {mockAchievements.map((ach) => (
            <View key={ach.id} className="items-center">
              <Text className="text-6xl">{ach.icon}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
