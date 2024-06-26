import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { LayoutPageComponent } from '../layout-page/layout-page.component';

@Component({
  templateUrl: './notifications-page.component.html',
  styles: ``
})
export class NotificationsPageComponent {
  constructor(
    private layoutPage: LayoutPageComponent
  ){}

  ngOnInit(): void {
    this.layoutPage.changeHeaderTitle('Notificaciones');
  }

  public notifications = [
    { title: 'Cambio de ruta', msg: 'Accidente registrado sobre Av. Gabriel Leyva, se ha cambiado la ruta habitual.', time: '7:40 a.m.' },
    { title: 'Retraso de llegada', msg: 'Problema técnico presentado en el camión', time: '6:40 a.m.' },
    { title: 'Suspensión de ruta', msg: 'Debido a la situación climatológica se ha suspendido el servicio de transporte.', time: '6:00 a.m.' },
    { title: 'Cambio de ruta', msg: 'Accidente registrado sobre Av. Gabriel Leyva, se ha cambiado la ruta habitual.', time: '7:40 a.m.' },
    { title: 'Retraso de llegada', msg: 'Problema técnico presentado en el camión', time: '6:40 a.m.' },
    { title: 'Suspensión de ruta', msg: 'Debido a la situación climatológica se ha suspendido el servicio de transporte.', time: '6:00 a.m.' }
  ]
}
