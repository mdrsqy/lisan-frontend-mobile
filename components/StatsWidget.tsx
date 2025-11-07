import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface StatsWidgetProps {
  title: string;
  subtitle?: string;
  color: string;
  icon: string;
  className?: string;
  textColor?: string;
  onPress: () => void;
}

const StatsWidget: React.FC<StatsWidgetProps> = ({
  title,
  subtitle,
  color,
  icon,
  className = "",
  textColor = "text-white",
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className={`${className} ${color} p-4 rounded-2xl mb-4 relative overflow-hidden`}
      style={{ minHeight: 120 }}
    >
      <Text className={`text-xl font-normal ${textColor}`}>{title}</Text>
      {subtitle && (
        <Text className={`text-xl font-bold ${textColor}`}>{subtitle}</Text>
      )}

      {/* icon */}
      <Text className="absolute bottom-[-10px] right-[-10px] text-7xl opacity-85">
        {icon}
      </Text>
    </TouchableOpacity>
  );
};

export default StatsWidget;
