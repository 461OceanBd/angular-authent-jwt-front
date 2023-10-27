import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private toastr: ToastrService) {}

  paramObject = { positionClass: 'toast-bottom-full-width'};

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title, this.paramObject);
  }

  showError(message: string, title: string) {
    this.toastr.error(message, title, this.paramObject);
  }

  showWarning(message: string, title: string) {
    this.toastr.warning(message, title, this.paramObject);
  }

  showInfo(message: string, title: string) {
    this.toastr.info(message, title, this.paramObject);
  }
}
