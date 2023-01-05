import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import MagazinesPage from './pages/MagazinePage';
import BooksPage from './pages/BooksPage';
import DiversPage from './pages/DiversPage';
import DashboardAppPage from './pages/DashboardAppPage';
import ArtOne from './pages/Articles/Art1';
import ArtTwo from './pages/Articles/Art2';
import ArtThree from './pages/Articles/Art3';
import ArtFour from './pages/Articles/Art4';
import ArtFive from './pages/Articles/Art5';
import ArtSix from './pages/Articles/Art6';
import ArtSeven from './pages/Articles/Art7';
import ArtEight from './pages/Articles/Art8';
import ArtNine from './pages/Articles/Art9';
import ArtTen from './pages/Articles/Art10';
import GlobalView from './pages/Contacts/GlobalView';
import SingleView from './pages/Contacts/SingleView';
import PostView from './pages/Contacts/PostView';
import UpdateView from './pages/Contacts/UpdateView';
import DeleteView from './pages/Contacts/DeleteView';
import LogicielsPage from './pages/LogicielPage';

// ----------------------------------------------------------------------
export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'magazines', element: <MagazinesPage /> },
        { path: 'books', element: <BooksPage /> },
        { path: 'divers', element: <DiversPage /> },
        { path: 'logiciels', element: <LogicielsPage /> },
        { path: 'blog', element: <BlogPage />},
      ],
    },
    {
      path: 'blog',
      element: <BlogPage />,
    },
    {
      path: 'artOne',
      element: <ArtOne />,
    },
    {
      path: 'artTwo',
      element: <ArtTwo />,
    },
    {
      path: 'artThree',
      element: <ArtThree />,
    },
    {
      path: 'artFour',
      element: <ArtFour />,
    },
    {
      path: 'artFive',
      element: <ArtFive />,
    },
    {
      path: 'artSix',
      element: <ArtSix />,
    },
    {
      path: 'artSeven',
      element: <ArtSeven />,
    },
    {
      path: 'artEight',
      element: <ArtEight />,
    },
    {
      path: 'artNine',
      element: <ArtNine />,
    },
    {
      path: 'artTen',
      element: <ArtTen />,
    },
    
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app"/>, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404"/> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
    {
      path: 'globalView',
      element: <GlobalView />,
      children: [
        {element: <Navigate to="/globalView"/>, index: true},
          {path: 'singleContact', element: <SingleView/>},
          {path: 'postView', element: <PostView/>},
          {path: 'updateView', element: <UpdateView/>},
          {path: 'deleteView', element: <DeleteView/>}
      ]
    },
  ]);

  return routes;
}






// {
//     path: 'contacts',
//     element: <ContactsLayout />,
//     children: [
//       {element: <Navigate to="/globalView"/>, index: true},
//       {path: 'singleContact', element: <SingleView/>},
//       {path: 'postView', element:   <PostView/>},
//       {path: 'updateView', element: <UpdateView/>},
//       {path: 'deleteView', element: <DeleteView/>},
//     ]
//   }


// {
//   path: 'articles',
//   element: <ArticleLayaout />,
//   children: [
//     {element: <Navigate to="/blog"/>, index: true},
//     {path: 'artOne',   element: <ArtOne/>},
//     {path: 'artTwo',   element: <ArtTwo/>},
//     {path: 'artThree', element: <ArtThree/>},
//     {path: 'artFour',  element: <ArtFour/>},
//     {path: 'artFive',  element: <ArtFive/>},
//     {path: 'artSix',   element: <ArtSix/>},
//     {path: 'artSeven', element: <ArtSeven/>},
//     {path: 'artEight', element: <ArtEight/>},
//     {path: 'artNine',  element: <ArtNine/>},
//     {path: 'artTen',   element: <ArtTen/>},
//   ]
// },