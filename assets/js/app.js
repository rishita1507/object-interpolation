

const book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    year: 1988,
    pages: 197,
    publisher: "HarperCollins",
    language: "English",
    isbn: "978-0061122415",
    price: 15,
    rating: 4.7
};

//   The Alchemist by Paulo Coelho is a Fiction book published in 1988.  
// It has 197 pages and is available in English.  
// Published by HarperCollins, the book's ISBN is 978-0061122415.  
// It is priced at $15 and holds a rating of 4.7 stars.
var book1 = book.title + " by " + book.author + " is a " + book.genre + " book published in " + book.year + "<br>" +
    " it has " + book.pages + " pqges and is available in " + book.language + "<br>" +
    "publiesd by " + book.publisher + ", the book's ISBN is " + book.isbn + "<br>" +
    " it is Priced at " + book.price + " and holds a rating of " + book.rating
console.log(book1)
var info = document.getElementById("info")
info.innerHTML = book1

const flight = {
    airline: "Emirates",
    flightNumber: "EK502",
    departure: "Dubai",
    destination: "Mumbai",
    duration: 3.5,
    gate: "B12",
    terminal: "3",
    seatClass: "Business",
    boardingTime: "14:30",
    price: 800
};

//   Flight EK502 by Emirates departs from Dubai to Mumbai.  
// The flight duration is 3.5 hours. Boarding is at 14:30 from gate B12, terminal 3.  
// Class: Business. Ticket Price: $800.
var flight1 = "flight " + flight.flightNumber + " by " + flight.airline + " depsryd from " + flight.departure + " to " + flight.destination + "<br>" +
    " The flight duration is " + flight.duration + " Boarding is at " + flight.boardingTime + " from gate " + flight.gate + " terminal 3." + "<br>" +
    "Class: " + flight.seatClass + "Ticket perice: " + flight.price
console.log(flight1)
var info1 = document.getElementById("info1")
info1.innerHTML = flight1


const laptop = {
    brand: "Dell",
    model: "XPS 15",
    processor: "Intel i9",
    ram: "32GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 4070",
    display: "15.6-inch 4K",
    weight: 2.1,
    batteryLife: 12,
    price: 2300
};

//   Dell XPS 15 features a Intel i9 processor, 32GB of RAM, and 1TB SSD storage.  
// It includes a NVIDIA RTX 4070 GPU with a 15.6-inch 4K display.  
// Weighing 2.1 kg, it has a battery life of 12 hours. Priced at $2300.
var laptop2 = laptop.brand + laptop.model + " features a " + laptop.processor + " processor " + laptop.ram + " of RAM and " + laptop.storage + " storage" + "<br>" +
    " It includes a " + laptop.gpu + " GPU with a " + laptop.display + " display " + "<br>" +
    " wighing " + laptop.weight + ", it has a battery life of " + laptop.batteryLife + "Priced at " + laptop.price
console.log(laptop2)
var info2 = document.getElementById("info2")
info2.innerHTML = laptop2


const restaurant = {
    name: "The Italian Kitchen",
    cuisine: "Italian",
    place: "New York City",
    rating: 4.6,
    capacity: 80,
    priceRange: "$$$",
    openTime: "11:00 AM",
    closeTime: "11:00 PM",
    reservations: true,
    vegetarianOptions: true
};

//   The Italian Kitchen offers authentic Italian cuisine in New York City.  
// With a rating of 4.6 stars, it can accommodate up to 80 guests.  
// Price range: $$$. Open from 11:00 AM to 11:00 PM.  
// Reservations: Available. Vegetarian options: Yes.
var result = restaurant.name + " offers authentic " + restaurant.cuisine + " cuisine in " + restaurant.place + "<br>" +
    " with a rating of " + restaurant.rating + " stars, it can accommodate up to " + restaurant.capacity + " guests " + "<br>" +
    " price range : " + restaurant.priceRange + " open from " + restaurant.openTime + " to " + restaurant.closeTime + "<br>" +
    " Reservations : Availabe " + " vegatarian options : " + restaurant.vegetarianOptions
console.log(result)
var info3 = document.getElementById("info3")
info3.innerHTML = result


const player = {
    name: "Lionel Messi",
    age: 36,
    team: "Inter Miami",
    position: "Forward",
    nationality: "Argentina",
    goals: 812,
    assists: 350,
    appearances: 1020,
    height: "1.70m",
    awards: 7
};

