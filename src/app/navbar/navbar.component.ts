import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  texts: string[] = [
    'เพลิดเพลินไปกับส่วนลด 10% บน Nike App: ใช้โค้ด APP10',
    'สไตล์ใหม่ลดราคา: ลดสูงสุดถึง 40%',
    'เคลื่อนไหว เลือกซื้อ ออกแบบเอง และเฉลิมฉลองไปกับเรา',
    'จัดส่งฟรีแบบมาตรฐาน & คืนสินค้าฟรี 30 วัน'
  ];

  texts2: string[] = [
    'ดาวน์โหลดเลยตอนนี้',
    'ช้อปสินค้าใหม่ทั้งหมดที่ลดราคาของเรา',
    'มาร่วมกับเรา',
    'ดูรายละเอียด'
  ];

  currentIndex: number = 0;
  currentText: string = this.texts[this.currentIndex];
  currentText2: string = this.texts2[this.currentIndex];

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      this.currentText = this.texts[this.currentIndex];
      this.currentText2 = this.texts2[this.currentIndex];
    }, 5000);
  }
}
