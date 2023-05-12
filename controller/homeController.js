const getHome = (req, res, next) => {
    res.render("index", { title: "VCT Eco | Home" });
};

module.exports = {
    getHome,
};
