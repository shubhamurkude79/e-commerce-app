import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  editProfileForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.editProfileForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      dob: [''],
      location: [''],
      alternateMobile: ['', Validators.pattern(/^\d{10}$/)],
    });
  }

  ngOnInit(): void {
    // Mock user data fetched from backend
    this.loadProfileDetails();
  }

  // Load initial profile details
  loadProfileDetails(): void {
    // Replace this with the service call to fetch user data
    const profileData = {
      fullName: 'Shubham Urkude',
      mobile: '8788750945',
      email: 'shubhamurkude79@gmail.com',
      gender: 'MALE',
      dob: '',
      location: '',
      alternateMobile: '',
    };
    this.editProfileForm.patchValue(profileData);
  }

  // Submit the updated profile
  onSubmit(): void {
    if (this.editProfileForm.valid) {
      const updatedProfile = this.editProfileForm.value;
      console.log('Updated Profile:', updatedProfile);
      // Replace with service call to update the profile on the backend
    } else {
      console.log('Form is invalid');
    }
  }
}
