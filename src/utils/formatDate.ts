type typeOfAnswerTypes = {
  typeOfAnswer:
    | "day"
    | "month"
    | "year"
    | "dayAndMonth"
    | "dayAndYear"
    | "monthAndYear"
    | "dayMonthAndYear";
};
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const formattedDate = (
  date: Date,
  { typeOfAnswer }: typeOfAnswerTypes
) => {
  switch (typeOfAnswer) {
    case "day": {
      return date.getDate();
    }
    case "month": {
      return date.getMonth() + 1;
    }
    case "year": {
      return date.getFullYear();
    }
    case "dayAndMonth": {
      return `${date.getDate()}/${date.getMonth() + 1}`;
    }
    case "dayAndYear": {
      return `${date.getDate()}/${date.getFullYear()}`;
    }
    case "monthAndYear": {
      return `${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    case "dayMonthAndYear": {
      return `${date.getDate()} de ${
        months[date.getMonth()]
      }, ${date.getFullYear()}`;
    }
    default: {
      throw new Error(`Unsupported typeOfAnswer: ${typeOfAnswer}`);
    }
  }
};
