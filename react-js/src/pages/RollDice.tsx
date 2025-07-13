import React, { useState } from 'react';
import './styles.css';

function DiceRoller() {
    const [diceValue, setDiceValue] = useState(null);
    const [isRolling, setIsRolling] = useState(false);

    const rollDiceHandler = () => {
        if (isRolling) return; // prevent multiple clicks

        setIsRolling(true);

        // Optional delay to simulate rolling animation
        setTimeout(() => {
            const newValue = Math.floor(Math.random() * 6) + 1;
            setDiceValue(newValue);
            setIsRolling(false);
        }, 1000); // 1 second delay
    };

    return (
        <div className="dice-container">
            <button onClick={rollDiceHandler} disabled={isRolling}>
                {isRolling ? 'Rolling...' : 'Roll Dice'}
            </button>
            {diceValue !== null && <div className="dice-value">🎲 {diceValue}</div>}
        </div>
    );
}

export default DiceRoller;
