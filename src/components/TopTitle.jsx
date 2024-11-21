import React, { useEffect } from 'react';

const TopTitle = ({ title }) => {
    useEffect(() => {
        document.title = `${title} Fun Pro Games`;
    }, [title]);

    return null;
};

export default TopTitle;
