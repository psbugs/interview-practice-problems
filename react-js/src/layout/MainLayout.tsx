// src/layout/MainLayout.tsx
import { Outlet, Link, useLocation } from 'react-router-dom';
import './MainLayout.css'; // Optional for scoped styling
import { navLinks } from '../utils/common-constants';

export default function MainLayout() {
  const location = useLocation();

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        {navLinks.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            style={{
              textDecoration: 'none',
              color: '#333',
              border: location.pathname === path ? '2px solid #007bff' : '1px solid #ccc',
              padding: '1rem',
              borderRadius: '12px',
              width: '150px',
              textAlign: 'center',
              background: '#f9f9f9',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}
          >
            {label}
          </Link>
        ))}
      </div>

      <div style={{ padding: '1rem', background: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}>
        <Outlet />
      </div>
    </div>
  );
}
