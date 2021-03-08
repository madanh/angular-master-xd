import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  err = '';
  constructor(
    private _snackBar: MatSnackBar,
  ) { }

  handle(err){
    console.log('HTTP Error', err);
    this.err = err.message;
    this._snackBar.open(this.err, 'DISMISS');
    history.go(-1);
  }
}
