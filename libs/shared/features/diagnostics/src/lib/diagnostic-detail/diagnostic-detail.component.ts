import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '@codi-front/shared/components/sidebar';

@Component({
  selector: 'codi-front-diagnostic-detail',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent
  ],
  templateUrl: './diagnostic-detail.component.html',
  styleUrl: './diagnostic-detail.component.scss'
})
export class DiagnosticDetailComponent {}
