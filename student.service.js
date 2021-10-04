const pool = require("../../config/database");
const { getUsersByUserId } = require("./student.controller");
module.exports = {

  create: (data, callBack) => {

    // send multiple data in a array with html!

    const newArr = [];
    data.name.forEach((val, index) => {
      newArr.push([data.name[index], data.email[index], data.student_class[index], data.percentage[index], data.mobile[index]])
    })
    console.log(newArr);
    pool.query(`insert into student (name,email,student_class,mobile,percentage)
    VALUES ?`,
      [newArr],
      (error, result, field) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
};
 // csv codes for file uplode

  multiple: (data, callBack) => {
    const newArr = [];
    data.name.forEach((val, index) => {
      newArr.push([data.name[index], data.email[index], data.student_class[index], data.percentage[index], data.mobile[index]])
    })
    console.log(multiple);

    let stream = fs.createReadStream("document.csv");
    let csvData = [];
    let csvStream = fastcsv
      .parse()
      .on("data", function (data) {
        csvData.push(data);
      })
      .on("end", function () {

        csvData.shift();


        connection.connect(error => {
          if (error) {
            console.error(error);
          } else {
            let query =
              "INSERT INTO student (id, name, email, student_class,percentage) VALUES ?";
            connection.query(query, [csvData], (error, response) => {
              console.log(error || response);
            });
          }

        });

      });
  },

   stream.pipe(csvStream);



     // [ { id: "id", title: "id" },
          // { id: "name", title: "name" },
          // { id: "email", title: "email" },
          // { id: "student_class", title: "student_class" },
          // { id: "mobile", title: "mobile" },
          // { id: "percentage", title: "percentage" }]