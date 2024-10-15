import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-classic-products',
  templateUrl: './classic-products.component.html',
  styleUrls: ['./classic-products.component.css']
})
export class ClassicProductsComponent {
  @ViewChild('productContainer') productContainer!: ElementRef;


  leftDisabled = true;  
  rightDisabled = false; 

  products = [
    { src: 'assets/images/classic-products/C-1.png', alt: 'Cortez' },
    { src: 'assets/images/classic-products/C-2.png', alt: 'KillShot' },
    { src: 'assets/images/classic-products/C-3.png', alt: 'Field General' },
    { src: 'assets/images/classic-products/C-4.png', alt: 'Pegasus 41' },
    { src: 'assets/images/classic-products/C-5.png', alt: 'Vomero' },
    { src: 'assets/images/classic-products/C-6.png', alt: 'V2K' },
    { src: 'assets/images/classic-products/C-7.png', alt: 'Vaporfly' },
    { src: 'assets/images/classic-products/C-8.png', alt: 'Dunks' },
    { src: 'assets/images/classic-products/C-9.png', alt: 'Air Force 1' }
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

