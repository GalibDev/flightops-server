import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Star, Users } from "lucide-react";
import type { Flight } from "@/types";
export default function FlightCard({ flight }: { flight: Flight }) {
  return (
    <article className="card flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-44">
        <Image
          src={flight.image}
          alt={flight.destinationCity}
          fill
          className="object-cover"
          unoptimized={flight.image.startsWith("data:")}
        />
        <span className="absolute left-3 top-3 rounded-lg bg-white/95 px-3 py-2 text-xs font-bold">
          {flight.airlineName}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-bold text-blue-600">
            {flight.flightNumber}
          </span>
          <span className="flex items-center gap-1 text-xs font-bold">
            <Star size={14} fill="#f59e0b" color="#f59e0b" />
            {flight.rating}
          </span>
        </div>
        <h3 className="text-lg font-black">
          {flight.departureAirport} <ArrowRight className="inline" size={16} />{" "}
          {flight.destinationAirport}
        </h3>
        <p className="muted mt-2 line-clamp-2 text-sm">
          {flight.shortDescription}
        </p>
        <div className="my-4 grid grid-cols-2 gap-2 text-xs text-slate-600">
          <span className="flex gap-1">
            <MapPin size={14} />
            {flight.departureCity}
          </span>
          <span className="flex gap-1">
            <Clock size={14} />
            {flight.departureTime}
          </span>
          <span>{flight.departureDate}</span>
          <span className="flex gap-1">
            <Users size={14} />
            {flight.availableSeats} seats
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between border-t pt-4">
          <div>
            <span className="text-xl font-black">${flight.price}</span>
            <span className="text-xs text-slate-500"> / person</span>
          </div>
          <Link
            href={`/flights/${flight.id}`}
            className="btn btn-primary !px-3 !py-2 text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
