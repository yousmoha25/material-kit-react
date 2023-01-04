// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const contactsNavConfig = [
  {
    title: 'GlobalView',
    path: '/GlobalView',
    
  },
  {
    title: 'postView',
    path: '/GlobalView/postView',
   
  },
  {
    title: 'updateView',
    path: '/GlobalView/updateView',
    icon: icon('ic_blog'),
  },
  {
    title: 'singleContact',
    path: '/GlobalView/singleContact',
    
  },
  {
    title: 'deleteView',
    path: '/GlobalView/deleteView',
  },
];

export default contactsNavConfig;
