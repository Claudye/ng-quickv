import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QvSubmitDirective } from './directives/qv-submit.directive';
import { QvMessagesDirective } from './directives/qv-messages.directive';
import { SubmitDirective } from './directives/submit.directive';
import { QuickvDirective } from './directives/quickv.directive';
import { QvFeedbackDirective } from './directives/qv-feedback.directive';
import { QvRulesDirective } from './directives/qv-rules.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    QvRulesDirective,
    QuickvDirective,
    QvFeedbackDirective,
    QvSubmitDirective,
    QvMessagesDirective,
    SubmitDirective,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    QvRulesDirective,
    QuickvDirective,
    QvFeedbackDirective,
    QvSubmitDirective,
    QvMessagesDirective,
    /** Components  */
  ],
})
export class QuickvModule {}
