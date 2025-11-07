import Header from "@/components/Header";
import LisanBacground from "@/components/LisanBacground";
import SignOfTheDay from "@/components/SignOfTheDay";
import StatsWidget from "@/components/StatsWidget";
import { useRouter } from "expo-router";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const userData = {
  name: "First User",
  dailySign: "Terima Kasih",
  streak: 1,
  gems: 0,
  hearts: 0,
};

export default function Index() {
  const router = useRouter();

  const notifPress = () => {
    router.push("/notifications");
  };

  const challengePress = () => {
    router.push("/tantangan");
  };

  const streakPress = () => {
    router.push("/tantangan");
  };

  const upgradePress = () => {
    router.push("/upgrade");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <LisanBacground />
      <View className="flex-1">
        <ScrollView className="px-5 pt-2">
          {/* header */}
          <Header userName={userData.name} onNotificationPress={notifPress} />

          {/* daily */}
          <SignOfTheDay
            sign={userData.dailySign}
            gems={userData.gems}
            hearts={userData.hearts}
          />

          {/* status dan tantangan */}
          <View className="flex-row justify-between mt-4">
            <StatsWidget
              title="1 hari streak"
              subtitle=""
              color="bg-orange-500"
              icon="🦉"
              className="w-[48%]"
              onPress={streakPress}
            />
            <StatsWidget
              title="Lihat Tantangan"
              subtitle=""
              color="bg-purple-700"
              icon="🙊"
              className="w-[48%]"
              onPress={challengePress}
            />
          </View>

          {/* premium */}
          <View className="">
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

          <View className="h-20" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
