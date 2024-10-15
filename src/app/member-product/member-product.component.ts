import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-member-product',
  templateUrl: './member-product.component.html',
  styleUrls: ['./member-product.component.css']
})
export class MemberProductComponent {
  @ViewChild('productContainer') productContainer!: ElementRef;

  leftDisabled = true;  
  rightDisabled = false;

  products = [
    { scr: 'assets/images/member-products/M-1.png', title: 'สินค้าสำหรับ Member', info: 'สิทธิ์เข้าถึงสุดเอ็กซ์คลูชีฟ', btn: 'เลือกซื้อ' },
    { scr: 'assets/images/member-products/M-2.png', title: 'Nike By You', info: 'บริการออกแบบเองสำหรับคุณ', btn: 'ออกแบบเอง' },
    { scr: 'assets/images/member-products/M-3.png', title: 'Member Rewards', info: 'วิธีการขอบคุณของเรา', btn: 'เฉลิมฉลอง' },
    { scr: 'assets/images/member-products/M-4.png', title: 'Member Days', info: 'เฉลิมฉลองให้กับคุณ', btn: 'ดูเพิ่มเติม' },
    { scr: 'assets/images/member-products/M-5.png', title: 'แอพกีฬาและสุขภาวะ', info: 'การเคลื่อนไหวที่เหมาะกับคุณ', btn: 'เคลื่อนไหว' },
    { scr: 'assets/images/member-products/M-6.png', title: 'SNKRS', info: 'ที่สุดแห่งชุมชนคนรักสนีกเกอร์', btn: 'ดูข้อมูล' }
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
