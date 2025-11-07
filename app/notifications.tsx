import LisanBacground from "@/components/LisanBacground";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// temp mockup
const mockNotifications = [
  {
    id: 1,
    title: "Update LISAN Versi 2.0",
    body: "Silahkan update aplikasi LISAN dengan versi lebih baru",
    date: "30 Sep 2025, 00:00 WIB",
    read: false,
  },
  {
    id: 2,
    title: "Tantangan Baru Dibuka",
    body: "Level 4: Bahasa Isyarat Regional kini tersedia!",
    date: "29 Sep 2025, 10:30 WIB",
    read: false,
  },
  {
    id: 3,
    title: "Selamat! Level Up!",
    body: "Anda telah menyelesaikan Level 1 Dasar Alfabet.",
    date: "28 Sep 2025, 08:00 WIB",
    read: true,
  },
];

const NotificationItem = ({
  notification,
  isUnread,
}: {
  notification: (typeof mockNotifications)[0];
  isUnread: boolean;
}) => {
  const bgColor = isUnread ? "bg-white" : "bg-gray-50";
  const textColor = isUnread ? "text-gray-800 font-semibold" : "text-gray-500";
  return (
    <TouchableOpacity className={`p-4 border-b border-gray-200 ${bgColor}`}>
      <View className="flex-row">
        <View className="mr-3 mt-1">
          <Text
            className="text-xl"
            style={{ color: isUnread ? "#6d28d9" : "#9ca3af" }}
          >
            {isUnread ? "🔥" : "🩴"}
          </Text>
        </View>

        {/* isine */}
        <View>
          <Text className={`text-base ${textColor}`}>{notification.title}</Text>
          <Text className="text-sm text-gray-600 my-1">
            {notification.body}
          </Text>
          <Text className="text-xs text-gray-400">{notification.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Notifications = () => {
  const [activeTab, setActiveTab] = useState<"unread" | "read">("unread");

  const filtered = mockNotifications.filter((n) =>
    activeTab === "unread" ? !n.read : n.read
  );
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['bottom']}>
      <LisanBacground />

      <View className="flex-1 z-10">
        <View className="flex-row border-b border-gray-200 bg-white pt-3">
          {/* belum dibaca */}
          <TouchableOpacity
            onPress={() => setActiveTab("unread")}
            className={`flex-1 items-center relative`}
          >
            <View
              className={`pb-2 border-b-2 ${
                activeTab === "unread"
                  ? "border-pink-500"
                  : "border-transparent"
              }`}
            >
              <Text
                className={`text-lg font-semibold`}
                style={{
                  color:
                    activeTab === "unread" ? "text-pink-500" : "text-gray-400",
                }}
              >
                Belum dibaca
              </Text>
            </View>
          </TouchableOpacity>

          {/* sudah dibaca */}
          <TouchableOpacity
            onPress={() => setActiveTab("read")}
            className={`flex-1 items-center pb-2`}
          >
            <View
              className={`pb-2 border-b-2 ${
                activeTab === "read" ? "border-pink-500" : "border-transparent"
              }`}
            >
              <Text
                className={`text-lg font-semibold`}
                style={{
                  color:
                    activeTab === "read" ? "text-pink-500" : "text-gray-400",
                }}
              >
                Sudah dibaca
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* listnya */}
        <ScrollView>
          {filtered.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              isUnread={!notification.read}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
