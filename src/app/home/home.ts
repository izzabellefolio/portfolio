import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  imageUrl: string = 'assets/DSD_4681.JPG';
  name: string = 'Izza Belle';
  occupation: string = 'An Aspiring Developer';
  motto: string = 'To become who you want to be, you must let go of who you were.';

  // Skills preview
  skills: string[] = ['Angular', 'JavaScript', 'Bootstrap', 'UI/UX Design'];

  // Fun facts section
  funFacts = [
    {
      icon: 'fa-solid fa-mug-hot',
      color: 'text-warning',
      title: 'Coffee Lover',
      desc: 'Fueled by coffee for late-night coding and design sessions.'
    },
    {
      icon: 'fa-solid fa-music',
      color: 'text-primary',
      title: 'Music Enthusiast',
      desc: 'I enjoy exploring different genres while working or relaxing.'
    },
    {
      icon: 'fa-solid fa-gamepad',
      color: 'text-success',
      title: 'Gamer',
      desc: 'Gaming helps me recharge and stay creative.'
    },
    {
      icon: 'fa-solid fa-plane',
      color: 'text-danger',
      title: 'Traveler',
      desc: 'I love discovering new places and cultures whenever possible.'
    },
    {
      icon: 'fa-solid fa-book',
      color: 'text-info',
      title: 'Learner',
      desc: 'Always curious and eager to explore new skills and knowledge.'
    }
  ];
}
