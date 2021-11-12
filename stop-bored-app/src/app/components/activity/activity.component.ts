import { Component, OnInit, Input } from '@angular/core';
import { Activity } from 'src/app/Activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {
  activitys: Activity[] = [];
  @Input()
  ngfor: (any & any[]) | (any & Iterable<any>);

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.activityService
      .getActivitys()
      .subscribe((activitys) => (this.activitys = activitys));
  }
}
