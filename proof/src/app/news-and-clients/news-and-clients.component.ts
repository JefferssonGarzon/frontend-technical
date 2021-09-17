import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-and-clients',
  templateUrl: './news-and-clients.component.html',
  styleUrls: ['./news-and-clients.component.sass']
})
export class NewsAndClientsComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    })
  }
}
