export class StringUtils {
  static splitString(string: string, separator: string) {
    return string.split(separator);
  }

  static splitName(name: string) {
    const [firstName, ...rest] = this.splitString(name, " ");
    const lastName = rest.pop() ?? "";
    const middleName = rest.join(" ") ?? "";

    const middleNameInitial = middleName[0] ? middleName[0].toUpperCase() : "";
    const middleNameInitials = middleName
      .split(" ")
      .map((n) => n[0] ?? "")
      .join(" ");

    return {
      firstName,
      middleName,
      middleNameInitial,
      middleNameInitials,
      lastName,
    };
  }
}
