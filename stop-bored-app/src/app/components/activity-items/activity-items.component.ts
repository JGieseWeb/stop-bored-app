import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/Activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity-items',
  templateUrl: './activity-items.component.html',
  styleUrls: ['./activity-items.component.css'],
})
export class ActivityItemsComponent implements OnInit {
  @Input() activity!: Activity;
  constructor() {}

  ngOnInit(): void {}
}
