import React, { useState } from 'react';

// Define type for the calculated age
interface Age {
    years: number;
    months: number;
    days: number;
}

const AgeCalculator: React.FC = () => {
    const [dob, setDob] = useState<string>('');            // date input as ISO string
    const [age, setAge] = useState<Age | null>(null);      // null when no age calculated
    const [error, setError] = useState<string>('');        // error messages

    const handleAgeCalculator = (): void => {
        setError('');
        setAge(null);

        // Validation: check if date provided
        if (!dob) {
            setError('Please select a date');
            return;
        }

        const currentDate = new Date();
        const birthDate = new Date(dob);

        // Validation: future date check
        if (birthDate > currentDate) {
            setError('Birthdate cannot be in the future');
            return;
        }

        // Calculate age
        let years = currentDate.getFullYear() - birthDate.getFullYear();
        let months = currentDate.getMonth() - birthDate.getMonth();
        let days = currentDate.getDate() - birthDate.getDate();

        // Adjust negative days
        if (days < 0) {
            const prevMonthDays = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                0
            ).getDate();
            days += prevMonthDays;
            months--;
        }

        // Adjust negative months
        if (months < 0) {
            months += 12;
            years--;
        }

        setAge({ years, months, days });
    };

    return (
        <div className="container">
            <h2 className="title">Age Calculator</h2>

            <label
                htmlFor="birthdate"
                data-testid="label-birthdate"
                className="label"
            >
                Enter/Select a birthdate:
            </label>

            <input
                data-testid="input-birthdate"
                id="birthdate"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="input-date"
                placeholder="Enter/Select a birthdate"
            />

            <button
                data-testid="btn-calculate"
                className="btn-calc"
                onClick={handleAgeCalculator}
            >
                Calculate Age
            </button>

            {error && (
                <p data-testid="error-msg" className="error-msg">
                    {error}
                </p>
            )}

            {age && !error && (
                <p data-testid="age-result" className="age-result">
                    {`${age.years} years, ${age.months} months, ${age.days} days`}
                </p>
            )}
        </div>
    );
};

export default AgeCalculator;
