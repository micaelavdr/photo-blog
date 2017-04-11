import { Component } from '@angular/core';
import { Entry } from '../shared/entry.model';
@Component({
    selector: 'app-entry',
    templateUrl: "entry.component.html",
    styleUrls: [ "entry.component.css" ]
})
export class EntryComponent {
    entry: Entry;
}