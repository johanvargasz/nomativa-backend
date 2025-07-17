import { User as UserFromPrisma } from '../../generated/prisma';

export class User implements UserFromPrisma {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  user_type: string | null;
  password: string | null;
  created_at: Date;
  updated_at: Date;
} 