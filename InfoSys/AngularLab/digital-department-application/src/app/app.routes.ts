import { Routes } from '@angular/router';
// компоненты, которые сопоставляются с маршрутами
import {GreetComponent} from "./greet/greet.component";
import {AboutComponent} from "./about/about.component";
import {GroupComponent} from "./group/group.component";
import { FormUnsavedGuard } from './guards/form-unsaved.guard';

export const routes: Routes = [
    { path: "greet", component: GreetComponent},
    { path: "about", component: AboutComponent},
    { path: "group", component: GroupComponent, canDeactivate: [FormUnsavedGuard] },
    { path: "group/:groupNumber", component: GroupComponent, canDeactivate: [FormUnsavedGuard] },
    { path: "**", redirectTo: "/greet", pathMatch:"full"}
  ];
