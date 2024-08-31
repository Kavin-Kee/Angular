import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product service/product.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html', ///product component
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  isopen: boolean = false;
  catogreyList:any[]=[];
  cardobj: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": "",
    "userId": 0
  }
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.getALlcatogrey();
  }
  getALlcatogrey(){
    this.product.getCatogrey().subscribe((res:any)=>{
      console.log(res);
      
         this.catogreyList=res.data;
    })
  }
  closeNew() {
    this.isopen = false;
  }
  openNew() {
    this.isopen = true;
  }
}
