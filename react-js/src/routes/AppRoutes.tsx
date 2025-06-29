// routes/AppRoutes.tsx
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from '../layout/MainLayout';
import ButtonToggle from '../pages/ButtonToggle';

const ChipsInput = lazy(() => import('../pages/ChipsInput'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        </Route>
        <Route path="chips-input" element={<ChipsInput />} />
        <Route path="button-toggle" element={<ButtonToggle />} />
      </Routes>
    </Suspense>
  );
}
