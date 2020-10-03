import { ID, guid } from "@datorama/akita";

// interface to define types of element for student
export interface Student {
  id: ID;
  name: string;
  sex: "Male" | "Female";
  standard: number;
  quarterlyScore: number;
  halfyearlyScore: number;
  annualScore: number;
}

export function createStudent({
  name = "",
  standard = null,
  sex = null,
  quarterlyScore = 0,
  halfyearlyScore = 0,
  annualScore = 0,
}: Partial<Student>): Student {
  return {
    //guid() method is used to generate a unique id
    id: guid(),
    name,
    sex,
    standard,
    quarterlyScore,
    halfyearlyScore,
    annualScore,
  };
}
