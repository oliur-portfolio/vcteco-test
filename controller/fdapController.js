const getFdap = (req, res, next) => {
    res.render("fdap-monitor", { title: "VCT Eco | Products | FDAP Monitor" });
};

module.exports = {
    getFdap,
};
