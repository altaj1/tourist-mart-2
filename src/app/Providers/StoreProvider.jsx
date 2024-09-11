'use client'
import makeStore from '@/lib/store/store';
import { SessionProvider } from 'next-auth/react';
import React, { useRef } from 'react';
import { Provider } from 'react-redux';

const StoreProvider = ({children}) => {
    const storeRef = useRef();
    if (!storeRef.current) {
        storeRef.current = makeStore();      
    }
    return <SessionProvider><Provider store={storeRef.current}>{children}</Provider></SessionProvider> 
};

export default StoreProvider;