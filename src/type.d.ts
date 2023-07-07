interface DefaultAttributes {
  _id?: string;
  deletedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface ISubscriber extends DefaultAttributes {
  type: string;
  email: string;
  fullName: string;
  isActive: boolean;
}

interface IAdmin extends DefaultAttributes {
  email: string;
  fullName: string;
  password: string;
  isActive: boolean;
}

interface IMail extends DefaultAttributes {
  date: Date;
  sent: boolean;
  content: string;
  subject: string;
  subscriptionType: string;
}
