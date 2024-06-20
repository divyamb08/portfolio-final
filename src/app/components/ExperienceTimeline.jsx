import React from 'react'
import avalor from '../../../public/images/Experience/avalor.png'
import bajaj from '../../../public/images/Experience/bajaj_finserv.png'
import isb from '../../../public/images/Experience/isb.png'
import sfa from '../../../public/images/Experience/SFA.png'
import marico from '../../../public/images/Experience/marico.png'
import winwire from '../../../public/images/Experience/winwire.png'
import segal from '../../../public/images/Experience/segal.png'
import Image from 'next/image'

export default function ExperienceTimeline() {
  return (
    <section className='flex flex-col h-auto sm:h-screen justify-center items-center py-10 sm:mt-36 sm:mb-36 max-w-7xl mx-auto px-4'>
    <div className='grid grid-cols-1 items-center'>
        <div><h1 className="text-center text-3xl sm:text-4xl font-bold text-white mt-10 mb-8 md:mb-12">Experience</h1></div>

        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-12">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white">
              <Image src={segal} alt="The Segal Group" className="w-10 h-10 rounded-full" />
            </span>
            <h3 className="flex items-center mb-1 mt-1 text-2xl text-white font-semibold">Data Analyst<span className="bg-blue-100 text-blue-800 text-sm font-medium ml-2 px-2.5 py-0.5 rounded">Latest</span></h3>
            <time className="block mb-2 text-lg leading-none text-white">The Segal Group</time>
          </li>
          <li className="mb-10 ml-12">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white">
              <Image src={bajaj} alt="bajaj" className="w-10 h-10 rounded-full" />
            </span>
            <h3 className="flex items-center mb-1 mt-1 text-2xl text-white font-semibold">Software Developer</h3>
            <time className="block mb-2 text-lg leading-none text-white">Bajaj Finserv Limited ~ India&apos;s Largest NBFC</time>
            <p className="text-lg text-slate-400">Built responsive Angular PWA components for flagship application.</p>
            <p className="mb-4 text-lg text-slate-400">Developed an application for in-house inventory management.</p>
          </li>
          <li className="mb-10 ml-12">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white">
              <Image src={isb} alt="isb" className="w-10 h-10 rounded-full" />
            </span>
            <h3 className="flex items-center mb-1 mt-1 text-2xl font-semibold text-white dark:text-white">Data Science Intern</h3>
            <time className="block mb-2 text-lg leading-none text-white">Indian School of Business</time>
            <p className="text-lg text-slate-400">Developed automated scraping scripts in Python extracting over 4 million rows of data using Selenium and BS4; cleaned and visualized using popular EDA techniques for effective decision making.</p>
          </li>
          <li className="ml-12">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white">
              <Image src={avalor} alt="Avalor" className="w-10 h-10 rounded-full" />
            </span>
            <h3 className="flex items-center mb-1 mt-1 text-2xl font-semibold text-white">Python Developer</h3>
            <time className="block mb-2 text-lg leading-none text-white">Avalor Investments Pvt. Ltd.</time>
            <p className="text-lg text-slate-400">Spearheaded development of a trading bot using low latency code. Provided custom profiling data of major social media accounts to analyze sentiment of the market on any particular crypto currency.</p>
            <p className="text-lg text-slate-400">Engineered modular and scalable code to automate crypto-currency transaction processes.</p>
            <p className="mb-4 text-lg text-slate-400">Researched extensively on historical OHLCV data to visualize trends including ATR, Fibonacci Retracement, moving averages, volatility, volume, etc.</p>
          </li>
          <li className="ml-12">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white">
              <Image src={winwire} alt="Winwire" className="w-10 h-10 rounded-full" />
            </span>
            <h3 className="flex items-center mb-1 mt-1 text-2xl font-semibold text-white">Data Science Intern</h3>
            <time className="block mb-2 text-lg leading-none text-white">Winwire Technologies Inc.</time>
            <p className="mb-4 text-lg text-slate-400">Developed an all-inclusive Applicant Tracking system (ATS) for in-house usage using lightweight Python-Spacy library, extracting percentage match for an individual profile with the job description. Visualized using matplotlib for efficient hiring.</p>
          </li>
          <li className="ml-12">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white">
              <Image src={sfa} alt="sfa" className="w-10 h-10 rounded-full" />
            </span>
            <h3 className="flex items-center mb-1 mt-1 text-2xl font-semibold text-white">Data Intern</h3>
            <time className="block mb-2 text-lg leading-none text-white">Sports For All, India ~ India&apos;s largest tech-enabled sports competition platform</time>
            <p className="text-lg text-slate-400">Implemented MySQL DBMS for efficient data storage and retrieval.</p>
            <p className="text-lg text-slate-400">Developed data visualization dashboards using Tableau to provide insights into sports performance metrics.</p>
          </li>
          <li className="ml-12">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white">
              <Image src={marico} alt="Marico" className="w-10 h-10 rounded-full" />
            </span>
            <h3 className="flex items-center mb-1 mt-1 text-2xl font-semibold text-white">Data Intern</h3>
            <time className="block mb-2 text-lg leading-none text-white">Marico Limited</time>
            <p className="text-lg text-slate-400">Conducted market research and analysis to support product development strategies.</p>
            <p className="text-lg text-slate-400">Assisted in the creation of marketing materials and campaigns to enhance brand visibility.</p>
          </li>
        </ol>
      </div>
    </section>
  )
}
