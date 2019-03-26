import { Component, OnInit } from '@angular/core';
import { OpportunityService } from '../opportunity.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-panel-negotiation',
  templateUrl: './panel-negotiation.component.html',
  styleUrls: ['./panel-negotiation.component.css']
})
export class PanelNegotiationComponent implements OnInit {

  opportunity = {};
  opportunities = [];

  constructor(
    private service: OpportunityService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.list();
  }

  list(){
    return this.service.list()
      .subscribe(response => this.opportunities = <any>response);
  }

  save(){
    this.service.save(this.opportunity)
      .subscribe(() => {
        this.opportunity = {};
        this.list();

        this.messageService.add({
          severity: 'success',
          summary: 'Add succefully'
        })
      },
      response => {

        this.messageService.add({
          severity: 'error',
          summary: response.error.message
        });
      }
      );
  }

}
