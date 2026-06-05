import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../pages/HomePage';
import { PortfolioPage } from '../pages/PortfolioPage';
import { ProjectDetailPage } from '../pages/ProjectDetailPage';
import { ContactPage } from '../pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true,           element: <HomePage />          },
      { path: 'portfolio',     element: <PortfolioPage />     },
      { path: 'portfolio/:id', element: <ProjectDetailPage /> },
      { path: 'contact',       element: <ContactPage />       },
    ],
  },
]);
