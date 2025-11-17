import { useState, useEffect } from "react";

const INDIAN_NAMES = [
  "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Arnav", "Ayaan", "Krishna", "Ishaan",
  "Shaurya", "Atharv", "Advik", "Pranav", "Reyansh", "Muhammad", "Siddharth", "Samar", "Vedant", "Darsh",
  "Rudra", "Kabir", "Aryan", "Dhruv", "Kian", "Shivansh", "Raghav", "Naksh", "Advaith", "Aarush",
  "Ayush", "Virat", "Rohan", "Kiaan", "Veer", "Aayan", "Lakshya", "Yuvaan", "Dev", "Ansh",
  "Aadhya", "Saanvi", "Aaradhya", "Ananya", "Pari", "Anika", "Navya", "Angel", "Diya", "Myra",
  "Sara", "Jhanvi", "Ira", "Prisha", "Anvi", "Riya", "Shanaya", "Kyra", "Kiara", "Kavya",
  "Avni", "Pihu", "Siya", "Anaya", "Ishita", "Nitya", "Aanya", "Zara", "Khushi", "Tara",
  "Aarohi", "Sana", "Nisha", "Aditi", "Meera", "Disha", "Tanvi", "Ria", "Mira", "Pooja",
  "Raj", "Karan", "Amar", "Amit", "Varun", "Nikhil", "Rahul", "Prateek", "Manish", "Harsh",
  "Gaurav", "Rohit", "Akash", "Ankur", "Suresh", "Deepak", "Vikram", "Kunal", "Ravi", "Ajay",
  "Priya", "Neha", "Shreya", "Anjali", "Simran", "Swati", "Preeti", "Divya", "Pallavi", "Sneha",
  "Kritika", "Nikita", "Shweta", "Komal", "Megha", "Sakshi", "Ritu", "Sonal", "Radha", "Geeta"
];

const INDIAN_CITIES = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad",
  "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal",
  "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik",
  "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad",
  "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", "Coimbatore", "Jabalpur"
];

const TIME_AGO = [
  "just now",
  "2 minutes ago",
  "5 minutes ago",
  "10 minutes ago",
  "15 minutes ago",
  "1 hour ago"
];

// Shuffle array function
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const SalesNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState<{
    name: string;
    city: string;
    timeAgo: string;
  } | null>(null);
  const [usedNames, setUsedNames] = useState<Set<string>>(new Set());
  const [shuffledNames] = useState(() => shuffleArray(INDIAN_NAMES));

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let index = 0;

    const showNextNotification = () => {
      // Get next unused name
      let name = shuffledNames[index % shuffledNames.length];
      
      // If we've used all names, reset the used names set
      if (usedNames.size >= shuffledNames.length) {
        setUsedNames(new Set());
      }
      
      // Find next unused name
      while (usedNames.has(name) && usedNames.size < shuffledNames.length) {
        index++;
        name = shuffledNames[index % shuffledNames.length];
      }
      
      const city = INDIAN_CITIES[Math.floor(Math.random() * INDIAN_CITIES.length)];
      const timeAgo = TIME_AGO[Math.floor(Math.random() * TIME_AGO.length)];

      setCurrentNotification({ name, city, timeAgo });
      setUsedNames(prev => new Set(prev).add(name));
      setIsVisible(true);
      index++;

      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);

      // Schedule next notification after 5-7 seconds (including the 4s display time)
      const nextDelay = 4000 + Math.random() * 2000 + 5000; // 4s display + 5-7s random delay
      timeoutId = setTimeout(showNextNotification, nextDelay);
    };

    // Start first notification after initial random delay
    const initialDelay = Math.random() * 2000 + 5000; // 5-7 seconds
    timeoutId = setTimeout(showNextNotification, initialDelay);

    return () => clearTimeout(timeoutId);
  }, [shuffledNames, usedNames]);

  if (!currentNotification) return null;

  return (
    <div
      className={`fixed left-4 z-40 transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        bottom: 'calc(80px + 1rem)', // Position above sticky bar (adjust based on sticky bar height)
      }}
    >
      <div className="bg-card border border-border rounded-xl shadow-lg px-4 py-3 max-w-sm backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <span className="text-xl flex-shrink-0">🟢</span>
          <p className="text-sm text-foreground">
            <span className="font-medium">{currentNotification.name}</span> from{" "}
            <span className="font-medium">{currentNotification.city}</span> bought this{" "}
            <span className="text-muted-foreground">{currentNotification.timeAgo}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
