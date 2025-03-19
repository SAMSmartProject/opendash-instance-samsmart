import dayjs from "dayjs";
import {
  max,
  mean,
  min,
  standardDeviation,
  sum,
  variance,
} from "simple-statistics";

interface Pot {
  date: number;
  bounds: PotBound[];
}

interface PotBound {
  start: number;
  end: number;
}

interface Value {
  date: number;
  value: number;
}

type DateUnit = "minute" | "hour" | "day" | "week" | "month" | "year";

type DateUnitGrouped =
  | "minuteOfHour"
  | "hourOfDay"
  | "hourOfWeek"
  | "dayOfWeek"
  | "dayOfMonth"
  | "dayOfYear"
  | "weekOfYear"
  | "monthOfYear";

type AggregationIdentifier =
  | "min"
  | "max"
  | "sum"
  | "stdd"
  | "variance"
  | "mean"
  | "avg"
  | "count";

const SECOND_IN_MS = 1000;
const MINUTE_IN_MS = SECOND_IN_MS * 60;
const HOUR_IN_MS = MINUTE_IN_MS * 60;
const DAY_IN_MS = HOUR_IN_MS * 24;
const WEEK_IN_MS = DAY_IN_MS * 7;

function aggregate(
  aggregation: AggregationIdentifier,
  pots: Pot[],
  values: Value[]
): Value[] {
  const valuesInPots = distributeIntoPots(pots, values);
  const aggregationFunction = resolveAggregationFunction(aggregation);

  return valuesInPots.map((valuePot, i) => ({
    date: pots[i].date,
    value: aggregationFunction(valuePot),
  }));
}

function resolveAggregationFunction(aggregation: AggregationIdentifier) {
  switch (aggregation) {
    case "min":
      return min;
    case "max":
      return max;
    case "sum":
      return sum;
    case "mean":
    case "avg":
      return mean;
    case "stdd":
      return standardDeviation;
    case "variance":
      return variance;
    case "count":
      return (arr) => arr.length;

    default:
      throw new Error(`Unknown parameter aggregation '${aggregation}'`);
  }
}

function distributeIntoPots(pots: Pot[], values: Value[]): number[][] {
  const results: number[][] = [];

  for (let i = 0; i < pots.length; i++) {
    results.push([]);
  }

  for (const { date, value } of values) {
    potsLoop: for (let i = 0; i < pots.length; i++) {
      for (let j = 0; j < pots[i].bounds.length; j++) {
        const { start, end } = pots[i].bounds[j];

        if (start <= date && date <= end) {
          results[i].push(value);
          break potsLoop;
        }
      }
    }
  }

  return results;
}

function createPotsFromSplits(
  start: number,
  end: number,
  splits: number
): Pot[] {
  const diff = end - start;

  const potSize = Math.ceil(diff / splits);

  const result = [];

  let lastEnd = Math.floor(start);

  for (let i = 0; i < splits; i++) {
    const localStart = lastEnd;
    lastEnd = localStart + potSize;

    result.push({
      date: localStart,
      bounds: [
        {
          start: localStart,
          end: lastEnd,
        },
      ],
    });
  }

  return result;
}

function createPotsFromUnit(start: number, end: number, unit: DateUnit): Pot[] {
  let localStart = null;
  let localEnd = start - 1;

  const result = [];

  if (unit === "week") {
    // Fix for dayjs.js to start on monday
    // @ts-ignore
    unit = "isoWeek";
  }

  while (true) {
    localStart = localEnd + 1;
    localEnd = Math.min(dayjs(localStart).endOf(unit), end);

    result.push({
      date: localStart,
      bounds: [
        {
          start: localStart,
          end: localEnd,
        },
      ],
    });

    if (localEnd >= end) {
      break;
    }
  }

  return result;
}

/**
 * date will be the index of the unit instead of an actual date.
 * minuteOfHour, hourOfDay, hourOfWeek start at 0
 * dayOfWeek, dayOfMonth, dayOfYear, weekOfYear, monthOfYear start at 1
 */
function createPotsFromUnitGrouped(
  start: number,
  end: number,
  group: DateUnitGrouped
): Pot[] {
  const unit = _createPotsFromUnitGroupedUnit(group);
  const getIndex = _createPotsFromUnitGroupedIndex(group);

  const result: Record<number, Pot> = {};

  let localStart = null;
  let localEnd = dayjs(start).startOf(unit) - 1;

  const i = 0;

  while (true) {
    localStart = localEnd + 1;
    localEnd = Math.min(dayjs(localStart).endOf(unit), end);

    const index = getIndex(localStart);

    if (!result[index]) {
      result[index] = {
        date: index,
        bounds: [],
      };
    }

    result[index].bounds.push({ start: localStart, end: localEnd });

    if (localEnd >= end) {
      break;
    }
  }

  return Object.values(result);
}

function _createPotsFromUnitGroupedUnit(group: DateUnitGrouped) {
  switch (group) {
    case "minuteOfHour":
      return "minute";
    case "hourOfDay":
    case "hourOfWeek":
      return "hour";
    case "dayOfWeek":
    case "dayOfMonth":
    case "dayOfYear":
      return "day";
    case "weekOfYear":
      return "isoWeek";
    case "monthOfYear":
      return "month";
    default:
      throw new Error(
        `createPotsFromUnitGrouped: Unknown parameter group '${group}'`
      );
  }
}

function _createPotsFromUnitGroupedIndex(
  group: DateUnitGrouped
): (date: number) => number {
  switch (group) {
    case "minuteOfHour":
      return (date: number) => dayjs(date).minute();
    case "hourOfDay":
      return (date: number) => dayjs(date).hour();
    case "hourOfWeek":
      return (date: number) => {
        const hour = dayjs(date).hour();
        const day = dayjs(date).isoWeekday() - 1;
        return day * 24 + hour;
      };
    case "dayOfWeek":
      return (date: number) => dayjs(date).isoWeekday();
    case "dayOfMonth":
      return (date: number) => dayjs(date).date();
    case "dayOfYear":
      return (date: number) => dayjs(date).dayOfYear();
    case "weekOfYear":
      return (date: number) => dayjs(date).isoWeekYear();
    case "monthOfYear":
      return (date: number) => dayjs(date).month();
    default:
      throw new Error(
        `createPotsFromUnitGrouped: Unknown parameter group '${group}'`
      );
  }
}

const aggregation = "mean";
const now = Date.now();
const timerange = WEEK_IN_MS;

// const testValues = Array(timerange / 1000)
//   .fill(null)
//   .map((v, i) => ({ date: now - i * SECOND_IN_MS, value: i }));

// const testPots = createPotsFromSplits(now - timerange, now, 10);
// const testPots = createPotsFromUnit(now - timerange, now, "hour");
const testPots = createPotsFromUnitGrouped(now - timerange, now, "hourOfWeek");

// console.log(testPots);

// console.log(
//   `Aggregate ${testValues.length} values with '${aggregation}' aggregation:`
// );

// const start = Date.now();
// const result = aggregate(aggregation, testPots, testValues);

// console.log(Date.now() - start, "ms");
// console.log(result);