//   Lionel Messi, aged 36, plays for Inter Miami as a Forward. He has scored 812 goals and made 350 assists in 1020 appearances.  
// Height: 1.70m. Awards won: 7 Ballon d'Or titles.
var player1 = player.name + ", aged " + player.age + ", plays for " + player.team + " as a forward . he has scored " + player.goals + " goals and made " + player.assists + " assists in " + player.appearances + " appearance " + "<br>" +
    " Height : " + player.height + ".Awards won: " + player.awards + "Ballon d'or titlies"
console.log(player1)
var info4 = document.getElementById("info4")
info4.innerHTML = player1

const event = {
    name: "Tech Innovators Conference",
    date: "September 14, 2024",
    palce: "Silicon Valley",
    speakers: 15,
    attendees: 2000,
    durationDays: 3,
    host: "Google",
    sponsor: "Microsoft",
    ticketPrice: 500,
    registrationOpen: true
};

//   Tech Innovators Conference will be held on September 14, 2024 at Silicon Valley.  
// Hosted by Google and sponsored by Microsoft, it features 15 speakers and 2000 attendees.  
// The conference lasts 3 days. Ticket price: $500. Registration: Open.
var event2 = event.name + " will be held on " + event.date + " at " + event.palce + "<br>" +
    " Hosted by " + event.host + " and sponsored by " + event.sponsor + ", features " + event.speakers + " speakers and " + event.attendees + " attendess." + "<br>" +
    "The conference lasts " + event.durationDays + " days. ticket price : " + event.ticketprice + " registration: " + event.registrationOpen
console.log(event2)
var info5 = document.getElementById("info5")
info5.innerHTML = event2



const car = {
    brand: "Tesla",
    model: "Model S",
    year: 2023,
    range: "405 miles",
    acceleration: "0-60 mph in 1.99s",
    topSpeed: "200 mph",
    seats: 5,
    battery: "100 kWh",
    price: 95000,
    autopilot: true
};

//   Tesla Model S (2023) has a range of 405 miles with a top speed of 200 mph.  
// It accelerates from 0-60 mph in 1.99s, seats 5 people, and costs $95000. Autopilot: Yes.
var car1 = car.brand + car.model + car.year + " has a range of " + car.range + " with a top speed of " + car.topSpeed + "<br>" +
    " it accelerates from " + car.acceleration + " in 1.99s, seats " + car.seats + " people , and cost " + car.price + ".Auropilat:yes"
console.log(car1)
var info6 = document.getElementById("info6")
info6.innerHTML = car1

const hotel = {
    name: "Grand Hyatt",
    palce: "Los Angeles",
    stars: 5,
    roomType: "Suite",
    capacity: 4,
    pricePerNight: 450,
    amenities: "Pool, Spa, Gym",
    checkIn: "3:00 PM",
    checkOut: "12:00 PM",
    petsAllowed: true
};


//   Welcome to Grand Hyatt in Los Angeles. This 5-star hotel offers Suite rooms.  
// Capacity: 4 guests. Amenities include Pool, Spa, Gym.  
// Price per night: $450. Check-in at 3:00 PM, Check-out at 12:00 PM. Pets allowed: Yes.
var hotel1 = " welcome to " + hotel.name + " in " + hotel.palce + ".This " + hotel.stars + "-stars hotel offer " + hotel.roomType + " rooms " + "<br>" +
    " capacity: " + hotel.capacity + " gusts.Amenities includes " + hotel.amenities + "<br>" +
    " price per night :" + hotel.pricePerNight + ".check at " + hotel.checkIn + "," + hotel.checkOut + "pets allowed : " + hotel.petsAllowed
console.log(hotel1)
var info7 = document.getElementById("info7")
info7.innerHTML = hotel1


const phone = {
    brand: "Apple",
    model: "iPhone 15 Pro",
    storage: "512GB",
    color: "Space Black",
    camera: "48MP",
    battery: "4200mAh",
    display: "6.1-inch OLED",
    processor: "A17 Pro",
    price: 1299,
    weight: "206g"
};

//   Apple iPhone 15 Pro comes with 512GB of storage and a 6.1-inch OLED display.  
// It features a 48MP camera and is powered by the A17 Pro.  
// The battery capacity is 4200mAh, and it weighs 206g. Priced at $1299.
var phone1 = phone.brand + phone.model + " comes with " + phone.storage + " storeage and a " + phone.display + " display " + "<br>" +
    " It features a " + phone.camera + " and is powderd by the  " + phone.processor + "<br>" +
    " The battery capacity is " + phone.battery + " and it weighs " + phone.weight + ".priced at " + phone.price + "<br>" +
    console.log(phone1)
