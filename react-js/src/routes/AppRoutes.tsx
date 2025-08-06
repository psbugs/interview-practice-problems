// AppRoutes.tsx
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from '../layout/MainLayout';
import { navLinks } from '../utils/common-constants';

const componentMap: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  ChipsInput: lazy(() => import('../pages/ChipsInput')),
  ButtonToggle: lazy(() => import('../pages/ButtonToggle')),
  ProgressBar: lazy(() => import('../pages/ProgressBar')),
  UserProfile: lazy(() => import('../pages/UserProfile')),
  PasswordStrength: lazy(() => import('../pages/PasswordStrength')),
  ArrayZigZag: lazy(() => import("../pages/ArrayZigZag")),
  ContactForm: lazy(() => import("../pages/ContactForm")),
  FaqAccordian: lazy(() => import("../pages/FaqAccordian")),
  DebouncingExample: lazy(() => import("../pages/DebouncingExample")),
  Accordian: lazy(() => import("../pages/Accordian"))
};

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {navLinks.map((link) => {
            const Component = componentMap[link.componentKey];
            return <Route key={link.path} path={link.path} element={<Component />} />;
          })}
        </Route>
      </Routes>
    </Suspense>
  );
};