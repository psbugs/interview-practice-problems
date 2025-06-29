import React, { useState } from 'react';

// Utility function to evaluate strength level
export const checkPasswordStrength = (value: string): 'level1' | 'level2' | 'level3' | '' => {
  if (!value) return '';

  const lengthValid = value.length >= 8;
  const hasUpper = /[A-Z]/.test(value);
  const hasLower = /[a-z]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasSpecial = /[^A-Za-z0-9]/.test(value);

  if (!lengthValid) return 'level1';

  const passedTests = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;

  if (passedTests <= 2) return 'level1';
  if (passedTests === 3) return 'level2';
  return 'level3';
};

// Map strength levels to messages and colors
const strengthInfo: Record<'level1' | 'level2' | 'level3', { message: string; color: string }> = {
  level1: { message: 'Weak Password', color: 'text-red-600' },
  level2: { message: 'Moderate Password', color: 'text-yellow-500' },
  level3: { message: 'Strong Password', color: 'text-green-600' },
};

const PasswordStrength = () => {
  const [password, setPassword] = useState('');
  const [strengthLevel, setStrengthLevel] = useState<'level1' | 'level2' | 'level3' | ''>('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    setStrengthLevel(checkPasswordStrength(value));
  };

  return (
    <div className="min-h-screen bg-cyan-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Password Strength Checker</h2>
        <input
          type="password"
          value={password}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          onChange={handlePasswordChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
        />

        {strengthLevel && (
          <p className={`mt-3 font-medium ${strengthInfo[strengthLevel].color}`}>
            {strengthInfo[strengthLevel].message}
          </p>
        )}
      </div>
    </div>
  );
};

export default PasswordStrength;
