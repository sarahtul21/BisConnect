import React, { useState } from 'react'

export default function NavBar () {
    const [companiesMenuOpen, setCompaniesMenuOpen] = useState(false)

    return (
        <div className="navbar  bg-white ">
            {/* start */}
            <div className="navbar-start relative">
                <div className='w-52 flex justify-between items-center' style={{alignItems:'center'}}>
                    {/* menu */}
                    <div className="drawer drawer-start flex">
                        <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />

                        <label onClick={()=>companiesMenuOpen ? setCompaniesMenuOpen(false) : ''} className="btn swap swap-rotate z-30  bg-white hover:bg-white border-none shadow-none" for="sidebar-drawer">
                        {/* <!-- hamburger icon --> */}
                        <svg  className=" swap-off fill-black [:checked~*_&]:!-rotate-45 [:checked~*_&]:!opacity-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>        
                        {/* <!-- close icon --> */}
                        <svg className="swap-on fill-black [:checked~*_&]:!rotate-0 [:checked~*_&]:!opacity-100" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>        
                        </label>
                        
                        <div className="drawer-content">
                        {/* <!-- Page content here --> */}
                        {/* <label for="sidebar-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
                        </div>
                        <div className="drawer-side">
                        <label for="sidebar-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu z-20 p-4 w-80 min-h-full bg-white text-black pt-[68px]">
                            {/* <!-- Sidebar content here --> */}
                            <li><a className='text-[#65b946]'>Main</a></li>
                            <li><a className=''>About us</a></li>
                            <li><a>Projects</a></li>
                            <li><a>News</a></li>
                            <li><a>Contacy us</a></li>
                        </ul>
                        </div>
                    </div>
                    {/* logo */}
                    <a className="flex gap-1 z-20" href='/home'>
                        <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.9132 19.3868H41.5094V0.5H0V19.3868H18.6377V23.3717C17.5585 23.7038 16.5623 24.3264 15.6906 25.2396C14.6113 26.4019 13.9472 27.7717 13.6981 29.3075V29.8057C13.6566 29.8057 16.3547 29.8057 16.3547 29.8057V32.2547C16.3962 32.6698 16.5208 32.9604 16.6868 33.1679C16.8943 33.417 17.1019 33.5 17.3925 33.5C17.683 33.5 17.8491 33.3755 18.0566 33.1679C18.2226 32.9604 18.3057 32.6698 18.3887 32.2547V29.8057H23.1208V32.2547C23.1623 32.6698 23.2868 32.9604 23.4528 33.1679C23.6604 33.417 23.8679 33.5 24.1585 33.5C24.4491 33.5 24.6151 33.3755 24.8226 33.1679C24.9887 32.9604 25.0717 32.6698 25.1547 32.2547V29.8057H27.8528V29.3075C27.5623 27.7717 26.8981 26.4019 25.7774 25.2396C24.9472 24.3264 23.9925 23.7453 22.9132 23.3717V19.3868ZM11.3321 3.32264H27.3547V4.73396H11.3321V3.32264ZM11.3321 6.18679H33.0415V9.00943H11.3321V6.18679ZM2.82264 3.32264H8.46793V8.96792H2.82264V3.32264ZM2.82264 16.5641V11.8321H38.6868V16.5641H2.82264Z" fill="#65B946"/>
                        </svg>
                        <h1 className='text-lg font-bold text-black'>BisConnect</h1>
                    </a>
                </div>
            </div>

{/*  */}
            <div className="navbar-center hidden md:flex">
                {/* search */}
                <label className="input  bg-[#f0f2f5] text-black rounded-lg input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="black"
                        className="h-4 w-4 opacity-70">
                        <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                    </svg>
                </label>
            </div>

            <div className="navbar-end">
                <div className='flex justify-between items-center gap-4'>
                    {/* avatar */}
                    <div className='flex gap-1 items-center'>
                        <div className="avatar online">
                            <div className="w-12 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className='hidden md:block text-xs'>
                            <h2>Employee Name</h2>
                            <h3>Job Name</h3>
                        </div>
                    </div>
                    {/* notefication */}
                    <div className='relative me-8'> 
                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.58549 6.81661C2.58549 6.26917 2.66556 5.74357 2.82572 5.24005C2.98588 4.74733 3.21019 4.29301 3.49866 3.87709C3.78713 3.46117 4.13413 3.09421 4.54014 2.77669C4.93538 2.47021 5.37323 2.22925 5.85393 2.05405L5.88601 2.03773C5.88601 2.00485 5.88344 1.96645 5.87805 1.92277C5.87267 1.87909 5.87009 1.82965 5.87009 1.77493C5.87009 1.31509 6.03025 0.921011 6.35079 0.592451C6.67134 0.263891 7.05581 0.0997314 7.50443 0.0997314C7.95306 0.0997314 8.35368 0.263891 8.67399 0.592451C8.99454 0.921011 9.1547 1.31509 9.1547 1.77493C9.1547 1.82965 9.15212 1.87885 9.14674 1.92277C9.14135 1.96669 9.13339 2.01037 9.12262 2.05405V2.03773C9.61386 2.22373 10.0625 2.47021 10.4685 2.77669C10.8637 3.09421 11.2082 3.46093 11.5018 3.87709C11.7954 4.29301 12.0225 4.74757 12.1827 5.24005C12.3428 5.73253 12.4229 6.25285 12.4229 6.80005V6.81637V11.8581L14.8903 13.533V14.3869H0.118286V13.533L2.58572 11.8581V6.81637H2.58549V6.81661ZM9.13831 15.225C9.13831 15.6849 8.97815 16.0789 8.6576 16.4075C8.33706 16.736 7.95259 16.9002 7.50396 16.9002C7.05534 16.9002 6.67087 16.736 6.35033 16.4075C6.02978 16.0789 5.86962 15.6849 5.86962 15.225H9.13831Z" fill="#7B809A"/>
                        </svg>
                        <div className='grid place-content-center w-4 h-4 font-bold text-[8px] absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full'>11</div>
                    </div>
                </div>
            </div>
        </div>
    )
}




