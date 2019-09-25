import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleDocumentClick(docId) {
    console.log(docId);
    // this.router.navigate(['/enterdata/' + docId]);
    // window.open(window.location.origin + `/enterdata/${docId}`, '_self');
  }

}
