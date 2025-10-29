'use client';
import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, ChevronDown, ChevronUp } from 'lucide-react';

export default function PropertyFooter() {
  const [showMoreCities, setShowMoreCities] = useState(false);
  const [showMoreStates, setShowMoreStates] = useState(false);
  const [showMoreApartments, setShowMoreApartments] = useState(false);
  const [showMoreHouses, setShowMoreHouses] = useState(false);
  const [showMoreNewest, setShowMoreNewest] = useState(false);

  const cities = [
    'Mumbai real estate', 'Delhi real estate', 'Bangalore real estate', 'Hyderabad real estate', 'Chennai real estate',
    'Kolkata real estate', 'Pune real estate', 'Ahmedabad real estate', 'Jaipur real estate', 'Surat real estate',
    'Lucknow real estate', 'Kanpur real estate', 'Nagpur real estate', 'Indore real estate', 'Thane real estate',
    'Bhopal real estate', 'Visakhapatnam real estate', 'Pimpri real estate', 'Patna real estate', 'Vadodara real estate',
    'Ghaziabad real estate', 'Ludhiana real estate', 'Agra real estate', 'Nashik real estate', 'Faridabad real estate',
    'Meerut real estate', 'Rajkot real estate', 'Kalyan real estate', 'Vasai real estate', 'Varanasi real estate',
    'Srinagar real estate', 'Aurangabad real estate', 'Dhanbad real estate', 'Amritsar real estate', ' Mumbai real estate',
    'Allahabad real estate', 'Ranchi real estate', 'Howrah real estate', 'Coimbatore real estate', 'Vijayawada real estate'
  ];

  const states = [
    { state: 'Maharashtra', link: 'Homes for sale' },
    { state: 'Karnataka', link: 'Homes for sale' },
    { state: 'Tamil Nadu', link: 'Homes for sale' },
    { state: 'Telangana', link: 'Homes for sale' },
    { state: 'Gujarat', link: 'Homes for sale' },
    { state: 'Delhi', link: 'Homes for sale' },
    { state: 'Rajasthan', link: 'Homes for sale' },
    { state: 'Uttar Pradesh', link: 'Homes for sale' },
    { state: 'West Bengal', link: 'Homes for sale' },
    { state: 'Madhya Pradesh', link: 'Homes for sale' },
    { state: 'Punjab', link: 'Homes for sale' },
    { state: 'Haryana', link: 'Homes for sale' },
    { state: 'Kerala', link: 'Homes for sale' },
    { state: 'Andhra Pradesh', link: 'Homes for sale' },
    { state: 'Bihar', link: 'Homes for sale' },
    { state: 'Odisha', link: 'Homes for sale' },
    { state: 'Jharkhand', link: 'Homes for sale' },
    { state: 'Chhattisgarh', link: 'Homes for sale' },
    { state: 'Goa', link: 'Homes for sale' },
    { state: 'Uttarakhand', link: 'Homes for sale' },
    { state: 'Himachal Pradesh', link: 'Homes for sale' },
    { state: 'Assam', link: 'Homes for sale' },
    { state: 'Kashmir', link: 'Homes for sale' },
    { state: 'Chandigarh', link: 'Homes for sale' },
    { state: 'Tripura', link: 'Homes for sale' },
    { state: 'Meghalaya', link: 'Homes for sale' },
    { state: 'Manipur', link: 'Homes for sale' },
    { state: 'Nagaland', link: 'Homes for sale' },
    { state: 'Sikkim', link: 'Homes for sale' },
    { state: 'Mizoram', link: 'Homes for sale' }
  ];

  const apartments = [
    'Mumbai apartments for rent', 'Bangalore apartments for rent', 'Pune apartments for rent', 'Hyderabad apartments for rent', 'Chennai apartments for rent',
    'Delhi apartments for rent', 'Gurgaon apartments for rent', 'Noida apartments for rent', 'Kolkata apartments for rent', 'Ahmedabad apartments for rent',
    'Thane apartments for rent', 'Mumbai apartments for rent', 'Ghaziabad apartments for rent', 'Jaipur apartments for rent', 'Lucknow apartments for rent',
    'Chandigarh apartments for rent', 'Indore apartments for rent', 'Bhopal apartments for rent', 'Coimbatore apartments for rent', 'Kochi apartments for rent',
    'Vadodara apartments for rent', 'Nagpur apartments for rent', 'Mysore apartments for rent', 'Visakh apartments for rent', 'Surat apartments for rent',
    'Rajkot apartments for rent', 'Kanpur apartments for rent', 'Patna apartments for rent', 'Ludhiana apartments for rent', 'Agra apartments for rent',
    'Nashik apartments for rent', 'Faridabad apartments for rent', 'Meerut apartments for rent', 'Rajkot apartments for rent', 'Kalyan apartments for rent',
    'Vasai apartments for rent', 'Varanasi apartments for rent', 'Amritsar apartments for rent', 'Allahabad apartments for rent', 'Ranchi apartments for rent'
  ];

  const houses = [
    'Mumbai houses for rent', 'Delhi houses for rent', 'Bangalore houses for rent', 'Pune houses for rent', 'Chennai houses for rent',
    'Hyderabad houses for rent', 'Kolkata houses for rent', 'Ahmedabad houses for rent', 'Jaipur houses for rent', 'Surat houses for rent',
    'Lucknow houses for rent', 'Kanpur houses for rent', 'Nagpur houses for rent', 'Indore houses for rent', 'Thane houses for rent',
    'Bhopal houses for rent', 'Visakhapatnam houses for rent', 'Patna houses for rent', 'Vadodara houses for rent', 'Ghaziabad houses for rent',
    'Ludhiana houses for rent', 'Agra houses for rent', 'Nashik houses for rent', 'Faridabad houses for rent', 'Meerut houses for rent',
    'Rajkot houses for rent', 'Kalyan houses for rent', 'Vasai houses for rent', 'Varanasi houses for rent', 'Amritsar houses for rent',
    'Srinagar houses for rent', 'Aurangabad houses for rent', 'Dhanbad houses for rent', 'Allahabad houses for rent', 'Ranchi houses for rent',
    'Howrah houses for rent', 'Coimbatore houses for rent', 'Vijayawada houses for rent', 'Jodhpur houses for rent', 'Madurai houses for rent'
  ];

  const newestHomes = [
    '101 Worli SeaFace, Mumbai, MH', '45 MG Road, Bangalore, KA', '23 Banjara Hills, Hyderabad, TG', '78 Anna Nagar, Chennai, TN', '56 Koregaon Park, Pune, MH',
    '234 Sector 18, Gurgaon, HR', '89 Park Street, Kolkata, WB', '167 Satellite, Ahmedabad, GJ', '345 Malviya Nagar, Jaipur, RJ', '678 Gomti Nagar, Lucknow, UP',
    '123 Viman Nagar, Pune, MH', '456 Whitefield, Bangalore, KA', '789 Jubilee Hills, Hyderabad, TG', '234 Adyar, Chennai, TN', '567 Andheri West, Mumbai, MH',
    '890 Dwarka, Delhi, DL', '321 Navgpura, Ahmedabad, GJ', '654 Salt Lake, Kolkata, WB', '987 Mansarovar, Jaipur, RJ', '147 Hazratganj, Lucknow, UP',
    '258 Hinjewadi, Pune, MH', '369 Light City, Bangalore, KA', '741 Gachibowli, Hyderabad, TG', '852 Velachery, Chennai, TN', '963 Powai, Mumbai, MH',
    '159 Rohini, Delhi, DL', '357 Vastrapur, Ahmedabad, GJ', '486 New Town, Kolkata, WB', '753 Vaishali Nagar, Jaipur, RJ', '951 Gomti Nagar, Lucknow, UP',
    '741 Baner, Pune, MH', '852 Indiranagar, Bangalore, KA', '963 Kondapur, Hyderabad, TG', '147 T Nagar, Chennai, TN', '258 Bandra, Mumbai, MH',
    '369 Vasant Kunj, Delhi, DL', '456 Bodakdev, Ahmedabad, GJ', '789 Ballygunge, Kolkata, WB', '123 C Scheme, Jaipur, RJ', '234 Alambagh, Lucknow, UP'
  ];

  return (
    <footer className="bg-light border-top">
      {/* Search Sections */}
      <div className="container py-5">
        {/* Search for homes by city */}
        <div className="mb-5">
          <h3 className="h5 fw-bold mb-4">Search for homes by city</h3>
          <div className="row g-3">
            {cities.slice(0, showMoreCities ? cities.length : 30).map((city, index) => (
              <div key={index} className="col-12 col-md-4 col-lg-2">
                <a href="#" className="text-decoration-none" style={{ color: '#007882', fontSize: '14px' }}>
                  {city}
                </a>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowMoreCities(!showMoreCities)}
            className="btn btn-link text-decoration-none d-flex align-items-center mt-3 p-0"
            style={{ color: '#007882', fontSize: '14px', fontWeight: '600' }}
          >
            Show more {showMoreCities ? <ChevronUp size={16} className="ms-1" /> : <ChevronDown size={16} className="ms-1" />}
          </button>
        </div>

        {/* Search for homes by state */}
        <div className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="h5 fw-bold mb-0">Search for homes by state</h3>
            {/* <a href="#" className="text-decoration-none" style={{ color: '#007882', fontSize: '14px' }}>View full list</a> */}
          </div>
          <div className="row g-3">
            {states.slice(0, showMoreStates ? states.length : 30).map((item, index) => (
              <div key={index} className="col-12 col-md-4 col-lg-2">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '4px' }}>
                  <span style={{ fontSize: '14px', color: '#2c2c2c', whiteSpace: 'nowrap' }}>{item.state}</span>
                  <span style={{ fontSize: '14px', color: '#2c2c2c', flexShrink: 0 }}>•</span>
                  <a href="#" className="text-decoration-none" style={{ color: '#007882', fontSize: '14px', whiteSpace: 'nowrap' }}>
                    {item.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowMoreStates(!showMoreStates)}
            className="btn btn-link text-decoration-none d-flex align-items-center mt-3 p-0"
            style={{ color: '#007882', fontSize: '14px', fontWeight: '600' }}
          >
            Show more {showMoreStates ? <ChevronUp size={16} className="ms-1" /> : <ChevronDown size={16} className="ms-1" />}
          </button>
        </div>

        {/* Search for apartments by city */}
        <div className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="h5 fw-bold mb-0">Search for apartments by city</h3>
            {/* <a href="#" className="text-decoration-none" style={{ color: '#007882', fontSize: '14px' }}>View full list</a> */}
          </div>
          <div className="row g-3">
            {apartments.slice(0, showMoreApartments ? apartments.length : 30).map((apartment, index) => (
              <div key={index} className="col-12 col-md-4 col-lg-2">
                <a href="#" className="text-decoration-none" style={{ color: '#007882', fontSize: '14px' }}>
                  {apartment}
                </a>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowMoreApartments(!showMoreApartments)}
            className="btn btn-link text-decoration-none d-flex align-items-center mt-3 p-0"
            style={{ color: '#007882', fontSize: '14px', fontWeight: '600' }}
          >
            Show more {showMoreApartments ? <ChevronUp size={16} className="ms-1" /> : <ChevronDown size={16} className="ms-1" />}
          </button>
        </div>

        {/* Search for houses for rent by city */}
        <div className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="h5 fw-bold mb-0">Search for houses for rent by city</h3>
            {/* <a href="#" className="text-decoration-none" style={{ color: '#007882', fontSize: '14px' }}>View full list</a> */}
          </div>
          <div className="row g-3">
            {houses.slice(0, showMoreHouses ? houses.length : 30).map((house, index) => (
              <div key={index} className="col-12 col-md-4 col-lg-2">
                <a href="#" className="text-decoration-none" style={{ color: '#007882', fontSize: '14px' }}>
                  {house}
                </a>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowMoreHouses(!showMoreHouses)}
            className="btn btn-link text-decoration-none d-flex align-items-center mt-3 p-0"
            style={{ color: '#007882', fontSize: '14px', fontWeight: '600' }}
          >
            Show more {showMoreHouses ? <ChevronUp size={16} className="ms-1" /> : <ChevronDown size={16} className="ms-1" />}
          </button>
        </div>

        {/* Search for the newest homes for sale */}
        <div className="mb-5">
          <h3 className="h5 fw-bold mb-4">Search for the newest homes for sale</h3>
          <div className="row g-3">
            {newestHomes.slice(0, showMoreNewest ? newestHomes.length : 30).map((home, index) => (
              <div key={index} className="col-12 col-md-4 col-lg-2">
                <a href="#" className="text-decoration-none" style={{ color: '#007882', fontSize: '14px' }}>
                  {home}
                </a>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowMoreNewest(!showMoreNewest)}
            className="btn btn-link text-decoration-none d-flex align-items-center mt-3 p-0"
            style={{ color: '#007882', fontSize: '14px', fontWeight: '600' }}
          >
            Show more {showMoreNewest ? <ChevronUp size={16} className="ms-1" /> : <ChevronDown size={16} className="ms-1" />}
          </button>
        </div>
      </div>

      {/* Footer Links and Info */}
      <div className="bg-white border-top">
        <div className="container py-5">
          <div className="row g-4">
            {/* Join us */}
            <div className="col-6 col-md-3">
              <h6 className="fw-bold mb-3">Join us</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>Become an Agent</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>Get referrals</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>Careers</a></li>
              </ul>
              <h6 className="fw-bold mt-4 mb-3">Find homes faster</h6>
              <div className="d-flex flex-column gap-2">
                <a href="#">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/320px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" style={{ height: '40px' }} />
                </a>
                <a href="#">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/320px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" style={{ height: '40px' }} />
                </a>
              </div>
            </div>

            {/* About us */}
            <div className="col-6 col-md-3">
              <h6 className="fw-bold mb-3">About us</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>Why PropertyHub?</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>Community Impact</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>Diversity & Inclusion</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>Life at PropertyHub</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>Press</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>Investors</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>Blog</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>Real Estate News</a></li>
              </ul>
            </div>

            {/* Find us */}
            <div className="col-6 col-md-3">
              <h6 className="fw-bold mb-3">Find us</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>Contact Us</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>Help Center</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>Advertise</a></li>
              </ul>
              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-dark"><Facebook size={20} /></a>
                <a href="#" className="text-dark"><Twitter size={20} /></a>
                <a href="#" className="text-dark"><Youtube size={20} /></a>
                <a href="#" className="text-dark"><Instagram size={20} /></a>
              </div>
              <h6 className="fw-bold mt-4 mb-3">Subsidiaries</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>Rent.</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>ApartmentGuide</a></li>
              </ul>
              <h6 className="fw-bold mt-4 mb-3">Affiliated Business</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>PropertyClose</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>PropertyMortgage</a></li>
              </ul>
              <h6 className="fw-bold mt-4 mb-3">Countries</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>🇮🇳 India</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark" style={{ fontSize: '14px' }}>🇺🇸 United States</a></li>
              </ul>
            </div>

            {/* Legal Info */}
            <div className="col-12 col-md-3">
              <p style={{ fontSize: '12px', color: '#6c757d' }}>
                Copyright © 2025 PropertyHub. All rights reserved.
              </p>
              <p style={{ fontSize: '12px', color: '#6c757d' }}>
                Updated January 2025: By searching, you agree to the <a href="#" style={{ color: '#007882' }}>Terms of Use</a>, and <a href="#" style={{ color: '#007882' }}>Privacy Policy</a>.
              </p>
              <p style={{ fontSize: '12px', color: '#007882' }}>
                <a href="#" className="text-decoration-none" style={{ color: '#007882' }}>Do not sell or share my personal information</a>.
              </p>
              <p style={{ fontSize: '12px', color: '#6c757d', marginTop: '20px' }}>
                PropertyHub and all PropertyHub variants are trademarks of PropertyHub Corporation, registered or pending in India and other countries.
              </p>
              <p style={{ fontSize: '12px', color: '#6c757d' }}>
                PropertyHub is licensed to do business in India as PropertyHub Real Estate.
              </p>
              <p style={{ fontSize: '12px', color: '#6c757d', marginTop: '20px' }}>
                All mortgage lending products and information are provided by Finance Partners LLC | NMLS #3030
              </p>
              <p style={{ fontSize: '12px', color: '#6c757d', marginTop: '20px' }}>
                If you are using a screen reader, or having trouble reading this website, please call PropertyHub Customer Support for help at <strong>1-844-759-7732</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        a:hover {
          opacity: 0.7;
        }
      `}</style>
    </footer>
  );
}