/*
//Variables
//Objects
//Methods
//Functions
//Template literals
//Arrays

//JavaScript = the core language; sometimes referred to as Vanilla JavaScript or Vanilla JS

//ECMASript = European Computer Manufacturers Associations (ECMA) is the group in charge of defining the specification for JavaScript/the //browser specification of the JavaScript langague. It is not the language itself, but the description of how the language should be //interpreted by browsers. This is meant to ensure that when you write JavaScript, it behaves the same way no matter what browser is used.

//ES6, ES2015, ES2018, ES2020, etc = refers to the use of features defined in ECMAScript but not necessarily supported by modern browsers
//to write JavaScript that is at the cutting edge of development, effectively, the JS of the future. Using ECMASript usually means algo 
//using BABEL.JS to make it work in current browser implementations, in order words, it converts into JS that the current browser can read.

//Typescript = variation, dialect, or flavor of JS introducing features like strong type. JS is an opinionated coding language and some 
//developers either dont like JS opinios, or they need features not provided by JS. To get around this issue, they've developed abstracted 
//versions of JS with this additional features added. The most popular, TypeScript.
//TypeScript files typically have the .ts file name extension.

//JavaScript Frameworks = REACT, VUE, ANGULAR = allows us to write JavaScript-based front-end applications. These are tools writen in JS,
//to render content on the web in the form of applications. They add an abstraction layer on top of JS to do things in a more streamlined 
//and efficient way.

//ReactJS, as an example, uses JSX or JavaScript XML, which simplifies how we mix JS and HTML.

//Node.JS = JavaScript server runtime used to run JS everywhere (used to run npm, WebPack, BABEL and more on your computer). In the last 
//years, JS has migrated to the browser to the server, so we can now write JS to run on the backend as well as the frontend of our 
//applications.


/////////// 1.JavaScript: A Brief Introduction
    Good rule of thumb: define all variables and functions and objects and anything else before you use them, so higher up in the file.
    That way you know the browser has read the object/function/etc before you call it.

    What does it mean when we say JavaScript is an "object-oriented" language? 
    JavaScript is modeled around objects with properties and methods which can be handled in a modular fashion.

/////////// 2.Up and Runing with JS
    2.1) JS in an HTML document, <script></script>
    2.2) JS as an external file, <script src="script.js"></script>
        DEFAULT BEHAVIOR JS AND HTML = browser stops rendering HTML when JS is encountered. JS is executed before
        rendering continues. Often referred to as content blocking. Is slows the page load.
        JS must be defined after the HTML elements/tags that it references, or it will return error/undefined.

    2.3) Modern JS loading: external files
        <script src="script.js" async></script>
        ASYNC = browser downloads JS in parallel while HTML renders. When JS is fully
        loaded, rendering stops while JS is executed.

        <script src="script.js" defer></script>
        DEFER = browser downloads JS in parallel while HTML renders, then defers execution of JS until HTML rendering
        is complete.

    2.4) JS Modules:
        file.js = export default ...
        otherfile.js = import ... from "./file.js";

////////// 3.Objects
    JS is a prototype based objecet oriented programming language, that means, at its core, when we work
    with JS, we're working with objects, and these are based on prototype, which is a technical and confusing way 
    of saying "JS works very much the same way we humans work with objects in the real world."

    OBJECTS have PROPERTIES, that define the specifics of this one particular object.

    Prototype based objecet oriented programming language .:. each object is a unique instance of an object prototype.
    Exemple: I have a lot of backpacks (real world objects). The reason I can say they are all backpack is that
    they share common properties wich define them as belonging to the backpack category. This specific propertis
    defines the PROTOTYPE of a backpack and the particular combination and configuration of these properties define
    each individual backpack. This OBJECT PROTOTYPE (with its specifics properties) makes it easy to identify
    an existing bag as a backpack.

    This prototype based object orientation allows us to do in programming, what we as humans do every time 
    we encounter a new object and catalog it in our minds. We look at it, note its properties and think, 
    this thing has the same collection of properties as this other thing I already know. So even though it is 
    a different thing in appearance, the similarities in properties means its the same object type.

    Objects can have features built into them allowing us to change their property values. 
    In JavaScript, these property changing features inside an object are called methods.
    Thits methods act on the current object only.

    One final thing, objects can contain other objects. So inside this backpack object, there is another object, 
    a headlamp. And because the headlamp object is inside the backpack object, it is quite literally 
    a property of the backpack object for as long as it's in there. This inside object, has its own properties and
    its own set of methods.

    This mental model of objects described by their unique properties based on an object prototype whose 
    individual properties can be modified using internal methods, is what I want you to keep front of mind.

    3.2) JS Objects, the code version
        JS OBJECTS = collections of data and functionality stored as properties and methods that describe the object
        and what it cand do.
        TO DEFINE AN OBJECT:

            3.2.1) A VARIABLE TO HOLD THE OBJECT IS NEED
                const object = {}; CURLY BRACKETS DEFINE THE VARIABLE AS AN OBJECT
                The 'const object' is a box, a box where we put the objetct. What we fill the box with
                is with two curly brackets that define the variable as an OBJECT, where {} = empty object.

                const backpack = {
                    name: "Everyday Backpack",              //value is a text string
                    volume: 30,                             //value is a number
                    lidOpen: false,                         //value is a boolean true or false
                    strapLength: {                          //value is another object
                        left: 26,
                        right: 26,
                    },

                    toggleLid: function(lidStatus) {       //methods are properties containing functions  (value is a function)
                        this.lidOpen = lidStatus;          //or a call to a function. 
                    },                                     //toggleLid method contains a function that grabs a value for
                                                            //lidStatus, and then says this (so the current objects),
                                                            //lidOpen, should be changed to whatevers contained inside
                                                            //the lidStatus.
                                                            //'this' keyword refers to the current object, "this object right here"
                                                            // So this lidOpen, lidStatus just means the current object's lidOpen 
                                                            //property, should be changed to the value of lidStatus.
                                                            //Methods allows us to change the changeable properties 
                                                            //(like wheter the lid is open or closed) or how long the strap is.
                };                                  

    3.3)OBJECT CONTAINERS
        #Objects need somewhere to live, for this we use a container, called a variable
        (in this case a constant variable) and it needs a name. 
        What goes on the right hand side of the equal sign, {...};, is what goes inside the container/what is
        assigned to that container/to that variable. Exemple:

        const backpack = {
            name: "Everyday Backpack",
            volume: 30,
            color: "gray",
        };

        #VARIABLE CONSTANT = CONST ....
        We can change the properties of the object inside the container but we cant remove or replace
        the object from the container. The variable is constant, it doesnt change, it is an objec. It
        is the object. Exemple:
            const fruta = {
                nome: ...
                cor: ...
            }
            fruta = 5 ---> ERRO! Assignment to a constant variable = fruta is the name of the 
                                container/variable where lives an object.
                                The container is defined as a constant variable, thus, it cannot be another 
                                thing that not an object.

        Thats why when we create an object, we creat a CONST (constant variable). When we create an object,
        we may want to change its properties/characteristics, but not change it to something entirely different.

    3.4)OBJECTS PROPERTIES
        Describes different aspects/characteristics/properties of the object.
        
        const objetct = {
            property1: "string",
            property2: number,
            property3: floating point,
            property4: boolean true or false,
            property5: array,
            property6: method/function,
            property7: another object = {
                property71,
                property72,
            },
        };

    3.5)ACCESSING OBJETCS
        Anytime you want to acess an object or anything else contained inside a variable, you simply call
        it by its name and JS will hand it to you.

            console.log(object);
            console.log("The back pac object:", backpack);

        JS will return in the console the entire object with all its properties and methods.

    3.6)ACCESSING OBJECTS PROPERTIES
        3.6.1)DOT NOTATION
            console.log(object.property1);
            console.log(object.property7.property71);
            console.log(backpack.strapLength.left);

        3.6.2)BRACKET NOTATION
            console.log(object["property1"]);
            console.log(backpack["pocketNum"]);

            #VARIABLE = PROPERTY
            var query = "pocketNum";
            console.log(backpack[query])        //go and find the query variable and put the value of 
                                                //this variable inside here.
            console.log(backpack["pocketNum"]);

            console.log(backpack.query)         //ERROR!, you cannot put a variable inside DOT NOTATION.

            #PROPERTY WITH NON STANDARD SPECIFICATIONS NAMES
            In JS, standards determined that property name can only contain letters, digits, dolar signs
            and underscore. However, sometime external data dont respect this standards, and properties
            from this data can start with a digit, or contains quotation marks, hyphens, etc...
            You cant access these type of non standard property with DOT NOTATION. However,
            bracket notation can be used because you are defining the variable as a quoted string,
            that can be literally anything.
            DOT NOTATION:
                console.log(backpack.property-hyphen); ERROR!

            BRACKET NOTATION:
                var query = "property-hyphen"
                console.log(backpack[query]); or
                console.log(backpack["property-hyphen"])

    3.7)Practice = build a new oject

    3.8)OBJECT METHODS
        #METHODOS = functions inside objects. This functions typically perform actions on the object properties.
                    Each METHOD is added to the object as a property. 

            const backpack = {
                name: "Everyday Backpack",
                pocketNum: 15,
                strapLength: {
                    left: 26,
                    right: 26,
                },
                lidOpen: false,

                toggleLid: function (lidStatus) {   //Inside the toggleLid property resides a function that
                    this.lidOpen = lidStatus;       //receives one PARAMETER. A PARAMETER is a piece of data 
                },                                  //we pass to the function. The PARAMETER is then used inside
                                                    //the function to set the new value for the current object 
                                                    //(this) property, in this case, a new value for lidOpen property.

                newStrapLength: function (lengthLeft, lengthRight) {
                    this.strapLength.left = lengthLeft;
                    this.strapLength.right = lengthRight;
                },
            };

        #A FUNCTION is a program that does something, typically change a value somewhere.
        #The PARAMETERS are the values that the function can use

            var c = 0;
            console.log(c);
            function calculo(a, b) {
                c = a * b;
                return c;
            };
            calculo(2, 2); //executes function calculo, thus: c = 4
            console.log(c); //4
            console.log(calculo); //function calculo(a, b)
            console.log(calculo()); //NaN
            console.log(calculo(2, 2)); //4
            console.log(calculo(2, 4)); //8
      
        #FUNCTION CALL = To make a function run, we called the function name and then add two parenthesis behind it
            FUNCTION();

        #If we want to pass values to the function we put these values into the parenthesis and they become
        parameters of the function   
    
    3.9)Exercise
    3.10)CREATING OBJECT BLUEPRINTS/TEMPLATES USING CLASSES
        CLASSES works as templates for an object prototype (type).
        Anytime we create a new object based on a class, that object automatically gets all the properties
        and the methods from that class.
        That means we can change the properties and the methdos of the class and these changes apply to
        every single instance of that class that we've created.
        
        #DIRECT CLASS DECLARATION
        class Name {            //class Name must start with uppercase as a convention
            constructor(        //constructor() inside de () defines the parameters for each of the properties
                parameter1,     //The CONSTRUCTOR is a METHOD inside the class and its uses its parameters
                parameter2,     //to populate the CLASS properties.
                parameter3,
            ){                                  //inside the {} defines the properties of the OBJECT that is 
                this.property1 = parameter1;    //going to be created from this class, and set their values to 
                this.property2 = parameter2;    //the parameters passed in from the class constructor.
                this.property3 = parameter3;    //this refers to the current object created from the class.
            };

            newFunction: function(...){};       //there can be methods inside the class.
            newFunction2(...){};
        };

        #CLASS DECLARATION WITH EXPRESSIONS
        const Name = class {
            constructor(parameter1,parameter2,parameter3)
            {
                this.property1 = parameter1,
                this.property2 = parameter2,
                this.property3 = parameter3,
            }
            newFunction: function(...){};
            newFunction2(...){};
        };

        #So now you can generate many different objects without having to verbosely declare those objects in 
        your main file. One thing to note here is you can only use a class after it has been declared. 
        Remember, JavaScript reads from the top down. You have to make sure the class is declared before 
        you start using it. A good way of avoiding this problem altogether is to place your classes in a separate 
        file and importing them because all imports need to happen at the top of the main file where it's being used. 
        So that way, we know the backpack class has been declared before we use it because the import happens at 
        the very top. Using a class to create an object template allows us to define the property and methods 
        structure for all the objects created with that class without having to redeclare them over and over. 
    
    3.11)OBJECT CONSTRUCTORS FUNCTIONS
        function Constructor(
            parameter1, parameter2...
            )
            {
            this.property1 = parameter1;
            this.property2 = parameter2;
            this.insideobject= {
                insideObjectProperty1,
                insideObjectProperty2,
            };
            this.someMethod = function (something)
                this.property1 = something;
            };
        };

        #Differences btw 'Classes {constructor(){}}' and 'function Constructor(){}': class allows to
        extend classes, add new features that are nota available inside an object constructor function.
        Classes are new in JS, so old codes and if you are running on old code bases you probably have to use
        constructor function cause they not support classes.

    3.12)Exercise
    3.13)GLOBAL OBJECTS
        #OBject creation: direct, class, constructor function.
        #Browser has default objects you can use for a variety fo differente purposes. They work exactly
        like the object we've seen so far, except that we dont need to define them, they are just available
        through the browser. Exemple:
        #DATE OBJECT, it can take any string/readeble human data string like "December 5, 2020 15:00:00 PST"
        that describes data and convert it into something meaningful. DATE OJBJESCTS contain a NUMBBER that
        represents the milliseconds that have passed since the 1st of Jan 1970 UTC, and then apllies
        methods on top of that to convert that huge number of milliseconds into something meaningful
        for us humans. Thats done with one of instant methods that come with the date object:

        const rightNow = new Date()        //Date() is a constructor funcion/"class" that already exists on the browser
        console.log(righNow)               //Here, we defined a constant variable/object from the classe/constructor function
                                            //Date(). Its value is the current time: TUE OCT 06 2020 14:34:09 GMT-0700

        rightNow.toDateString()             //Here we use the method toDateString (which is a method of the Date()
                                            //class/constructor function) that converts current time from its
                                            //fully style to 'Tue Oct 06 2020'. 
                                            //The method is applied into the objcet rightNow, which is defined
                                            //by the conscturctor function/class Date().

    3.14)Challenge
        I want you to make a new type of object and add a series of these objects in the project files. 
        The object type is called Book and you can decide what properties and methods you want to include in 
        that object type as long as there's at least one of each. Here you have some choices to make. 
        Do you just create several separate objects, do you use an object constructor function, or do you 
        create a new Book class? And what should be the naming convention for each of these Book objects? 
        The idea here is to capture books in code. So I want you to create a new Book object type and add at 
        least five different Book objects in your projects. That way you can go into the browser and test 
        them in the console and see that you have access to all these books and you can see your books turn 
        into code in the browser.
    3.15)Solution

////////// 4.Sidebar: String Output
        How to output content from JavaScript to an HTML document?
        Why we have been spending so much time on the console but nothing really happens in the browser?
        We need a way of effectively bridge the gap btw what happens in the JavaScript world and what
        happens in human world and HTML functions as that bridge.
        A typical use of JavaScript is to either GENERATE HTML, MODIFY existing HTML or REMOVE HTML from
        a live documento in the browser.
        From this perspective, its useful to think of JS as an interative layer on top of the content,
        the HTML and ints presentation, the CSS.
        We can use JS to manipulate the HTML and the CSS to get the browser to do what we want.
        The most basic way of doing this is to use JS to inject new HTML content in the document.
        To do that we firts need to access an element within the document and we can then manipulate
        with JS.
        The entire document is an OBJECT in the browser.
        Typing "document" on console, it returns the DOCUMENT OBJECT which is really the full HTML output
        of the current document.
        When the browser renders a document, it creates a DOCUMENT OBJECT model of that document and we
        can then access that document model using JS.
        
    4.1)MIX TEXT AND VARIABLES WITH TEMPLATE LITERALS
        TEMPLATE LITERALS = manner of direct manipulates the HTML document with JS.
        We can access anything within the document object model. Exemple:
        document.body               //this gives the body element
        document.body.innerHTML     //we are saying: give me the inner HTML of the body elements
                                    //innerHTML is a property of the body elements and returns all
                                    //the inner HTML within the body.

        We can manipulate this: instead of asking to console log what is inside HTML element body
        (pressing enter), we can reset it to something else by:
        document.body.innerHTML = "Hello"
        
        By doing this what happens is in the browser, we wiped out everything that was inside the body
        element at the index.html file, which are renderized by the browser as a DOCUMENT OBJECT,
        and replace it with just some string. In other words, the HTML DOCUMENT is an object, html body is
        a property, and we changed this property value from some inner HTML content to some string text.
        HOWEVER, THIS IS ONLY DONE IN THIS CURRENT DOCUMENT OBJECT MODEL IN THE BROWSER. IF WE RELOAD
        THE BROWSER, IT RENDERIZED AGAIN THE ORIGINAL INDEX.HTML FILE, AND EVERYTHING COMES BACK AGAIN.

        It is possible to create a template where can modify the index.HTML file and fill it in with data 
        from our Javascript. 
            In the .js file:

        const content = `...`; //the backticks `` tell the browser that anything inside is a TEMPLATE LITERAL,
                               //meaning that we can mix HTML and strings with JavaScript expressions to
                               //literally create templates.
        
            In the script.js file:

        const content = `                   //This is called TEMPLATE LITERAL
        <main>
            <h1>Everyday Backpack</h1>
                <ul>
                    <li>Volume:</li>
                    <li>Color:</li>
                </ul>
        </main>
        `;

        document.body.innerHTML = content; //here, JS is injecting the HTML insiede the const content
                                           //into the HTML on the fly.

        Now, it is need to put the object properties values defined up in the JS inside the TEMPLATE LITERAL.
        Inside the TEMPLATE LITERAL, anytime we want to call in something generated by JS, we add a placeholder.
        Example:
            <h1>${any JS expression}</h1>  //The JS expression inside ${} will be rendered and the output 
                                           //will be placed where this placeholder is.
            <h1>${object.property1}</h1>
            <h1>${everydayBackpak.name}</h1>

        Thus, to change/define the name that is going to be renderized and showed on the browser, we just 
        need to define the name in the JS scrip. We dont need to change the index.html file.
    
    4.2)TRADITIONAL STRING OUTPUT
        Template Literals are a very new tool in JS. In old codes we'll see standard strings used, which
        are the classic way of output string content using plain old strings.
            
            const content = "<h1>Name goes here</h1>";
            const content = "<h1>${everydayBackpack.name}</h1>"         //This not work!
            const content = "<h1>" + everydayBackpack.name + "</h1>";    //Solution, string concatenation trying
            document.body.innerHTML = content;                          //to mix HTML output and JS expressions.
    
////////// 5.DOM
    5.1)DOM: DOCUMENT OBJECT MODEL: "hierarchical trees with a trunk, branches, finner branches, and 
    eventually leads". The browser does the exact the same thing with a .html document/file = IT CREATES AN
    OBJECT MODEL FOR THE DOCUMENT (DOCUMENT OBJECT MODEL = DOM), AND THIS DOM DESCRIBES THE HIERARCHICAL TREE
    STRUCTURE FOR THAT DOCUMENT.

    5.2)ACESS ELEMENTS WITH QUERYSELECTOR() METHODS
        These methods use standard CSS queries to climb through the DOM tree and find the specified elements.
        querySelector(selector) where selector are CSS queries.

        5.2.1)Element.querySelector()
        The querySelector(selectors) method of the Element interface returns the first element that is a 
        descendant of the element on which it is invoked that matches the specified group of selectors.
            document.querySelector("h1");                   //target/selector is an HTML element
            document.querySelector(".class");               //target/selector is an HTML class
            document.querySelector("#id");                  //target/selector is an HTML id
            document.querySelector("main li:last-child");   //returns the last child <li> of a <ul> inside <main>
                                                            //selector can be any CSS selector or combinations of it, just like CSS
        
        5.2.2)querySelectorAll()
        DOM METHOD querySelectorAll(selectors) returns a STATIC NodeList representing a list of the document
        elements that match the specified gourp of selectors.
        This returns a NodeList (which looks like an array that has all of those objects).
        document.querySelectorAll("main li");   //returns a NodeList 0,1,2,3... with all <li> as an object and a DOM for each of it
                                                //NodeList(7) 
                                                //[li.backpack__volume, li.backpack__color, li.backpack__age, li.backpack__pockets, li.backpack__strap, li.backpack__strap, li.backpack__lid]
        document.querySelectorAll("main li").forEach(item => item.style.backgroundColor = "red");
        document.querySelectorAll("main li:last-child").forEach(item => item.style.backgroundColor = "blue");

        Even having a list of itens, we can target each of them or go through all of them and do
        something to them using JavaScript.
    
    5.3)ACCESS ELEMENTS USING OLDER METHODS
        getElementsByClassName("Class1 Class2..."); //returns an HTMLCollection which is an array like object of all the nodes or 
                                  //child elements matchin the query which is a string of space separeted class names.
                                  //Analogous to querySelectorAll();
                                  //document.getElementsByClassName("packprop"); 
                                  //document.getElementsByClassName("packprop backpack__color");

        getElementById("#id");    
                //document.getElementById("everyday");
                //In older code, developers often used ids specifically to be able to target objects like 
                //this because we used to only have these two methods and the class method gives 
                //us an htmlcollection that we then have to work with further to get to the object that means 
                //in some older code you will find html documents are full of ids simply so that we can 
                //target them using this particular method but now that we have the queryselector and 
                //queryselectorall methods we no longer need to comply with the restrictions of these two 
                //methods and we can do whatever we want using C S S query instead which is why we use 
                //queryselector and why these two older methods are relegated to the past.    
    
    5.4)Exercise
    5.5)MODIFYING ELEMENT CLASSES
        Common task in JavaScript: to modify the classes of an element in some way. This is a simple
        way of changing the appearance or behavior of an element without having to inject CSS into the HTML
        itself. Instead we add a class or remove a class to make something happen.
        Exemples: hiding and showing a panel, highlighting a button when something else has happened, etc.

        Here's the bottom line. If you want to add, remove, toggle or replace classes you should always 
        use the class list property, and use the methods that come with it. If on the other hand, you're 
        looking for a string and you want just the output of all the classes to do something else with, 
        you can use the class name property. So in almost every case you want to use class list.
        
        5.5.1) Element.className;
            var cName = elementNodeReference.className; //where cName is a string variable representing the 
                                                        //class or space-separeted classes of the current element.
            
            The className property of the Element gets and sets the value of the class attribute of the
            specified element, className holds a string listing out all the classes appended to an element.

            document.querySelector("h1").className; //returns all the classes appended to the element <h1>,
                                                    //and as className is a property, we can reset this property
                                                    //and reassign it any other value.
            document.querySelector("h1").className; //returns "backpack__name"
            document.querySelector("h1").className = "new-class";

            Problem 1. If we have an element with several classes and we just want to change one of the classes,
            we have to somehow go in and parse out which classes we want to keep/change = a lot of code.
            Problem 2. In REACT.JS className is used in place of class in markup to avoid collisions with JS
            class keyword which is used to set up classes. This menas that if we are trying to target the className
            propertu but are inside a JS Framwork we are actually doing something else. Thus, we should not be
            using the className property in frameworks and also should be careful about using the className property
            in anywhere else as well.

        5.5.2) Element.classList;
            Solution of problemas 1 and 2 of item 5.5.1.
            The Element.classList is a read-only property that returns a live DOMTokenList collection
            of the class attributes of the element which can be used to manipulate the class list.
            //document.querySelector("main li:first-child").classList //returns an DOMTokenList which is an array
                                                          //listing out each of the classes in turn, thus,
                                                          //we can work with each of these classes individually.
            <ul class="backpack__features">
            <li class="packprop backpack__volume">
            Volume:
            <span> ${everydayPack.volume}l
            </span>
            </li>...</ul>

            //returns:
            //DOMTokenList(2) ["packprop", "backpack__volume", value: "packprop backpack__volume"]
            //0: "packprop"
            //1: "backpack__volume"
            //length: 2
            //value: "packprop backpack__volume" 

            This property also comes with its own sets of methods to manipulate the individual classes.
            ADD a Class:
                //document.querySelector("main li:first-child").classList.add("new-class");
            REMOVE a Class:
                //document.querySelector("main li:first-child").classList.remove("new-class");
            TOGGLE a Class: add if its not a class already, remove if its a class alredy.
                //document.querySelector("main li:first-child").classList.toggle("new-class");
            REPLACE a Class:
                //document.querySelector("main li:first-child").classList.replace("already-class","new-class");
    
    5.6)ATTRIBUTES PROPERTY: Element.attributes; 
        .hasAttributes("..."); .getAttribute("..."); .setAttribute("...","..."); .removeAttribute("...");
            
        JavaScript can be used to modify the ATTRIBUTES of any ELEMENT. The ATTRIBUTES are stored in the
        ATTRIBUTES PROPERTY (Element.attributes;) and can be accessed directly by calling it.
        It returns a different type of data from the className and classList properties.
        
        Element.attributes; property returns a live collection of all attributes nodes registered
        to the specified node. It is a NameNodeMap, not an Array, so it has no ARRAY methods and the Attr
        nodes indexes may differ among browsers. An attribute is a more complex piece of data: it has a key
        and a value, and we need to manipulate just the key, just the value or both at the same time.
        A simple Array wouldnt do that.

        document.querySelector("img").attributes;
        NamedNodeMap {0: src, 1: alt, src: src, alt: alt, length: 2}

        We have dedicated methods to work with data from NameNodeMap attributs property.
            document.querySelector("img").hasAttributes("src");
            true    //if the element in question has this attribute

            document.querySelector("img").hasAttributes("title");
            false   /cause the element <img> doesnt has title attribute
            
        Once knowing if the element has or hasnt an attribute, we can see what that attribute contains:
            document.querySelector("img").getAttribute("src");
            "../../assets/images/everyday.svg"    //the console returns the value within the attribute

        It is also possible to set the value of an existing attribute:
                document.querySelector("img").setAttribute("alt", "Legenda Imagem Mochila");

        And even create a new attribute:
                document.querySelector("img").setAttribute("title", "<img> should not hava title element");

        To remove:
                document.querySelector("img").removeAttribute("title")   

        NOTE: EVERYTHING INSIDE A TAG IS CONSIDERED AN ATTRIBUTE. THUS, IF WE TARGET AN ELEMENT THAT HAS
        A CLASS, THE CLASS WILL ALSO SHOW UP AS AN ATTRIBUTE AND WE CAN ACTUALLY USE THESE ATTRIBUTE
        METHODS TO MANIPULATE CLASSES IF WE WANT TO.

    5.7)INLINE STYLE: .style
        If an element has inline styles meaning there are CSS declarations in the element itself that 
        inline CSS is stored in the style property of the elements, and we can access it as a regular property.
        The .STYLE PROPERTY is used to GET as well as SET the inline style of an element.

        GET: returns a CSSStyleDeclaration (list off all the available possible style properties that
        coudl be applied and then a specification of which ones are actually applied) objcet that 
        contains a list of all styles properties for that element with values assigned for the 
        attributes that are defined in the elements inline style attribute. We can call up any of these
        style properties/attributes specifically cause it is just a property of an object and then
        set that property directly.
            
            document.querySelector(".site-title").style                  //returns: CSSStyleDeclaration
            document.querySelector(".site-title").style.color            //returns: "black"
            document.querySelector(".site-title").style.color = "purple" //change the property inside the 
                                                                             //style declaration of the element
                
            document.querySelector(".site-title").style.backgroundColor = "pink"  //creates background style

            document.querySelector(".site-title").style.cssText //returns "color: black; background-color: pink;"

        and then change/set it by:

            document.querySelector(".site-title").style.cssText = "color: blue; background-color: red;"
        however, this is not the correctly way of doing this. It is recommended to change/set it individually by:
            document.querySelector(".site-tile").style.color = "blue";
            document.querySelector(".site-title").style.backgroundColor = "red";
            
        NOTE: ALL THE CSS PROPERTIES (AS STANDARD PROPERTY NAMES) DO NOT HAVE HYPHENS BUT ARE CAMEL CASE
        INSTEAD.
    
    5.8)Exercise Practice
    5.9)ADD DOM ELEMENTS: document.createElement();
        TEMPLATE LITERALS are used to create HTML and then add this HTML to the existing document
        by targeting an existing element and replacing its internal HTML with element.innerHTML property.
        This is an effective way of injecting HTML into a document, but its also rather crude and destructive.
        It requires an existing element to be in the html document and it wipes out whatever code was contained
        inside that element.

        There is a way to add content inside an element, to appear after all the other content alredy inside
        it. So instead of a destructive process, we use a process that creates new content. DOM manipulation
        like this is an essential part of JavaScript so theres a huge toolkit of methods available for just
        this purpose.
        
        #document.createElement();
        METHDO USED TO CREATE A NEW ELEMENT AND POPULATE IT WITH CLASSES, IDS AND CONTENTS, AND APPEND IT 
        TO THE EXISTING DOCUMENT
            let element = document.createElement(tagName[,options]); //It creates an element on the DOM
                                                                    //but it is not placed anywhere. It kind
                                                                    //of exists in theoretical space until
                                                                    //we use it.
        
        #ParentNode.append();
        METHOD USED TO INSERT A SET OF NODE OBJECTS OR DOMSTRING OBJECTS AFTER THE LAST CHILD OF THE
        PARENTNODE. IT TAKES THE PARENTNODE AND THEN IT APPENDS WHATEVER WE WANT TO THE END OF THAT
        PARENTNODE AS THE LAST CHILD.
        The .append() method can be used to add one or several comma-separated elements and they all go at
        the end of the ParentNode. It can also be used to append a string of texts

        #ParentNode.prepend(); does the exact same thing but adds the element as the first child.
        
        #Node.appendChild(); returns the element to you, it adds a node to the end of the list of children
        of a specified parent node. If the given child is a reference to an existing node in the document,
        appendChild() moves it from its current position to the new position (there is no requirement to
        remove the node form its parent node before appending it to some other node). This menas that a node
        cant be in two points of the document simultaneously. If the node already has a parent, the node is
        first removed, then appended to the new position.
        
        #Node.cloneNode(); this method can be used to make a copu of the node before appending it under the
        new parent.

        #Node.replaceChild(); replaces a child node within the given (parent) node
            let oldChild = parentNode.replaceChild(newChild, oldChild);
        
        #Node.insertBefore(); inserts a node/element before the parent elements.
        
        #insertAdjacentElement(); insert a given element node at a given position relative to the element it is
        invoked upon
        
            targetElement.insertAdjacentElement(position, element);
                DOMString represents the position relative to the targetElement:
                'beforebegin' = before the targetElement itself
                'afterbegin' = just inside the targetElement, before its first child
                'beforeend' = just inside the targetElement, after its last child
                'afterend' = after the targetElement itself
            

            
            









            












            





                                            













                                            
                                            

        




        

           
          
















*/
