// iconMap.tsx
import { DiCodeigniter, DiMysql, DiMongodb, DiPostgresql, DiJavascript1 } from 'react-icons/di';
import { FaHtml5, FaAngular, FaBootstrap, FaPhp, FaGithub, FaCss3, FaReact, FaJs, FaJava, FaNodeJs, FaCodeBranch, FaDatabase, FaMobileAlt, FaWindows, FaUbuntu, FaAndroid } from 'react-icons/fa';
import { SiApachetomcat, SiQgis, SiIonic, SiOracle, SiCplusplus, SiCsharp, SiTypescript, SiAdobephotoshop, SiAndroidstudio, SiExpress, SiApachenetbeanside, SiHibernate, SiFirebase, SiMongodb, SiVisualstudio, SiIntellijidea, SiPostman, SiFigma, SiBlender } from 'react-icons/si';
import { BiLogoSpringBoot } from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";

const iconMap: { [key: string]: JSX.Element } = {
    FaHtml5: <FaHtml5 />,
    FaCss3: <FaCss3 />,
    FaReact: <FaReact />,
    FaJs: <FaJs />,
    FaJava: <FaJava />,
    FaNodeJs: <FaNodeJs />,
    FaAngular: <FaAngular />,
    FaPhp: <FaPhp />,
    FaCodeBranch: <FaCodeBranch />,
    FaMobileAlt: <FaMobileAlt />,
    FaWindows: <FaWindows />,
    FaUbuntu: <FaUbuntu />,
    FaDatabase: <FaDatabase />,
    FaGithub: <FaGithub />,
    FaBootstrap: <FaBootstrap />,

    DiCodeigniter: <DiCodeigniter />,
    DiMysql: <DiMysql />,
    DiMongodb: <DiMongodb />,
    DiPostgresql: <DiPostgresql />,
    DiJavascript1: <DiJavascript1 />,

    BiLogoSpringBoot: <BiLogoSpringBoot />, // Utilisation de l'icône personnalisée

    SiPostman: <SiPostman />, // Ajout de l'icône de Postman
    SiFigma: <SiFigma />, // Ajout de l'icône de Figma
    SiAdobephotoshop: <SiAdobephotoshop />, // Ajout de l'icône de Photoshop
    SiBlender: <SiBlender />,
    SiAndroidstudio: <SiAndroidstudio />,
    SiApachetomcat: <SiApachetomcat />,
    SiTypescript: <SiTypescript />,
    SiHibernate: <SiHibernate />, // Utilisation de l'icône personnalisée
    SiExpress: <SiExpress />, // Utilisation de l'icône personnalisée
    SiFirebase: <SiFirebase />,
    SiIonic: <SiIonic />,
    SiCsharp: <SiCsharp />,
    SiCplusplus: <SiCplusplus />,
    SiOracle: <SiOracle />,
    SiMongodb: <SiMongodb />,
    SiQgis: <SiQgis />,
    SiApachenetbeanside: <SiApachenetbeanside />,
    SiIntellijidea: <SiIntellijidea />,

    VscVscode: <VscVscode />,

    BsFiletypeScss: <BsFiletypeScss />


};

export default iconMap;
