import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-iteminformationlist',
  templateUrl: './iteminformationlist.component.html',
  styleUrls: ['./iteminformationlist.component.css']
})
export class IteminformationlistComponent extends BaseListCtl implements OnInit {

  public form = {
   error: false,
   message: null,
   preload: {
     ItemInformationList: [] 
    
   },
   data: { id: null },
  
   searchParams: {
  
     title:'',
     overview:'',
     purchessDate: '',
     catagoryId: null, 
     cost:''
     
   },
   searchMessage: null,
   list: [],
   pageNo: 0
 };



 constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
   super(locator.endpoints.ITEMINFORMATION, locator, route);
 }

 ngOnInit() {
   super.ngOnInit();
 }


 validateNumericInput(event: KeyboardEvent) {
     
   const str = event.key ;
   console.log(str);
   if (!/^\d$/.test(str)) {
     event.preventDefault();
   }
 }
 
 validateAlphabetInput(event: KeyboardEvent) {
   console.log(event);
   const str = event.key ;
   
   console.log(str);
   if (!/^[a-zA-Z\s]*$/.test(str)) {
     event.preventDefault();
   }
 }

 submit() {
  
   this.form.pageNo = 0;
   
   this.search();
 }



 search() {
  
   this.form.searchMessage = null;
   
   super.search();
 }
}
