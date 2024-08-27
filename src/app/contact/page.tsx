"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@radix-ui/react-select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from 'framer-motion'
const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: '(+261) 34 64 205 06'
    }, {
        icon: <FaEnvelope />,
        title: "Email",
        description: 'jonhrafit.ram@hotmail.com'
    }, {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: 'Analamanga, Antananarivo Madagascar'
    }
];

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-8 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let&rsquo;s work together</h3>
                            <p className="text-white/60">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta dignissimos esse, perferendis, quaerat, id deleniti eaque fuga totam earum velit quo. Quod soluta dolorem accusamus non corrupti laudantium incidunt?
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Firstname"></Input>
                                <Input type="lastname" placeholder="Lastname"></Input>
                                <Input type="email" placeholder="Email"></Input>
                                <Input type="phone" placeholder="Phone number"></Input>
                            </div>
                            <Textarea className="h-[200px]"
                                placeholder="Type your message here. "
                            />
                            {/* btn */}
                            <Button size="md" className="max-w-40">
                                Send message
                            </Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-8">
                        <ul className="flex flex-col gap-10">
                            {
                                info.map((item, index) => {
                                    return (
                                        <li key={index} className="flex items-center gap-6">
                                            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                                <div className="text-[28px]">{item.icon}</div>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-white/60">{item.title}</p>
                                                <h3 className="text-xl">{item.description}</h3>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;