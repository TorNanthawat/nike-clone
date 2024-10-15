import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent {
  @ViewChild('productContainer') productContainer!: ElementRef;

  leftDisabled = true; 
  rightDisabled = false;

  details = [
    { src: 'assets/images/FD-1.png', title: 'รับข่าวสารล่าสุดเกี่ยวกับการวิ่ง', btn: 'เรียนรู้เพิ่มเติม'},
    { src: 'assets/images/FD-2.png', title: 'สินค้ามาใหม่: P-6000', btn: 'เลือกซื้อเลย'},
    { src: 'assets/images/FD-3.png', title: 'Nike Pegasus 41 GORE-TEX', btn: 'เลือกซื้อเลย'},
    { src: 'assets/images/FD-4.png', title: 'EasyOn', btn: 'เลือกซื้อเลย'}
  ]

  scrollRight() {
    const container = this.productContainer.nativeElement;
    const scrollAmount = container.offsetWidth; // เลื่อนตามความกว้างของคอนเทนเนอร์

    container.scrollBy({ left: scrollAmount, behavior: 'smooth' }); // เลื่อนขวา

    setTimeout(() => {
      this.checkScroll(); // ตรวจสอบการเลื่อน
    }, 300); 
  }

  scrollLeft() {
    const container = this.productContainer.nativeElement;
    const scrollAmount = container.offsetWidth; // เลื่อนซ้ายตามความกว้าง

    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

    setTimeout(() => {
      this.checkScroll(); 
    }, 300);
  }

  checkScroll() {
    const container = this.productContainer.nativeElement;
    
    // ตรวจสอบว่ามีการเลื่อนไปสุดซ้ายหรือขวาหรือไม่ เพื่อเปิด/ปิดการใช้งานปุ่ม
    this.leftDisabled = container.scrollLeft <= 0;
    this.rightDisabled = container.scrollLeft + container.offsetWidth >= container.scrollWidth;
  }
}
