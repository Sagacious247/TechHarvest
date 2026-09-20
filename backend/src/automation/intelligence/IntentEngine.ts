export enum AIIntent {

  GENERAL_QUESTION = "GENERAL_QUESTION",

  REGISTER = "REGISTER",

  COURSE_RECOMMENDATION = "COURSE_RECOMMENDATION",

  PAYMENT = "PAYMENT",

  CONTACT = "CONTACT",

}

export class IntentEngine {

  detect(message: string): AIIntent {

    const text = message.toLowerCase();

    if (
      text.includes("register") ||
      text.includes("admission") ||
      text.includes("enroll")
    ) {
      return AIIntent.REGISTER;
    }

    if (
      text.includes("course") ||
      text.includes("learn")
    ) {
      return AIIntent.COURSE_RECOMMENDATION;
    }

    if (
      text.includes("pay") ||
      text.includes("payment")
    ) {
      return AIIntent.PAYMENT;
    }

    if (
      text.includes("contact")
    ) {
      return AIIntent.CONTACT;
    }

    return AIIntent.GENERAL_QUESTION;

  }

}