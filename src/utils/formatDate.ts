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
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
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
      return `${months[date.getMonth()]}, ${date.getFullYear()}`;
    }
    case "dayMonthAndYear": {
      return `${date.getDate() + 1} de ${
        months[date.getMonth()]
      }, ${date.getFullYear()}`;
    }
    default: {
      throw new Error(`Unsupported typeOfAnswer: ${typeOfAnswer}`);
    }
  }
};
