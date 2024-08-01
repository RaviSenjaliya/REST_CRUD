const AsyncHandler = (myfun) => {
  return (req, res, next) => {
    Promise.resolve(myfun(req, res, next)).catch((err) => next(err));
  };
};

export { AsyncHandler };
