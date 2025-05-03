import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default function Countdown({ time }: { time: number }) {
  const FIVE_MINUTES = 5 * 60 * 1000; // 5 minutes in milliseconds
  const endTime = new Date(time).getTime() + FIVE_MINUTES;

  const calculateTimeLeft = () => {
    const now = Date.now();
    const difference = endTime - now;
    return Math.max(0, difference);
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (newTimeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
      <Ionicons
        style={{ color: "#e5e566", fontSize: 12 }}
        name="time-outline"
      />
      <Text style={{ color: "#e5e566", fontWeight: "600", fontSize: 12 }}>
        {formatTime(timeLeft)}
      </Text>
    </View>
  );
}