var info8 = document.getElementById("info8")
info8.innerHTML = phone1


const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Sci-Fi",
    releaseYear: 2010,
    duration: "2h 28m",
    rating: 8.8,
    boxOffice: "$829 million",
    language: "English",
    awards: 4,
    leadActor: "Leonardo DiCaprio"
}

//   Inception directed by Christopher Nolan is a Sci-Fi film released in 2010.  
// Starring Leonardo DiCaprio, it has a runtime of 2h 28m and holds a rating of 8.8.  
// It grossed $829 million and won 4 Academy Awards.
var movie1 = movie.title + " directed by " + movie.director + " is a " + movie.genre + " released in " + movie.releaseYear + "<br>" +
    "Starring " + movie.leadActor + ",it has a runtime of " + movie.duration + " and holds a ratimg of " + movie.rating + "<br>" +
    "It grossed " + movie.boxOffice + " million and won " + movie.awards + " Acadamy Awards "
console.log(movie1)
var info9 = document.getElementById("info9")
info9.innerHTML = movie1

const employee = {
    name: "Amit Sharma",
    age: 29,
    position: "Software Engineer",
    company: "Google",
    experience: "5 years",
    salary: 150000,
    location1: "Bangalore",
    skills: "Angular, Node.js, Python",
    projects: 12,
    performanceRating: "Excellent"
};

//   Amit Sharma, 29, works as a Software Engineer at Google.  
// He has 5 years of experience, worked on 12 projects, and earns $150000 annually.  
// Key skills: Angular, Node.js, Python. Performance rating: Excellent.
var employee2 = employee.name + employee.age + " workd as a " + employee.position + " at " + employee.company + "<br>" +
    " He has " + employee.experience + " of experience , worked on " + employee.projects + " projects ,and earns " + employee.salary + "annually" + "<br>" +
    " Key skills: " + employee.skills + " performmance rating : " + employee.performanceRating
console.log(employee2)
var info10 = document.getElementById("info10")
info10.innerHTML = employee2



const property = {
    title: "Luxury Villa",
    palce1: {
        city: "Miami",
        state: "Florida",
        zip: "33101"
    },
    specs: {
        bedrooms: 5,
        bathrooms: 4,
        area: "4500 sq ft",
        yearBuilt: 2018
    },
    price: 2500000,
    features: ["Ocean View", "Private Pool", "Smart Home"],
    agent: {
        name: "Michael Brown",
        contact: "305-555-1234"
    }
};

//   Luxury Villa located in Miami, Florida (33101)  
// offers 5 bedrooms and 4 bathrooms across 4500 sq ft.  
// Built in 2018, this property is priced at $2500000.  
// Key features include: Ocean View, Private Pool, Smart Home. For inquiries, contact Michael Brown at 305-555-1234.
var property1 = property.title + "located in " + property.palce1.city + "," + property.palce1.state + property.palce1.zip + "<br>" +
    " offers " + property.specs.bedrooms + " bedrooms and " + property.specs.bathrooms + " bathrooms across " + property.specs.area + "<br>" +
    "Built in 2018 , this propeerty is priced at " + property.price + "<br>" +
    "Key features include :" + property.features[0] + " " + property.features[1] + property.features[2] + " for inquiries contact " + property.agent.name + property.agent.contact
console.log(property1)
var info11 = document.getElementById("info11")
info11.innerHTML = property1



const product1 = {
    name: "4K Smart TV",
    brand: "Samsung",
    specs: {
        screenSize: "65 inches",
        resolution: "3840x2160",
        refreshRate: "120Hz",
        HDR: true
    },
    price: 1200,
    inStock: true,
    reviews: [
        { user: "John Doe", rating: 5, comment: "Fantastic display quality!" },
        { user: "Jane Smith", rating: 4, comment: "Great but expensive." }
    ]
};

