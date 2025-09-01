import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  imagePFP: string = 'assets/20250513_2330161.jpg';

  name = 'IZZA BELLE LELIS';
  idNum = '20187239'
  age = 20;
  gender = 'Female';
  dateBirth = 'March 18, 2005';
  placeBirth = 'Angeles City, Pampanga';
  contactNo = '0920 203 0675';
  address2600 = '162-I HillValley Apartment, Parisas Street, Camp-7, Kennon Road';

  skills = [
  { 
    icon: 'fa-brands fa-angular',
    color: 'text-pink',
    title: 'Angular', 
    desc: 'Experienced in building dynamic, responsive, and scalable web apps with Angular framework.'
  },
  { 
    icon: 'fa-brands fa-js',
    color: 'text-warning', // 🟡 yellow
    title: 'JavaScript', 
    desc: 'Strong knowledge of JavaScript ES6+, enabling interactive and efficient web functionality.'
  },
  { 
    icon: 'fa-brands fa-bootstrap',
    color: 'text-primary',
    title: 'Bootstrap', 
    desc: 'Skilled in using Bootstrap for fast, mobile-first, and visually appealing UI development.'
  },
  { 
    icon: 'fa-solid fa-pencil-ruler',
    color: 'text-info',
    title: 'UI/UX Design', 
    desc: 'Focused on creating user-friendly, visually engaging designs for optimal user experience.'
  },
  { 
    icon: 'fa-solid fa-person-running',
    color: 'text-success',
    title: 'Dancing', 
    desc: 'Expressive and disciplined in movement arts, bringing creativity and energy to performances.'
  },
  { 
    icon: 'fa-solid fa-paintbrush',
    color: 'text-purple',
    title: 'Drawing & Painting', 
    desc: 'Creative in both traditional and digital mediums, with a focus on detail and expression.'
  },
  { 
    icon: 'fa-solid fa-bullseye',
    color: 'text-secondary', 
    title: 'Archery', 
    desc: 'Practices focus, precision, and discipline through the sport of archery.'
  },
  { 
    icon: 'fa-solid fa-palette',
    color: 'text-danger-emphasis',
    title: 'Graphic Design', 
    desc: 'Proficient with Adobe Photoshop and Illustrator for creating professional visual designs.'
  },
  { 
    icon: 'fa-solid fa-video',
    color: 'text-orange',
    title: 'Video Editing', 
    desc: 'Experienced with Adobe Premiere Pro, CapCut, and DaVinci Resolve for creative video storytelling.'
  }
];

funFacts = [
  {
    icon: 'fa-solid fa-ice-cream',
    color: 'text-pinkpurp',
    title: 'Ice Cream Enthusiast',
    desc: 'I can eat ice cream any time of the day — even for breakfast 🍦.'
  },
  {
    icon: 'fa-solid fa-mountain-sun',
    color: 'text-pinkpurp',
    title: 'Explorer at Heart',
    desc: 'I love hiking, traveling, and discovering the wonders of nature 🌍.'
  },
  {
    icon: 'fa-solid fa-palette',
    color: 'text-pinkpurp',
    title: 'Creative Soul',
    desc: 'From sketching to collages, I enjoy bringing ideas to life through art 🎨.'
  }
];

hobbies = [
  { title: 'Cafe Hopping', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=200&q=80' },
  { title: 'Hiking & Trails', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=200&q=80' },
  { title: 'Pilates & Yoga', image: 'https://images.unsplash.com/photo-1583454110551-21a0ff9f9f43?auto=format&fit=crop&w=200&q=80' },
  { title: 'Sketching', image: 'https://images.unsplash.com/photo-1581091215367-1b1e4cda65f7?auto=format&fit=crop&w=200&q=80' },
  { title: 'Photography', image: 'https://images.unsplash.com/photo-1519183071298-a2962f7f9c5d?auto=format&fit=crop&w=200&q=80' }
];


}
