export const logos=[
    {
        'Front-End':[
            {src:'/assets/logos/HTML5.png', alt:'HTML5'},
            {src:'/assets/logos/react192.png', alt:'React'},
            {src:'/assets/logos/jQuery.png', alt:'jQuery'},
            {src:'/assets/logos/css3.png', alt:'CSS3'},
        ]
    },
    {
        'Back-End':[
            {src:'/assets/logos/node.png', alt:'Node'},
            {src:'/assets/logos/mocha.png', alt:'Mocha'},
            {src:'/assets/logos/postgreSQL.png', alt:'postgreSQL'},
        ]
    },
    {
        'Dev Tools':[
            {src:'/assets/logos/chromeTools.png', alt:'devTools'},    
        ]
    }
]

export const projects=[
    {
        name:'travelPocket',
        overview:'A convenient application that allows users to select one of thousands cities in the world and see what is happening for that city in just one click. Users will also be able to select any date and see the top destinations (domestic/international) from that city.',
        features:[
            'Google Map API to see the location of the airport that serves the city',
            "Youtube API to see the top trending videos in the country",
            "Top destinations (include airlines, ticket prices and booking links)",
            "Weather, safety info etc..."

        ],
        links:[
            {name:'Live', url:'https://duyluu90.github.io/API-HACK-CAPSTONE/'},
            {name:'Github', url:'https://github.com/DuyLuu90/API-HACK-CAPSTONE'}

        ],
        screenshots:[
            {description:'Landing Page', src:'/assets/screenshots/travelPocket/landingPage.PNG'},
            {description:'Destination Info', src:'/assets/screenshots/travelPocket/cityPage.PNG'},
            {description:'Flight Results', src:'/assets/screenshots/travelPocket/flights.PNG'},
        ]
    },
    {
        name:'dramaPedia',
        overview:'This is my first full stack capstone, as a junior Developer, to demonstrate my mastery of React, Node and PostgresSQL, . For this capstone, I built both the client and the API to support the app. Inspired by many awesome online movie websites, my app allows users to see a variety of Films/TV Series from many countries around the world. For user convenience, my app has feature to sort them by genres, year and country of origin.',
        features:[
            'Movie details, user pages, artist pages',
            'Create, edit, delete user info',
            'Post, edit, delete, rate(upvote,downvote) movie reviews',
            'Data protection (bcerypt, jwt)',
            'FOR ADMIN: data management, publish/ubpublish a movie, block/unblock a user'
        ],
        links:[
            {name:'Live', url:'https://drama-pedia.vercel.app/'},
            {name:'Client', url:'https://github.com/DuyLuu90/First-Capstone-Client'},
            {name:'Server', url:'https://github.com/DuyLuu90/First-Capstone-Server'},

        ],
        screenshots:[
            {description:'Movie Page', src:'/assets/screenshots/dramaPedia/moviePage.PNG'},
            {description:'Artist Page', src:'/assets/screenshots/dramaPedia/artistPage.PNG'},
            {description:'Admin Page', src:'/assets/screenshots/dramaPedia/adminPage.PNG'},
        ]
    },
    {
        name:'myCalories',
        overview:'This app will help you keep track of what you eat during the day, the total calories you eat in a day, and the total you eat in a month. We also provide you with links to additional resources to pursure your fitness goals',
        features:[
            'Per-day tracking of breakfast,lunch and dinner',
            "Calendar allows easy access to daily meals and monthly calorie total",
            "Username/password retrieval"
        ],
        links:[
            {name:'Live', url:'https://calorie-counter-client.vercel.app/'},
            {name:'Client', url:'https://github.com/DuyLuu90/myCalories-client'},
            {name:'Server', url:'https://github.com/DuyLuu90/myCalories-server'},
        ],
        screenshots:[
            {description:'Home Page', src:'/assets/screenshots/myCalories/homePage.PNG'},
            {description:'Login Page', src:'/assets/screenshots/myCalories/loginPage.PNG'},
            {description:'User Page', src:'/assets/screenshots/myCalories/userPage.PNG'},
        ]
    },
]