//   Samsung 4K Smart TV with a 65 inchves 3840x2160 display  
// and 120Hz refresh rate is priced at $1200.  
// HDR support: Yes.  
// In stock: Available.  
// Recent reviews:  
// - John Doe (5★): "Fantastic display quality!"  
// - Jane Smith (4★): "Great but expensive."
var product3 = product1.brand + product1.name + " with a " + product1.specs.screenSize + " dispaly " + "<br>" +
    " and " + product1.specs.refreshRate + " refresh rate is priced at " + product1.price + "<br>" +
    "HOR support:yes" + "<br>" +
    "In stock : Available " + "<br>" +
    " Recent reviews :"
product1.reviews[0].user + "<br>" +
    product1.reviews[1].rating
console.log(product3)
var info12 = document.getElementById("info12")
info12.innerHTML = product3


const travel = {
    destination: "Tokyo, Japan",
    duration: "7 days",
    price: 1800,
    itinerary: {
        day1: "Arrival and city tour",
        day2: "Visit Mount Fuji",
        day3: "Disneyland Tokyo",
        day4: "Shopping and cultural sites",
        day5: "Day at leisure",
        day6: "Hot springs trip",
        day7: "Return flight"
    },
    hotel: {
        name: "Tokyo Hilton",
        rating: 5,
        amenities: ["Spa", "Wi-Fi", "Gym"]
    }
};

//   Travel Package to Tokyo, Japan for 7 days, priced at $1800.  
// Accommodation at Tokyo Hilton (5-star hotel) with amenities like Spa, Wi-Fi, Gym.  
// Itinerary Highlights:  
// - Day 1: Arrival and city tour  
// - Day 2: Visit Mount Fuji  
// - Day 3: Disneyland Tokyo  
// - Day 4: Shopping and cultural sites
var travel1 = " travel package to " + travel.destination + " for " + ",priced at " + travel.price + "<br>" +
    "Accommodation at " + travel.hotel.name + travel.hotel.rating + "-star hotel with  amenities like " + travel.hotel.amenities[0] + "<br>" +
    "itinerary highlights " + "<br>" +
    travel.itinerary.day1 + "<br>" +
    travel.itinerary.day2 + "<br>" +
    travel.itinerary.day3 + "<br>" +
    travel.itinerary.day4 + "<br>" +
    travel.itinerary.day5 + "<br>" +
    travel.itinerary.day6 + "<br>" +
    travel.itinerary.day7 + "<br>"


console.log(travel1)
var info13 = document.getElementById("info13")
info13.innerHTML = travel1

const course1 = {
    title: "Full-Stack Development Bootcamp",
    provider: "Coursera",
    instructor: {
        name: "Ravikiran Niturkar",
        experience: "10 years",
        specialization: "Web Development"
    },
    details: {
        duration: "9 months",
        modules: 15,
        handsOnProjects: 5
    },
    certification: true,
    price: "700$"
};

//   Full-Stack Development Bootcamp by Coursera, taught by Ravikiran Niturkar  
//   (Web Development with 10 years of experience).  
//   This 6 months course includes 15 modules and 5 hands-on projects.  
//   Certification: Yes. Price: $700.
var cousre2 = course1.title + " by " + course1.provider + ", taught by " + course1.instructor.name + "<br>" +
    course1.instructor.specialization + " with " + course1.instructor.experience + " experience " + "<br>" +
    " This " + course1.details.duration + " includes " + course1.details.modules + " modules and hands - on project " + course1.details.handsOnProjects + "<br>" +
    "Certification : " + course1.certification + ". Price:" + course1.price
console.log(cousre2)
var info14 = document.getElementById("info14")
info14.innerHTML = cousre2



const event1 = {
    guestName: "Priyanka Joshi",
    eventName: "TechConnect 2025",
    eventDate: "15th May 2025",
    time: "10:00 AM to 4:00 PM",
    venue: "Nehru Auditorium, Mumbai",
    host: "XYZ Tech Foundation",
    contact: "+91-9876543210",
    email: "events@xyztech.org"
};


//   Dear Priyanka Joshi,

// You are cordially invited to attend **TechConnect 2025** hosted by XYZ Tech Foundation.  
//  Date: 15th May 2025  
//  Time: 10:00 AM to 4:00 PM  
// Venue: Nehru Auditorium, Mumbai

// For more information, contact us at +91-9876543210 or events@xyztech.org.

// We look forward to your presence!
var event2 = "Dear " + event1.guestName + "<br>" +
    " you are conrdinally invited to attend " + event1.eventName + " hosteed by " + event1.host + "<br>" +
    "Date:" + event1.Date + "<br>" +
    "Time:" + event1.time + "<br>" +
    "venue:" + event1.venue + "<br>" +
    " for more information , contact us at " + event1.contact + " or " + event1.email + "<br>" +
    " we look forward to your persence "
