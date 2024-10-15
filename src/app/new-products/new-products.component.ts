import { Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent {
  @ViewChild('productContainer') productContainer!: ElementRef;

  leftDisabled = true;  
  rightDisabled = false; 

  products = [
    { src: 'assets/images/new-products/NP-1.png', title: 'Nike Cortez Leather', info: 'รองเท้าผู้ชาย', price: '฿3,200'},
    { src: 'assets/images/new-products/NP-2.png', title: 'Nike Air Max Dn SE', info: 'รองเท้า', price: '฿6,300'},
    { src: 'assets/images/new-products/NP-3.png', title: 'Nike Air Rift SE', info: 'รองเท้าผู้หญิง', price: '฿4,700'},
    { src: 'assets/images/new-products/NP-4.png', title: 'Nike V2K Run GORE-TEX', info: 'รองเท้ากันน้ำผู้หญิง', price: '฿5,700'},
    { src: 'assets/images/new-products/NP-5.png', title: 'Nike Tech Hera', info: 'รองเท้าผู้หญิง', price: '฿4,300'},
    { src: 'assets/images/new-products/NP-6.png', title: 'Nike Zoom Pegasus 41', info: 'รองเท้าวิ่งโร้ดรันนิ่งผู้ชาย', price: '฿5,400'},
    { src: 'assets/images/new-products/NP-7.png', title: 'Nike Air Force 1 07', info: 'รองเท้าผู้หญิง', price: '฿4,300'},
    { src: 'assets/images/new-products/NP-8.png', title: 'Nike Sportswear Classic Womens', info: 'กางเกงขาสั้นเอวปานกลางผู้หญิง', price: '฿1,400'},
    { src: 'assets/images/new-products/NP-9.png', title: 'Nike Cygnal', info: 'รองเท้าผู้ชาย', price: '฿6,600'},
    { src: 'assets/images/new-products/NP-10.png', title: 'Nike Court Shot', info: 'รองเท้าผู้ชาย', price: '฿2,700'}
  ]

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
