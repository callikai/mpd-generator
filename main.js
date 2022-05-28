var mpd_generator = require("mpd-generator");

var data = {
  path: "public/0x01A58",
  inputFile: "0x01A58",
  format: ".mkv",
};

mpd_generator.main(data);