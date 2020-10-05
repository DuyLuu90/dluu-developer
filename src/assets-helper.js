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
        overview:'As I called myself a hodophile, I always wanted to build an app that would allow me and other users to choose one of the thousands of cities in the world and see what was happening for that city in just one click. With travelPocket, users will also be able to choose any date and see the top destinations (domestic/international) from that city.',
        features:[
            'Google Map API to see the location of the airport that serves the city',
            "Youtube API to see the top trending videos in the country",
            "Top destinations (include airlines, ticket prices, and booking links)",
            "Weather, safety info, etc..."
        ],
        techs:[
            'jQuery','HTML5','CSS3','Third party APIs'
        ],
        links:[
            {name:'LIVE', url:'https://duyluu90.github.io/API-HACK-CAPSTONE/'},
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
        overview:'Inspired by many awesome online movie applications, dramaPEDIA allows users to see a variety of Films/TV Series from many countries around the world. Users will be able to create new accounts and have their own personal pages where they can save their favorite movies. After they register, they can rate, and post their reviews for a specific movie, as well as to interact with other users.',
        features:[
            'Movie details, user pages, artist pages',
            'Create, edit, delete the user info',
            'Post, edit, delete, rate(upvote,downvote) movie reviews',
            'Data protection (bcrypt, json web token)',
            'FOR ADMIN: data management, publish/unpublish a movie, block/unblock a user'
        ],
        techs:[
            'React','Node','PostgreSQL','dBeaver','CSS3'
        ],
        links:[
            {name:'LIVE', url:'https://drama-pedia.vercel.app/'},
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
        overview:'myCalories is an app that will help you keep track of what you eat during the day, the total calories you eat in a day, and the total you eat in a month. We also provide you with links to additional resources to pursue your fitness goals',
        features:[
            'Per-day tracking of breakfast,lunch and dinner',
            "The calendar allows easy access to daily meals and monthly calorie total",
            "Username/password retrieval"
        ],
        techs:[
            'React','Yarn', 'Node','PostgreSQL','dBeaver','CSS3'
        ],
        links:[
            {name:'LIVE', url:'https://calorie-counter-client.vercel.app/'},
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

