import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Item {
  id: string;
  value: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  sendWhatsappMessage(text: string): void {
    window.open(`https://wa.me/3106589572?text=${text.replace(/ /g, '%20')}`, '_blank');
  }

  openNewTab(link: string):void{
    window.open(link, '_blank');
  }

}
