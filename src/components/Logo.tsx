import React from "react";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            <h1 className="text-4xl font-semibold">
                Jonah <span className='text-accent'> F.</span>
            </h1>
        </Link>
    )
}

export default Logo;