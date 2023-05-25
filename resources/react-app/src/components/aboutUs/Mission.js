import React from "react";
import Graph from "../../Assets/AboutUs/graph_mission.png";
import Chat from "../../Assets/AboutUs/chat_mission.png";
import Arrow from "../../Assets/AboutUs/arrow_png.png";
import HandShake from "../../Assets/AboutUs/handshake_mission.png";
import MissionCards from "./MissionCards";
import { useTranslation } from "react-i18next";
function Mission() {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };
    const missions_object = [
        {
            id: 0,
            src: Graph,
            description: t("AboutUsMissionFirst"),
        },
        {
            id: 1,
            src: Chat,
            description: t("AboutUsMissionSecond"),
        },
        {
            id: 2,
            src: Arrow,
            description: t("AboutUsMissionThird"),
        },
        {
            id: 3,
            src: HandShake,
            description: t("AboutUsMissionFourth"),
        },
    ];
    return (
        <section className="container mx-auto ">
            <h1 className="text-center mt-12 text-3xl font-bold w-full ">
                {t("AboutUs_Mission")}
            </h1>

            <ul className="my-5 mx-auto grid gap-8 grid-cols-2 max-sm:grid-cols-1">
                {missions_object.map((item, index) => (
                    <MissionCards
                        key={index}
                        src={item.src}
                        content={item.description}
                    />
                ))}
            </ul>
        </section>
    );
}

export default Mission;
