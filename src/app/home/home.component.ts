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
  logoPath: string = 'assets/images/your-logo.png';  // Path to your logo
  address: string = '123 Your Address, Your City, Your Country';
  telephone: string = '+123-456-7890';
  email: string = 'contact@yourdomain.com';
  hotline: string = '+123-456-7891';

  // Social Media Links
  facebookLink: string = 'https://facebook.com/yourprofile';
  twitterLink: string = 'https://twitter.com/yourprofile';
  instagramLink: string = 'https://instagram.com/yourprofile';

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
        'https://airlinescrewtours.com/wp-content/uploads/2022/09/Lotus-Tower-2.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/The_landmark_Nelum_Pokuna_%28Lotus_Pond%29_Mahinda_Rajapaksa_Theatre.JPG/300px-The_landmark_Nelum_Pokuna_%28Lotus_Pond%29_Mahinda_Rajapaksa_Theatre.JPG',
        'https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/04/28184326/Planetarium-official-website.jpg',
        'https://qph.cf2.quoracdn.net/main-qimg-85b662fb59c9a46f1b00fbb6accb2b2c-pjlq',
        'https://bmkltsly13vb.compat.objectstorage.ap-singapore-1.oraclecloud.com/cdn.sg.dailymirror.lk/assets/uploads/image_1e8ce37b7e.jpg',
        'https://www.sundaytimes.lk/230423/uploads/P1-Galle-face_21042023_B05_CMY.jpg'
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
        'https://do6raq9h04ex.cloudfront.net/sites/8/2021/07/galle-fort-1050x700-1.jpg',
        'https://www.bestoflanka.com/images/slider/best-things-to-do-in-sri-lanka/beach-destinations-sri-lanka/beach-galle-sri-lanka/01.jpg',
        'https://www.arabiers.lk/resources/guides/images/galle/talpebeach-3.png',
        'https://www.myhautelife.com/wp-content/uploads/2017/05/7thingstodoinbentota57.jpg',
        'https://digitaltravelcouple.com/wp-content/uploads/2020/01/hikkaduwa-beach-drone-1.jpg',
        'https://www.reddottours.com/uploads/Activities/Ariyapala-Mask-Museum/Ariyapala-Mask-Museum-header.jpg'
      ],
      'LK32': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Paravi_dupatha.jpg/1024px-Paravi_dupatha.jpg',
        'https://mahaweli.lk/wp-content/uploads/2022/12/Star-Fort-in-Matara-1140x530.jpg',
        'https://dayouting.lk/img_uploads/tourist-places/3433171672735502.jpg',
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
