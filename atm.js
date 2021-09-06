const readlinesync=require("readline-sync")

var language=readlinesync.question("\n1.English \n2.Hindi \n3.Marathi \n4.Telagu \n:---")
// function chooseLanguage(){

//     if (language==1){
//         var a= language
//     // }else if(language==2){
//     //     var a=language
//     // }
//     // else if(language==3){
//         // var a=language
//     }else{
//         var a=language

//     }

    
//     return language

// }
// console.log(chooseLanguage())



function ForPincode() {
    // const myPin=1234;

    if (language==1){
        const myPin=1234;

        

        let i=0
        let Pininfo=0;
        for (let i=1;i<=3;i++){
            var pincode=readlinesync.question("Enter your four digit pin number:---")

            if (pincode== myPin){
                Pininfo="Correct Pincode"
                break
            }
            
            
        }if (myPin==pincode){
            Pininfo="Correct Pincode"


        }else{
            Pininfo="Incorrect Pincode!"


        }
    

                // console.log("your card has blocked!!")

        return Pininfo

        // console.log("your card has blocked!!")

        // return Pininfo
        


        
    }
    else{
        i=0
        let Pininfo=0;
        while (i<3){

            let pincode=readlinesync.question("Apna char number ka pin Darj kare:---")
            if (pincode== myPin){
                Pininfo="apka pin sahi hai"
                break
            }else{
                Pininfo="Fir se pin dale!"
            }
            i=i+1;
        }
        console.log("apka card radda ho chuka hai!!")

        return Pininfo
        
    }
}



function options(option) {
    var myBalance=5000;
    if (option==1){
        let result=0;
        console.log("Please press 1 :-------For your balance inquiry:--")
        console.log("Please press 2 :-------For your withdrawl:--")
    
        console.log("Please press 3 :-------For your pay in:--")
        console.log("Please press 4 :-------For your return card/ Exit:--")
        let choice=readlinesync.question("What would you like to choose:--")
        if (choice==1){
            result=myBalance," Your current balance!!"

        }
        else if(choice==2){
            let withdrwal=readlinesync.question("Enter amount for  withdrawl:--")

            result=myBalance-withdrwal," Your current balance!!"
        }else if(choice==3){
            let pay=readlinesync.question(" Enter amount to pay in:--")
            result=myBalance+pay," Your current balance"

        }else{
            result="Collect your card"
            console.log("THANKS FOR VISIT")
        }
    return result




    }
    else{
        let result=0;
        console.log("Kripya karke 1 dabaye apni Jma rashi ke bare me janne ke liye:--")
        console.log("'Paise nikalne ke liye 2 Dbaye:--")
    
        console.log("paise Jma karne ke liye 3 dbaye:--")
        console.log("Apna card wapis lene ke liye 4 dbaye:--")
        let choice=readlinesync.question("kripya karke apna Vikalp chune=:---")
        if (choice==1){
            result=myBalance," Apki kul jma rashi"

        }
        else if(choice==2){
            let withdrwal=readlinesync.question(" Aap kitni rashi nikalna chahoge?:--")

            result=myBalance-withdrwal," Apki kul jma rashi"
        }else if(choice==3){
            let pay=readlinesync.question("Aap kitna Bhugtan karna chahoge?:--")
            result=myBalance+pay," Apki kul jma rashi"

        }else{
            result=" Apna card Jma kar lijiye"
            console.log(" Dhanyawad Aane Ke liye")
        }
    return result


    }
    
}

function main() {
    // console.log(chooseLanguage())
    console.log(ForPincode(language))
    console.log(options(language))

    
}
main()


            
            
            


        