console.log(event2)
var info15 = document.getElementById("info15")
info15.innerHTML = event2



const course = {
    studentName: "Ramesh Patel",
    courseTitle: "Full Stack Web Development",
    platform: "CodeCamp Online",
    enrollmentDate: "12th April 2025",
    duration: "6 months",
    fee: "₹30,000",
    mentor: "Neha Rathi",
    supportEmail: "support@codecamp.in"
};


//   Hi Ramesh Patel,

// Welcome to **Full Stack Web Development** at CodeCamp Online!  
// You enrolled on 12th April 2025, and the course will run for 6 months.

// Your assigned mentor is Neha Rathi.  
// Total Fee Paid: ₹30,000

// For support, feel free to contact us at support@codecamp.in.

// Happy Learning!
var course5 = "Hi " + course.studentName + "<br>" +
    " Welcome to " + course.courseTitle + " at " + course.platform + "<br>" +

    "you enrolled on " + course.enrollmentDate + " at the course will run for " + course.duration + "<br>" +
    " your assigned mentor is " + course.mentor + "<br>" +
    " Total fees paid :" + course.fee + "<br>" +
    " for support, feel free to conract us at " + course.supportEmail + "<br>" +
    "Happy learning"
console.log(course5)
var info16 = document.getElementById("info16")
info16.innerHTML = course5




const shipment = {
    customerName: "Nikita Arora",
    orderId: "OD1234567890",
    productName: "Samsung Galaxy M14",
    shippedDate: "10 April 2025",
    expectedDelivery: "14 April 2025",
    courier: "BlueDart",
    trackingLink: "https://bluedart.com/track/OD1234567890"
};


//   Hello Nikita Arora,

// Your order **Samsung Galaxy M14** (Order ID: OD1234567890) has been shipped on 10 April 2025 via BlueDart.

// Track your order here: https://bluedart.com/track/OD1234567890  
// Expected Delivery: 14 April 2025

// Thank you for shopping with us!
var shipment1 = " Hello " + shipment.customerName + "<br>" +
    " your order " + shipment.productName + "(" + shipment.orderId + ")" + " has been shipped on " + shipment.shippedDate + " via " + shipment.courier + "<br>" +
    "Track ypur order here: " + shipment.trackingLink + "<br>" +
    "Expecred Delivary: " + shipment.expectedDelivery + "<br>" +
    " Thank you for shopping with is !"
console.log(shipment1)
var info17 = document.getElementById("info17")
info17.innerHTML = shipment1


const appointment = {
    name: "Dr. Komal Sharma",
    patient: "Anil Mishra",
    date: "16th April 2025",
    time: "3:00 PM",
    clinic: "Healthy Life Clinic",
    address: "Plot 22, Andheri East, Mumbai",
    contact: "+91-9870001112"
};


//   Hello Anil Mishra,

// This is a gentle reminder of your appointment with **Dr. Komal Sharma** at Healthy Life Clinic.

// Date: 16th April 2025  
// Time: 3:00 PM  
// Address: Plot 22, Andheri East, Mumbai  
// Contact: +91-9870001112

// Please reach 10 minutes early. Wishing you good health!
var appointment1 = "Hello " + appointment.name + "<br>" +
    "This is a gentle reminder of your appinmtemnt with " + appointment.name + " at " + appointment.clinic + "<br>" +
    "Time:" + appointment.date + "<br>" +
    "Address:" + appointment.address + "<br>" +
    "contact:" + appointment.contact + "<br>"
console.log(appointment1)
var info18 = document.getElementById("info18")
info18.innerHTML = appointment1



const freelancer1 = {
    name: "Akash Singh",
    client: "Devika Creations",
    projectTitle: "E-commerce Website Revamp",
    technologies: ["Angular", "Node.js", "MongoDB"],
    startDate: "1st March 2025",
    endDate: "5th April 2025",
    totalPayment: "₹45,000",
    mode: "Bank Transfer"
};

//   Freelance Project Summary

// Freelancer: Akash Singh  
// Client: Devika Creations  
// Project: E-commerce Website Revamp  
// Technologies Used: Angular, Node.js, MongoDB  
// Timeline: 1st March 2025 – 5th April 2025  
// Total Payment: ₹45,000 (via Bank Transfer)

