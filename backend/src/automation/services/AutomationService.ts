import { WorkflowDispatcher } from "../workflow/WorkflowDispatcher";
import { AutomationEvent } from "../models/AutomationEvent";

export class AutomationService {

  private dispatcher =
    new WorkflowDispatcher();

  async execute(
    event: AutomationEvent
  ) {

    return this.dispatcher.dispatch(
      event
    );

  }

}