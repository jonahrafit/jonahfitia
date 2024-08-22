"use client";

import React from "react";
import Link from "next/link";
import CountUp from "react-countup";

const stats = [
    {
        num: 2,
        text: "Years of experience",
    }, {
        num: 8,
        text: "Technologies mastered",
    }, {
        num: 4,
        text: "Personnal projects completed",
    }, {
        num: 45,
        text: "of you have viewed my portfolio ",
    }
]

const Stats = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extraold"
                                />
                                <p className={`${item.text.length < 20 ? "max-w-[100px]" : "max-w-[200px]"} leading-snug text-white/80`}>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats;