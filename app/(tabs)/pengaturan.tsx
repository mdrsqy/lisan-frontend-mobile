import LisanBacground from "@/components/LisanBacground";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const primaryOrange = "#ff7f50";
const primaryPurple = "#6d28d9";

const Pengaturan = () => {
  const router = useRouter();

  // data dummy
  const user = {
    name: "First User",
    email: "user@example.com",
    profilePic: "https://via.placeholder.com/150/0000FF/808080?Text=User",
  };

  const navigateTo = (path: string) => router.push(path as any);

  const handleLogout = () => {
    router.push("/(auth)" as any);
  };


  const MenuItem = ({
    icon,
    title,
    path,
    isDestructive = false,
    action,
  }: {
    icon: string;
    title: string;
    path?: string;
    isDestructive?: boolean;
    action?: () => void;
  }) => (
    <TouchableOpacity
      className="flex-row items-center bg-white p-4 border-b border-gray-100"
      onPress={action || (path ? () => navigateTo(path) : undefined)}
    >
      <View className="mr-4">
        <Text
          className="text-2xl"
          style={{ color: isDestructive ? "red" : primaryPurple }}
        >
          {icon}
        </Text>
      </View>
      <Text
        className="text-lg"
        style={{ color: isDestructive ? "red" : "black" }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["bottom"]}>
      <LisanBacground />
      
      <ScrollView>
        {/* header */}
        <View
          className="items-center justify-center py-10"
          style={{
            backgroundColor: primaryOrange,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            minHeight: 300
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

          {/* icon edit */}
          <TouchableOpacity className="absolute bottom-5 right-5 p-1">
            <Text className="text-xl text-white">✏️</Text>
          </TouchableOpacity>
        </View>

        {/* profile & pemberitahuan */}
        <View className="mt-5 mx-4 rounded-xl shadow-md overflow-hidden bg-white">
          <MenuItem icon="👤" title="Profile" path="/settings/profile" />
          <MenuItem
            icon="🔔"
            title="Pemberitahuan"
            path="/notifications"
          />
        </View>

        {/* dukungan & legal */}
        <View className="mt-5 mx-4 rounded-xl shadow-md overflow-hidden bg-white">
          <MenuItem
            icon="🤝"
            title="Bantuan & Dukungan"
            path="/settings/help"
          />
          <MenuItem
            icon="✉️"
            title="Kebijakan & Privasi"
            path="/settings/privacy"
          />
        </View>

        {/* hapus akun & keluar */}
        <View className="mt-5 mx-4 rounded-xl shadow-md overflow-hidden bg-white">
          <MenuItem
            icon="🗑️"
            title="Hapus Akun"
            isDestructive={true}
            path="/settings/deleteAccount"
          />
          <MenuItem
            icon="🚪"
            title="Keluar"
            isDestructive={true}
            action={handleLogout}
          />
        </View>
        <View className="h-20" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pengaturan;
