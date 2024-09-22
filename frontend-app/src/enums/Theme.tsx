export enum ThemeEnum {
    Dark = "DARK",
    Light = "LIGHT"
}

export type IThemeEnum = keyof typeof ThemeEnum;