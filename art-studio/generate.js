module.exports = function() {
    var faker = require("faker");
    var _ = require("lodash");
    return{
        companies:_.times(50,function(n){
            return{
                id:n,
                "name": faker.company.companyName(),
                "logo": faker.image.business(),
                "city": faker.address.city(),
                "address":faker.address.streetAddress(),
                "zipCode": faker.address.zipCode(),
                "website": faker.internet.url(),
                "email": faker.internet.email()
            }
    })

    }
}
