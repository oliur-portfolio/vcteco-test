const getFinlets = (req, res, next) => {
    res.render("finlets", { title: "VCT Eco | Products | Finlets" });
};

module.exports = {
    getFinlets,
};
