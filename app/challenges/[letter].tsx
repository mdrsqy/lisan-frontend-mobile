import { useLocalSearchParams, useRouter } from "expo-router";
import { VideoView, useVideoPlayer } from "expo-video";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const letter = params.letter as string;

  const videoSource = require("@/assets/video/test.mp4");
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
  });

  const handleBukaTantangan = () => {
    router.push(`/challenges/${letter}/start` as any);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 z-10">
        <View
          className="items-center px-5 pt-2 rounded-xl m-4 h-24"
          style={{ backgroundColor: "#FFB6C1" }}
        >
          {/* Huruf di tengah */}
          <View className="flex-1 justify-center items-center">
            <Text className="text-4xl font-bold text-white">{letter}</Text>
          </View>
        </View>

        {/* video */}
        <View className="bg-white rounded-2xl overflow-hidden m-4">
          <VideoView player={player} style={styles.video} />
        </View>

        <TouchableOpacity onPress={handleBukaTantangan}>
          <View className="justify-center items-center bg-blue-500 rounded-2xl h-14 m-4">
            <Text className="text-white font-bold">Buka Tantangan</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 12,
  },
  controlsContainer: {
    marginTop: 10,
  },
});

export default DetailScreen;
