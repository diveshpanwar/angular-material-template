import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-commondialog',
  templateUrl: './commondialog.component.html',
  styleUrls: ['./commondialog.component.css']
})
export class CommondialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CommondialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
