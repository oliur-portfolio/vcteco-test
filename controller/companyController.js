const getCompany = (req, res, next) => {
    res.render("company", { title: "VCT Eco | Company" });
};

module.exports = {
    getCompany,
};
