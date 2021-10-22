export const getElapsedMins = (startTime: number | null, endTime: number) => {
  //@ts-ignore
  let delta = Math.abs((endTime - startTime) / 1000 / 60);
  return delta;
};

export const getAccessTokenElapsedMins = (
  startTime: number | null,
  endTime: number
) => {
  //@ts-ignore
  let delta = (endTime - startTime) / 1000 / 60;

  return delta > 0 ? delta : 0;
};
