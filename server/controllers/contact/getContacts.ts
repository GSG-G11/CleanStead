import { RequestHandler } from 'express';
import { getContactsQuery } from '../../queries';

const getContacts: RequestHandler = async (req, res, next) => {
  try {
    const { rows } = await getContactsQuery();
    res.json({ message: 'Successfully retrieved all Contacts', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getContacts;
