import LisanBacground from "@/components/LisanBacground";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // ✅ benar
import { mockNotifications } from "../notifications";

interface NotificationDetail {
  title: string;
  body: string;
  date: string;
  icon?: string;
}

const getNotificationDetail = (id: string): NotificationDetail => {
  const found = mockNotifications.find((n) => String(n.id) === id);
  return (
    found || {
      title: "Pesan tidak ditemukan",
      body: "Detail tidak tersedia atau sudah kadaluarsa.",
      date: "",
    }
  );
};

const MessageDetail = () => {
  const { id } = useLocalSearchParams();
  const notification = getNotificationDetail(id as string);
  const primaryColor = "#6d28d9";

  return (
    <SafeAreaView className="flex-1 bg-white">
      <LisanBacground />
      <ScrollView
        className="flex-1 z-10"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          padding: 32,
        }}
      >
        <View className="items-center text-center">
          <Text className="text-4xl mb-4">{notification.icon}</Text>
          <Text
            className="text-xl font-bold mb-3"
            style={{ color: primaryColor }}
          >
            {notification.title}
          </Text>
          <Text className="text-base text-gray-600 text-center mb-8 leading-relaxed">
            {notification.body}
          </Text>
          <Text className="text-sm text-gray-400">{notification.date}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MessageDetail;
