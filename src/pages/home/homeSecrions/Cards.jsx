import React, { useState } from 'react'
import PersonIcon from '../../../shared/icons/PersonIcon'
import ChartIcon from '../../../shared/icons/ChartIcon'
import CardIcon from '../../../shared/icons/CardIcon'
import CompanyIcon from '../../../shared/icons/CompanyIcon'
import Company2Icon from '../../../shared/icons/Company2Icon'

const Cards = () => {

    return (
        <div className='flex flex-wrap justify-center gap-5 items-center container mx-auto my-10'>
            <div className='h-52 w-52 bg-white rounded-lg flex flex-col justify-between items-center py-2'>
                <div className='calc-card transition-all h-[92px] w-48 bg-[#f0f2f5] rounded-lg flex flex-col justify-between items-center p-2 hover:bg-[#65b946] hover:text-white'>
                    <div className='flex justify-between items-center border-b-[1px] border-gray on-hover-card pb-2 w-full  '>
                        <PersonIcon />
                        <div className='text-center'>
                            <h4 className='text-[8px] text-gray uppercase'>total users</h4>
                            <p className='font-bold text-[#313A4E] on-hover-card'>160K</p>
                        </div>
                    </div>
                    <p className='text-start text-xs' style={{alignSelf:'start'}}><span className='text-[#65b946] font-bold on-hover-card'>+3%</span> than yesterday</p>
                </div>
                <div className='calc-card transition-all h-[92px] w-48 bg-[#f0f2f5] rounded-lg flex flex-col justify-between items-center p-2 hover:bg-[#65b946] hover:text-white'>
                    <div className='flex justify-between items-center border-b-[1px] border-gray on-hover-card pb-2 w-full  '>
                        
                        <ChartIcon />
                        
                        <div className='text-center'>
                            <h4 className='text-[8px] text-gray uppercase'>today's users</h4>
                            <p className='font-bold text-[#313A4E] on-hover-card'>3K</p>
                        </div>
                    </div>
                    <p className='text-start text-xs' style={{alignSelf:'start'}}><span className='text-[#65b946] font-bold on-hover-card'>+3%</span> than yesterday</p>
                </div>
            </div>
            <div className='h-52 w-52 bg-white rounded-lg flex flex-col justify-between items-center py-2'>
                <div className='calc-card transition-all h-[92px] w-48 bg-[#f0f2f5] rounded-lg flex flex-col justify-between items-center p-2 hover:bg-[#65b946] hover:text-white'>
                    <div className='flex justify-between items-center border-b-[1px] border-gray on-hover-card pb-2 w-full  '>
                        <div className=''>
                            <CardIcon />
                        </div>
                        <div className='text-center'>
                            <h4 className='text-[8px] text-gray uppercase'>total business cards</h4>
                            <p className='font-bold text-[#313A4E] on-hover-card'>43K</p>
                        </div>
                    </div>
                    <p className='text-start text-xs' style={{alignSelf:'start'}}><span className='text-[#65b946] font-bold on-hover-card'>+1%</span> than last week</p>
                </div>
                <div className='calc-card transition-all h-[92px] w-48 bg-[#f0f2f5] rounded-lg flex flex-col justify-between items-center p-2 hover:bg-[#65b946] hover:text-white'>
                    <div className='flex justify-between items-center border-b-[1px] border-gray on-hover-card pb-2 w-full  '>
                        <div className=''>
                            <CardIcon />
                        </div>
                        <div className='text-center'>
                            <h4 className='text-[8px] text-gray uppercase'>today's business cards</h4>
                            <p className='font-bold text-[#313A4E] on-hover-card'>16</p>
                        </div>
                    </div>
                    <p className='text-start text-xs' style={{alignSelf:'start'}}><span className='text-[#65b946] font-bold on-hover-card'>+1%</span> than yesterday</p>
                </div>
            </div>
            <div className='h-52 w-52 bg-white rounded-lg flex flex-col justify-between items-center py-2'>
                <div className='calc-card transition-all h-[92px] w-48 bg-[#f0f2f5] rounded-lg flex flex-col justify-between items-center p-2 hover:bg-[#65b946] hover:text-white'>
                    <div className='flex justify-between items-center border-b-[1px] border-gray on-hover-card pb-2 w-full  '>
                        
                        <CompanyIcon />

                        <div className='text-center'>
                            <h4 className='text-[8px] text-gray uppercase'>total companys</h4>
                            <p className='font-bold text-[#313A4E] on-hover-card'>20k</p>
                        </div>
                    </div>
                    <p className='text-start text-xs' style={{alignSelf:'start'}}><span className='text-[#65b946] font-bold on-hover-card'>+1%</span> than last week</p>
                </div>
                <div className='calc-card transition-all h-[92px] w-48 bg-[#f0f2f5] rounded-lg flex flex-col justify-between items-center p-2 hover:bg-[#65b946] hover:text-white'>
                    <div className='flex justify-between items-center border-b-[1px] border-gray on-hover-card pb-2 w-full  '>
                        
                        <Company2Icon />

                        <div className='text-center'>
                            <h4 className='text-[8px] text-gray uppercase'>today's companys</h4>
                            <p className='font-bold text-[#313A4E] on-hover-card'>16</p>
                        </div>
                    </div>
                    <p className='text-start text-xs' style={{alignSelf:'start'}}><span className='text-[#65b946] font-bold on-hover-card'>+1%</span> than last week</p>
                </div>
            </div>
        </div>

    )
}

export default Cards



