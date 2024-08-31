import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { RouterLink } from "@angular/router";

interface ImageCollection {
  [key: string]: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    const paths = document.querySelectorAll('#features path');
    const gallery = document.querySelector('.image-gallery');

    if (!gallery) {
      console.error('Gallery element not found!');
      return;
    }

    const images: ImageCollection = {
      'LK53': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK45': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK41': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg'
      ]
    };

    paths.forEach(path => {
      this.renderer.listen(path, 'mouseenter', () => {
        const id = path.id;

        if (images[id]) {
          gallery.innerHTML = ''; // Clear previous images
          images[id].forEach(src => {
            const img = this.renderer.createElement('img');
            this.renderer.setAttribute(img, 'src', src);
            this.renderer.setStyle(img, 'display', 'block');
            this.renderer.appendChild(gallery, img);
          });
        }
      });

      this.renderer.listen(path, 'mouseleave', () => {
        gallery.innerHTML = ''; // Optionally clear images on mouse leave
      });

      this.renderer.listen(path, 'click', () => {
        const id = path.id;

        if (images[id]) {
          gallery.innerHTML = ''; // Clear previous images
          images[id].forEach(src => {
            const img = this.renderer.createElement('img');
            this.renderer.setAttribute(img, 'src', src);
            this.renderer.setStyle(img, 'display', 'block');
            this.renderer.appendChild(gallery, img);
          });
        }
      });
    });
  }
}
