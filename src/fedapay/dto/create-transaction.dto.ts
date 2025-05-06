export class CreateTransactionDto {
    description: string;
    amount: number;
    currency: {
      iso: string;
    };
    callback_url: string;
    mode?: string;
    customer: {
      id?: number;
      firstname?: string;
      lastname?: string;
      email?: string;
      phone_number?: {
        number: string;
        country: string;
      };
    };
  }
  