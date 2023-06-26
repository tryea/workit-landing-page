import React from 'react';

interface SVGProps {
    color?: string;
}

const BottomCurveSVG: React.FC<SVGProps> = ({ color = '#000' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 5">
        <path d="M0,0 C25,5 75,5 100,0 L100,5 L0,5 Z" fill={color} />
    </svg>
);

export default BottomCurveSVG;