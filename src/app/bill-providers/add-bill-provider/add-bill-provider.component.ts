import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bill-provider',
  templateUrl: './add-bill-provider.component.html',
  styleUrls: ['./add-bill-provider.component.css']
})
export class AddBillProviderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  save() {
    console.log("Saving provider");
    this.router.navigate(['bill-providers']);
  }

}
