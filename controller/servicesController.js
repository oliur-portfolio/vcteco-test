const getServices = (req, res, next) => {
    res.render("services", { title: "VCT Eco | Services | Consulting" });
};

module.exports = {
    getServices,
};
