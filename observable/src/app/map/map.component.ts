import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const array1 =  from([1, 2, 3, 4, 5, 6, 7])
    const array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    const obsof2 = of(array1, array2);
    obsof2.subscribe(val => console.log(val),
      error => console.log("error"),
      () => console.log("complete"))
  }



}
