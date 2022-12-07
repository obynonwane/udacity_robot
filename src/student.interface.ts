interface Student {
  name: string;
  readonly age: number;
  height: string;
}

interface Person extends Student {
  married: boolean;
}
export { Student, Person };
