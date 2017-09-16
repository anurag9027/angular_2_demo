import {Component, Output, ViewChild, Input, OnInit} from 'angular2/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'calculator',
    template: `
       <div class="container">
<div class="col-md-3">
  <form class="navbar-form" role="search">
    <div class="input-group add-on">
      <input class="form-control" placeholder="Search"  type="text" #searchText>
      <div class="input-group-btn">
        <button class="btn btn-default" type="submit">
        <i class="glyphicon glyphicon-search"></i></button>
      </div>
    </div>
  </form>
  </div>
  </div>		
        `
})
export class SearchBoxComponent implements OnInit{
    @Input()
    store: Store<any>;

    
    static SearchAction = {
        text: 'SEARCH_CHANGE'
    };



    constructor(private element: ElementRef) {}

    ngOnInit(){
        Observable.fromEvent(this.element.nativeElement, 'keyup')
            .map((e: any) => e.target.value)
            .subscribe((text: string) =>
                this.store.dispatch({
                    type: SearchBoxComponent.SearchAction.text,
                    payload: {
                        text: text
                    }
                })

                
