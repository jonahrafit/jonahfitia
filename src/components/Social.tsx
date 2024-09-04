import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook, FaVoicemail, FaEnvelope } from "react-icons/fa";

interface SocialProps {
    containerStyles: string;
    iconStyles: string;
}

const socials = [
    { icon: <FaGithub />, path: 'https://www.github.com/jonahrafit/' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/ramanantsafidy' },
    { icon: <FaFacebook />, path: 'https://www.facebook.com/jonah.rafit/' },
];

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target="_blank">
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social;