export class InListUtil {

  public static inputToArrayConverter(value: string): Array<string> {
    const inputArray = value.trim().split('\n');
    return inputArray
      .map((item) => {
      return item.trim();
    }).filter((item) => {
      if (item) { return item; }
    });
  }

}
