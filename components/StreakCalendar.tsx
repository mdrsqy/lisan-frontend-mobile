import React from "react";
import { Text, View } from "react-native";

const primaryOrange = "#FF7F50";
const dayLabels = ["S", "S", "R", "K", "J", "S", "M"];

const mockStreakData = [
  0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
  0, 0,
];

const StreakCalendar: React.FC = () => {
  const weeks: number[][] = [];
  const daysInMonth = mockStreakData.length;
  const daysPerWeek = 7;

  for (let i = 0; i < daysInMonth; i += daysPerWeek) {
    weeks.push(mockStreakData.slice(i, i + daysPerWeek));
  }

  // ✅ Explicitly type props
  type DayCellProps = {
    status: number; // or boolean if you prefer
  };

  const DayCell: React.FC<DayCellProps> = ({ status }) => {
    const isCompleted = status === 1;

    let styleClass = "w-6 h-6 rounded-full items-center justify-center m-1";
    let iconStyle = isCompleted
      ? { backgroundColor: primaryOrange }
      : { backgroundColor: "#f0f0f0" };

    return (
      <View style={iconStyle} className={styleClass}>
        {isCompleted ? (
          <Text className="text-sm">🔥</Text>
        ) : (
          <Text className="text-gray-400 text-lg">•</Text>
        )}
      </View>
    );
  };

  return (
    <View className="bg-white p-4 rounded-xl shadow-md">
      <Text className="text-xl font-bold mb-3">JAN 2025</Text>

      {/* label hari */}
      <View className="flex-row justify-around mb-2">
        {dayLabels.map((day, index) => (
          <Text
            key={index}
            className="text-xs font-semibold text-gray-500 w-6 text-center"
          >
            {day}
          </Text>
        ))}
      </View>

      {/* kalender */}
      {weeks.map((week, weekIndex) => (
        <View key={weekIndex} className="flex-row justify-around">
          {week.map((dayStatus, dayIndex) => (
            <DayCell key={dayIndex} status={dayStatus} />
          ))}
        </View>
      ))}
    </View>
  );
};

export default StreakCalendar;
