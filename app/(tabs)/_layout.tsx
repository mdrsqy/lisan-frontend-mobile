import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, View, Text } from "react-native";

const TabIcon = ({ focused, icon, title }: any) => {
  const activeColor = "#2600FF";
  const inactiveColor = "#C6C6C6";

  return (
    <View className="items-center justify-center flex-1">
      {focused ? (
        <View
          className="items-center justify-center p-1"
          style={{ width: 80, height: 75, borderColor: activeColor, borderWidth: 1, borderRadius: 15}}
        >
          <Image source={icon} className="size-6" tintColor={activeColor} resizeMode="contain"/>
          <Text className="text-xs font-semibold mt-1">{title}</Text>
          <View className="absolute bottom-1 w-10 h-1 rounded-full" style={{ backgroundColor: activeColor }} />
        </View>
      ) : (
        <View className="items-center justify-center py-1" style={{ width: 80, height: 75 }} >
          <Image source={icon} className="size-6" tintColor={inactiveColor} resizeMode="contain" />
          <Text className="text-xs mt-1">{title}</Text>
        </View>
      )}
    </View>
  );
};

const _layout = () => {
  const tabBackgroundColor = "#fff";
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          padding: 1,
          margin: 20,
          flex: 1,
        },
        tabBarStyle: {
          backgroundColor: tabBackgroundColor,
          borderRadius: 15,
          marginHorizontal: 20,
          marginBottom: 20,
          height: 80,
          position: "absolute",
          overflow: "hidden",
          borderTopWidth: 0,
          elevation: 5,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Beranda" />
          ),
        }}
      />
      <Tabs.Screen
        name="tantangan"
        options={{
          title: "Tantangan",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.tantangan}
              title="Tantangan"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="teman"
        options={{
          title: "Teman",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.teman} title="Teman" />
          ),
        }}
      />
      <Tabs.Screen
        name="pengaturan"
        options={{
          title: "Pengaturan",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.pengaturan}
              title="Pengaturan"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
