import { ILanguageEnum } from "../enums/Language";

export interface ILanguageContext {
    language: ILanguageEnum,
    dictionary: IDictionary,
    changeLanguage: (value: ILanguageEnum) => void,
}

export interface IDictionary {
    NavbarMenu: {
        Menu: string
    },
    Page: {
        Home: string,
        Skill: string,
        About: string
    }
}