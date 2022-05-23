import { RequestHandler } from 'express';
import { getBookDayQuery } from '../../queries';
import { CustomizedError } from '../../utils';

const getBookDay: RequestHandler = async (req, res, next) => {
  try {
    const { rows } = await getBookDayQuery();
    const hours = rows.map(({ hour }) => hour);
    const freqMap = new Map();
    const size = hours.length;

    for (let i = 0; i < size; i += 1) {
      if (freqMap.has(hours[i])) {
        freqMap.set(hours[i], freqMap.get(hours[i]) + 1);
      } else {
        freqMap.set(hours[i], 1);
      }
    }
    const hoursForDay:any = [];
    const numberOfRequest:any = [];
    if (!freqMap.size) {
      throw new CustomizedError(400, 'There is no book for this day');
    }
    freqMap.forEach((value, key) => {
      hoursForDay.push(key);
      numberOfRequest.push(value);
    });
    res.json({
      message: 'Successfully retrieved all books for today', status: 200, hoursForDay, numberOfRequest,
    });
  } catch (error) {
    next(error);
  }
};

export default getBookDay;
