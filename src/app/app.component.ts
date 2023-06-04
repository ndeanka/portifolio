import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  constructor(private router:Router, private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((val ) => {
      this.jumpTo(val);
    })
      
  }

  jumpTo(Selection: string | null){
    document.getElementById(Selection as string)?.scrollIntoView({behavior: 'smooth'})
  }
}
