declare var bootstrap: any;

import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements AfterViewInit {

  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;

  ngAfterViewInit() {};

  closeNavbar() {
    const collapseEl = this.navbarCollapse.nativeElement;
    const bsCollapse = new bootstrap.Collapse(collapseEl, { toggle: false });
    bsCollapse.hide();
  };
}