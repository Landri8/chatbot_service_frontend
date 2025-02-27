import React from 'react'

type Props = {
  features: {title: string, content: string}[]
}

const ModelFeaturesComponent: React.FC<Props> = ({features}) => {
  return (
    <div className='w-full xl:w-[80%] mx-auto my-[100px] grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='p-10 rounded-[20px] bg-zinc-100 text-center'>
            <svg className='mx-auto mb-7' width="38" height="38" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 22.75C21 22.2859 21.1844 21.8408 21.5126 21.5126C21.8408 21.1844 22.2859 21 22.75 21H36.75C37.2141 21 37.6592 21.1844 37.9874 21.5126C38.3156 21.8408 38.5 22.2859 38.5 22.75C38.5 23.2141 38.3156 23.6592 37.9874 23.9874C37.6592 24.3156 37.2141 24.5 36.75 24.5H22.75C22.2859 24.5 21.8408 24.3156 21.5126 23.9874C21.1844 23.6592 21 23.2141 21 22.75ZM22.75 31.5H36.75C37.2141 31.5 37.6592 31.3156 37.9874 30.9874C38.3156 30.6593 38.5 30.2141 38.5 29.75C38.5 29.2859 38.3156 28.8407 37.9874 28.5126C37.6592 28.1844 37.2141 28 36.75 28H22.75C22.2859 28 21.8408 28.1844 21.5126 28.5126C21.1844 28.8407 21 29.2859 21 29.75C21 30.2141 21.1844 30.6593 21.5126 30.9874C21.8408 31.3156 22.2859 31.5 22.75 31.5ZM50.75 42C50.75 43.8565 50.0125 45.637 48.6997 46.9497C47.387 48.2625 45.6065 49 43.75 49H19.25C17.3935 49 15.613 48.2625 14.3003 46.9497C12.9875 45.637 12.25 43.8565 12.25 42V14C12.25 13.0717 11.8813 12.1815 11.2249 11.5251C10.5685 10.8687 9.67826 10.5 8.75 10.5C7.82174 10.5 6.9315 10.8687 6.27513 11.5251C5.61875 12.1815 5.25 13.0717 5.25 14C5.25 15.2556 6.30656 16.1044 6.3175 16.1131C6.60713 16.336 6.81971 16.644 6.92542 16.9938C7.03113 17.3437 7.02466 17.7178 6.90692 18.0638C6.78918 18.4098 6.56608 18.7102 6.26893 18.9229C5.97177 19.1357 5.61546 19.25 5.25 19.25C4.87156 19.2507 4.5034 19.1269 4.20219 18.8978C3.94844 18.7119 1.75 16.9772 1.75 14C1.75 12.1435 2.4875 10.363 3.80025 9.05025C5.11301 7.7375 6.89348 7 8.75 7H38.5C40.3565 7 42.137 7.7375 43.4497 9.05025C44.7625 10.363 45.5 12.1435 45.5 14V36.75H47.25C47.6286 36.75 47.9971 36.8728 48.3 37.1C48.5625 37.2881 50.75 39.0228 50.75 42ZM21.0569 37.9487C21.1764 37.5958 21.4046 37.2898 21.7088 37.0744C22.0129 36.8591 22.3774 36.7455 22.75 36.75H42V14C42 13.0717 41.6312 12.1815 40.9749 11.5251C40.3185 10.8687 39.4283 10.5 38.5 10.5H14.8072C15.4261 11.5625 15.7515 12.7704 15.75 14V42C15.75 42.9283 16.1187 43.8185 16.7751 44.4749C17.4315 45.1312 18.3217 45.5 19.25 45.5C20.1783 45.5 21.0685 45.1312 21.7249 44.4749C22.3813 43.8185 22.75 42.9283 22.75 42C22.75 40.7444 21.6934 39.8956 21.6825 39.8869C21.3843 39.6735 21.1625 39.37 21.0498 39.0211C20.9372 38.6721 20.9397 38.2962 21.0569 37.9487ZM47.25 42C47.2281 41.3516 46.9779 40.7318 46.5434 40.25H25.9809C26.1568 40.8167 26.2461 41.4067 26.2456 42C26.2473 43.2291 25.9235 44.4366 25.3072 45.5H43.75C44.6783 45.5 45.5685 45.1312 46.2249 44.4749C46.8812 43.8185 47.25 42.9283 47.25 42Z" fill="black"/>
            </svg>

            <h2 className='mb-2 font-bold text-[18px]'>{features[0]?.title}</h2>
            <p className='text-zinc-700'>{features[0]?.content}</p>
        </div>

        <div className='p-10 rounded-[20px] bg-zinc-100 text-center'>
            <svg className='mx-auto mb-7' width="38" height="38" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.5003 50.7502C38.5003 51.2143 38.3159 51.6595 37.9877 51.9877C37.6595 52.3158 37.2144 52.5002 36.7503 52.5002H19.2503C18.7862 52.5002 18.341 52.3158 18.0128 51.9877C17.6847 51.6595 17.5003 51.2143 17.5003 50.7502C17.5003 50.2861 17.6847 49.841 18.0128 49.5128C18.341 49.1846 18.7862 49.0002 19.2503 49.0002H36.7503C37.2144 49.0002 37.6595 49.1846 37.9877 49.5128C38.3159 49.841 38.5003 50.2861 38.5003 50.7502ZM47.2503 22.7502C47.2578 25.6676 46.5988 28.5481 45.3235 31.1719C44.0481 33.7957 42.1902 36.0935 39.8915 37.8899C39.4617 38.2194 39.1129 38.6427 38.8718 39.1276C38.6307 39.6125 38.5036 40.1462 38.5003 40.6877V42.0002C38.5003 42.9285 38.1315 43.8187 37.4752 44.4751C36.8188 45.1315 35.9285 45.5002 35.0003 45.5002H21.0003C20.072 45.5002 19.1818 45.1315 18.5254 44.4751C17.869 43.8187 17.5003 42.9285 17.5003 42.0002V40.6877C17.4999 40.1526 17.3769 39.6248 17.1406 39.1447C16.9044 38.6646 16.5612 38.2451 16.1375 37.9183C13.8448 36.1328 11.9884 33.8492 10.7085 31.2403C9.42871 28.6313 8.75907 25.7655 8.75029 22.8596C8.69341 12.4318 17.1197 3.75178 27.5365 3.50022C30.1032 3.43836 32.6564 3.89058 35.0457 4.83025C37.435 5.76993 39.6122 7.17807 41.4491 8.97179C43.2861 10.7655 44.7456 12.9086 45.7419 15.2748C46.7382 17.6411 47.251 20.1828 47.2503 22.7502ZM43.7503 22.7502C43.7509 20.6495 43.3313 18.5698 42.516 16.6337C41.7008 14.6976 40.5065 12.9441 39.0035 11.4765C37.5004 10.0089 35.7189 8.85683 33.7639 8.08808C31.8089 7.31933 29.7198 6.94945 27.6197 7.00022C19.0884 7.20147 12.2043 14.3043 12.2503 22.8355C12.2581 25.2125 12.8065 27.5565 13.8541 29.6902C14.9016 31.8238 16.4207 33.6913 18.2965 35.1512C19.1397 35.8066 19.8217 36.6463 20.2903 37.606C20.759 38.5656 21.0018 39.6198 21.0003 40.6877V42.0002H26.2503V32.2243L19.7622 25.7383C19.4338 25.41 19.2493 24.9646 19.2493 24.5002C19.2493 24.0358 19.4338 23.5905 19.7622 23.2621C20.0905 22.9337 20.5359 22.7492 21.0003 22.7492C21.4647 22.7492 21.91 22.9337 22.2384 23.2621L28.0003 29.0262L33.7622 23.2621C33.9248 23.0995 34.1178 22.9705 34.3302 22.8825C34.5427 22.7945 34.7703 22.7492 35.0003 22.7492C35.2302 22.7492 35.4579 22.7945 35.6704 22.8825C35.8828 22.9705 36.0758 23.0995 36.2384 23.2621C36.401 23.4247 36.53 23.6177 36.618 23.8301C36.706 24.0426 36.7513 24.2703 36.7513 24.5002C36.7513 24.7302 36.706 24.9578 36.618 25.1703C36.53 25.3827 36.401 25.5757 36.2384 25.7383L29.7503 32.2243V42.0002H35.0003V40.6877C35.0022 39.6166 35.249 38.5602 35.7218 37.5991C36.1946 36.638 36.8808 35.7977 37.7281 35.1424C39.6096 33.672 41.1302 31.7912 42.1739 29.6435C43.2176 27.4958 43.7568 25.1381 43.7503 22.7502Z" fill="black"/>
            </svg>


            <h2 className='mb-2 font-bold text-[18px]'>{features[1]?.title}</h2>
            <p className='text-zinc-700'>{features[1]?.content}</p>
        </div>

        <div className='p-10 rounded-[20px] bg-zinc-100 text-center'>
            <svg className='mx-auto mb-7' width="38" height="38" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49 43.75H47.25V8.75C47.25 8.28587 47.0656 7.84075 46.7374 7.51256C46.4092 7.18437 45.9641 7 45.5 7H33.25C32.7859 7 32.3407 7.18437 32.0126 7.51256C31.6844 7.84075 31.5 8.28587 31.5 8.75V17.5H21C20.5359 17.5 20.0908 17.6844 19.7626 18.0126C19.4344 18.3408 19.25 18.7859 19.25 19.25V28H10.5C10.0359 28 9.59075 28.1844 9.26256 28.5126C8.93437 28.8407 8.75 29.2859 8.75 29.75V43.75H7C6.53587 43.75 6.09075 43.9344 5.76256 44.2626C5.43437 44.5908 5.25 45.0359 5.25 45.5C5.25 45.9641 5.43437 46.4092 5.76256 46.7374C6.09075 47.0656 6.53587 47.25 7 47.25H49C49.4641 47.25 49.9092 47.0656 50.2374 46.7374C50.5656 46.4092 50.75 45.9641 50.75 45.5C50.75 45.0359 50.5656 44.5908 50.2374 44.2626C49.9092 43.9344 49.4641 43.75 49 43.75ZM35 10.5H43.75V43.75H35V10.5ZM22.75 21H31.5V43.75H22.75V21ZM12.25 31.5H19.25V43.75H12.25V31.5Z" fill="black"/>
            </svg>


            <h2 className='mb-2 font-bold text-[18px]'>{features[2]?.title}</h2>
            <p className='text-zinc-700'>{features[2]?.content}</p>
        </div>
    </div>
  )
}

export default ModelFeaturesComponent