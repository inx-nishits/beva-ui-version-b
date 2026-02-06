import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderV2 from '../components/HeaderV2';

const GuestLayoutV2 = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <HeaderV2 />
            <main className="flex-1">
                <div className="v2-container v2-section">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default GuestLayoutV2;
