import { TextFieldProps } from "@mui/material/TextField";
import { Controller, Control, FieldValues } from "react-hook-form";
import { StyledTextField } from "./elements";

type Props = {
  control: Control<FieldValues, object>;
  fieldName: string;
  error?: { message: string };
  defaultValue?: string;
  placeholder?: string;
  textParser?: (value: string) => string;
};

export const CustomTextField: React.FC<Props & TextFieldProps> = ({
  control,
  fieldName,
  defaultValue = "",
  error,
  textParser,
  ...props
}) => {
  const isError = error?.message;
  return (
    <Controller
      name={fieldName}
      defaultValue={defaultValue}
      control={control}
      render={({ field: { onChange, ...field } }) => (
        <>
          <StyledTextField
            InputProps={{
              disableUnderline: true,
            }}
            variant="filled"
            onChange={(e) => {
              const value = e.target.value;
              onChange(textParser ? textParser(value) : value);
            }}
            {...field}
            error={Boolean(isError)}
            helperText={isError}
            {...props}
          />
        </>
      )}
    />
  );
};
