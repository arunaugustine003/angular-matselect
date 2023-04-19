import { Component, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { MusicService } from "./service/music.service";

export interface Food {
  value: string;
  viewValue: string;
}
export interface Music{
  userId: number;
  id: number;
  title: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "matselect";
  patientCategory!: FormGroup;
  corporateForm!: FormGroup;
  listAlbum!: any;
  albumSelected!: string;
  selectedValue!: string;

  patientCategories = [
    {
      id: 1,
      name: "name 1",
      description: "description 1",
    },
    {
      id: 2,
      name: "name 2",
      description: "description 2",
    },
  ];

  foods: Food[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" },
  ];
  constructor(private fb: FormBuilder, private musicService: MusicService) {}


  ngOnInit() {
    this.loadAlbums();
    this.patientCategory = this.fb.group({
      patientCategory1: ["", Validators.required],
    });
    this.corporateForm = this.fb.group({
      corporateUserGroupNames: ["", Validators.required],
    });

    const toSelect = this.patientCategories.find((c) => c.id == 2);
    this.patientCategory.get("patientCategory1")!.setValue(toSelect);

    const toSelect2 = this.listAlbum.find((x:Music) => x.id == 2);
    this.corporateForm.get("corporateUserGroupNames")!.setValue(toSelect2);


  }

  private loadAlbums() {
    this.musicService.getAlbum().subscribe((data) => {
      this.listAlbum = data;
      console.log("Albums Loaded", this.listAlbum);
    });
  }
}
