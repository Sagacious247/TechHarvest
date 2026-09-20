export interface ExecutionContext {

  /**
   * Multi-tenancy
   */
  tenantId: string;

  /**
   * Logged in user
   */
  userId?: string;

  /**
   * AI Conversation
   */
  conversationId?: string;

  /**
   * Agent currently handling the request
   */
  agent: string;

  /**
   * Current session
   */
  sessionId?: string;

  /**
   * User role
   */
  role?: string;

  /**
   * Trace ID
   * Used for debugging and analytics.
   */
  traceId: string;

  /**
   * Additional metadata
   */
  metadata?: Record<string, unknown>;

}