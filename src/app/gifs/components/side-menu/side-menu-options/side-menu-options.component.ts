import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifListComponent } from "../gif-list/gif-list.component";
import { GifService } from 'src/app/gifs/services/gifs.service';
import { NgIf, KeyValuePipe } from "@angular/common";

interface MenuOption{
  label: string;
  subLabel: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuOptionsComponent {


  gifService = inject(GifService);


  menuOptions: MenuOption[]=[
    {
    icon: 'fa-solid fa-chart-line',
    label: 'Trending',
    subLabel: 'Gifs Populares',
    route: '/dashboard/trending',
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    label: 'Buscador',
    subLabel: 'Buscar Gifs',
    route: '/dashboard/search',
  }
  ]



}
