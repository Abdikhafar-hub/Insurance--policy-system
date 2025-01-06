import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../services/policy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  policies: any[] = [];
  error: string | null = null;

  constructor(private policyService: PolicyService) {}

  ngOnInit(): void {
    this.fetchPolicies();
  }

  fetchPolicies(): void {
    this.policyService.getPolicies().subscribe({
      next: (data) => {
        this.policies = data;
      },
      error: (err) => {
        this.error = 'Failed to load policies';
        console.error(err);
      }
    });
  }
}
