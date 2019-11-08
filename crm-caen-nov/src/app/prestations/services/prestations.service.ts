import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
// import { fakePrestations } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  private pCollection: Observable<Prestation[]>;
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private urlApi = environment.urlApi;
  constructor(
    private afs: AngularFirestore,
    private http: HttpClient
    ) {
    // this.collection = fakePrestations;
    this.itemsCollection = afs.collection<Prestation>('prestations');

    this.collection = this.itemsCollection.valueChanges().pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Prestation(obj);
        });
      })
    );

   /*
    this.collection = this.http.get(`${this.urlApi}prestations`).pipe(
        map((tab) => {
          return tab.map((obj) => {
            return new Prestation(obj);
          });
        })
      );
    */
  }

  // get collection
  public get collection(): Observable<Prestation[]> {
    return this.pCollection;
  }

  // set collection
  public set collection(col: Observable<Prestation[]>) {
    this.pCollection = col;
  }

  // add presta
  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    // return this.http.post('urlapi/prestations', item);
  }


  update(item: Prestation, state?: State): Promise<any> {
    const presta = { ...item };
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch('urlapi/prestations/'+item.id, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`urlapi/prestations/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`urlaspi/prestations/${id}`);
  }
}
