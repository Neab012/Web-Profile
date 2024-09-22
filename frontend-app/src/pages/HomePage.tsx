import { useContext } from "react";
import { LanguageContext } from "../libs/LanguageProvider";
import { ILanguageEnum, LanguageEnum } from "../enums/Language";

function HomePage(){

    const { dictionary, changeLanguage } = useContext(LanguageContext);

    return(
        <div className="">
            <div className="flex w-full justify-between">
                <div className="flex gap-2">
                    <button className="">{dictionary.Page.Home}</button>
                    <button className="">{dictionary.Page.Skill}</button>
                    <button className="">{dictionary.Page.Home}</button>
                </div>
                
                <div className="flex items-center justify-around">
                    <select name="Select-Theme" id="Select-Theme" className="">
                        <option value="">Light</option>
                        <option value="">Dark</option>
                    </select>
                    <select name="Select-Language" id="Select-Language" className="" onChange={(e) => changeLanguage(e.currentTarget.value as ILanguageEnum)}>
                        <option value={LanguageEnum.EN}>EN</option>
                        <option value={LanguageEnum.TH}>TH</option>
                    </select>
                </div>
            </div>
            
        </div>
    )
}

export default HomePage;