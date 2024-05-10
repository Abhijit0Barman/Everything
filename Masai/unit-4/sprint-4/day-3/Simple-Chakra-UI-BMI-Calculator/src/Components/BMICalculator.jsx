import React, { useState } from "react";
import {
  Button,
  Flex,
  Container,
  SimpleGrid,
  Grid,
  Box,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiValue, setBmiValue] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");

  const calculateBMI = () => {
    const heightValue = Number(height) / 100; // convert height to meters
    const weightValue = Number(weight);
    const bmi = weightValue / (heightValue * heightValue);
    setBmiValue(bmi.toFixed(2));

    if (bmi < 18.5) {
      setBmiStatus("Underweight");
    } else if (bmi >= 18.5 && bmi < 25) {
      setBmiStatus("Healthy");
    } else {
      setBmiStatus("Overweight");
    }
  };

  const resetForm = () => {
    setWeight("");
    setHeight("");
    setBmiValue(null);
    setBmiStatus("");
  };

  return (
    <Container>
      <Stack spacing={4}>
        <Heading as="h1">BMI Calculator</Heading>
        <SimpleGrid columns={2} className="bmi-form">
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="weight"
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="height"
          />
        </SimpleGrid>
        <Flex justifyContent="center">
          <Button onClick={calculateBMI}>Calculate</Button>
          <Button onClick={resetForm}>Reset</Button>
        </Flex>
        {bmiValue && (
          <Grid className="bmi-result">
            <Box>
              <Text className="bmi-value">{bmiValue}</Text>
              <Text className="bmi-status" color={bmiStatusColor(bmiStatus)}>
                {bmiStatus}
              </Text>
            </Box>
          </Grid>
        )}
      </Stack>
    </Container>
  );
}

function bmiStatusColor(status) {
  switch (status) {
    case "Underweight":
      return "blue";
    case "Healthy":
      return "green";
    case "Overweight":
      return "red";
    default:
      return "black";
  }
}

export default BMICalculator;
