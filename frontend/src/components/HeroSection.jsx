import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10 container'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>ZIDIO DEVELOPMENT - Malik</span>
                <h1 className='text-5xl font-bold text-[#C7253E]'>Search, Apply & <br /> Get Your <span className='text-[#F9E400]'>Dream Jobs</span></h1>
                <p>Welcome to Zidio Development Pvt. Ltd. We are a trailblazing software development company where innovation meets expertise. Our team of skilled developers and creative thinkers specializes in turning complex ideas into user-friendly digital solutions. From custom software to cutting-edge mobile apps, we're dedicated to engineering excellence and pushing the boundaries of technology. At Zidio, we believe in the power of collaboration, continuous learning, and adapting to the ever-evolving digital landscape. We're not just developers; we're visionaries committed to delivering impactful software solutions that drive success for businesses globally. Stay connected with us for insights into our groundbreaking projects, tech trends, career opportunities, and our journey in shaping the future of technology.</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto '>
                    <input
                        type="text"
                        style={{backgroundColor:"#FEFAE0"}}
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full'

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection