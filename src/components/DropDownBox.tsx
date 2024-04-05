"use client"

import React from 'react'
import Link from 'next/link';
import { useState } from 'react';

type DropDownItemType = {
    label: string;
    href: string;
}

type DropDownBoxType = {
    items: DropDownItemType[];
    className: string;
}

function DropDownBox({items, className}:DropDownBoxType) {
    const [hover, setHover] = useState(false);
    
    return (
    <div className={`flex flex-1 absolute top-20 left-0 bg-accent-1 w-96 h-auto p-4 ${className}`}>
        <ul className='flex flex-col h-full justify-between text-left'>

        {items.map((item, index) => (
            <li key={index} className='m-4'>
                <Link href={item.href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="">{item.label }
            </Link>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default DropDownBox
