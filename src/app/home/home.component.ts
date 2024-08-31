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
    const galleries = document.querySelectorAll('.image-gallery'); // Get all galleries

    if (galleries.length !== 2) {
      console.error('Expected exactly 2 gallery elements!');
      return;
    }

    const images: ImageCollection = {
      'LK53': [
        'https://www.japan.go.jp/kizuna/_src/7988231/202012_p04-05_03.jpg?v=1721638439767',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK45': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK41': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-20.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ] ,
      'LK42': [
        'https://www.japan.go.jp/kizuna/_src/7988231/202012_p04-05_03.jpg?v=1721638439767',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK43': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK62': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-20.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK12': [
        'https://www.japan.go.jp/kizuna/_src/7988231/202012_p04-05_03.jpg?v=1721638439767',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK11': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK13': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-20.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK31': [
        'https://www.japan.go.jp/kizuna/_src/7988231/202012_p04-05_03.jpg?v=1721638439767',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK32': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK33': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-20.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK52': [
        'https://www.japan.go.jp/kizuna/_src/7988231/202012_p04-05_03.jpg?v=1721638439767',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK51': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK91': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-20.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK82': [
        'https://www.japan.go.jp/kizuna/_src/7988231/202012_p04-05_03.jpg?v=1721638439767',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK92': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK81': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-20.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK22': [
        'https://www.japan.go.jp/kizuna/_src/7988231/202012_p04-05_03.jpg?v=1721638439767',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK72': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK61': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-20.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK71': [
        'https://www.japan.go.jp/kizuna/_src/7988231/202012_p04-05_03.jpg?v=1721638439767',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK23': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK44': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-20.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ],
      'LK21': [
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-204.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://img.freepik.com/premium-photo/beautiful-white-sand-tropical-beack-with-blue-sea-sky_113629-20.jpg',
        'https://wowiwalkers.com/wp-content/uploads/2023/02/Header_Colombo_Sri-Lanka_Blog.jpg',
        'https://bookingcolombo.com/wp-content/uploads/2023/01/jaffna-065.jpg'
      ]

    };

    paths.forEach(path => {
      this.renderer.listen(path, 'mouseenter', () => {
        const id = path.id;

        if (images[id]) {
          // Split images array into two halves
          const midIndex = Math.ceil(images[id].length / 2);
          const firstHalf = images[id].slice(0, midIndex);
          const secondHalf = images[id].slice(midIndex);

          // Clear previous images from both galleries
          galleries.forEach(gallery => gallery.innerHTML = '');

          // Append first half to the first gallery and second half to the second gallery
          firstHalf.forEach(src => {
            const img = this.renderer.createElement('img');
            this.renderer.setAttribute(img, 'src', src);

            this.renderer.appendChild(galleries[0], img);
          });

          secondHalf.forEach(src => {
            const img = this.renderer.createElement('img');
            this.renderer.setAttribute(img, 'src', src);

            this.renderer.appendChild(galleries[1], img);
          });
        }
      });

      this.renderer.listen(path, 'mouseleave', () => {
        galleries.forEach(gallery => {
          gallery.innerHTML = ''; // Optionally clear images on mouse leave
        });
      });

      this.renderer.listen(path, 'click', () => {
        const id = path.id;

        if (images[id]) {
          // Split images array into two halves
          const midIndex = Math.ceil(images[id].length / 2);
          const firstHalf = images[id].slice(0, midIndex);
          const secondHalf = images[id].slice(midIndex);

          // Clear previous images from both galleries
          galleries.forEach(gallery => gallery.innerHTML = '');

          // Append first half to the first gallery and second half to the second gallery
          firstHalf.forEach(src => {
            const img = this.renderer.createElement('img');
            this.renderer.setAttribute(img, 'src', src);
            this.renderer.appendChild(galleries[0], img);
          });

          secondHalf.forEach(src => {
            const img = this.renderer.createElement('img');
            this.renderer.setAttribute(img, 'src', src);
            this.renderer.appendChild(galleries[1], img);
          });
        }
      });
    });
  }
}
