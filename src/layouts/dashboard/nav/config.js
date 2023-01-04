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
    title: 'Utilisateurs',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Produits',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Connexion',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Blogs',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
];

export default navConfig;
