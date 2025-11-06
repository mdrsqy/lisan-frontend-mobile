import React from "react";
import { Dimensions, Image, View } from "react-native";

const { width, height } = Dimensions.get("window");
const LisanCurve = require("@/assets/images/lisan-bg.png");

const LisanBacground = () => {
  return (
    <View>
      {/* kanan atas */}
      <Image
        source={LisanCurve}
        resizeMode="contain"
        style={{
          position: "absolute",
          top: -height * 0.3,
          left: width * 0.2,
          width: width * 0.8,
          height: height * 0.8,
          transform: [{ rotate: "180deg" }],
        }}
      />

      {/* kiri bawah */}
      <Image
        source={LisanCurve}
        resizeMode="contain"
        style={{
          position: "absolute",
          bottom: -height * 1.2,
          left: width * 0.01,
          width: width * 0.8,
          height: height * 0.8,
          opacity: 1.0,
        }}
      />
    </View>
  );
};

export default LisanBacground;