import React from "react";
import Graph from "../../Assets/AboutUs/graph_mission.png";
import Chat from "../../Assets/AboutUs/chat_mission.png";
import Arrow from "../../Assets/AboutUs/arrow_png.png";
import HandShake from "../../Assets/AboutUs/handshake_mission.png";
import MissionCards from "./MissionCards";
function Mission() {
    const missions_object = [
        {
            id: 0,
            src: Graph,
            description:
                "Ürün ve hizmet kalitemizi sürekli geliştirerek müşteri talep ve beklentilerini en üst seviyede karşılamak",
        },
        {
            id: 1,
            src: Chat,
            description:
                "Güçlü bir iletişim ile tüketicimizle aramızda duygusal bir bağ oluşturmak ve müşteri sadakatini sağlamak",
        },
        {
            id: 2,
            src: Arrow,
            description:
                "Yurt içi ve yurt dışında iş ortaklarını zincirini büyüterek en çoktercih edilen iletişim ve bilgi teknolojileri tedarikçisi olmak,rekabet gücümüzü ve kârlılığımızı arttırmak",
        },
        {
            id: 3,
            src: HandShake,
            description:
                "%100 müşteri memnuniyetini yaşatmak ve yaşanılır kılmak.",
        },
    ];
    return (
        <section className="container mx-auto ">
            <h1 className="text-center mt-12 text-3xl font-bold w-full ">
                MİSYON
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
