import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();  // child to parent communications ie emits value
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    return this.authService.register(this.model).subscribe(() => {
      console.log('Registration Success');
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancel');
  }

}
