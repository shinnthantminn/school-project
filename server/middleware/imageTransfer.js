module.exports = {
  saveOneImage: (fileName, path) => {
    return (req, res, next) => {
      console.log(req.body);
      if (req.files && req.files.file) {
        const file = req.files.file;
        const name = new Date().valueOf() + "" + file.name;
        file.mv(`./upload/${path}/${name}`);
        req.body[fileName] = name;
        next();
      } else next();
    };
  },
};
