import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from '../users/users.component';
import {UserComponent} from '../users/user/user.component';
import {HomeComponent} from '../home/home.component';
import {ServersComponent} from '../servers/servers.component';
import {ServerComponent} from '../servers/server/server.component';
import {EditServerComponent} from '../servers/edit-server/edit-server.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {AuthGuardService} from '../auth-guard.service';
import {CanDeactiveGuard} from '../servers/edit-server/can-deactivate-guard';
import {ErrorPageComponent} from '../error-page/error-page.component';

const appRoutes: Routes = [
  {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ]},
  {path: '' , component: HomeComponent},
  {path: 'servers', canActivateChild: [AuthGuardService] , component: ServersComponent, children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/:string', component: EditServerComponent, canDeactivate: [CanDeactiveGuard]}
    ]},
  // {path: 'not-found', component: NotFoundComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'}},
  {path: '**', redirectTo: 'not-found'}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
