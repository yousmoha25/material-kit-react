// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ArticleNavConfig = [
  
  {
    title: 'artOne',
    path: '/dashbord/blog/artOne',
    icon: icon('ic_blog'),
  },
  {
    title: 'artTwo',
    path: '/dashbord/blog/artOne',
    icon: icon('ic_blog'),
  }, 
  {
    title: 'artThree',
    path: '/dashbord/blog/artOne',
    icon: icon('ic_blog'),
  },
  {
    title: 'artFour',
    path: '/dashbord/blog/artFour',
    icon: icon('ic_blog'),
  },
  {
    title: 'artFive',
    path: '/dashbord/blog/artFive',
    icon: icon('ic_blog'),
  },
  {
    title: 'artSix',
    path: '/dashbord/blog/artSix',
    icon: icon('ic_blog'),
  },
  {
    title: 'artSeven',
    path: '/dashbord/blog/artSeven',
    icon: icon('ic_blog'),
  },
  {
    title: 'artEight',
    path: '/dashbord/blog/artEight',
    icon: icon('ic_blog'),
  },
  {
    title: 'artNine',
    path: '/dashbord/blog/artNine',
    icon: icon('ic_blog'),
  },
  {
    title: 'artTen',
    path: '/dashbord/blog/artTen',
    icon: icon('ic_blog'),
  },
];

export default ArticleNavConfig;
