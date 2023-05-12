const getPartners = (req, res, next) => {
    res.render("partners", { title: "VCT Eco | Partners" });
};

module.exports = {
    getPartners,
};
