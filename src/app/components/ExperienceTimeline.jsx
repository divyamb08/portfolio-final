'use client'
import React, { useState } from 'react';
import './AboutSection.css';
import avalor from '../../../public/images/Experience/avalor.png';
import bajaj from '../../../public/images/Experience/bajaj_finserv.png';
import isb from '../../../public/images/Experience/isb.png';
import sfa from '../../../public/images/Experience/SFA.png';
import marico from '../../../public/images/Experience/marico.png';
import winwire from '../../../public/images/Experience/winwire.png';
import segal from '../../../public/images/Experience/segal.png';
import Image from 'next/image';

export default function ExperienceTimeline() {
  const [showMore, setShowMore] = useState({});

  const handleShowMore = (id) => {
    setShowMore((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className='flex flex-col h-auto justify-center items-center py-10 sm:mt-36 sm:mb-36 max-w-7xl mx-auto px-4'>
      <div className='grid grid-cols-1 items-center'>
        <div><h1 className="text-center text-3xl sm:text-4xl font-bold text-white mt-10 mb-8 md:mb-12">Experience</h1></div>

        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-12">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white">
              <Image src={segal} alt="The Segal Group" className="w-10 h-10 rounded-full" />
            </span>
            <h3 className="flex items-center mb-1 mt-1 text-xl text-white font-bold">Data Analyst Intern<span className="bg-blue-100 text-blue-800 text-sm font-medium ml-2 px-2.5 py-0.5 rounded">Latest</span></h3>
            <time className="block mb-2 text-lg leading-none text-white">The Segal Group</time>
            <ul className="list-disc pl-5 text-lg text-slate-200">
              <li>Implemented a pre-trained Hugging Face model on Segal&apos;s servers to utilize generative AI on sensitive public health data, while maintaining data security, improving productivity and reducing turnaround time for audit report generation.</li>
              <li className={`expandable ${showMore['segal'] ? 'expanded' : ''}`}>
                Leveraged SQL and Python to clean, preprocess and analyze medical PHI data for auditing purposes, and identify discrepancies. Developed Excel Macros to automate stratification process.
              </li>
            </ul>
            <button onClick={() => handleShowMore('segal')} className="text-blue-500 text-sm underline">
              {showMore['segal'] ? 'See less' : 'See more'}
            </button>
          </li>
          <li className="mb-10 ml-12">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white">
              <Image src={bajaj} alt="bajaj" className="w-10 h-10 rounded-full" />
            </span>
            <h3 className="flex items-center mb-1 mt-1 text-xl text-white font-bold">Software Developer</h3>
            <time className="mb-2 text-lg text-white">Bajaj Finserv Limited ~ India&apos;s Largest NBFC</time>
            <ul className="list-disc pl-5 text-lg text-slate-200">
              <li>Crafted fast and responsive progressive web application components – like store locator, personalized newsletter, and automated EMI calculator, and personal finance homepage using AngularJS, which improved user engagement significantly; currently serving over 500,000 active users monthly.</li>
              <li className={`expandable ${showMore['bajaj'] ? 'expanded' : ''}`}>
                Developed an in-house application operating React native to monitor in-store inventory of electronics, assisting 25,000 employees daily: reducing stock audit time and improving demand forecasting.
                Refurbished code, fixed bugs and created solutions for potential crashes of the application reducing the mean downtime.
              </li>
            </ul>
            <button onClick={() => handleShowMore('bajaj')} className="text-blue-500 text-sm underline">
              {showMore['bajaj'] ? 'See less' : 'See more'}
            </button>
          </li>
          <li className="mb-10 ml-12">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white">
              <Image src={isb} alt="isb" className="w-10 h-10 rounded-full" />
            </span>
            <h3 className="flex items-center mb-1 mt-1 text-xl text-white font-bold">Data Science Intern</h3>
            <time className="block mb-2 text-lg leading-none text-white">Indian School of Business</time>
            <ul className="list-disc pl-5 text-lg text-slate-200">
              <li>Identified and mapped interlinking attributes across diverse data tables, significantly improving data coherence and accessibility for analytical purposes. The data along with a detailed report was made available to the Government of India and the Bill and Melinda Gates Foundation for impactful investments in improving the nutrition of the underprivileged people. </li>
              <li className={`expandable ${showMore['isb'] ? 'expanded' : ''}`}>
                Developed automated scraping scripts in Python extracting over 4 million rows of data using Selenium and BS4; visualized using Pandas EDA techniques for effective decision making in devising strategies to improve nutrition for the rural sector of India.
              </li>
            </ul>
            <button onClick={() => handleShowMore('isb')} className="text-blue-500 text-sm underline">
              {showMore['isb'] ? 'See less' : 'See more'}
            </button>
          </li>
          <li className="ml-12">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white">
              <Image src={avalor} alt="Avalor" className="w-10 h-10 rounded-full" />
            </span>
            <h3 className="flex items-center mb-1 mt-1 text-xl text-white font-bold">Python Developer Intern</h3>
            <time className="block mb-2 text-lg leading-none text-white">Avalor Investments Pvt. Ltd.</time>
            <ul className="list-disc pl-5 text-lg text-slate-200">
              <li>Developed a trading bot and devised trading strategies with integration of sentiment analysis (using BERT) - by profiling major trading and VC accounts on Twitter and Reddit. The sentiment analysis improved the net profit by 20%.</li>
              <li className={`expandable ${showMore['avalor'] ? 'expanded' : ''}`}>
                Researched extensively on historical OHLCV data to visualize trends including ATR, Fibonacci Retracement, moving averages, volatility, volume, etc. enabling the organization to invest over 5 million dollars.
              </li>
            </ul>
            <button onClick={() => handleShowMore('avalor')} className="text-blue-500 text-sm underline">
              {showMore['avalor'] ? 'See less' : 'See more'}
            </button>
          </li>
          <li className="ml-12">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white">
              <Image src={winwire} alt="Winwire" className="w-10 h-10 rounded-full" />
            </span>
            <h3 className="flex items-center mb-1 mt-1 text-xl text-white font-bold">Data Science Intern</h3>
            <time className="block mb-2 text-lg leading-none text-white">Winwire Technologies Inc.</time>
            <ul className="list-disc pl-5 text-lg text-slate-200">
              <li>Developed an all-inclusive Applicant Tracking system (ATS) for in-house usage using lightweight Python-Spacy library, extracting percentage match for an individual profile with the job description. Visualized using matplotlib for efficient hiring.</li>
            </ul>
          </li>
          <li className="ml-12">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white">
              <Image src={sfa} alt="sfa" className="w-10 h-10 rounded-full" />
            </span>
            <h3 className="flex items-center mb-1 mt-1 text-xl text-white font-bold">Data Intern</h3>
            <time className="block mb-2 text-lg leading-none text-white">Sports For All, India ~ India&apos;s largest tech-enabled sports competition platform</time>
            <ul className="list-disc pl-5 text-lg text-slate-200">
              <li>Implemented MySQL DBMS for efficient data storage and retrieval.</li>
              <li className={`expandable ${showMore['sfa'] ? 'expanded' : ''}`}>
                Developed data visualization dashboards using Tableau to provide insights into sports performance metrics.
              </li>
            </ul>
            <button onClick={() => handleShowMore('sfa')} className="text-blue-500 text-sm underline">
              {showMore['sfa'] ? 'See less' : 'See more'}
            </button>
          </li>
          <li className="ml-12">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white">
              <Image src={marico} alt="Marico" className="w-10 h-10 rounded-full" />
            </span>
            <h3 className="flex items-center mb-1 mt-1 text-xl text-white font-bold">Data Intern</h3>
            <time className="block mb-2 text-lg leading-none text-white">Marico Limited</time>
            <ul className="list-disc pl-5 text-lg text-slate-200">
              <li>Conducted market research and analysis to support product development strategies.</li>
              <li className={`expandable ${showMore['marico'] ? 'expanded' : ''}`}>
                Assisted in the creation of marketing materials and campaigns to enhance brand visibility.
              </li>
            </ul>
            <button onClick={() => handleShowMore('marico')} className="text-blue-500 text-sm underline">
              {showMore['marico'] ? 'See less' : 'See more'}
            </button>
          </li>
        </ol>
      </div>
    </section>
  );
}
