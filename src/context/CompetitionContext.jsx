import React, { createContext, useContext, useState } from 'react';
import { MOCK_COMPETITIONS } from '../mocks/data';

const CompetitionContext = createContext();

export const CompetitionProvider = ({ children }) => {
    const [competitions, setCompetitions] = useState(MOCK_COMPETITIONS);

    const addCompetition = (newComp) => {
        const compWithId = {
            ...newComp,
            id: competitions.length + 1,
            status: 'Upcoming', // Default status
            participants: 0,
            image: 'https://images.unsplash.com/photo-1544161515-4af6b1d8d179?q=80&w=1200' // Default image
        };
        setCompetitions([compWithId, ...competitions]);
    };

    return (
        <CompetitionContext.Provider value={{ competitions, addCompetition }}>
            {children}
        </CompetitionContext.Provider>
    );
};

export const useCompetitions = () => useContext(CompetitionContext);
