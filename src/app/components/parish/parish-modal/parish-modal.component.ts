import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-parish-modal',
  templateUrl: './parish-modal.component.html',
  styleUrls: ['./parish-modal.component.css']
})
export class ParishModalComponent implements ICellRendererAngularComp {
  closeResult = '';
  dioceseId = '';

  constructor(private modalService: NgbModal) {}

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.dioceseId = params.value;
  }
  
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  dioceseFormSubmit(data: any) {
    alert(JSON.stringify(data));
  }
}

