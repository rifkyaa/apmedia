import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export const dataContact = [
    { 
        id: 1,
        icon: MdOutlineMailOutline, 
        value: "Email: apmedia@gmail.com",
        link: "mailto:apmedia@gmail.com"
    },
    { 
        id: 2,
        icon: MdOutlineWhatsapp, 
        value: "WhatsApp: +6281220102935",
        link: "https://api.whatsapp.com/send?phone=6281220102935&text=Halo Kak, Saya Berminat Berkolaborasi?"
    },
    { 
        id: 3,
        icon: FaInstagram, 
        value: "Instagram: Apmedia",
        link: "https://www.instagram.com/apmedia_creative/"
    },
    { 
        id: 4,
        icon: FaTiktok, 
        value: "TikTok: Apmexplore",
        link: "https://www.tiktok.com/@apmexplore?_t=8rXxyJKazv5&_r=1"
    }
];