import React from "react";
import { animate, motion } from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
};

const reverseIndex = (index: number): number => {
    const totalSteps = 6;
    if (index < 0 || index >= totalSteps) {
        throw new Error('Index out of bounds');
    }

    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
        <>
            {/* render 6 motion divs , each represneting a step of the staires
                Each div will have the same animation defined by the stairAnimation object

            
            */}
            {[...Array(6)].map((_, index) => {
                return (<motion.div key={index} variants={stairAnimation} initial="initial"
                    animate="animate" exit="exit" transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className="h-full w-full bg-white relative"
                />
                );
            })}
        </>
    )
}

export default Stairs;