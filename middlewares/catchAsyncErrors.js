export const catchAsyncErrors = (theFunction) => { //error find krne ke liye ya handle krne ke liye
  return (req, res, next) => {
    Promise.resolve(theFunction(req, res, next)).catch(next);
  };
};
