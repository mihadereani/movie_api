let movies = [
  {
    MovieID: 1,
    Title: 'The Godfather',
    Description:
      'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    Genre: {
      Name: 'Crime',
      Description:
        'Crime films, in the broadest sense, is a film genre inspired by and analogous to the crime fiction literary genre. Films of this genre generally involve various aspects of crime and its detection. Stylistically, the genre may overlap and combine with many other genres, such as drama or gangster film, but also include comedy, and, in turn, is divided into many sub-genres, such as mystery, suspense or noir.',
    },
    Director: {
      Name: 'Francis Ford Coppola',
      Bio: "Francis Ford Coppola is an American film director, producer and screenwriter. He is widely acclaimed as one of Hollywood's most celebrated and influential film directors. He epitomized the group of filmmakers known as the New Hollywood, which included George Lucas, Martin Scorsese, Robert Altman, Woody Allen and William Friedkin, who emerged in the early 1970s with unconventional ideas that challenged contemporary filmmaking..",
      Movies: ['Apocalypse Now', 'The Conversation', 'The Godfather'],
      Birth: '1939-04-07',
      Death: '',
    },
    ImagePath:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
    Actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    Featured: false,
  },

  {
    MovieID: 2,
    Title: 'Apocalypse Now',
    Description:
      'At the height of the Vietnam war, Captain Benjamin Willard is sent on a dangerous mission that, officially, "does not exist, nor will it ever exist." His goal is to locate - and eliminate - a mysterious Green Beret Colonel named Walter Kurtz, who has been leading his personal army on illegal guerrilla missions into enemy territory.',
    Genre: {
      Name: 'War',
      Description:
        'War film is a film genre concerned with warfare, typically about naval, air, or land battles, with combat scenes central to the drama. It has been strongly associated with the 20th century. The fateful nature of battle scenes means that war films often end with them. Themes explored include combat, survival and escape, camaraderie between soldiers, sacrifice, the futility and inhumanity of battle, the effects of war on society, and the moral and human issues raised by war. War films are often categorized by their milieu, such as the Korean War; the most popular subject is the Second World War. The stories told may be fiction, historical drama, or biographical. Critics have noted similarities between the Western and the war film.',
    },
    Director: {
      Name: 'Francis Ford Coppola',
      Bio: "Francis Ford Coppola is an American film director, producer and screenwriter. He is widely acclaimed as one of Hollywood's most celebrated and influential film directors. He epitomized the group of filmmakers known as the New Hollywood, which included George Lucas, Martin Scorsese, Robert Altman, Woody Allen and William Friedkin, who emerged in the early 1970s with unconventional ideas that challenged contemporary filmmaking..",
      Movies: ['Apocalypse Now', 'The Conversation', 'The Godfather'],
      Birth: '1939-04-07',
      Death: '',
    },
    ImagePath:
      'https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg',
    Actors: ['Martin Sheen', 'Marlon Brando', 'Robert Duvall'],
    Featured: false,
  },

  {
    MovieID: 3,
    Title: 'The Thin Red Line',
    Description:
      'The story of a group of men, an Army Rifle company called C-for-Charlie, who change, suffer, and ultimately make essential discoveries about themselves during the fierce World War II battle of Guadalcanal. It follows their journey, from the surprise of an unopposed landing, through the bloody and exhausting battles that follow, to the ultimate departure of those who survived.',
    Genre: {
      Name: 'War',
      Description:
        'War film is a film genre concerned with warfare, typically about naval, air, or land battles, with combat scenes central to the drama. It has been strongly associated with the 20th century. The fateful nature of battle scenes means that war films often end with them. Themes explored include combat, survival and escape, camaraderie between soldiers, sacrifice, the futility and inhumanity of battle, the effects of war on society, and the moral and human issues raised by war. War films are often categorized by their milieu, such as the Korean War; the most popular subject is the Second World War. The stories told may be fiction, historical drama, or biographical. Critics have noted similarities between the Western and the war film.',
    },
    Director: {
      Name: 'Terrence Malick',
      Bio: "Terrence Malick (born November 30, 1943) is an American film director, screenwriter, and producer. In a career spanning almost four decades, Malick has directed nine feature films.\
    Malick is known for his singular style that combines loose narrative and editing structure with spiritual themes. Many of his films are critically acclaimed, with some considering The Tree of Life to be a 21st century masterpiece. Malick's 1998 film The Thin Red Line was nominated for an Academy Award for both Best Adapted Screenplay and Best Director.",
      Movies: [
        'Badlands',
        'Days of Heaven',
        'The Tree of Life',
        'The Thin Red Line',
      ],
      Birth: '1943-11-30',
      Death: '',
    },
    ImagePath:
      'https://m.media-amazon.com/images/M/MV5BYjEzMTM2NjAtNWFmZC00MTVlLTgyMmQtMGQyNTFjZDk5N2NmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_FMjpg_UX1000_.jpg',
    Actors: ['Jim Caviezel', 'Sean Penn', 'Nick Nolte'],
    Featured: false,
  },

  {
    MovieID: 4,
    Title: "One Flew Over the Cuckoo's Nest",
    Description:
      'In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.',
    Genre: {
      Name: 'Drama',
      Description:
        'In film and television, dramais a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.\
    All forms of cinema or television that involve fictional stories are forms of drama in the broader sense if their storytelling is achieved by means of actors who represent (mimesis) characters. In this broader sense, drama is a mode distinct from novels, short stories, and narrative poetry or songs. In the modern era before the birth of cinema or television, "drama" within theatre was a type of play that was neither a comedy nor a tragedy. It is this narrower sense that the film and television industries, along with film studies, adopted.',
    },
    Director: {
      Name: 'Milos Forman',
      Bio: "Milos Forman studied screen-writing at the Prague Film Academy (F.A.M.U.). In his Czechoslovakian films, Cerný Petr (1964), Lásky jedné plavovlásky (1965), and Horí, má panenko (1967), he created his own style of comedy. During the invasion of his country by the troops of the Warsaw pact in the summer of 1968 to stop the Prague spring, he left Europe for the United States. In spite of difficulties, he filmed Taking Off (1971) there and achieved his fame later with One Flew Over the Cuckoo's Nest (1975) adapted from the novel of Ken Kesey, which won five Oscars including one for direction. Other important films of Milos Forman were the musical Hair (1979) and his biography of Wolfgang Amadeus Mozart, Amadeus (1984), which won eight Oscars.",
      Movies: [
        'Amadeus',
        'The People vs. Larry Flynt',
        'Hair',
        "One Flew Over the Cuckoo's Nest",
      ],
      Birth: '1932-02-18',
      Death: '2018-04-13',
    },
    ImagePath:
      'https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
    Actors: ['Jack Nicholson', 'Louise Fletcher', 'Michael Berryman'],
    Featured: false,
  },

  {
    MovieID: 5,
    Title: 'Hair',
    Description:
      "Claude Bukowski leaves the family ranch in Oklahoma for New York where he is rapidly embraced into the hippie group of youngsters led by Berger, yet he's already been drafted. He soon falls in love with Sheila Franklin, a rich girl but still a rebel inside.",
    Genre: {
      Name: 'Musical',
      Description:
        'Musical film is a film genre in which songs by the characters are interwoven into the narrative, sometimes accompanied by singing and dancing. The songs usually advance the plot or develop the film\'s characters, but in some cases, they serve merely as breaks in the storyline, often as elaborate "production numbers".\
    The musical film was a natural development of the stage musical after the emergence of sound film technology. Typically, the biggest difference between film and stage musicals is the use of lavish background scenery and locations that would be impractical in a theater. Musical films characteristically contain elements reminiscent of theater; performers often treat their song and dance numbers as if a live audience were watching. In a sense, the viewer becomes the diegetic audience, as the performer looks directly into the camera and performs to it.',
    },
    Director: {
      Name: 'Milos Forman',
      Bio: "Milos Forman studied screen-writing at the Prague Film Academy (F.A.M.U.). In his Czechoslovakian films, Cerný Petr (1964), Lásky jedné plavovlásky (1965), and Horí, má panenko (1967), he created his own style of comedy. During the invasion of his country by the troops of the Warsaw pact in the summer of 1968 to stop the Prague spring, he left Europe for the United States. In spite of difficulties, he filmed Taking Off (1971) there and achieved his fame later with One Flew Over the Cuckoo's Nest (1975) adapted from the novel of Ken Kesey, which won five Oscars including one for direction. Other important films of Milos Forman were the musical Hair (1979) and his biography of Wolfgang Amadeus Mozart, Amadeus (1984), which won eight Oscars.",
      Movies: [
        'Amadeus',
        'The People vs. Larry Flynt',
        'Hair',
        "One Flew Over the Cuckoo's Nest",
      ],
      Birth: '1932-02-18',
      Death: '2018-04-13',
    },
    ImagePath:
      'https://m.media-amazon.com/images/M/MV5BODUzNjUzNzIzM15BMl5BanBnXkFtZTcwMjc4MjkzNA@@._V1_FMjpg_UX1000_.jpg',
    Actors: ['John Savage', 'Treat Williams', "Beverly D'Angelo"],
    Featured: false,
  },

  {
    MovieID: 6,
    Title: 'Inception',
    Description:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
    Genre: {
      Name: 'Action',
      Description:
        'Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats. The genre tends to feature a mostly resourceful hero struggling against incredible odds, which include life-threatening situations, a dangerous villain, or a pursuit which usually concludes in victory for the hero.\
    Advancements in computer-generated imagery (CGI) have made it cheaper and easier to create action sequences and other visual effects that required the efforts of professional stunt crews in the past. However, reactions to action films containing significant amounts of CGI have been mixed, as some films use CGI to create unrealistic, highly unbelievable events.[1] While action has long been a recurring component in films, the "action film" genre began to develop in the 1970s along with the increase of stunts and special effects.',
    },
    Director: {
      Name: 'Christopher Nolan',
      Bio: 'Born and raised in London, Nolan developed an interest in filmmaking from a young age. After studying English literature at University College London, he made his feature debut with Following (1998). Nolan gained international recognition with his second film, Memento (2000), for which he was nominated for the Academy Award for Best Original Screenplay. He transitioned from independent to studio filmmaking with Insomnia (2002), and found further critical and commercial success with The Dark Knight Trilogy (2005-2012), The Prestige (2006), and Inception (2010), which received eight Oscar nominations, including for Best Picture and Best Original Screenplay. This was followed by Interstellar (2014), Dunkirk (2017), and Tenet (2020). For Dunkirk, he earned an Academy Award nomination for Best Picture and his first nomination for Best Director.',
      Movies: [],
      Birth: '1970-07-30',
      Death: '',
    },
    ImagePath:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
    Actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
    Featured: false,
  },

  {
    MovieID: 7,
    Title: 'The Wolf of Wall Street',
    Description:
      'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
    Genre: {
      Name: 'Biography',
      Description:
        "A biographical film or biopic is a film that dramatizes the life of a non-fictional or historically-based person or people. Such films show the life of a historical person and the central character's real name is used. They differ from docudrama films and historical drama films in that they attempt to comprehensively tell a single person's life story or at least the most historically important years of their lives.",
    },
    Director: {
      Name: 'Martin Scorsese',
      Bio: "Martin Charles Scorsese is an American film director, producer, screenwriter and actor. He is the recipient of many accolades.\
    Scorsese received an MA from New York University's Steinhardt School of Culture, Education, and Human Development in 1968. His directorial debut, Who's That Knocking at My Door (1967), was accepted into the Chicago Film Festival. In the 1970s and 1980s decades, Scorsese emerged as one of the major figures of the New Hollywood era. Scorsese's films, much influenced by his Italian-American background and upbringing in New York City, center on macho-posturing insecure men and explore crime, machismo, nihilism, and Catholic concepts of guilt and redemption.[3][4] His trademark styles include extensive use of slow motion and freeze frames, graphic depictions of extreme violence, and liberal use of profanity.",
      Movies: [
        'Taxi Driver',
        'Mean Streets',
        'Goodfellas',
        'The Age of Innocence',
      ],
      Birth: '1942-11-17',
      Death: '',
    },
    ImagePath:
      'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_FMjpg_UX1000_.jpg',
    Actors: ['Leonardo DiCaprio', 'Jonah Hill', 'Margot Robbie'],
    Featured: false,
  },

  {
    MovieID: 8,
    Title: 'Slumdog Millionaire',
    Description:
      'A Mumbai teenager reflects on his life after being accused of cheating on the Indian version of "Who Wants to be a Millionaire?".',
    Genre: {
      Name: 'Musical',
      Description:
        'Musical film is a film genre in which songs by the characters are interwoven into the narrative, sometimes accompanied by singing and dancing. The songs usually advance the plot or develop the film\'s characters, but in some cases, they serve merely as breaks in the storyline, often as elaborate "production numbers".\
    The musical film was a natural development of the stage musical after the emergence of sound film technology. Typically, the biggest difference between film and stage musicals is the use of lavish background scenery and locations that would be impractical in a theater. Musical films characteristically contain elements reminiscent of theater; performers often treat their song and dance numbers as if a live audience were watching. In a sense, the viewer becomes the diegetic audience, as the performer looks directly into the camera and performs to it.',
    },
    Director: {
      Name: 'Danny Boyle',
      Bio: "Boyle's debut film Shallow Grave won the BAFTA Award for Best British Film. The British Film Institute ranked Trainspotting the 10th greatest British film of the 20th century. Boyle's 2008 film Slumdog Millionaire, the most successful British film of the decade, was nominated for ten Academy Awards and won eight, including the Academy Award for Best Director. He also won the Golden Globe and BAFTA Award for Best Director. Boyle was presented with the Extraordinary Contribution to Filmmaking Award at the 2008 Austin Film Festival, where he also introduced that year's AFF Audience Award Winner Slumdog Millionaire.\
    In 2012, Boyle was the artistic director for Isles of Wonder, the opening ceremony of the 2012 Summer Olympics.  He was subsequently offered a knighthood as part of the New Year Honours but declined due to his republican beliefs. In 2014, it was announced that Boyle would become a patron of HOME in Manchester.",
      Movies: [
        '127 Hours',
        '28 Days Later...',
        'Slumdog Millionaire',
        'Shallow Grave',
      ],
      Birth: '1956-10-20',
      Death: '',
    },
    ImagePath:
      'https://m.media-amazon.com/images/M/MV5BZmNjZWI3NzktYWI1Mi00OTAyLWJkNTYtMzUwYTFlZDA0Y2UwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
    Actors: ['Dev Patel', 'Freida Pinto', 'Saurabh Shukla'],
    Featured: false,
  },

  {
    MvieID: 9,
    Title: 'The Truman Show',
    Description:
      'An insurance salesman discovers his whole life is actually a reality TV show.',
    Genre: {
      Name: 'Comedy',
      Description:
        'A comedy film is a category of film which emphasizes humor. These films are designed to make the audience laugh through amusement. Films in this style traditionally have a happy ending (black comedy being an exception). One of the oldest genres in film—and derived from the classical comedy in theatre. Some of the earliest silent films were comedies, as slapstick comedy often relies on visual depictions, without requiring sound. When sound films became more prevalent during the 1920s, comedy films took another swing, as laughter could result from burlesque situations but also dialogue.\
    Comedy, compared with other film genres, puts much more focus on individual stars, with many former stand-up comics transitioning to the film industry due to their popularity.',
    },
    Director: {
      Name: 'Peter Weir',
      Bio: "Peter Lindsay Weir is a retired Australian film director. He was a leading figure in the Australian New Wave cinema movement (1970-1990), with films such as the mystery drama Picnic at Hanging Rock (1975), the supernatural thriller The Last Wave (1977) and the historical drama Gallipoli (1981). The climax of Weir's early career was the $6 million multi-national production The Year of Living Dangerously (1982).\
    After the success of The Year of Living Dangerously, Weir directed a diverse group of American and international films covering most genres including Academy Award-nominated films such as the thriller Witness (1985), the drama Dead Poets Society (1989), the romantic comedy Green Card (1990), the social science fiction comedy-drama The Truman Show (1998) and the epic historical drama Master and Commander: The Far Side of the World (2003). For his work on these five films, Weir personally accrued six Academy Award nominations as either a director, writer or producer.",
      Movies: [
        'Master and Commander: The Far Side of the World',
        'The Way Back',
        'Witness',
        'Dead Poets Society',
      ],
      Birth: '1944-08-21',
      Death: '',
    },
    ImagePath:
      'https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_FMjpg_UX1000_.jpg',
    Actors: ['Jim Carrey', 'Ed Harris', 'Laura Linney'],
    Featured: false,
  },

  {
    MovieID: 10,
    Title: 'The Mask',
    Description:
      'Bank clerk Stanley Ipkiss is transformed into a manic superhero when he wears a mysterious mask.',
    Genre: {
      Name: 'Comedy',
      Description:
        'A comedy film is a category of film which emphasizes humor. These films are designed to make the audience laugh through amusement. Films in this style traditionally have a happy ending (black comedy being an exception). One of the oldest genres in film—and derived from the classical comedy in theatre. Some of the earliest silent films were comedies, as slapstick comedy often relies on visual depictions, without requiring sound. When sound films became more prevalent during the 1920s, comedy films took another swing, as laughter could result from burlesque situations but also dialogue.\
      Comedy, compared with other film genres, puts much more focus on individual stars, with many former stand-up comics transitioning to the film industry due to their popularity.',
    },
    Director: {
      Name: 'Chuck Russell',
      Bio: "harles Russell is an American filmmaker and actor known for his work on several genre films.\
    Some of Russell's best known films include the slasher fantasy film A Nightmare on Elm Street 3: Dream Warriors, the 1988 remake of the 1958 monster horror film The Blob, the fantasy superhero comedy film The Mask, the action film Eraser, and the action-adventure The Scorpion King. Russell also executive produced the critically acclaimed Michael Mann-directed neo-noir action thriller Collateral.",
      Movies: [
        'The Scorpion King',
        'A Nightmare on Elm Street 3: Dream Warriors',
        'The Mask',
        'Eraser',
      ],
      Birth: '1958-05-09',
      Death: '',
    },
    ImagePath:
      'https://m.media-amazon.com/images/M/MV5BOWExYjI5MzktNTRhNi00Nzg2LThkZmQtYWVkYjRlYWI2MDQ4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg',
    Actors: ['Jim Carrey', 'Cameron Diaz', 'Peter Riegert'],
    Featured: false,
  },
];
db.movies.insertMany(movies);

let users = [
  {
    Username: 'Miha Vidanovski',
    Password: 'zfghsdfgh',
    Email: 'mihavidanovski@gmail',
    Birthday: new Date('1980-12-30'),
    FavoriteMovies: [1, 3, 5],
  },

  {
    Username: 'Jana Pretnar',
    Password: 'fdhadhath',
    Email: 'janapretnar@outlook.com',
    Birthday: new Date('1974-08-22'),
    FavoriteMovies: [5, 8],
  },

  {
    Username: 'Janez Schmid',
    Password: 'zfxgzdfhg',
    Email: 'schmid007@gmail.com',
    Birthday: new Date('1933-8-28'),
    FavoriteMovies: [1, 4, 7],
  },

  {
    Username: 'Jure Velikonja',
    Password: 'arhe56dfgh',
    Email: 'jurevelikonjaupdated@yahoo.com',
    Birthday: new Date('1990-07-11'),
    FavoriteMovies: [2, 3],
  },

  {
    Username: 'Meta Kreutz',
    Password: 'adhyth',
    Email: 'metakreutz@outlook',
    Birthday: new Date('1981-02-10'),
    FavoriteMovies: [5],
  },
];
db.users.insertMany(users);
