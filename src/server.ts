import express, { Request, Response } from 'express';

const app = express();
const PORT = 3131
app.use(express.json());

interface User {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

interface TransformedUser {
  name: string;
  age: number;
  email: string;
  birthYear: number;
}

const transformUser = (user: User): TransformedUser => {
const { firstName, lastName, age, email } = user;

  if (
    typeof firstName !== 'string' ||
    typeof lastName !== 'string' ||
    typeof age !== 'number' ||
    typeof email !== 'string'
  ) {
    throw new Error('Invalid user data');
  }

  if (!firstName || !lastName || !age || !email) throw new Error('Missing user data');

  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;

  const transformedUser: TransformedUser = {
    name: `${firstName} ${lastName}`,
    age,
    email,
    birthYear,
  };

  return transformedUser;
}

app.post('/transform', (req: Request, res: Response) => {
  try {
    const users: User[] = req.body;
    const transformedUsers = users.map((user) => transformUser(user));

    res.json(transformedUsers);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
