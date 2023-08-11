const mainFunction = (str: string) => {
  return (splitBy?: string) => {
    return (joinBy?: string) => {
      const argSplitted = str.split(splitBy ?? "");
      const reversedArr = argSplitted.reverse();
      return reversedArr.join(joinBy ?? "");
    };
  };
};

export const currying = mainFunction("hello")()("-");
