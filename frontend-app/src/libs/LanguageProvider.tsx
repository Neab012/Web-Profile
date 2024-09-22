import { createContext, ReactElement, useState } from "react";
import { IDictionary, ILanguageContext } from "../interfaces/ILanguage";
import TH from "../languages/th.json";
import EN from "../languages/en.json";
import { ILanguageEnum, LanguageEnum } from "../enums/Language";

const DICTIONARY = {
    TH: TH, 
    EN: EN
}

export const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext);

function LanguageProvider({ children }: { children: ReactElement }){

    const [ lang, setLang ] = useState<ILanguageEnum>(LanguageEnum.EN);
    const [ dict, setDict ] = useState<IDictionary>(DICTIONARY["EN"]);

    const changeLanguage = (value: ILanguageEnum) => {
        setLang(value)
        setDict(DICTIONARY[value]);
    }

    return(
        <LanguageContext.Provider value={{ language: lang, dictionary: dict, changeLanguage: changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;