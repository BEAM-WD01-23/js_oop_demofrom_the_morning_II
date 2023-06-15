
//RECURSION
//ex: i
        //show me the sum only if it will be above 100 else show me 0
        const myRecursion = (value) => {
            let sum = 0;
            for(let a=0; a<value.length; a++){
                let mySum = sum += value[a]
               if(mySum > 100){
                   console.log(mySum);
               }else{
                  //  console.log('sorry the sum is less than 100, so, I wll show you 0');
               }
            }
           
        }
        const rec_1 = myRecursion([23,45])
        //console.log(rec_1);//0
        //
        //
//ex: ii
        const showFullDay = (currentYear) => {
            let fullYear = new Date().getFullYear();
            // let fullDate = day.toLocaleString();
            if(currentYear === fullYear){
               // console.log('the current year is ' + fullYear)
            }else{
               // console.log('oh, the given year is not the same as the methode')
            }
        }
        const rec_2 = showFullDay(2013)
        //console.log(rec_2);//0
//
//iii 
//pure (input => output )
//
//GETTER & SETTER
        const employee = {
            name: 'Nani',

        get getName(){
            return this.name;
        },
        set updateName(myValue){
            this.name = myValue
        }
        }//JSON

        //console.log(employee);
       // console.log(employee.getName);//Nani
        let updateIt = employee.updateName = 'Dimitro';
        //console.log(updateIt);//Dimitro
        //console.log(employee);//{ name: 'Dimitro', getName: [Getter], updateName: [Setter] }
        //
//ARROW FUNCTION LIMITATIONS
        //-hoisting
        //-object-literal
        //
//STATIC PROPERTIES AND STATIC METHODS
        class Person {
            static staticName = 'Static property';//a

            static staticMethod(){
                console.log('this is my static method');//b
            }
            normalMethod(){
                console.log('this is my normal method');//c
            }
        }
        console.log(Person);//still see static prop
        let statParam = Person.staticName;//a
        console.log(statParam);
        Person.staticMethod();//b  it can be called without creating an instance of MyClass
        
        //instantiate
        let person_one = new Person();
        person_one.normalMethod();//c,  normalMethod() we see it only after instantiation ...

        //Note: Static properties and methods cannot be accessed through instances and static properties and methods are shared among all instances of the class, 
        //and they cannot access instance-specific data or methods directly.
        

        //
       //Quizs from the assignments adv_Func_II...
//quiz:a
        //

        function reverseMyFunc(val){
            let splitIt = val.split('');
            let reverseIt = splitIt.reverse();
            let joinIt = reverseIt.join('');
            const capitalizeIt = joinIt.charAt(0).toUpperCase();
            const remainingWord = reverseIt.splice(1).join('');
            const fullWord = capitalizeIt + remainingWord;

            //console.log(fullWord)
        }
        let result = reverseMyFunc('leon');
        console.log(result);//Noel
        //




        