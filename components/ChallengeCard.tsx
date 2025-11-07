import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type ChallengeCardProps = {
  letter: string;
  color: string;
  onRemove?: () => void;  
  onSelect: () => void;  
};

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  letter,
  color,
  onRemove,
  onSelect,
}) => {
  return (
    <TouchableOpacity
  onPress={onSelect}
  className="basis-[48%] rounded-xl shadow-md justify-center items-center relative overflow-hidden"
  style={{ backgroundColor: color, aspectRatio: 1 }}
>
  {/* Huruf di tengah */}
  <View className="flex-1 justify-center items-center">
    <Text className="text-6xl font-bold text-white">{letter}</Text>
  </View>

  {/* Tombol hapus */}
  {onRemove && (
    <TouchableOpacity
      onPress={onRemove}
      className="absolute top-2 right-2 p-1 bg-white rounded-full border border-gray-200 z-10"
    >
      <Text className="text-xs text-red-500 font-bold">❌</Text>
    </TouchableOpacity>
  )}
</TouchableOpacity>

  );
};

export default ChallengeCard;
