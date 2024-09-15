import { Component, effect, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  HlmAccordionContentComponent, 
  HlmAccordionDirective, 
  HlmAccordionIconDirective, 
  HlmAccordionItemDirective, 
  HlmAccordionTriggerDirective
} from '@spartan-ng/ui-accordion-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'codi-front-sidebar-product',
  standalone: true,
  imports: [
    CommonModule,
    HlmAccordionDirective,
    HlmAccordionItemDirective,
    HlmAccordionTriggerDirective,
    HlmAccordionContentComponent,
    HlmAccordionIconDirective,
    HlmIconComponent
  ],
  templateUrl: './sidebar-product.component.html',
  styleUrl: './sidebar-product.component.scss',
})
export class SidebarProductComponent implements OnInit {

  protected readonly _thirdOpened = signal(false);
  resourceActived: any;

  @Input() product: any;

  constructor() {
    effect(() => {
        console.log(this._thirdOpened());
    });
  }

  ngOnInit(): void {
      
  }

  toggleAccordion() {
    this._thirdOpened.set(!this._thirdOpened());
  }

  selectComponent(value: any) {
    this.resourceActived = value;
  }

  resourceIsActive(resource: any): boolean {
    if (!resource) {
      return false;
    }

    const resourceActiveId = this.resourceActived?.characteristic.find((p: any) => p.name === 'id_ref')?.value;
    const resourceId = resource?.characteristic.find((p: any) => p.name === 'id_ref')?.value;

    return resourceActiveId === resourceId;
  }
}
