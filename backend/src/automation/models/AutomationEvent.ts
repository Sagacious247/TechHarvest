import { WorkflowType } from "../workflow/WorkflowTypes";

export interface AutomationEvent {

  workflow: WorkflowType;

  payload: Record<string, any>;

}