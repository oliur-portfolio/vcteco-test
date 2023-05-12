const getContact = (req, res, next) => {
    res.render("contact", { title: "VCT Eco | Contact" });
};

module.exports = {
    getContact,
};
