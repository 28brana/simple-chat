import { CaretDown, List } from 'phosphor-react';
import { useState } from 'react';

const Header = () => {
    const [open,setOpen]=useState(false);
    return (
        <div className='sticky top-0 z-50'>
            {/* Desktop View */}
            <div className="hidden items-center lg:flex justify-between px-28 py-7 bg-black">
                <div className="flex items-center gap-11">
                    <div>
                        <img src="https://dev.viralpitch.co/virallive/assets/img/logo/dark-logo.jpeg" alt="logo" />
                    </div>
                    <div className="flex gap-8 text-white">
                        <div className="text-xl font-bold flex items-center hover:text-primary cursor-pointer transition-colors">Platform
                            <CaretDown size={18} weight="fill" />
                        </div>
                        <div className="text-xl font-bold flex items-center hover:text-primary cursor-pointer transition-colors">Solution
                            <CaretDown size={18} weight="fill" />
                        </div>
                        <div className="text-xl font-bold flex items-center hover:text-primary cursor-pointer transition-colors">Resources
                            <CaretDown size={18} weight="fill" />
                        </div>
                        <div className="text-xl font-bold flex items-center hover:text-primary cursor-pointer transition-colors">Services
                            <CaretDown size={18} weight="fill" />
                        </div>
                        <div className="text-xl font-bold flex items-center hover:text-primary cursor-pointer transition-colors">Company
                            <CaretDown size={18} weight="fill" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-5">
                    <button className="primary-btn">I am Brand</button>
                    <button className="primary-btn">I am Creator</button>
                </div>
            </div>
            {/* Mobile View */}
            <div className='bg-black lg:hidden'>
                <div className="flex items-center justify-between px-3 py-7 bg-black ">
                    <div>
                        <img src="https://dev.viralpitch.co/virallive/assets/img/logo/dark-logo.jpeg" alt="logo" />
                    </div>
                    <div>
                        <button className='primary-btn' onClick={()=>{setOpen(!open)}}><List size={26} /></button>
                    </div>
                </div>
                {open && <div>
                    <div className="flex flex-col gap-8 text-white ml-14">
                        <div className="text-xl font-bold flex items-center hover:text-primary cursor-pointer transition-colors">Platform
                            <CaretDown size={18} weight="fill" />
                        </div>
                        <div className="text-xl font-bold flex items-center hover:text-primary cursor-pointer transition-colors">Solution
                            <CaretDown size={18} weight="fill" />
                        </div>
                        <div className="text-xl font-bold flex items-center hover:text-primary cursor-pointer transition-colors">Resources
                            <CaretDown size={18} weight="fill" />
                        </div>
                        <div className="text-xl font-bold flex items-center hover:text-primary cursor-pointer transition-colors">Services
                            <CaretDown size={18} weight="fill" />
                        </div>
                        <div className="text-xl font-bold flex items-center hover:text-primary cursor-pointer transition-colors">Company
                            <CaretDown size={18} weight="fill" />
                        </div>
                    </div>
                    <div className="flex gap-5 mt-6 p-3">
                        <button className="primary-btn">I am Brand</button>
                        <button className="primary-btn">I am Creator</button>
                    </div>
                </div>}
            </div>
        </div>
    )
}
export default Header;