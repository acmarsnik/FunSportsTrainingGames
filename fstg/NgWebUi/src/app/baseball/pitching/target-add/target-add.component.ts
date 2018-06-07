import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-target-add',
  templateUrl: './target-add.component.html',
  styleUrls: ['./target-add.component.css']
})
export class TargetAddComponent implements OnInit {
  
  inputForm: FormGroup;
  score: number;

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.inputForm.setValue({scoreInput: 0})
  }

  ngOnInit() {
  }

  createForm() {
    this.inputForm = this.fb.group({
      scoreInput: [0, [Validators.required, Validators.min(0), Validators.max(10)]]
    });
  }

  onSubmit(){
    this.score = this.inputForm.value.scoreInput;
    
  }

  printScore(){
    console.log('score: ', this.score);
  }

}
