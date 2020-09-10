import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';

const NgZorroMaterialComponents = [
  NzPageHeaderModule,
  NzMenuModule,
  NzIconModule,
  NzLayoutModule,
  NzCarouselModule,
  NzGridModule,
  NzDividerModule,
  NzCardModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroMaterialComponents
  ],
  exports:[NgZorroMaterialComponents]
})
export class NgzorroModule { }
