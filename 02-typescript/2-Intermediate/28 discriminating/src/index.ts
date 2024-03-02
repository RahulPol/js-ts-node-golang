type Square = {
  kind: "Square";
  size: number;
};

type Rectangle = {
  kind: "Rectangle";
  width: number;
  height: number;
};

type Shape = Square | Rectangle;

function area(shape: Shape) {
  if (shape.kind === "Square") {
    return shape.size * shape.size;
  }
  if (shape.kind === "Rectangle") {
    return shape.width * shape.height;
  }
}

area({ kind: "Square", size: 2 }); // 4
area({ kind: "Rectangle", width: 2, height: 3 }); // 6

type ValidationSuccess = {
  isValid: true;
  validatedValue: string;
};

type ValidationFailure = {
  isValid: false;
  errorReason: string;
};

type ValidationResult = ValidationSuccess | ValidationFailure;

function logResult(result: ValidationResult) {
  if (result.isValid) {
    console.log("Success, validated value:", result.validatedValue);
  }
  if (result.isValid === false) {
    console.error("Failure, error reason:", result.errorReason);
  }
}
