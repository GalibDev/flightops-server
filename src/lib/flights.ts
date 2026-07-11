import type {Flight} from "@/types";
const places=[
 ["Dubai","DXB","Emirates",320,"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"],
 ["Kuala Lumpur","KUL","Malaysia Airlines",285,"https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80"],
 ["Bangkok","BKK","Thai Airways",240,"https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80"],
 ["Doha","DOH","Qatar Airways",305,"https://images.unsplash.com/photo-1548266652-99cf27701ced?auto=format&fit=crop&w=1200&q=80"],
 ["Singapore","SIN","Singapore Airlines",340,"https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80"],
 ["London","LHR","British Airways",690,"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"],
 ["Jeddah","JED","Saudia",410,"https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=80"],
 ["Istanbul","IST","Turkish Airlines",460,"https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80"],
 ["Kathmandu","KTM","Biman Bangladesh",185,"https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"],
 ["Malé","MLE","US-Bangla Airlines",230,"https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80"],
 ["Toronto","YYZ","Air Canada",980,"https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=80"],
 ["Muscat","MCT","Oman Air",295,"https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1200&q=80"]
] as const;
export const flights:Flight[]=places.map((p,i)=>({id:String(i+1),airlineName:p[2],airlineLogo:"✈",flightNumber:`FO ${410+i*17}`,title:`Dhaka to ${p[0]}`,shortDescription:`A smooth, carefully scheduled journey from Dhaka to ${p[0]}.`,fullDescription:`Travel from Dhaka to ${p[0]} with dependable service, comfortable seating and coordinated ground operations. FlightOps keeps every important journey detail in one clear place.`,departureAirport:"DAC",departureCity:"Dhaka",destinationAirport:p[1],destinationCity:p[0],departureDate:`2026-0${8+(i%2)}-${String(12+i).padStart(2,"0")}`,departureTime:["10:30","07:45","11:50","09:10"][i%4],arrivalDate:`2026-0${8+(i%2)}-${String(12+i).padStart(2,"0")}`,arrivalTime:["14:30","13:20","16:40","18:15"][i%4],aircraftType:["Boeing 777-300ER","Airbus A350-900","Boeing 787-9"][i%3],travelClass:i%3===0?"Business":"Economy",price:p[3],rating:4.6+(i%4)/10,availableSeats:18+i*3,baggageAllowance:"30 kg checked + 7 kg cabin",image:p[4],images:[p[4],p[4],p[4]],status:i%5===0?"scheduled":"active",createdAt:`2026-07-${String(10-i%8).padStart(2,"0")}`}));
