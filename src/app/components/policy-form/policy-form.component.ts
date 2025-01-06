import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PolicyService } from '../../services/policy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy-form',
  standalone: true, // Mark this component as standalone
  imports: [],
  templateUrl: './policy-form.component.html',
  styleUrls: ['./policy-form.component.css']
})
export class PolicyFormComponent implements OnInit {
  policyForm: FormGroup; // Define the form group

  constructor(
    private fb: FormBuilder, // Inject FormBuilder
    private policyService: PolicyService, // Inject PolicyService
    private router: Router // Inject Router
  ) {
    // Initialize the form with validation
    this.policyForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Any initialization logic can go here
  }

  // Handle form submission
  onSubmit(): void {
    if (this.policyForm.valid) {
      this.policyService.addPolicy(this.policyForm.value).subscribe(() => {
        // Navigate back to the dashboard after successful submission
        this.router.navigate(['/']);
      });
    }
  }
}
