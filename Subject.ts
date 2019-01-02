import { Book } from "./Book";

export class Subject {
  subjectId: number;
  subtitle: string;
  durationInHours: number;
  references: Set<Book>;
  }