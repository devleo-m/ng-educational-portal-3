import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroAlunoComponent } from './pages/cadastro-aluno/cadastro-aluno.component';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { DisciplinasComponent } from './pages/disciplinas/disciplinas.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cadastrar',
    component: CadastroAlunoComponent
  },

  {
    path: 'alunos',
    children: [
      {
        path: '',
        component: AlunosComponent
      },
      {
        path: ':id/editar',
        component: CadastroAlunoComponent
      }
    ]
  },
  {
    path: 'disciplinas',
    component: DisciplinasComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