// Thank you for your contribution!
var free = " Freelance project summary." + "<br>" +
    "freelancer:" + freelancer1.name + "<br>" +
    "client:" + freelancer1.client + "<br>" +
    "project:" + freelancer1.projectTitle + "<br>" +
    "techologies:" + freelancer1.technologies + "<br>" +
    "total payment:" + freelancer1.totalPayment + "<br>" +
    " thank you for your  contribution"
console.log(free)
var info19 = document.getElementById("info19")
info19.innerHTML = free




const personalInfo = {
    name: "Rahul Patil",
    email: "rahul.patil@example.com",
    phone: "+91-9876543210",
    address: "Pune, Maharashtra, India",
    linkedIn: "linkedin.com/in/rahulpatil",
    github: "github.com/rahul-dev",
    portfolio: "rahulpatil.dev",
};

const education = {
    degree: "B.Tech in Computer Science",
    university: "VJTI Mumbai",
    year: "2020",
    cgpa: "8.7/10",
};

const skills = ["JavaScript", "Angular", "Node.js", "MongoDB", "HTML", "CSS", "Docker", "Git"];

const experience = {
    company: "TechVerse Pvt Ltd",
    position: "Frontend Developer",
    duration: "July 2021 - Present",
    achievements: [
        "Optimized page load speed by 40%",
        "Led a team of 3 developers",
        "Integrated 3rd party APIs for real-time data"
    ],
};

const certifications = ["AWS Certified Developer", "Google UX Design", "Scrum Master"];

const languages = ["English", "Hindi", "Marathi"];


//   Rahul Patil  
// Email: rahul.patil@example.com | Phone: +91-9876543210  
// Address: Pune, Maharashtra, India  
// LinkedIn: linkedin.com/in/rahulpatil | GitHub: github.com/rahul-dev | Portfolio: rahulpatil.dev

// Education:
// - B.Tech in Computer Science from VJTI Mumbai (2020), CGPA: 8.7/10

// Technical Skills: JavaScript, Angular, Node.js, MongoDB, HTML, CSS, Docker, Git

// Experience:
// - Frontend Developer at TechVerse Pvt Ltd (July 2021 - Present)
//   • Optimized page load speed by 40%
//   • Led a team of 3 developers
//   • Integrated 3rd party APIs for real-time data

// Certifications: AWS Certified Developer, Google UX Design, Scrum Master

// Languages Known: English, Hindi, Marathi
var lang = personalInfo.name + " " + "<br>" +
    "Email:" + personalInfo.email + "<br>" +
    "address:" + personalInfo.address + "<br>" +
    "linkedId:" + personalInfo.linkedIn + "<br>" +
    "Education" + education.degree + " from " + education.university + education.year + " CGPA: " + education.cgpa + "<br>" +

    "Technical Skills:" + skills + "<br>" +
    "Experience" + "<br>" +
    experience.position + " at " + experience.company + "<br>" +
    experience.achievements + "<br>" +
    certifications + "<br>" +
    languages + "<br>"


console.log(lang)

var info20 = document.getElementById("info20")
info20.innerHTML = lang


const client = {
    name: "Bhavesh Mehta",
    address: "Mumbai, India",
    email: "bhavesh@example.com",
};

const invoiceDetails = {
    invoiceNumber: "INV-2025-0042",
    date: "April 10, 2025",
    dueDate: "April 20, 2025",
};

const items = [
    { description: "Web Design", quantity: 1, unitPrice: 15000 },
    { description: "Hosting (1 year)", quantity: 1, unitPrice: 3000 },
    { description: "Maintenance", quantity: 6, unitPrice: 1000 }
];

const taxRate = 0.18;


var bill = "Invoice:" + invoiceDetails.invoiceNumber + "<br>" +
    "DAte" + invoiceDetails.date + "|" + invoiceDetails.dueDate + "<br>" +

    " Bill To:" + "<br>" +
    "client" + client.name + "<br>" +
    "address " + client.address + "<br>" +
    "Email:" + client.email + "<br>" +

    "Items" + items[0].description


" Subtotal: ₹24000"
" Tax (18%): ₹4320"
" Total: ₹28320"
console.log(bill)

var info21 = document.getElementById("info21")
info21.innerHTML = bill


const traveler = {
    name: "Siddhi Rao",
    age: 28,
    nationality: "Indian",
    passport: "M1234567",
    contact: "+91-9988776655",
};

