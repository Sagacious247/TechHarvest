import crypto from "crypto";

import { ExecutionContext } from "./ExecutionContext";

export class ExecutionContextFactory {

  static create(

    agent: string,

    tenantId: string,

    userId?: string

  ): ExecutionContext {

    return {

      tenantId,

      userId,

      agent,

      traceId: crypto.randomUUID(),

    };

  }

}