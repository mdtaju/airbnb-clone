import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div className='px-12 md:px-32 bg-gray-100 border-t border-gray-300 mb-0 z-40'>
            <div className='grid grid-cols-1 md:grid-cols-4 space-y-10 md:space-y-0 py-14 border-b border-gray-300 text-center md:text-left'>
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className='font-bold'>ABOUT</h5>
                    <p className='w-max cursor-pointer hover:underline'>How Airbnb Works</p>
                    <p className='w-max cursor-pointer hover:underline'>Newsroom</p>
                    <p className='w-max cursor-pointer hover:underline'>Investors</p>
                    <p className='w-max cursor-pointer hover:underline'>Airbnb Plus</p>
                    <p className='w-max cursor-pointer hover:underline'>Airbnb Luxe</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className='font-bold'>COMMUNITY</h5>
                    <p className='w-max cursor-pointer hover:underline'>Accessibility</p>
                    <p className='w-max cursor-pointer hover:underline'>This is not a real site</p>
                    <p className='w-max cursor-pointer hover:underline'>It's a pretty awesome clone</p>
                    <p className='w-max cursor-pointer hover:underline'>Created by</p>
                    <p className='w-max cursor-pointer hover:underline'>Md Tajuuddin Tarek</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className='font-bold'>HOST</h5>
                    <p className='w-max cursor-pointer hover:underline'>Host your home</p>
                    <p className='w-max cursor-pointer hover:underline'>Host an online experience</p>
                    <p className='w-max cursor-pointer hover:underline'>Host experience</p>
                    <p className='w-max cursor-pointer hover:underline'>Resource center</p>
                    <p className='w-max cursor-pointer hover:underline'>Responsible hosting</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className='font-bold'>SUPPORT</h5>
                    <p className='w-max cursor-pointer hover:underline'>Our Covid-19 Response</p>
                    <p className='w-max cursor-pointer hover:underline'>Help Center</p>
                    <p className='w-max cursor-pointer hover:underline'>Cancellation option</p>
                    <p className='w-max cursor-pointer hover:underline'>Neighborhood support</p>
                    <p className='w-max cursor-pointer hover:underline'>Trust & Safety</p>
                </div>
            </div>
            <div className='text-center space-y-4 md:space-y-0 md:flex justify-between items-center w-full py-8 text-sm text-gray-800'>
                <p>&copy;2021 Airbnb Clone {" "} &#183; {" "} Develop by {" "} &#183; {" "} Md Tajuuddin Tarek</p>
                <div className='space-x-6'>
                    <a href="https://mdtajuudintarek.web.app/" target='_blank'><LinkIcon /></a>
                    <a href="https://www.facebook.com/mdtajuuddintarek/" target='_blank'><FacebookIcon /></a>
                    <a href="https://github.com/mdtaju" target='_blank'><GitHubIcon /></a>
                </div>
            </div>
        </div>
        
    );
};

export default Footer;