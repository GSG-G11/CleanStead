import { RequestHandler } from 'express';
import { getBookMonthQuery } from '../../queries';
import { CustomizedError } from '../../utils';

const getBookMonth: RequestHandler = async (req, res, next) => {
  try {
    const { rows } = await getBookMonthQuery();
    const days = rows.map(({ day }) => day);
    const freqMap = new Map();
    const size = days.length;

    for (let i = 0; i < size; i += 1) {
      if (freqMap.has(days[i])) {
        freqMap.set(days[i], freqMap.get(days[i]) + 1);
      } else {
        freqMap.set(days[i], 1);
      }
    }
    const daysForMonth:any = [];
    const numberOfRequest:any = [];
    if (!freqMap.size) {
      throw new CustomizedError(400, 'There is no book for this day');
    }
    freqMap.forEach((value, key) => {
      daysForMonth.push(key);
      numberOfRequest.push(value);
    });
    res.json({
      message: 'Successfully retrieved all books for this month', status: 200, daysForMonth, numberOfRequest,
    });
  } catch (error) {
    next(error);
  }
};

export default getBookMonth;
