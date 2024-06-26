import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { AlumnosService } from '../../services/alumnos.service';
import { LayoutPageComponent } from '../layout-page/layout-page.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent{
  public map_image = 'https://i.imgur.com/TN3iixl.png';

  constructor(
    private layoutPage: LayoutPageComponent
  ){}

  ngOnInit(): void {
    this.layoutPage.changeHeaderTitle('Inicio');
  }
}
