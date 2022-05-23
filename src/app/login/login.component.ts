import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isExist: boolean = false;
  constructor(private lgs: LoginService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.isExist);
    this.isExist = false;
    this.lgs.checkEmail(this.loginForm.value.email).subscribe((res) => {
      const str = "users" as string;
      const json = res[str as keyof typeof res];
      const jsonParse = JSON.parse(JSON.stringify(json));
      for (const key in jsonParse) {
        if (jsonParse[key].email == this.loginForm.value.email) {
          this.isExist = true;
        }
      }
      if (this.isExist == false) {
        this.lgs.addEmail(this.loginForm.value.email).subscribe();
      }
    });
  }
}
