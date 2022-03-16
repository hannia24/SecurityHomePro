import { LayoutComponent } from 'src/app/paginas/layout/layout.component';
import { HomepageComponent } from 'src/app/paginas/homepage/homepage.component';
import { LoginComponent } from 'src/app/paginas/login/login.component';

export const routes = [
  { path: '', component: LoginComponent },
  {
    path: 'history',
    component: LayoutComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: '/modelo1', component: HomepageComponent },
    ],
  },
  //not lazy load components
  { path: '**', redirectTo: 'home-page' },
];
