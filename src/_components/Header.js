'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  return (
    <header className="p">
      <div className="header px-4">
        <div className="row align-items-center py-3">
          {/* Logo + Location Dropdown */}
          <div className="col-6 col-md-4 d-flex align-items-center gap-3">
            <img
              src="/image/casagrand.jpg"
              alt="Casagrand"
              style={{ height: '45px', width: 'auto', objectFit: 'contain' }}
            />

            {/* Location Dropdown */}
            <div className="position-relative">
              <button
                className="btn btn-link text-decoration-none p-0 d-flex align-items-center gap-1"
                style={{ color: '#333', fontSize: '16px', fontWeight: '500' }}
                onClick={() => setIsLocationOpen(!isLocationOpen)}
              >
                Chennai {isLocationOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {isLocationOpen && (
                <div
                  className="position-absolute bg-white shadow rounded mt-2"
                  style={{ minWidth: '150px', zIndex: 1000 }}
                >
                  <a href="#" className="d-block px-3 py-2 text-decoration-none text-dark hover-bg-light">Chennai</a>
                  <a href="#" className="d-block px-3 py-2 text-decoration-none text-dark hover-bg-light">Mumbai</a>
                  <a href="#" className="d-block px-3 py-2 text-decoration-none text-dark hover-bg-light">Bangalore</a>
                  <a href="#" className="d-block px-3 py-2 text-decoration-none text-dark hover-bg-light">Delhi</a>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation Right Side */}
          <div className="col-md-8 d-none d-md-flex align-items-center justify-content-end gap-4">
            {/* Buy & Plots */}
            <nav className="d-flex align-items-center gap-4">
              <a href="#" className="text-decoration-none" style={{ color: '#333', fontSize: '16px', fontWeight: '500' }}>
                Buy
              </a>
              <a href="#" className="text-decoration-none" style={{ color: '#333', fontSize: '16px', fontWeight: '500' }}>
                Plots
              </a>
            </nav>

            {/* Phone & Button */}
            <div className="d-flex align-items-center gap-3">
              <a
                href="tel:+917092570925"
                className="d-flex align-items-center text-decoration-none gap-1"
                style={{ color: '#C8102E', fontSize: '16px', fontWeight: '600' }}
              >
                <Phone size={18} /> +91 70925-70925
              </a>
              <button
                className="btn text-white px-4 py-2"
                style={{
                  backgroundColor: '#003B73',
                  borderRadius: '25px',
                  fontSize: '16px',
                  fontWeight: '500',
                  border: 'none'
                }}
              >
                Post Property
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="col-6 d-md-none text-end">
            <button
              className="btn btn-link p-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ color: '#003B73', fontSize: '24px' }}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="row d-md-none pb-3">
            <div className="col-12">
              <nav className="d-flex flex-column gap-3">
                <div>
                  <button
                    className="btn btn-link text-decoration-none p-0 d-flex align-items-center gap-1 w-100"
                    style={{ color: '#333', fontSize: '16px', fontWeight: '500' }}
                    onClick={() => setIsLocationOpen(!isLocationOpen)}
                  >
                    Chennai {isLocationOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {isLocationOpen && (
                    <div className="mt-2 ps-3">
                      <a href="#" className="d-block py-2 text-decoration-none text-dark">Chennai</a>
                      <a href="#" className="d-block py-2 text-decoration-none text-dark">Mumbai</a>
                      <a href="#" className="d-block py-2 text-decoration-none text-dark">Bangalore</a>
                      <a href="#" className="d-block py-2 text-decoration-none text-dark">Delhi</a>
                    </div>
                  )}
                </div>
                <a href="#" className="text-decoration-none" style={{ color: '#333', fontSize: '16px', fontWeight: '500' }}>Buy</a>
                <a href="#" className="text-decoration-none" style={{ color: '#333', fontSize: '16px', fontWeight: '500' }}>Plots</a>
                <a
                  href="tel:+917092570925"
                  className="d-flex align-items-center text-decoration-none gap-1"
                  style={{ color: '#C8102E', fontSize: '16px', fontWeight: '600' }}
                >
                  <Phone size={18} /> +91 70925-70925
                </a>
                <button
                  className="btn text-white px-4 py-2 w-100"
                  style={{
                    backgroundColor: '#003B73',
                    borderRadius: '25px',
                    fontSize: '16px',
                    fontWeight: '500',
                    border: 'none'
                  }}
                >
                  Post Property
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .hover-bg-light:hover {
          background-color: #f8f9fa;
        }
      `}</style>
    </header>
  );
}