const destination = {
    country: "Japan",
    cities: ["Tokyo", "Kyoto", "Osaka"],
    duration: "10 days",
    startDate: "May 5, 2025",
    endDate: "May 14, 2025",
};

const inclusions = ["Hotel stay", "Daily breakfast", "City tours", "Bullet train travel", "Visa assistance"];
const exclusions = ["Lunch", "Dinner", "Personal expenses", "Travel insurance"];


var plan = "Traveler:" + traveler.name + "(Age:" + traveler.age + traveler.nationality + "<br>" +
    " Passport No:" + traveler.passport + "|" + " Contact: " + traveler.content + "<br>" +

    "Your" + destination.country + " trip is confirmed! You will be visiting " + destination.cities + " over a span of " + destination.startDate + destination.endDate + "<br>" +

     "Included in your package:" + "<br>" +
    inclusions[0] +
    inclusions[1] +
    inclusions[2] +
    inclusions[3] +

    " Not included:" + "<br>" +
    exclusions[0]
exclusions[1]
exclusions[2]
exclusions[3]
console.log(plan)

var info22 = document.getElementById("info22")
info22.innerHTML = plan


const employee1 = {
    name: "Ritika Jha",
    position: "Backend Engineer",
    department: "Engineering",
    joiningDate: "April 22, 2025",
    empID: "EMP2459",
    location: "Bangalore",
    email: "ritika.jha@techsys.com"
};

const laptop1 = {
    model: "Dell XPS 13",
    serial: "XPS-84592",
    issuedDate: "April 20, 2025",
};

const benefits = {
    leaves: 20,
    insurance: "₹5 Lakh Health Insurance",
    pf: "12% of basic salary",
    bonus: "Performance-based"
};


//   Welcome Ritika Jha (EMP2459)

// You are joining TechSys as a Backend Engineer in the Engineering department starting April 22, 2025 at our Bangalore office.

// Laptop Issued: Dell XPS 13 (Serial: XPS-84592)  
// Issued on: April 20, 2025

// Employee Benefits:
// - 20 Annual Leaves
// - ₹5 Lakh Health Insurance
// - 12% PF on basic
// - Performance-based bonuses

// Your official email: ritika.jha@techsys.com
// We’re excited to have you onboard!

const product = {
    name: "SmartWatch Ultra X",
    brand: "WearX",
    launchDate: "June 1, 2025",
    price: "₹12,999",
    features: [
        "AMOLED Display",
        "SpO2 & Heart Rate Monitor",
        "Bluetooth Calling",
        "100+ Sports Modes",
        "5-Day Battery Life"
    ],
    colors: ["Midnight Black", "Forest Green", "Ocean Blue"],
    warranty: "1 Year"
};


//   Introducing the new WearX SmartWatch Ultra X

// Launching on: June 1, 2025 | Price: ₹12,999  
// Warranty: 1 Year

// Top Features:
// - AMOLED Display
// - SpO2 & Heart Rate Monitor
// - Bluetooth Calling
// - 100+ Sports Modes
// - 5-Day Battery Life

// Available Colors: Midnight Black, Forest Green, Ocean Blue  
// Stay connected and healthy in style!

const student = {
    fullName: "Aarav Nair",
    dob: "12 March 2007",
    gender: "Male",
    contact: "+91-9988774466",
    email: "aarav.nair@email.com",
    address: "Kochi, Kerala",
    nationality: "Indian",
};

const admission = {
    course: "B.Sc Computer Science",
    duration: "3 Years",
    startDate: "1 August 2025",
    registrationNo: "AD2025/CS/0193",
    university: "South Tech University",
    campus: "Main Campus",
    shift: "Morning",
};

const guardian = {
    name: "Meera Nair",
    relation: "Mother",
    contact: "+91-9988771234",
};


//  Dear Aarav Nair,

// Congratulations! You have been provisionally admitted to the B.Sc Computer Science program at South Tech University, Main Campus (Morning Shift).

// Details:
// - DOB: 12 March 2007
// - Nationality: Indian
// - Contact: +91-9988774466
// - Email: aarav.nair@email.com
// - Address: Kochi, Kerala

// Course Duration: 3 Years  
// Start Date: 1 August 2025  
// Registration No: AD2025/CS/0193

// Guardian Contact:
// Meera Nair (Mother) – +91-9988771234

// We look forward to seeing you on campus!

