'use client'
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import '@/styles/hero.css';

export default function TravelHero() {
  const [activeTab, setActiveTab] = useState('buy');

  return (
    <div className="travel-hero mx-4 my-3">
      <div className="container py-5">
        <div className="hero-bg rounded-4 ms-4">
          <div className="text-white hero-content">
            <h4 className="fw-semibold mb-4">Let's Check Doors Together</h4>

            <div className="search-box rounded-4 p-4">
              {/* Tabs */}
              <div className="d-flex mb-3 tab-container">
                <span
                  className={`tab ${activeTab === 'buy' ? 'active' : ''}`}
                  onClick={() => setActiveTab('buy')}
                >
                  Buy
                </span>
                <span
                  className={`tab ${activeTab === 'plot' ? 'active' : ''}`}
                  onClick={() => setActiveTab('plot')}
                >
                  Plot
                </span>
              </div>

              {/* Search Form */}
              <form className="d-flex align-items-center bg-white rounded-pill overflow-hidden px-2 py-1">
                <select className="form-select border-0 rounded-start-pill shadow-none city-select">
                  <option value="Chennai">Chennai</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                </select>

                <input
                  type="search"
                  className="form-control border-0 shadow-none search-input"
                  placeholder="Looking for Apartment"
                />

                <button type="submit" className="btn btn-dark rounded-pill px-4 d-flex align-items-center"   style={{
    height: "44px",
  }}>
                  <Search className="me-2" size={18} />
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
