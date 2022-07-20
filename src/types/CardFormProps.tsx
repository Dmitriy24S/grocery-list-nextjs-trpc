import React from "react";

export interface CardFormProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submit: () => void;
}
