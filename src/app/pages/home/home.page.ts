import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const element = document.querySelector('.backgound-container') as HTMLElement;
    const movementFactor = 10; // move sensibility

    if (element) {
      element.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX / window.innerWidth;
        const mouseY = event.clientY / window.innerHeight;

        const translateX = (mouseX - 0.5) * movementFactor;
        const translateY = (mouseY - 0.5) * movementFactor;

        element.style.backgroundPositionX = `${translateX}px`;
        element.style.backgroundPositionY = `${translateY}px`;
      });
    }
  }



}
