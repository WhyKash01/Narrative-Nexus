import React from 'react';
import './loader.css';

export default function Loading() {
    
    // You can add any UI inside Loading, including a Skeleton.
    return <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
      <div className="loader">
    <div className="cell d-0"></div>
    <div className="cell d-1"></div>
    <div className="cell d-2"></div>
  
    <div className="cell d-1"></div>
    <div className="cell d-2"></div>
    
    
    <div className="cell d-2"></div>
    <div className="cell d-3"></div>
    
    
    <div className="cell d-3"></div>
    <div className="cell d-4"></div>
    
    
  </div>
    </div>
  }