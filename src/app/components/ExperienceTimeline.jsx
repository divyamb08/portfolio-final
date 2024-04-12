import React from 'react'

export default function ExperienceTimeline() {
  return (
    <section className='flex flex-col h-auto sm:h-screen justify-center items-center py-10 sm:mt-36 sm:mb-36 max-w-7xl mx-auto px-4'>
    <div className='grid grid-cols-1 items-center'>
        <div><h1 className="text-center text-3xl sm:text-4xl font-bold text-white mt-10 mb-8 md:mb-12">Experience</h1></div>


<ol class="relative border-s border-gray-200 ">                  
    <li class="mb-10 ms-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white  ">
            <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-2xl font-semibold text-ivory ">Software Developer <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded   ms-3">Latest</span></h3>
        <time class="block mb-2 text-2lg leading-none text-white ">Bajaj Finserv Limited ~ India&apos;s Largest NBFC</time>
        <p class="text-lg text-slate-400">Built responsive Angular PWA components for flagship application.</p>
        <p class="mb-4 text-lg text-slate-400">Developed an application for in-house inventory management.</p>
       
    </li>
    <li class="mb-10 ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
            <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-2xl font-semibold text-ivory dark:text-white">Data Intern </h3>
        <time class="block mb-2 text-2lg  leading-none text-white ">Indian School of Business</time>
        <p class="text-lg text-slate-400">Developed automated scraping scripts in Python extracting over 4 million rows of data using Selenium and BS4; cleaned and
visualized using popular EDA techniques for effective decision making.</p>
    </li>
    <li class="ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
            <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-2xl font-semibold text-ivory ">Python Developer </h3>
        <time class="block mb-2 text-2lg  leading-none text-white">Avalor Investments Pvt. Ltd.</time>
        <p class="text-lg text-slate-400">Spearheaded development of a trading bot using low latency code. Provided custom profiling data of major social media
accounts to analyze sentiment of the market on any particular crypto currency.</p>
        <p class="text-lg text-slate-400">Engineered modular and scalable code to automate crypto-currency transaction processes.</p>
        <p class="mb-4 text-lg text-slate-400">Researched extensively on historical OHLCV data to visualize trends including ATR, Fibonacci Retracement, moving averages,
volatility, volume, etc.</p>
    </li>
    <li class="ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
            <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-2xl font-semibold text-ivory ">Data Science Intern </h3>
        <time class="block mb-2 text-2lg  leading-none text-white ">Winwire Technologies Inc.</time>
        <p class="mb-4 text-lg text-slate-400">Developed an all-inclusive Applicant Tracking system (ATS) for in-house usage using lightweight Python-Spacy library, extracting
percentage match for an individual profile with the job description. Visualized using matplotlib for efficient hiring.</p>
    </li>
    <li class="ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
            <svg class="w-2.5 h-2.5 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-2xl font-semibold text-ivory">Data Intern</h3>
        <time class="block mb-2 text-2lg  leading-none text-white">Sports For All, India ~ India&apos;s largest tech-enabled sports competition platform</time>
        <p class="text-lg text-slate-400">Implemented MySQL DBMS for up to 50,000 data records with over 5 different merged tables, streamlining dataflow previously
done in Excel.</p>
        <p class="mb-4 text-lg text-slate-400">Developed an in-house web e-sports platform.</p>
    </li>
    <li class="ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
            <svg class="w-2.5 h-2.5 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-2xl font-semibold text-ivory">Summer Intern/Trainee</h3>
        <time class="block mb-2 text-2lg  leading-none text-white">Marico Limited</time>
        <p class="text-lg text-slate-400">Developed a customized chatbot for their fmcg products using simple-feed-forward and seq-2-seq model</p>
    </li>
</ol>
<br className='mb-70'></br>


      
    </div>
    </section>
  )
}
