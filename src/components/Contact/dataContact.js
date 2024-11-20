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
        value: "WhatsApp: +6281456789",
        link: "https://api.whatsapp.com/send?phone=628&text=Halo Admin! Saya berminat Berkolaborasi dengan"
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
        link: "https://www.instagram.com/apmedia_creative/"
    }
];