import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridComponent } from './library/layout/grid/grid.component';
import { ImageGridComponent } from './library/layout/image-grid/image-grid.component';
import { BadgeComponent } from './library/data-display/badge/badge.component';
import { CarouselComponent } from './library/data-display/carousel/carousel.component';
import { CollapseComponent } from './library/data-display/collapse/collapse.component';
import { ListGroupComponent } from './library/data-display/list-group/list-group.component';
import { ModalComponent } from './library/data-display/modal/modal.component';
import { PopoversComponent } from './library/data-display/popovers/popovers.component';
import { AlertComponent } from './library/feedback/alert/alert.component';
import { PlaceholdersComponent } from './library/feedback/placeholders/placeholders.component';
import { ProgressComponent } from './library/feedback/progress/progress.component';
import { ToastComponent } from './library/feedback/toast/toast.component';
import { ButtonGroupComponent } from './library/forms/button-group/button-group.component';
import { DropdownComponent } from './library/forms/dropdown/dropdown.component';
import { RatingComponent } from './library/forms/rating/rating.component';
import { SliderComponent } from './library/forms/slider/slider.component';
import { SwitchComponent } from './library/forms/switch/switch.component';
import { TextFieldComponent } from './library/forms/text-field/text-field.component';
import { BreadcrumbComponent } from './library/navigation/breadcrumb/breadcrumb.component';
import { NavbarComponent } from './library/navigation/navbar/navbar.component';
import { OffCanvasComponent } from './library/navigation/off-canvas/off-canvas.component';
import { TabsComponent } from './library/navigation/tabs/tabs.component';
import { AccordionComponent } from './library/surfaces/accordion/accordion.component';
import { CardComponent } from './library/surfaces/card/card.component';
import { ButtonComponent } from './library/forms/button/button.component';
import { FormsModule } from '@angular/forms';
import { TablesComponent } from './library/data-display/tables/tables.component';
import { PaginationComponent } from './library/navigation/pagination/pagination.component';
import { ColumnComponent } from './library/data-display/tables/column/column.component';
import { CapitalizeAndSeparatePipe } from './pipes/CapitalizeAndSeparatePipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    BadgeComponent,
    AlertComponent,
    BreadcrumbComponent,
    ButtonGroupComponent,
    CardComponent,
    CarouselComponent,
    CollapseComponent,
    DropdownComponent,
    ListGroupComponent,
    ModalComponent,
    NavbarComponent,
    TabsComponent,
    OffCanvasComponent,
    PlaceholdersComponent,
    PopoversComponent,
    ProgressComponent,
    ToastComponent,
    RatingComponent,
    SliderComponent,
    SwitchComponent,
    TextFieldComponent,
    GridComponent,
    ImageGridComponent,
    ButtonComponent,
    TablesComponent,
    PaginationComponent,
    ColumnComponent,
    CapitalizeAndSeparatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
