import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui

import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';

// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Tableau de bord | Mag'jeux </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Bienvenue chez Mag'jeux
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
           
          <Link href='/Contacts/GlobalView' underline="none">
            {<AppWidgetSummary title="Contacts" total={767} color="info" icon={'ant-design:contacts-twotone'} />}
          </Link>
            </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <Link href='/Contacts/GlobalView' underline="none">
          {<AppWidgetSummary title="Articles" total={120} color="info" icon={'ooui:article-ltr'} />}
        </Link>
          
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            
            <Link href='/Contacts/GlobalView' underline="none">
          {<AppWidgetSummary title="Logiciels" total={5} color="info" icon={'eos-icons:software'} />}
            </Link>
            </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <Link href='/Contacts/GlobalView' underline="none">
          {<AppWidgetSummary title="Ventes annuelles" total={5} color="info" icon={'ep:sold-out'} />}
            </Link>
         
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <Link href='/Contacts/GlobalView' underline="none">
          {<AppWidgetSummary title="Commandes annuelles" total={41584} color="info" icon={'ic:baseline-shopping-cart-checkout'} />}
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <Link href='/Contacts/GlobalView' underline="none">
          {<AppWidgetSummary title="Publicités réalisés" total={30} color="info" icon={'mdi:speak'} />}
            </Link>          
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Variation des visites du site"
              subheader="(+43%) en moyenne chaque année"
              chartLabels={[
                '01/01/2022',
                '02/02/2023',
                '03/01/2024',
                '04/01/2025',
                '05/01/2026',
                '06/01/2027',
                '07/01/2028',
                '08/01/2029',
                '09/01/2030',
                '10/01/2031',
                '11/01/2032',
              ]}
              chartData={[
                {
                  name: 'Blogs',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, ],
                },
                {
                  name: 'Article',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 37, 43, 21, 41, 56, 27, 50],
                },
                {
                  name: 'Inscriptions',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 60],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Clientèle internationale"
              chartData={[
                { label: 'Amérique', value: 4344 },
                { label: 'Asie', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Afrique', value: 4443 },
                { label: 'Australie', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Clientèle par pays"
              subheader="(+30%) chaque année"
              chartData={[
                { label: 'Italie', value: 400 },
                { label: 'Japon', value: 430 },
                { label: 'Asie', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 2390 },
                { label: 'Allemagne', value: 580 },
                { label: 'Sud Afrique', value: 690 },
                { label: 'Nerlande', value: 1100 },
                { label: 'Etats Unis', value: 1200 },
                { label: 'Grande Bretagne', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Jeux présentés"
              chartLabels={['Paris Hippiques', 'Paris Sportifs', 'Jeux de casino', 'Jeux Turfs', 'Jeux de tirages', 'Autres']}
              chartData={[
                { name: '1er quadrant', data: [80, 50, 30, 40, 100, 20] },
                { name: '2nd quadrant', data: [20, 30, 40, 80, 20, 80] },
                { name: '3ème quadrant', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="Sujets de blogs abordés"
              list={[...Array(10)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                URL : 'http',
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Ventes annuelles réalisées"
              list={[...Array(12)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Total annuel 2022 : 41 584 commandes, pour 97 200 €',
                  'Total annuel 2021 : 31 369 commandes, pour 57 3400 €',
                  'Total annuel 2020 : 11 538 commandes, pour 37 680 €',
                  'Commendes de l\'année en cours (2022)',
                  '1983 commandes, pour 4420 €',
                  '1227 commandes, pour 4200 €',
                  '2227 commandes, pour 7220 €',
                  '3027 commandes, pour 4220 €',
                  '6227 commandes, pour 17 220 €',
                  '2083 commandes, pour 4520 €',
                  '2327 commandes, pour 4600 €',
                  '2627 commandes, pour 7720 €',
                  '4327 commandes, pour 4820 €',
                  '6257 commandes, pour 17 920 €',
                  '3045 commandes, pour 4120 €',
                  '6227 commandes, pour 16 220 €',
                ][index],
                type: `order${index + 2}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Les abonnées des réseaux sociaux"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Activités réalisés par Mag'jeux"
              list={[
                { id: '1', label: 'Etablir une liste des contacts' },
                { id: '2', label: 'Rédiger les articles' },
                { id: '3', label: 'Ventes livres de jeux' },
                { id: '4', label: 'Vente des logiciels dejeux ' },
                { id: '5', label: 'Donner des conseils aux clients' },
                { id: '6', label: 'Ventes livres d\'autres sujets' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
