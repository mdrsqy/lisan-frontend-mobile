import React from "react";
import { View, Text } from "react-native";

interface StatsWidgetProps {
  title: string;
  subtitle?: string;
  color: string;
  icon: string;
  className?: string;
  textColor?: string;
}

const StatsWidget: React.FC<StatsWidgetProps> = ({
  title,
  subtitle,
  color,
  icon,
  className = "",
  textColor = "text-white",
}) => {
  return (
    <View
      className={`${className} ${color} p-4 rounded-2xl mb-4 relative overflow-hidden`}
      style={{ minHeight: 120 }}
    >
      <Text className={`test-sm font-normal ${textColor}`}>{title}</Text>
      {subtitle && (
        <Text className={`text-xl font-bold ${textColor}`}>{subtitle}</Text>
      )}

      {/* icon */}
      <Text className="absolute bottom-[-10px] right-[-10px] text-7xl opacity-85">
        {icon}
      </Text>
    </View>
  );
};

export default StatsWidget;
