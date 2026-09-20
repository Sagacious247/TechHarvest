import { AutomationEvent } from "../models/AutomationEvent";

export class WorkflowDispatcher {

  async dispatch(
    event: AutomationEvent
  ) {

    console.log("========== AUTOMATION ==========");

    console.log(event.workflow);

    console.log(event.payload);

    //
    // n8n will be connected here.
    //

    return true;

  }

}