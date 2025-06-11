import CommonClass from "./CommonClass";

class CheckoutPage extends CommonClass{
    constructor(){
        super();

        this.$title=()=>$(`//div[text()='Shipping Address']`);
        this.$firstName=()=>$(`//input[@name='firstname']`);
        this.$lastName=()=>$(`//input[@name='lastname']`);
        this.$company=()=>$(`//input[@name='company']`);

        this.$addressStreetOne=()=>$(`//input[@name='street[0]']`);
        this.$addressStreetTwo=()=>$(`//input[@name='street[1]']`);
        this.$addressStreetThree=()=>$(`//input[@name='street[2]']`);
        
        this.$city=()=>$(`//input[@name='city']`);
        this.$province=()=>$(`//select[@name='region_id']`);
        this.$zipCode=()=>$(`//input[@name='postcode']`);
        this.$country=()=>$(`//select[@name='country_id']`);
        this.$phoneNumber=()=>$(`//input[@name='telephone']`);

        this.$radioFlatRate=()=>$(`//input[@name='ko_unique_1']`);
        this.$nxtBtn=()=>$(`//button[@class='button action continue primary']`);

        this.$placeOrderBtn=()=>$(`//button[@class='action primary checkout']`);
    }

    /**
     * 
     * @param {string} data 
     */
    fillForm = async (data) => {
        await this.$firstName(data.firstname);
        await this.$lastName(data.lastname);
        await this.$company(data.company);

        await this.$addressStreetOne(data.street);
        await this.$addressStreetTwo(data.street);
        await this.$addressStreetThree(data.street);

        await this.$city(data.city);
        await this.$province().selectByVisibleText('Kerala');
        await this.$zipCode(data.zipcode);
        await this.$country().selectByVisibleText('India');
        await this.$phoneNumber(data.phone);

        await this.$nxtBtn().click();
    }

}

export default new CheckoutPage();