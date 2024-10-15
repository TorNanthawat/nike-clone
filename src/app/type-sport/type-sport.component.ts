import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-type-sport',
  templateUrl: './type-sport.component.html',
  styleUrls: ['./type-sport.component.css']
})
export class TypeSportComponent {
  @ViewChild('productContainer') productContainer!: ElementRef;


  leftDisabled = true;  
  rightDisabled = false; 

  products = [
    { src: 'assets/images/type-sport/TS-1.png', alt: 'การวิ่ง', title: 'การวิ่ง' },
    { src: 'assets/images/type-sport/TS-2.png', alt: 'ฟุตบอล', title: 'ฟุตบอล' },
    { src: 'assets/images/type-sport/TS-3.png', alt: 'เทรนนิ่ง', title: 'เทรนนิ่ง' },
    { src: 'assets/images/type-sport/TS-4.png', alt: 'ยิมและเทรนนิ่ง', title: 'ยิมและเทรนนิ่ง' },
    { src: 'assets/images/type-sport/TS-5.png', alt: 'เทนนิส', title: 'เทนนิส' },
    { src: 'assets/images/type-sport/TS-6.png', alt: 'โยคะ', title: 'โยคะ' },
    { src: 'assets/images/type-sport/TS-7.png', alt: 'สเก็ตบอร์ด', title: 'สเก็ตบอร์ด' },
    { src: 'assets/images/type-sport/TS-8.png', alt: 'เต้น', title: 'เต้น' }
  ];


  scrollRight() {
    const container = this.productContainer.nativeElement;
    const scrollAmount = container.offsetWidth; 

    container.scrollBy({ left: scrollAmount, behavior: 'smooth' }); 

    setTimeout(() => {
      this.checkScroll(); 
    }, 300); 
  }

  scrollLeft() {
    const container = this.productContainer.nativeElement;
    const scrollAmount = container.offsetWidth; 

    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

    setTimeout(() => {
      this.checkScroll(); 
    }, 300);
  }

  checkScroll() {
    const container = this.productContainer.nativeElement;
    this.leftDisabled = container.scrollLeft <= 0;
    this.rightDisabled = container.scrollLeft + container.offsetWidth >= container.scrollWidth;
  }
}

