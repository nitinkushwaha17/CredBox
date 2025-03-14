import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import CBButton from "@/components/CBButton";
import { useStyle } from "@/hooks/useStyle";
import axios from "@/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import TodSelect from "@/components/TodSelect";
import QuantitySelect from "@/components/QuantitySelect";

export default function newRequest() {
  const navigation = useNavigation();
  const styles = useStyle(style);

  useEffect(() => {
    navigation.setOptions({ title: "New Request" });
  }, []);

  const todQuery = useQuery({
    queryKey: ["getTods"],
    queryFn: async () => {
      return await axios.get("/tod/");
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      counter: "",
      item: "",
      price: "",
      tod_id: "",
      quantity: 1,
    },
  });

  const onSubmit: any = useMutation({
    mutationFn: (values: any) => {
      setIsSubmitting(true);
      values.user_id = "6702957c2a68d28a33bd7fae";
      values.is_custom = true;
      return axios.post("/order", values);
    },
    // TODO:show success message
    onSuccess: () => {
      navigation.goBack();
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  if (todQuery.isPending) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView
      style={{ flex: 1, padding: 16 }}
      contentContainerStyle={{
        gap: 16,
        paddingBottom: 50,
      }}
    >
      <Image
        source={require("@/assets/images/knife-fork.png")}
        style={{ width: 200, height: 200, margin: "auto" }}
      />

      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Counter</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="counter"
        />
        {errors.counter && (
          <Text style={{ color: "red" }}>This is required.</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Item</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="item"
        />
        {errors.counter && (
          <Text style={{ color: "red" }}>This is required.</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Price</Text>
        <Controller
          control={control}
          rules={{
            required: false,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              keyboardType="number-pad"
              maxLength={3}
            />
          )}
          name="price"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Quantity</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <QuantitySelect value={value} onChange={onChange} />
          )}
          name="quantity"
        />
        {errors.counter && (
          <Text style={{ color: "red" }}>This is required.</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Time of day</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TodSelect
              options={todQuery.data?.data}
              setChecked={onChange}
              checkedId={value}
            />
          )}
          name="tod_id"
        />
        {errors.counter && (
          <Text style={{ color: "red" }}>This is required.</Text>
        )}
      </View>

      <CBButton
        containerStyle={{ marginTop: 8 }}
        onPress={handleSubmit(onSubmit.mutate)}
        loading={isSubmitting}
      >
        Submit
      </CBButton>
    </ScrollView>
  );
}

const style = (Colors: any) =>
  StyleSheet.create({
    heading: {
      fontSize: 18,
      color: Colors.text,
      fontWeight: "600",
    },
    inputContainer: {
      gap: 8,
    },
    input: {
      color: Colors.text,
      backgroundColor: Colors.onBackground,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 8,
      fontSize: 16,
      fontWeight: "400",
    },
  });
