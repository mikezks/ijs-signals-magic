import { AsyncPipe, DatePipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { injectBookingFeature } from '../../../+state/booking.state';
import { CardComponent } from '../../ui/card.component';
import { FlightFilterComponent } from "../../ui/flight-filter/flight-filter.component";


@Component({
  selector: 'app-flight-search',
  standalone: true,
  // template: '<h2>No Reactive View active!</h2>',
  templateUrl: './search.component.html',
  imports: [
    NgIf, NgFor, DatePipe, JsonPipe, AsyncPipe,
    RouterLink,
    FormsModule,
    CardComponent,
    FlightFilterComponent
  ]
})
export class SearchComponent {
  protected bookingFeature = injectBookingFeature();

  protected from = signal('Paris');
  protected to = signal('London');
  protected urgent = false;
  protected basket: Record<number, boolean> = {
    3: true,
    5: true,
  };
}
