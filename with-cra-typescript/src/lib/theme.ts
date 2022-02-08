import { defaultTheme, Theme, useTheme } from "react-martins-component-library";

export type AppTheme = Theme & { fontWeight: { big: number } };

export const theme: AppTheme = {
  ...defaultTheme,
  fontWeight: { ...defaultTheme.fontWeight, big: 1000 },
};

export const useAppTheme = (): AppTheme => useTheme();
