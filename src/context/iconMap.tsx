// iconMap.tsx
import { DiCodeigniter, DiMysql, DiMongodb, DiPostgresql, DiJavascript1 } from 'react-icons/di';
import { FaHtml5, FaPhp, FaCss3, FaReact, FaJs, FaJava, FaNodeJs, FaCodeBranch, FaDatabase, FaMobileAlt } from 'react-icons/fa';
import { SiCplusplus, SiCsharp, SiQgis, SiTailwindcss } from 'react-icons/si';

const iconMap: { [key: string]: JSX.Element } = {
    FaHtml5: <FaHtml5 />,
    FaCss3: <FaCss3 />,
    FaReact: <FaReact />,
    FaJs: <FaJs />,
    FaJava: <FaJava />,
    SiTailwindcss: <SiTailwindcss />,
    FaNodeJs: <FaNodeJs />,
    FaIonic: <FaMobileAlt />,
    FaCodeBranch: <FaCodeBranch />,
    DiCodeigniter: <DiCodeigniter />,
    DiMysql: <DiMysql />,
    DiMongodb: <DiMongodb />,
    DiPostgresql: <DiPostgresql />,
    DiJavascript1: <DiJavascript1 />,
    DiOracle: <FaDatabase />,
    SiCsharp: <SiCsharp />,
    SiQgis: <SiQgis />,
    SiCplusplus: <SiCplusplus />,
    FaPhp: <FaPhp />
};

export default iconMap;
