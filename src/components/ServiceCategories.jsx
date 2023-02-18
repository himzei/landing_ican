import { Box, useCheckbox } from "@chakra-ui/react";

export default function ServiceCategories(props) {
  const { getInputProps, getCheckboxProps } = useCheckbox(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="sm"
        boxShadow="sm"
        _checked={{
          bg: "red.500",
          color: "white",
          borderColor: "red.500",
          fontWeight: "600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}
