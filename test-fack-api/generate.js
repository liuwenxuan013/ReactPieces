module.exports=function(){
    var faker=require("faker");
    var _=require("lodash");
    return{
       people:_.times(100,function(n){
            return{
                id:n,
                "firstName": faker.name.firstName(),
                "lastName": faker.name.lastName(),
                "avatar": faker.internet.avatar(),
                "city": faker.address.city(),
                "zipCode": faker.address.zipCode(),
                "company": faker.company.companyName(),
                "phone": faker.phone.phoneNumber(),
                "email": faker.internet.email()
            };
        })
    }
}
