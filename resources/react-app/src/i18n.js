import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    tr: {
        translation: {
            AboutUs_firstTitle: "HAKKIMIZDA",
            AboutUs_firtsP:
                "13 yıllık uluslararası telekomünikasyon tecrübesini e-ticaret ve distribütör alanlarında edindiğimiz deneyimlerimiz ile harmanladık ve İstech İletişim ve Bilgi Teknolojileri markası ile taçlandırdık. 20’ye yakın global marka ile iş ortaklığı gerçekleştirerek, müşterilerimize geniş bir pazar ağı oluşturduk. Farkındalık oluşturmak ve %100 müşteri memnuniyetini kendimize ilke edindik. Çıktığımız bu yolda güvenilir ve sağlam temeller üzerine kurulu bir düzen inşaa ettik.",
            AboutUs_Mission: "MİSYON",
            AboutUsMissionFirst:
                "Ürün ve hizmet kalitemizi sürekli geliştirerek müşteri talep ve beklentilerini en üst seviyede karşılamak",
            AboutUsMissionSecond:
                "Güçlü bir iletişim ile tüketicimizle aramızda duygusal bir bağ oluşturmak ve müşteri sadakatini sağlamak",
            AboutUsMissionThird:
                "Yurt içi ve yurt dışında iş ortaklarını zincirini büyüterek en çoktercih edilen iletişim ve bilgi teknolojileri tedarikçisi olmak,rekabet gücümüzü ve kârlılığımızı arttırmak",
            AboutUsMissionFourth:
                "%100 müşteri memnuniyetini yaşatmak ve yaşanılır kılmak.",
            AboutUs_Vision: "VİZYON",
            AboutUsVisionP:
                "İletişim & Bilgi Teknolojileri sektöründe çetin rekabet koşulları ve bilinç düzeyi artmış müşterilerin değişen istek ve beklentileri; gerek ürünlerin ve gerekse sunulan hizmetlerin sürekli geliştirilmesini, iyileştirilmesini zorunlu kılmaktadır. İstech sektördeki talep ve beklentileri yoğun tecrübe ve konuya uzman bakışıyla objektif biçimde değerlendirmekte; dinamik, yenilikçi, gelişmeci bir yaklaşımla müşteri memnuniyeti sağlayarak sadık müşteriler yaratmaya çalışmaktadır.”Kalitede Süreklilik”, “Rekabetçi Fiyat”, “Karşılıklı Güven” ve “Dürüstlük” vizyonumuzu oluşturan temel ilke ve vazgeçilmeyecek değerlerimizdir.",
            AboutUsHistoryTitle: "FİRMA TARİHÇESİ",
            AboutUsCompanyHistoryP:
                "”Kalite, nicelikten daha önemlidir.” 2018 yılında İstanbul’da iletişim ve telekomünikasyon sektöründe faaliyet göstermek amacıyla kurulmuştur. Kurulduğu tarihten itibaren telekomünikasyon sektöründe online ve retail hızlı bir giriş yapmıştır. Sektördeki 13 yıllık tecrübesi ile genç girişimciliğin enerjisini buluşturan istech yıldan yıla hızlıca ivme kazanacaktır.",
            AboutUsCompanyHistoryLeftTitle: "Saygı ve Bağlılık",
            AboutUsCompanyHistoryLeftP:
                "Biz, işimizi doğru şekilde, hakkıyla ve sahiplenerek yaparız.Kendimizi ve işimizi geliştirir, tüm ilişkilerimizde şeffaflığı ilke ediniriz.Bu sayede güvene dayalı uzun vadeli ilişkiler kurarız.",
            AboutUsCompanyHistoryRightTitle: "Biz Olmak",
            AboutUsCompanyHistoryRightP:
                "Firmamızın sunmuş olduğu hizmetler,bayilik koşullarımız ve politikalarımız hakkında daha detaylı bilgi alabilmek için mesai saatleri içerisinde firmamızı arayabilir,dilerseniz ofisimizi ziyaret edebilirsiniz. Bir kahvenin 40 yıllık hatrı vardır,sizi nefis bir kahve içmek için ofisimize davet ediyoruz.",
            CONTACT: "İLETİŞİM",
            ContactTitle: "Bizimle İletişime Geçin",
            ContactName: "İsim",
            ContactSurName: "Soyisim",
            ContactMsg: "Mesaj",
            ContactSendMsg: "Mesaj Gönder",
            CompanyTitle: "Şirket Ünvan Adı:",
            CompnayTitleDescription: "İstech İletişim & Bili Teknolojileri",
            CompanyAdress: "Adres:",
            CompanyAdressDescriotion:
                "Cihangir Mahallesi Güvercin Cad. No:2 Kapı No:96 Aktim 3 Ticaret Merkezi Avcılar / İstanbul",
            CompanyTel: "Tel:",
            HeaderAnasayfa: "Anasayfa",
            HeaderHakkimizda: "Hakkımızda",
            HeaderMarka: "Markalar",
            HeaderIletisim: "İletişim",
            HeaderTitle: "QCY Resmi Distribütörü",
            HeaderMisyon: "Misyon-Vizyon",
            HeaderDate: "Firma Tarihçesi",
            FooterVizyon: "Vizyon",
            FooterMisyon: "Misyon",
            FooterSB: "Sağlık ve Bağlılık",
            FooterBiz: "Biz Olmak",
            FooterMarka: "Markalarımız",
            FooterBayilik: "Bayilik",
            FooterDestek: "Destek",
            FooterBize: "Bize Ulaşın",
            FooterOrjinal: "Ürün Orjinalliği Sorgulama",
            FooterTD: "Teknik Destek",
            FooterWp: "Whatsapp Destek Hattı",
            FooterED: "Email Destek Hattı",
            FooterBForm: "Bayilik Formu",
            FooterSatis: "Satış Noktaları",
            HomeProductOrj: "Git!",
            HomeMarka: "MARKALARIMIZ",
            HomeSales: "SATIŞ NOKTALARI",
            HomeKesfet: "Keşfet!",
            BlogAll: "Tüm yazıları gör.",
            ProductAll: "Tüm markaları göster.",
            HomeBayilik: "Bayilik",
        },
    },
    en: {
        translation: {
            HomeBayilik: "Franchise",
            SalesPage: "You can reach our products from all over Turkey.",
            HeaderAnasayfa: "Home",
            HeaderHakkimizda: "About Us",
            HeaderMarka: "Brands",
            HeaderIletisim: "Contact",
            HeaderTitle: "QCY Official Distributor",
            HeaderMisyon: "Mission-Vision",
            HeaderDate: "Company History",
            FooterVizyon: "Vision",
            FooterMisyon: "Mission",
            FooterSB: "Health and Engagement",
            FooterBiz: "To be us",
            FooterMarka: "Our Brands",
            FooterBayilik: "Dealership",
            FooterDestek: "Support",
            FooterBize: "Contact Us",
            FooterOrjinal: "Product Authenticity Inquiry",
            FooterTD: "Technical Support",
            FooterWp: "Whatsapp Support Line",
            FooterED: "Email Support Line",
            FooterBForm: "Dealership Form",
            FooterSatis: "Sales Points",
            AboutUs_firstTitle: "ABOUT US",
            HomeProductOrj: "Go!",
            HomeMarka: "OUR BRANDS",
            HomeSales: "SALES POINTS",
            HomeKesfet: "Discover!",
            BlogAll: "See all posts.",
            ProductAll: "Show all brands.",
            AboutUs_firtsP:
                "We blended 13 years of international telecommunication experience with our experience in e-commerce and distributors and crowned it with the brand of Istech Communication and Information Technologies. By establishing business partnerships with nearly 20 global brands, we have created a wide market network for our customers. We have adopted the principle of creating awareness and 100% customer satisfaction. We have built an order based on reliable and solid foundations on this road we have started.",
            AboutUs_Mission: "MISSION",
            AboutUsMissionFirst:
                "To meet customer demands and expectations at the highest level by constantly improving our product and service quality",
            AboutUsMissionSecond:
                "Establishing an emotional bond with our consumers and ensuring customer loyalty with a strong communication",
            AboutUsMissionThird:
                "To be the most preferred communication and information technology supplier by expanding the chain of business partners at home and abroad, to increase our competitiveness and profitability",
            AboutUsMissionFourth:
                "To provide 100% customer satisfaction and to make it livable.",
            AboutUs_Vision: "VISION",
            AboutUsVisionP:
                "The tough competition conditions in the Communication & Information Technologies sector and the changing demands and expectations of customers with increased awareness; It necessitates the continuous development and improvement of both the products and the services offered. Istech evaluates the demands and expectations in the sector objectively with its extensive experience and expert view; strives to create loyal customers by providing customer satisfaction with a dynamic, innovative and progressive approach.'Continuity in Quality', 'Competitive Price', 'Mutual Trust' and 'Honesty' are the basic principles and indispensable values ​​that make up our vision.",
            AboutUsHistoryTitle: "COMPANY HISTORY",
            AboutUsCompanyHistoryP:
                "“Quality is more important than quantity.” It was established in 2018 in Istanbul to operate in the communication and telecommunication sector. Since its establishment, it has made a rapid entry in the telecommunication sector online and retail. Combining 13 years of experience in the sector with the energy of young entrepreneurship, istech will gain momentum year by year.",
            AboutUsCompanyHistoryLeftTitle: "Respect and Commitment",
            AboutUsCompanyHistoryLeftP:
                "We do our job correctly, properly and with ownership. We develop ourselves and our business, and adopt transparency in all our relationships. In this way, we establish long-term relationships based on trust.",
            AboutUsCompanyHistoryRightTitle: "To Be Us",
            AboutUsCompanyHistoryRightP:
                "Services offered by our company,More detailed information about our dealership conditions and policies.You can call our company during working hours to get.You can visit our office if you wish. A coffee has 40 years of memory.We invite you to our office for a delicious coffee.",
            CONTACT: "CONTACT",
            ContactTitle: "Contact Us",
            ContactName: "Name",
            ContactSurName: "Surname",
            ContactMsg: "Message",
            ContactSendMsg: "Send Message",
            CompanyTitle: "Company Title Name:",
            CompanyTitleDescriotion:
                "Istech Communication & Information Technologies",
            CompanyAdress: "Address:",
            CompanyAdressDescriotion:
                "Cihangir Neighbourhood Guvercin Street No:2 Gate No:96 Aktim 3 Trade Center Avcılar / Istanbul",
            CompanyTel: "Phone:",
        },
    },
};

i18n.use(initReactI18next).init({
    lng: localStorage.getItem("lang"),
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
    fallbackLng: "tr",
    resources,
});

export default i18n;
