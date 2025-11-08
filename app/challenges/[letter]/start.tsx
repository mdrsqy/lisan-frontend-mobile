import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Start = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const letter = params.letter as string;

  const challengeData = {
    jenis: letter,
    poin: 5,
    deskripsi: `Selesaikan level latihan untuk menguasai huruf ${letter} sepenuhnya.`,
    status: "Belum",
  };

  const handleMulai = () => {
    router.push(`/challenges/${letter}/start` as any);
    alert("Coming Soon ...");
  };

  const DetailRow = ({
    icon,
    title,
    value,
    isPoin = false,
  }: {
    icon: string;
    title: string;
    value: string;
    isPoin?: boolean;
  }) => (
    <View className="flex-row items-start mb-4">
      <Text
        className="text-xl mr-3"
        style={{ color: isPoin ? "#ec4899" : "#9ca3af" }}
      >
        {icon}
      </Text>
      <View className="flex-1">
        <Text className="text-sm text-gray-800 font-bold">{title}</Text>
        <Text className="text-base text-gray-400 font-medium">{value}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 z-10">
        <View
          className="items-center px-5 pt-2 rounded-xl m-4 h-24"
          style={{ backgroundColor: "#FFB6C1" }}
        >
          {/* huruf di tengah */}
          <View className="flex-1 justify-center items-center">
            <Text className="text-4xl font-bold text-white">{letter}</Text>
          </View>
        </View>

        {/* deskripsi */}
        <View className="justify-center items-center m-4">
          <Text className="font-extrabold text-xl">Deskripsi Tantangan</Text>
        </View>
        <View className="m-4 backgroud-white rounded-2xl p-3 shadow-">
          <View className="border-b border-gray-100 pb-4">
            <DetailRow
              icon="📌"
              title="Jenis huruf"
              value={challengeData.jenis}
            />
          </View>

          {/* poin */}
          <View className="border-b border-gray-100 py-4">
            <DetailRow
              icon="⭐"
              title="Total Poin (EXP)"
              value={`${challengeData.poin} Exp`}
              isPoin={true}
            />
          </View>

          {/* informasi */}
          <View className="pt-4">
            <DetailRow
              icon="ℹ️"
              title="Informasi"
              value={challengeData.deskripsi}
            />
          </View>
        </View>

        <TouchableOpacity onPress={handleMulai}>
          <View className="justify-center items-center bg-blue-500 rounded-2xl h-14 m-4">
            <Text className="text-white font-bold">Mulai Tantangan</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Start;
