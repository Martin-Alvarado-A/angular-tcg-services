import { Component, Input, inject } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  private loggingService?: LoggingService; // <- must be added
  private accountService?: AccountService;

  constructor() {
    this.loggingService = inject(LoggingService);
    this.accountService = inject(AccountService);
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
  }
}
