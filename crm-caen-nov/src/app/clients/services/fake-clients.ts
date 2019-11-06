import { Client } from 'src/app/shared/models/client';

export const fakeClients: Client[] = [
  new Client({
    id: 'a',
    name: 'CAPGEMINI',
    email: 'capgemini@gmail.com'
  }),
  new Client({
    id: 'b',
    name: 'CNAF',
    email: 'cnaf@gmail.com'
  }),
];
