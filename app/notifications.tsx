import LisanBacground from "@/components/LisanBacground";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// ✅ Export agar bisa digunakan di [id].tsx
export const mockNotifications = [
  {
    id: 1,
    title: "Update LISAN Versi 2.0",
    body: "Silahkan update aplikasi LISAN dengan versi lebih baru",
    date: "30 Sep 2025, 00:00 WIB",
    read: false,
    icon: "🔔",
  },
  {
    id: 2,
    title: "Tantangan Baru Dibuka",
    body: "Level 4: Bahasa Isyarat Regional kini tersedia!",
    date: "29 Sep 2025, 10:30 WIB",
    read: false,
    icon: "🔥",
  },
  {
    id: 3,
    title: "Selamat! Level Up!",
    body: "Anda telah menyelesaikan Level 1 Dasar Alfabet.",
    date: "28 Sep 2025, 08:00 WIB",
    read: true,
    icon: "🎉",
  },
];

const NotificationItem = ({
  notification,
  isUnread,
}: {
  notification: (typeof mockNotifications)[0];
  isUnread: boolean;
}) => {
  const router = useRouter();
  const bgColor = isUnread ? "bg-white" : "bg-gray-50";
  const textColor = isUnread ? "text-gray-800 font-semibold" : "text-gray-500";

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/notifications/[id]",
          params: { id: String(notification.id) },
        })
      }
      className={`p-4 border-b border-gray-200 ${bgColor}`}
    >
      <View className="flex-row">
        <View className="mr-3 mt-1">
          <Text className="text-xl" style={{ color: isUnread ? "#6d28d9" : "#9ca3af" }}>
            {notification.icon}
          </Text>
        </View>
        <View>
          <Text className={`text-base ${textColor}`}>{notification.title}</Text>
          <Text className="text-sm text-gray-600 my-1">{notification.body}</Text>
          <Text className="text-xs text-gray-400">{notification.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Notifications = () => {
  const [activeTab, setActiveTab] = useState<"unread" | "read">("unread");
  const filtered = mockNotifications.filter(n => activeTab === "unread" ? !n.read : n.read);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["bottom"]}>
      <LisanBacground />
      <View className="flex-1 z-10">
        {/* Tab Filter */}
        <View className="flex-row border-b border-gray-200 bg-white">
          {["unread", "read"].map(tab => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab as "unread" | "read")}
              className="flex-1 items-center relative"
            >
              <View className="py-3">
                <Text
                  className="text-lg font-semibold"
                  style={{ color: activeTab === tab ? "#ec4899" : "#9ca3af" }}
                >
                  {tab === "unread" ? "Belum dibaca" : "Sudah dibaca"}
                </Text>
              </View>
              {activeTab === tab && (
                <View className="absolute bottom-0 h-0.5 w-full" style={{ backgroundColor: "#ec4899" }} />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* List Notifikasi */}
        <ScrollView>
          {filtered.map(notification => (
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
