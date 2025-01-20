
import { Component} from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';


@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss'
})

export class CalenderComponent {
  calendarOptions: CalendarOptions = {
    // initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    // weekends: false,
    events: [
      { title: 'event 1', date: '2025-01-05',durationEditable:true },
      { title: 'event 2', date: '2025-01-08',durationEditable:true },
      { title: 'event 3', date: '2025-01-12',durationEditable:true },
      { title: 'event 4', date: '2025-01-19',durationEditable:true },

    ]
  };

  eventsPromise!: Promise<EventInput[]>;
  handleDateClick(arg :any) {
    alert('date click! ' + arg.dateStr)
  }
}




