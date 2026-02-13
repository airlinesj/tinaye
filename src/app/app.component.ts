import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('800ms 0.3s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  showLanding = true;
  showProposal = false;
  currentMemoryIndex = 0;
  autoPlayVideo = false;

  memories = [
    {
      type: 'image',
      src: 'assets/WhatsApp Image 2026-02-08 at 16.33.04.jpeg',
      caption: '💕 Our First Memory Together'
    },
    {
      type: 'image',
      src: 'assets/WhatsApp Image 2026-02-08 at 16.33.04(1).jpeg',
      caption: '🌹 Beautiful Moments'
    },
    {
      type: 'image',
      src: 'assets/WhatsApp Image 2026-02-08 at 16.33.05.jpeg',
      caption: '✨ Magical Times With You'
    },
    {
      type: 'image',
      src: 'assets/WhatsApp Image 2026-02-08 at 16.33.05(1).jpeg',
      caption: '💖 Forever Cherished'
    },
    {
      type: 'video',
      src: 'assets/WhatsApp Video 2026-02-08 at 16.33.15.mp4',
      poster: 'assets/WhatsApp Image 2026-02-08 at 16.33.04.jpeg',
      caption: '🎬 Our Special Video Moments'
    },
    {
      type: 'video',
      src: 'assets/WhatsApp Video 2026-02-08 at 16.37.32.mp4',
      poster: 'assets/WhatsApp Image 2026-02-08 at 16.33.05.jpeg',
      caption: '🎥 More Beautiful Memories'
    }
  ];

  ngOnInit() {
    // Landing page shows for 3 seconds, then auto-transitions
    setTimeout(() => {
      this.showLanding = false;
      this.showProposal = true;
    }, 3500);
  }

  enterProposal() {
    this.showLanding = false;
    this.showProposal = true;
  }

  nextMemory() {
    this.currentMemoryIndex = (this.currentMemoryIndex + 1) % this.memories.length;
  }

  prevMemory() {
    this.currentMemoryIndex = (this.currentMemoryIndex - 1 + this.memories.length) % this.memories.length;
  }

  currentMemory() {
    return this.memories[this.currentMemoryIndex];
  }
}
