import {
  mockFormData,
  mockFormDataEmpty,
} from "../../../__tests__/__mocks__/formData";
import { validateInput } from "../validateInput";

describe("validateInput", () => {
  it("should return true when input is empty", () => {
    const result = validateInput(mockFormDataEmpty);

    expect(result).toBe(true);
  });
  it("should return undefined when input is filled", () => {
    const result = validateInput(mockFormData);
    expect(result).toBe(undefined);
  });
});
