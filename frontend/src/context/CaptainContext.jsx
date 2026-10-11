import React from 'react'
import { createContext,useState,useContext } from 'react';

export const CaptainDataContext = createContext();

export const useCaptain=()=>{
    const context = useContext(CaptainContext);
    if(!context){
        throw new Error('usecaptain must be used within a CaptainProvider');
    }
    return context;
}


const CaptainContext = ({children}) => {
    const [captain,setCaptain] =useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [error, seterror] = useState(null);
    
    const updateCaptain = (captainData)=>{
        setCaptain(captainData);
    }
    const value = {
        captain,
        setCaptain,
        isLoading,
        setisLoading,
        error,
        seterror,
        updateCaptain

    }
  return (
    <div>
      <CaptainDataContext.Provider value = {value}>
        {children}
        </CaptainDataContext.Provider>
    </div>
  )
}

export default CaptainContext
