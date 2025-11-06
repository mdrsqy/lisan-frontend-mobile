import Header from "@/components/Header";
import SignOfTheDay from "@/components/SignOfTheDay";
import StatsWidget from "@/components/StatsWidget";
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
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        <ScrollView className="px-5 pt-2">
          {/* header */}
          <Header userName={userData.name} />

          {/* daily */}
          <SignOfTheDay
            sign={userData.dailySign}
            gems={userData.gems}
            hearts={userData.hearts}
          />

          {/* status dan tantangan */}
          <View className="flex-row  justify-between mt-4">
            <StatsWidget
              title="1 hari streak"
              subtitle=""
              color="bg-orange-500"
              icon="🦉"
              className="w-[48%]"
            />
            <StatsWidget
              title="Lihat Tantangan"
              subtitle=""
              color="bg-purple-700"
              icon="🙊"
              className="w-[48%]"
            />
          </View>

          {/* premium */}
          <View className="mt-4">
            <StatsWidget
              title="Upgrade ke"
              subtitle="premium"
              color="bg-purple-500"
              icon="🩴"
              className="w-full"
              textColor="text-white"
            />
          </View>

          <View className="h-20" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
