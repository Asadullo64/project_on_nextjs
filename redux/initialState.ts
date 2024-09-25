import { VisitedPlacesState } from "./type";

export const initialState: VisitedPlacesState = {
  places: [
    {
      id: 1,
      name: "Great Wall of China",
      visited: false,
      description: "A historic wall...",
      description1: "The Great Wall of China is one of the most impressive architectural feats in history, stretching over 13,000 miles (21,196 kilometers) across northern China. Originally built to protect Chinese states from invasions by nomadic tribes and military incursions, the wall's construction began as early as the 7th century BC and continued through various dynasties, with significant expansions during the Ming Dynasty (1368–1644)",
      description2: "Made from a variety of materials, including stone, brick, tamped earth, and wood, the wall weaves across rugged mountains, deserts, and grasslands. It is not a single, continuous wall but rather a series of fortifications, towers, and passages. Many sections feature watchtowers, signaling stations, and barracks to house soldiers who defended the wall.",
      imageUrl: "/images/china.jfif",
    },
    {
      id: 2,
      name: "Eiffel Tower",
      visited: false,
      description: "An iconic tower...",
      description1: "The Eiffel Tower is one of the most iconic landmarks in the world, located in Paris, France. Designed by the engineer Gustave Eiffel, it was completed in 1889 as the entrance arch for the 1889 World's Fair, held to celebrate the 100th anniversary of the French Revolution. Standing at 330 meters (1,083 feet) tall, the Eiffel Tower was the tallest man-made structure in the world at the time of its construction and held that title for 41 years.",
      description2: "The tower is made of wrought iron and consists of three levels that are accessible to the public. The first and second levels feature restaurants and shops, while the third level is an observation deck offering panoramic views of Paris. The tower is known for its unique lattice design, which combines strength and elegance.",
      imageUrl: "/images/eiffel.jfif",
    },
    {
      id: 3,
      name: "Colosseum",
      visited: false,
      description: "An ancient amphitheater...",
      description1: "The Colosseum, also known as the Flavian Amphitheatre, is an ancient Roman structure located in the heart of Rome, Italy. It is one of the greatest architectural and engineering achievements of the Roman Empire and the largest amphitheater ever built. Construction began under Emperor Vespasian in AD 72 and was completed by his son Titus in AD 80. Later modifications were made under Emperor Domitian, making it a key symbol of the Flavian dynasty.",
      description2: "The Colosseum could hold between 50,000 to 80,000 spectators and was primarily used for gladiatorial contests, public spectacles like animal hunts, executions, mock sea battles (by flooding the arena), and dramas based on Classical mythology. Its elliptical design, standing at around 48 meters (157 feet) high, allowed for optimal viewing for all attendees. The complex system of underground passages, called the hypogeum, housed animals, gladiators, and stage machinery, enabling dramatic entrances and events.",
      imageUrl: "/images/colosseum.jfif",
    },
    {
      id: 4,
      name: "Machu Picchu",
      visited: false,
      description: "An ancient Incan city...",
      description1: "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge. Often referred to as the 'Lost City of the Incas,' it is one of the most famous archaeological sites in the world and a UNESCO World Heritage Site. Its exact purpose remains a mystery, but it is believed to have been a royal estate or religious site.",
      description2: "Machu Picchu is renowned for its sophisticated dry-stone construction, agricultural terraces, and stunning panoramic views of the surrounding mountains and valleys. The site is accessed via a challenging trek along the Inca Trail or by train from nearby towns.",
      imageUrl: "/images/machu_picchu.jfif",
    },
    {
      id: 5,
      name: "Statue of Liberty",
      visited: false,
      description: "A symbol of freedom...",
      description1: "The Statue of Liberty, a gift from France to the United States, was dedicated on October 28, 1886. Located on Liberty Island in New York Harbor, this colossal statue represents Libertas, the Roman goddess of freedom. Standing at 305 feet (93 meters) tall, including its pedestal, it is an iconic symbol of democracy and hope.",
      description2: "The statue was designed by French sculptor Frédéric Auguste Bartholdi and engineered by Gustave Eiffel, the same engineer behind the Eiffel Tower. Visitors can climb to the crown for a breathtaking view of the New York skyline and harbor.",
      imageUrl: "/images/statue_of_liberty.jfif",
    },
    {
      id: 6,
      name: "Taj Mahal",
      visited: false,
      description: "A mausoleum of love...",
      description1: "The Taj Mahal is an ivory-white marble mausoleum located in Agra, India. Commissioned in 1632 by Mughal Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal, it is widely regarded as one of the finest examples of Mughal architecture, blending elements from Islamic, Persian, Ottoman Turkish, and Indian styles.",
      description2: "The Taj Mahal is surrounded by beautiful gardens, reflecting pools, and intricate stone inlay work. It was designated as a UNESCO World Heritage Site in 1983 and attracts millions of visitors each year who come to admire its stunning beauty and romantic history.",
      imageUrl: "/images/taj_mahal.jpg",
    },
    
  ],
};
