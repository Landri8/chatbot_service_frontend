import React from 'react'
import Template from './Template'
import { Link } from 'react-router-dom'

const FooterComponent: React.FC = () => {
  return (
    <section className='bg-zinc-900  pt-[100px] pb-[50px]'>
        <Template>
            <p className='w-full lg:w-2/3 text-white text-[16px] lg:text-[20px] mb-10'>If you encounter any issues with our services, are interested in job opportunities, or wish to discuss business matters, please reach out to us.</p>
            <button className='px-6 py-2 md:px-12 md:py-3 border border-white text-white rounded-full text-[12px] md:text-[16px]'>Contact us</button>

            <div className='mt-20 w-full lg:w-1/2 flex flex-col md:flex-row items-start gap-16 text-white'>
                <div>
                    <h5 className='font-semibold mb-8'>Resources</h5>
                    <p className='text-[14px] lg:text-[16px] font-normal text-zinc-300'>Help center</p>
                    <p className='text-[14px] lg:text-[16px] font-normal text-zinc-300'>APIs and Developers</p>
                    <p className='text-[14px] lg:text-[16px] font-normal text-zinc-300'>Blogs</p>
                </div>
                <div>
                    <h5 className='font-semibold mb-8'>Products</h5>
                    <p className='text-[14px] lg:text-[16px] font-normal text-zinc-300'>Product demo</p>
                    <p className='text-[14px] lg:text-[16px] font-normal text-zinc-300'>Pricing</p>
                    <p className='text-[14px] lg:text-[16px] font-normal text-zinc-300'>How it works</p>
                    <p className='text-[14px] lg:text-[16px] font-normal text-zinc-300'>Features</p>
                </div>
                <div>
                    <h5 className='font-semibold mb-8'>Company</h5>
                    <p className='text-[14px] lg:text-[16px] font-normal text-zinc-300'>About us</p>
                    <p className='text-[14px] lg:text-[16px] font-normal text-zinc-300'>FAQs</p>
                    <p className='text-[14px] lg:text-[16px] font-normal text-zinc-300'>Contact us</p>
                </div>
            </div>

            <div className='w-full bg-zinc-400 h-[0.5px] my-10'></div>

            <div className='w-full flex flex-col md:flex-row gap-4 items-center justify-between mb-10'>
                <Link to='/' className='text-white font-bold'>BlownMind.io</Link>
                <div className='flex items-center gap-4'>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.7774 3.63594C16.4389 3.0218 15.0036 2.56932 13.5029 2.31017C13.4756 2.30517 13.4483 2.31767 13.4342 2.34267C13.2496 2.67098 13.0451 3.09929 12.902 3.43594C11.2879 3.19429 9.68204 3.19429 8.10103 3.43594C7.95782 3.09181 7.74592 2.67098 7.5605 2.34267C7.54642 2.3185 7.51912 2.306 7.49179 2.31017C5.99192 2.56849 4.55662 3.02097 3.21732 3.63594C3.20572 3.64094 3.19579 3.64928 3.18919 3.66011C0.466718 7.72742 -0.279081 11.6948 0.0867826 15.6129C0.0884381 15.6321 0.0991986 15.6504 0.114098 15.6621C1.91031 16.9812 3.65024 17.782 5.35787 18.3128C5.3852 18.3211 5.41415 18.3111 5.43155 18.2886C5.83549 17.737 6.19556 17.1554 6.50429 16.5437C6.52251 16.5079 6.50512 16.4654 6.46788 16.4512C5.89674 16.2346 5.3529 15.9704 4.82976 15.6704C4.78838 15.6463 4.78507 15.5871 4.82314 15.5587C4.93323 15.4762 5.04334 15.3904 5.14846 15.3038C5.16748 15.2879 5.19398 15.2846 5.21634 15.2946C8.65312 16.8637 12.3739 16.8637 15.7701 15.2946C15.7924 15.2838 15.8189 15.2871 15.8388 15.3029C15.9439 15.3896 16.054 15.4762 16.1649 15.5587C16.203 15.5871 16.2005 15.6463 16.1591 15.6704C15.636 15.9762 15.0922 16.2346 14.5202 16.4504C14.483 16.4645 14.4664 16.5079 14.4846 16.5437C14.8 17.1545 15.16 17.7361 15.5565 18.2878C15.5731 18.3111 15.6029 18.3211 15.6302 18.3128C17.3461 17.782 19.086 16.9812 20.8823 15.6621C20.898 15.6504 20.9079 15.6329 20.9096 15.6138C21.3474 11.0839 20.1762 7.14912 17.8047 3.66094C17.7989 3.64928 17.789 3.64094 17.7774 3.63594ZM7.01752 13.2272C5.98281 13.2272 5.13024 12.2772 5.13024 11.1106C5.13024 9.94399 5.96628 8.99405 7.01752 8.99405C8.07701 8.99405 8.92133 9.95233 8.90477 11.1106C8.90477 12.2772 8.06873 13.2272 7.01752 13.2272ZM13.9954 13.2272C12.9607 13.2272 12.1082 12.2772 12.1082 11.1106C12.1082 9.94399 12.9442 8.99405 13.9954 8.99405C15.0549 8.99405 15.8992 9.95233 15.8827 11.1106C15.8827 12.2772 15.0549 13.2272 13.9954 13.2272Z" fill="white"/>
                    </svg>


                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0355 1.66602H18.9873L12.5385 9.03657L20.125 19.0662H14.1848L9.53228 12.9833L4.2087 19.0662H1.25513L8.15276 11.1826L0.875 1.66602H6.96597L11.1715 7.22606L16.0355 1.66602ZM14.9995 17.2994H16.6351L6.07722 3.34001H4.32203L14.9995 17.2994Z" fill="white"/>
                    </svg>


                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_371_1261)">
                    <path d="M10.5 0C4.70106 0 0 4.70106 0 10.5C0 15.4241 3.39024 19.556 7.96362 20.6909V13.7088H5.79852V10.5H7.96362V9.11736C7.96362 5.54358 9.58104 3.8871 13.0897 3.8871C13.755 3.8871 14.9029 4.01772 15.3724 4.14792V7.05642C15.1246 7.03038 14.6941 7.01736 14.1595 7.01736C12.4379 7.01736 11.7726 7.66962 11.7726 9.36516V10.5H15.2023L14.6131 13.7088H11.7726V20.9231C16.9718 20.2952 21.0004 15.8684 21.0004 10.5C21 4.70106 16.2989 0 10.5 0Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_371_1261">
                    <rect width="21" height="21" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>




                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_371_1264)">
                    <path d="M19.4455 0H1.55039C0.693164 0 0 0.676758 0 1.51348V19.4824C0 20.3191 0.693164 21 1.55039 21H19.4455C20.3027 21 21 20.3191 21 19.4865V1.51348C21 0.676758 20.3027 0 19.4455 0ZM6.23027 17.8951H3.11309V7.8709H6.23027V17.8951ZM4.67168 6.50508C3.6709 6.50508 2.86289 5.69707 2.86289 4.70039C2.86289 3.70371 3.6709 2.8957 4.67168 2.8957C5.66836 2.8957 6.47637 3.70371 6.47637 4.70039C6.47637 5.69297 5.66836 6.50508 4.67168 6.50508ZM17.8951 17.8951H14.782V13.0225C14.782 11.8617 14.7615 10.3646 13.1619 10.3646C11.5418 10.3646 11.2957 11.632 11.2957 12.9404V17.8951H8.18672V7.8709H11.1727V9.24082H11.2137C11.6279 8.45332 12.6451 7.6207 14.1586 7.6207C17.3127 7.6207 17.8951 9.69609 17.8951 12.3949V17.8951V17.8951Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_371_1264">
                    <rect width="21" height="21" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>
            </div>

            <p className='text-center text-[12px] text-white'>Copyright © 2025</p>
        </Template>
    </section>
  )
}

export default FooterComponent