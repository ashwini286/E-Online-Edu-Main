import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import DataAnalyst from './DataAnalyst/DataAnalyst';
import StartLearning from './startLearning/StartLearning';
import  Aurora  from '../Components/aurora/Aurora';

function Home() {
  const [activeTab, setActiveTab] = useState('tab1');

  useEffect(() => {
    // Initialize the first tab
    showTab('tab1');
  }, []);

  function showTab(tabId) {
    // Update active tab
    setActiveTab(tabId);
  }

  return (
    <>
    <Navbar />
      <Main />
      <div class="w-full mt-28 px-16">
  <span class="text-4xl font-bold text-[#023047]  border-b border-[#023047]">Start a new career with CodeWithGenius &#8594;</span>
</div>
      <div className="w-full mt-10 px-16">
        {/* Tab Buttons */}
        <div className="p-2 rounded-t-lg overflow-x-auto">
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-100 rounded-lg hover:bg-blue-100 focus:outline-none tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
              onClick={() => showTab('tab1')}
            >
              Data Analyst
            </button>
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-100 rounded-lg hover:bg-blue-100 focus:outline-none tab-button ${activeTab === 'tab2' ? 'active' : ''}`}
              onClick={() => showTab('tab2')}
            >
              Digital Marketer
            </button>
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-100 rounded-lg hover:bg-blue-100 focus:outline-none tab-button ${activeTab === 'tab3' ? 'active' : ''}`}
              onClick={() => showTab('tab3')}
            >
              IT Support Specialist
            </button>
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-100 rounded-lg hover:bg-blue-100 focus:outline-none tab-button ${activeTab === 'tab4' ? 'active' : ''}`}
              onClick={() => showTab('tab4')}
            >
              Cybersecurity
            </button>
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-100 rounded-lg hover:bg-blue-100 focus:outline-none tab-button ${activeTab === 'tab5' ? 'active' : ''}`}
              onClick={() => showTab('tab5')}
            >
              Front-End Developer
            </button>
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-100 rounded-lg hover:bg-blue-100 focus:outline-none tab-button ${activeTab === 'tab6' ? 'active' : ''}`}
              onClick={() => showTab('tab6')}
            >
              UX Designer
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className='border-2 rounded-lg border-blue-100 shadow-xl'>
          <div id="tab1" className={`p-4 tab-content bg-white shadow-md rounded-lg ${activeTab === 'tab1' ? '' : 'hidden'}`}>
            <DataAnalyst />
          </div>
          <div id="tab2" className={`p-4 tab-content bg-white shadow-md rounded-lg ${activeTab === 'tab2' ? '' : 'hidden'}`}>
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">Tab 2 Content</h2>
            <p>Phasellus eget euismod libero, nec ullamcorper justo...</p>
          </div>
          <div id="tab3" className={`p-4 tab-content bg-white shadow-md rounded-lg ${activeTab === 'tab3' ? '' : 'hidden'}`}>
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">Tab 3 Content</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>
          </div>
          <div id="tab4" className={`p-4 tab-content bg-white shadow-md rounded-lg ${activeTab === 'tab4' ? '' : 'hidden'}`}>
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">Tab 4 Content</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>
          </div>
          <div id="tab5" className={`p-4 tab-content bg-white shadow-md rounded-lg ${activeTab === 'tab5' ? '' : 'hidden'}`}>
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">Tab 5 Content</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>
          </div>
          <div id="tab6" className={`p-4 tab-content bg-white shadow-md rounded-lg ${activeTab === 'tab6' ? '' : 'hidden'}`}>
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">Tab 6 Content</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>
          </div>
        </div>
        <StartLearning />
        <Aurora />
      </div>
    </>
  );
}

export default Home;