const freelancer = {
    name: "Neha D'souza",
    role: "UI/UX Designer",
    location: "Goa, India",
    experience: "4 years",
    email: "neha.designs@gmail.com",
    website: "neha-ux.com"
};

const client1 = {
    name: "DigitalHype Co.",
    contactPerson: "Ashish Kapoor",
    email: "ashish@digitalhype.com"
};

const project = {
    title: "E-commerce App Design",
    duration: "6 weeks",
    price: "₹85,000",
    deliverables: [
        "User Flow Diagrams",
        "Wireframes (mobile & desktop)",
        "High-fidelity UI Designs",
        "Prototype using Figma",
        "Developer Handoff (Zeplin)"
    ],
    paymentTerms: "50% advance, 50% after final delivery"
};


//   Hi Ashish,

// I'm Neha D'souza, a UI/UX Designer based in Goa with 4 years of experience.

// Here’s the proposal for your project – **E-commerce App Design**:
// Duration: 6 weeks  
// Total Cost: ₹85,000  
// Payment Terms: 50% advance, 50% after final delivery

// Deliverables:
// - User Flow Diagrams
// - Wireframes (mobile & desktop)
// - High-fidelity UI Designs
// - Prototype using Figma
// - Developer Handoff (Zeplin)

// Let me know if we can get started. Feel free to reach me at neha.designs@gmail.com or visit neha-ux.com

// Looking forward to working together!  
// – Neha


const donor = {
    name: "Suresh Vyas",
    email: "suresh.vyas@example.com",
    phone: "+91-9823471122",
    city: "Ahmedabad",
    country: "India"
};

const donation = {
    amount: 5000,
    method: "UPI",
    transactionId: "TXN-88477329",
    date: "10 April 2025",
    cause: "Children's Education Fund"
};

const ngo = {
    name: "Helping Hands Foundation",
    contact: "support@hhf.org.in",
    helpline: "+91-8001234567"
};


//   Dear Suresh Vyas,

// Thank you for your generous donation of ₹5000 via UPI on 10 April 2025 towards **Children's Education Fund**.

// Transaction ID: TXN-88477329  
// Location: Ahmedabad, India

// Your support helps us educate underprivileged children and shape their futures.

// For queries, contact: support@hhf.org.in | Helpline: +91-8001234567  
// – Helping Hands Foundation


const user = {
    name: "Pratik Joshi",
    email: "pratik.joshi@protonmail.com",
    company: "DevStride Inc.",
    location: "Hyderabad"
};

const subscription = {
    plan: "Team Pro",
    users: 10,
    price: "₹3999/month",
    features: [
        "Unlimited Projects",
        "Team Chat & Kanban",
        "Daily Backups",
        "Priority Support",
        "Custom Branding"
    ],
    renewal: "Monthly",
    paymentMode: "Credit Card",
    subscriptionDate: "April 10, 2025"
};


//   Hello Pratik Joshi,

// Thank you for subscribing to our **Team Pro** plan for DevStride Inc. Your subscription (₹3999/month) was activated on April 10, 2025.

// Plan Details:
// - 10 User Accounts
// - Renewal: Monthly
// - Payment Method: Credit Card

// Included Features:
// - Unlimited Projects
// - Team Chat & Kanban
// - Daily Backups
// - Priority Support
// - Custom Branding

// We appreciate your trust in our platform!


const customer = {
    name: "Pooja Mishra",
    email: "pooja.mishra@yahoo.com",
    mobile: "+91-9876543333",
    address: "Flat 202, Palm Grove, Delhi - 110034"
};

const order = {
    orderId: "ORD239187",
    items: [
        { name: "Wireless Earbuds", qty: 1, price: 2999 },
        { name: "Phone Cover - iPhone 13", qty: 2, price: 499 },
        { name: "Screen Guard", qty: 1, price: 299 }
    ],
    courier: "Blue Dart",
    trackingId: "BD2348719IN",
    deliveryDate: "April 14, 2025"
};


//   Hi Pooja Mishra,

// Your order (ORD239187) has been shipped via Blue Dart. It is expected to arrive by April 14, 2025.
// Tracking ID: BD2348719IN

// Order Summary:
// - 1 x Wireless Earbuds – ₹2999
// - 2 x Phone Cover - iPhone 13 – ₹998
// - 1 x Screen Guard – ₹299

// Total Amount: ₹4296
// Shipping To: Flat 202, Palm Grove, Delhi - 110034

// Thanks for shopping with us!



