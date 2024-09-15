/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarProductComponent } from "../sidebar-product/sidebar-product.component";
import diagnostic from '../../../../../../../public/diagnostic.json';
import { HlmAccordionDirective } from '@spartan-ng/ui-accordion-helm';

@Component({
  selector: 'codi-front-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarProductComponent, HlmAccordionDirective],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {

  diagnostic: any = diagnostic

  ngOnInit(): void {
    console.log(this.diagnostic);
  }

}
