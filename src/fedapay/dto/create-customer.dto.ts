export class PhoneNumberDto {
    number: string;
    country: string;
  }
  
  export class CreateCustomerDto {
    firstname: string;
    lastname: string;
    email: string;
    phone_number: PhoneNumberDto;
  }
  