import {useVideoPlayer, VideoView } from "expo-video";
import { Text, View, StyleSheet } from "react-native";

interface SignOfTheDayProps {
  sign: string;
  gems: number;
  hearts: number;
}
const videoSource = require("../assets/video/test.mp4"); 

const SignOfTheDay: React.FC<SignOfTheDayProps> = ({ sign, gems, hearts }) => {
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
  });

  return (
    <View>
      <View className="p-4 overflow-hidden">
        {/* daily */}
        <Text className="text-lg font-semibold text-gray-600 mb-3">
          Kata Isyarat Hari Ini:{" "}
          <Text className="text-purple-700">&quot;{sign}&quot;</Text>🔊
        </Text>
      </View>

      {/* video */}
      <View className="bg-white rounded-2xl overflow-hidden">
        <VideoView
          player={player}
          style={styles.video}
        />
      </View>

      {/* skor */}
      <View className="flex-row mt-4 pt-4 bg-white p-4 rounded-2xl shadow-xl">
        <View className="flex-1 flex-row items-center justify-start space-x-1">
          <Text className="text-3xl">🪐 </Text>
          <Text className="text-2xl font-bold text-yellow-500">{gems}</Text>
        </View>
        <View className="flex-1 flex-row items-center space-x-1">
          <Text className="text-3xl">💖 </Text>
          <Text className="text-2xl font-bold text-red-500">{hearts}</Text>
        </View>
      </View>
    </View>
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

export default SignOfTheDay;
