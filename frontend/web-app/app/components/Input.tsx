import { Label, TextInput } from "flowbite-react";
import React from "react";
import { UseControllerProps, useController } from "react-hook-form";

type Props = {
  label: string;
  type?: string;
  showLabel?: string;
} & UseControllerProps;
export default function Input(props: Props) {
  const { fieldState, field } = useController({ ...props, defaultValue: "" });
  return (
    <div className="mb-3">
      {props.showLabel && (
        <div className="mb-2 block">
          <Label htmlFor={field.name} value={props.label} />
        </div>
      )}
      <TextInput
        {...props}
        {...field}
        type={props}
        placeholder={props.label}
        color={errors?.make && "failure"}
        helperText={errors.make?.message as string}
      />
    </div>
  );
}
