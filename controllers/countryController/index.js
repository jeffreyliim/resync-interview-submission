var {successResponse} = require('../../utils/response');
var {CountryDetail} = require('../../models/country_detail');


module.exports = {
    GetAllCountries: async function (req, res) {
        var countries = await CountryDetail.findAll();
        return res.json(successResponse(countries))
    },

    GetCountry: async function (req, res) {
        var {name} = req.body;
        var country = await CountryDetail.findOne({where: {name}});
        return res.json(successResponse(country))
    }
};
