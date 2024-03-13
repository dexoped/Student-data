function convertRangeToJson(data) {
  var jsonArray = [];

  // Check if data is empty or doesn't contain enough rows for headers and at least one data row
  if (!data || data.length < 2) {
    // Return an empty array or a meaningful message as needed
    return jsonArray; // or return 'No data available';
  }

  var headers = data[0];
  for (var i = 1, length = data.length; i < length; i++) {
    var row = data[i];
    var record = {};

    for (var j = 0; j < row.length; j++) {
      record[headers[j]] = row[j];
    }

    jsonArray.push(record);
  }

  return jsonArray;
}
