import { useState } from "react";
import { SideBar } from "../components/SideBar";
import { CvPage } from "../components/CvPage";

export function PreviewPage(props) {
  const [currentFont, setCurrentFont] = useState("font-sans");
  const [currentLayout, setCurrentLayout] = useState("flex-col");

  const [currentAccentColor, setCurrentAccentColor] = useState("#172554");
  const [currentFontColor, setCurrentFontColor] = useState("#f1f5f9");

  const accentStyle = {
    backgroundColor: currentAccentColor,
    color: currentFontColor,
  };

  const [personalData, setPersonalData] = useState(props.formData.personalData);
  const [eduInfo,setEduData] = useState(props.formData.eduData);
  const expInfo = props.formData.expData;

  return (
    <div
      className={`w-full h-5/6 bg-slate-200 flex flex-row justify-start text-center items-center overflow-y-auto`}
    >
      <SideBar
        currentFont={currentFont}
        setCurrentFont={setCurrentFont}
        currentLayout={currentLayout}
        setCurrentLayout={setCurrentLayout}
        currentAccentColor={currentAccentColor}
        setCurrentAccentColor={setCurrentAccentColor}
        currentFontColor={currentFontColor}
        setCurrentFontColor={setCurrentFontColor}
        personalData={personalData}
        personalDataModifer={setPersonalData}
        eduData={eduInfo}
        eduDataModifier={setEduData}
      />
      <div className="h-full w-full px-28 py-14 overflow-auto">
        <CvPage
          layoutStyle={currentLayout}
          currentFont={currentFont}
          accentStyle={accentStyle}
          personalInfo={personalData}
          eduInfo={eduInfo}
          expInfo={expInfo}
        />
      </div>
    </div>
  );
}
