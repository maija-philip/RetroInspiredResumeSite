const projects = [
    {
        "tag": "raincoat",
        "name": "Raincoat",
        "img": "Raincoat.svg",
        "githubIOS": "https://github.com/maija-philip/RaincoatWeatherAppIOS",
        "githubAndroid": "https://github.com/maija-philip/RaincoatWeatherAppAndroid",
        "alt": "Raincoat App, Turn weather into something you can wear",
        "desc": "Raincoat was my final for both my 2023 Mobile Development for iOS and my 2024 Mobile Development for Android classes. It was really fun to get the chance to build an app twice in two different languages. Doing the app the second time in Kotlin, I set things up a bit differently and ended up liking the result way better than how I did it in Swift. In Kotlin, I used the view model to keep track of the user's preferences for this session and separated that with how the user's preferences were stored in the database. I combined the two in Swift using an @Model object which was slow to update and caused the app to lag. After I realized how much nicer an experience it was for the user on the Kotlin app because they were separated, I decided to implement that on the iOS one as well. I really enjoyed seeing the differences in the two languages and was surprised how easy it is to implement Maps and permissions with Swift, while in Kotlin those were more difficult. I enjoyed how easy it was to add dependencies and use outside libraries in Kotlin. Both languages were awesome to work in and I'd love to do more mobile development in the future."
    },
    {
        "tag": "retireplan",
        "name": "RetirePlan",
        "img": "RetirePlan.svg",
        "link": "https://retireplan.app/",
        "alt": "RetirePlan React App, Learn how your choices affect your savings",
        "desc": "Want to plan out how different life choices affect your finances? RetirePlan allows you to play with data and different scenarios of life choices. You can visualize your data in a number of different graphs or a table if that suits you better. I worked on the revamp of this app, for my Summer of 2023 internship, as we migrated it from objective c to React Native. It was a great opportunity to learn the ins and outs of mobile development (and how long builds take, ugh!). I started the summer doing a redesign of the app to create an intuitive, responsive, accessible, and modern design. I followed that up with implementing 3/4 of the design, including a navigation scheme, as well as dynamically creating a complex interaction UI to collect user financial data. For our interactive graph, I iterated through a React Native Graphing library, a custom React Native Graph, and settled on building the graph natively with Swift and Kotlin to boost performance. I also integrated Firebase throughout the app to provide Analytics as well as researching and creating a helpful privacy dialog to allow users to choose whether or not to opt into the Analytics. Being a part of building this app was a wonderful experience that I really enjoyed and learned a lot from."
    },
    {
        "tag": "pantry",
        "name": "Pantry",
        "img": "Pantry.svg",
        "github": "https://github.com/maija-philip/PantryRecipeApp",
        "alt": "Pantry Flutter App, Store all your recipes, simple, and easily on multiple devices",
        "desc": "Pantry is my first complete Flutter app and the first complex app I had built. Flutter was part of my 2023 Foundations of Mobile Design class. After installing it, which I definitely struggled with, it was really enjoyable. This was my first time dipping my toes into the mobile development world. I used the material 3 design library to design this recipe app so that it was minimal and easy to use with recognizable components. I really wanted user specific recipes, so I was dead set on integrating Firebase Authentication and Realtime Database. It was fantastic how well Firebase integrates with Flutter, the login and create account functionality was smooth sailing. It was a little hard to figure out how to call firebase the right way for add, edit, and delete functionality, though once I figured out one, the rest were easier. I also found it very difficult to debug in flutter, the errors didn't always throw, they caused breakpoints which I slowly started to get used to. The rest of the project went much smoother than I thought, given that this was my first big project with Flutter. I really enjoyed it and would happily use Flutter in the future."
    },
    {
        "tag": "coffee",
        "name": "Coffee Mobile App",
        "img": "CoffeeMobileApp.svg",
        "github": "https://github.com/maija-philip/CoffeeApp",
        "alt": "Coffee Mobile HTML Web App",
        "desc": "I created this web app as a part of my 2023 Foundations of Mobile Design course. As a group assignment, we designed this coffee app then individually built it and adjusted the design. We decided to follow material design so that it was simple and easy to use. The cart feature was built using local storage of complex javascript objects in order to capture all the information about the drink. As you add details about a drink, it builds out a temporary object that you can add to your cart. For the drink customization page, I created a custom selector where you can add and remove as many toppings as you'd like. This was a really fun project and I really enjoyed figuring out how to store the drink data as they were selecting it, especially in the custom toppings selector where the user could add and then later remove a topping. I decided to store them as a string of comma separated toppings, which if I were doing it again, I would change to a list of objects that I could parse into a string later. The comma separated string list was a unique challenge, however, that I enjoyed figuring out."
    },
    {
        "tag": "ischool",
        "name": "School of Information Replica Website",
        "img": "iSchoolReplica.svg",
        "github": "https://github.com/maija-philip/UsingAPIdataInReact",
        "alt": "School of Information Replica Website, Utilizes React and APIs",
        "desc": "In my 2023 Client Programming class, one of our projects was to create a replica of our college's site. Our college is the School of Information, nicknamed as iSchool. Its website shows off the classes, majors, and minors that it offers as well as some details about employment and faculty. This data was retrieved from an API as JSON data.I learned how to add dependencies and use the Semantic and MUI React libraries as well as creating custom components. I really enjoyed piecing the bits of React that I knew together into a complete project and learning how to publish a React site onto a domain. I learned a lot about the quirks of React as well as furthering my knowledge of how timing and callbacks in Javascript work. Javascript is still to this day (May 2024) one of my favorite programming languages."
    }
]