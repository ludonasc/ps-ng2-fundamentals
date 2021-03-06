import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'

@Component({
    templateUrl: 'app/events/events-list.component.html',
})
export class EventsListComponent implements OnInit {
    events: any

    constructor(private route: ActivatedRoute, private eventService: EventService, private toastrService: ToastrService) {
    }

    ngOnInit() {
       this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName) {
        this.toastrService.success(eventName);
    }
}