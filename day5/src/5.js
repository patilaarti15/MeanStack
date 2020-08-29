
class Person {
    
    
    constructor() {
        console.log('I am constructor');
    }

 
    getPersonAddress() {
        return 'NaviMumbai'
    }

 
    getPersonName() {
        return "I_AM_AARTI!!";
    }

    getPersonDetail() {
        const name =  this.getPersonName();
        const address  = this.getPersonAddress();

        return name + " " + address;
    }


    static main() {
        let obj = new Person();
        const detail = obj.getPersonDetail();
        console.log(detail);
    }
}

Person.main(); 