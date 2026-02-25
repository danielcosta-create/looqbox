export const toSelectOptions = (data: readonly string[]) => {
  return data.map((range) => ({
    label: range,
    value: range,
  }));
};
