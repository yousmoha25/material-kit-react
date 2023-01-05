// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Accueil',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Articles',
    path: '/dashboard/blog',
    icon: icon(''),
  },
  {
    title: 'Magazines',
    path: '/dashboard/magazines',
    icon: icon('ic_cart'),
  },
  {
    title: 'Logiciels ',
    path: '/dashboard/logiciels',
    icon: icon('ic_cart'),
  },
  {
    title: 'Livres ',
    path: '/dashboard/books',
    icon: icon('ic_cart'),
  },
  {
    title: 'Divers ',
    path: '/dashboard/divers',
    icon: icon('ic_cart'),
  },
  {
    title: 'Utilisateurs',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Connexion',
    path: '/login',
    icon: icon('ic_lock'),
  },
  
  
];

export default navConfig;
