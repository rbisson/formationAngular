import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  public form: FormGroup;
  private init = new Client();
  public states = StateClient;
  @Output() nItem: EventEmitter<any> = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      name: [
        this.init.name,
        Validators.required
      ],
      email: [
        this.init.email,
        Validators.required
      ],
      state: [this.init.state],
    });
  }

  onSubmit() {
    this.nItem.emit(this.form.value);
  }
}

