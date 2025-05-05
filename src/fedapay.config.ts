import { FedaPay } from 'fedapay';

export function configureFedaPay() {
  FedaPay.setApiKey(process.env.FEDAPAY_SECRET_KEY || '');
  FedaPay.setEnvironment(process.env.FEDAPAY_ENV || 'sandbox');
}
