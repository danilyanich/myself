import { Routes, Route } from 'react-router-dom';

import { HomePage } from './Home';
import { NotFoundPage } from './NotFound';

export function Pages() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
