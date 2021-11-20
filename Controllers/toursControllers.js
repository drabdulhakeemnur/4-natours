const fs = require("fs");
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// checkid middleware
exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "invalid ID",
    });
  }
};
exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price)
    return res.status(400).json({
      status: "fail",
      message: "name and price required",
    });
  next();
};
//  tours middlewares
exports.getAlltours = (req, res) => {
  res.status(200).json({
    status: "success",
    result: tours.length,
    data: {
      tours,
    },
  });
};
exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          tours,
        },
      });
    }
  );
};
exports.getTour = (req, res) => {
  // console.log(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};
exports.updateTour = (req, res) => {
  const updatedTour = tours.find((el) => {
    el.id === UpdatedId;
  });
  const tourUpdate = JSON.stringify(updatedTour);

  res.status(200).json({
    status: "success",
    data: {
      tourUpdate,
    },
  });
};
exports.deleteTour = (req, res) => {
  console.log(req.params.id);

  res.status(204).json({
    status: "succees",
    data: "deleted succ",
  });
};
