import { Injectable } from '@angular/core';
import { BillProvider } from './bill-provider';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BillProvidersService {

  constructor(private firestoreDB: AngularFirestore) { }

  getBillProviders(): Observable<BillProvider[]>  {
    return this.firestoreDB.collection<BillProvider>('bill-providers').valueChanges();
  }
}
