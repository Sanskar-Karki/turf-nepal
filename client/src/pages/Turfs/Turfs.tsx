import React, { useState, useMemo } from "react";
import {
  BookmarkIcon,
  FilterIcon,
  MapPinIcon,
  TagIcon,
  ClockIcon,
  DollarSignIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import turfData from "./data";

const Turf: React.FC = () => {
  const [searchParams, setSearchParams] = useState({
    query: "",
    location: "",
    turfType: "",
    maxPrice: "",
    sortBy: "price_asc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredTurfs = useMemo(() => {
    return turfData
      .filter((turf) => {
        const matchesSearch = [turf.name, turf.location, turf.turf_type].some(
          (field) =>
            field.toLowerCase().includes(searchParams.query.toLowerCase())
        );

        const matchesLocation =
          !searchParams.location || turf.location === searchParams.location;

        const matchesTurfType =
          !searchParams.turfType || turf.turf_type === searchParams.turfType;

        const matchesPrice =
          !searchParams.maxPrice ||
          turf.price_per_hour <= parseInt(searchParams.maxPrice);

        return (
          matchesSearch && matchesLocation && matchesTurfType && matchesPrice
        );
      })
      .sort((a, b) => {
        switch (searchParams.sortBy) {
          case "price_asc":
            return a.price_per_hour - b.price_per_hour;
          case "price_desc":
            return b.price_per_hour - a.price_per_hour;
          case "availability":
            return a.availability.localeCompare(b.availability);
          default:
            return 0;
        }
      });
  }, [searchParams]);

  const paginatedTurfs = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTurfs.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTurfs, currentPage]);

  const totalPages = Math.ceil(filteredTurfs.length / itemsPerPage);

  const updateSearchParams = (updates: Partial<typeof searchParams>) => {
    setSearchParams((prev) => ({ ...prev, ...updates }));
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-grow">
            <Input
              placeholder="Search turfs by name, location, or type"
              value={searchParams.query}
              onChange={(e) => updateSearchParams({ query: e.target.value })}
              className="pl-10 w-full"
            />
            <FilterIcon
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          <Dialog>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Advanced Turf Filters</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center mb-2">
                    <MapPinIcon size={16} className="mr-2 text-gray-500" />
                    Location
                  </label>
                  <Select
                    value={searchParams.location}
                    onValueChange={(value) =>
                      updateSearchParams({ location: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Locations</SelectItem>
                      {[...new Set(turfData.map((t) => t.location))].map(
                        (loc) => (
                          <SelectItem key={loc} value={loc}>
                            {loc}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="flex items-center mb-2">
                    <TagIcon size={16} className="mr-2 text-gray-500" />
                    Turf Type
                  </label>
                  <Select
                    value={searchParams.turfType}
                    onValueChange={(value) =>
                      updateSearchParams({ turfType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Types</SelectItem>
                      {[...new Set(turfData.map((t) => t.turf_type))].map(
                        (type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="flex items-center mb-2">
                    <DollarSignIcon size={16} className="mr-2 text-gray-500" />
                    Max Price per Hour
                  </label>
                  <Input
                    type="number"
                    placeholder="Enter max price"
                    value={searchParams.maxPrice}
                    onChange={(e) =>
                      updateSearchParams({ maxPrice: e.target.value })
                    }
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Select
            value={searchParams.sortBy}
            onValueChange={(value) => updateSearchParams({ sortBy: value })}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price_asc">Price: Low to High</SelectItem>
              <SelectItem value="price_desc">Price: High to Low</SelectItem>
              <SelectItem value="availability">Availability</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-4 text-gray-600">
          {filteredTurfs.length} turf{filteredTurfs.length !== 1 && "s"} found
        </div>
      </div>

      {paginatedTurfs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedTurfs.map((turf) => (
            <Card
              key={turf.id}
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={turf.photo}
                  alt={turf.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                >
                  <BookmarkIcon size={20} className="text-gray-600" />
                </Button>
              </div>
              <CardContent className="p-4 space-y-3">
                <h2 className="text-xl font-bold text-gray-800">{turf.name}</h2>
                <div className="flex items-center text-gray-600 space-x-2">
                  <MapPinIcon size={16} />
                  <span>{turf.location}</span>
                </div>
                <div className="flex items-center text-gray-600 space-x-2">
                  <ClockIcon size={16} />
                  <span>{turf.availability}</span>
                </div>
                <div className="flex items-center text-green-600 font-semibold space-x-2">
                  <DollarSignIcon size={16} />
                  <span>Rs. {turf.price_per_hour}/hr</span>
                </div>
                <Button className="w-full mt-2">Book Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-12">
          No turfs match your current filters
        </div>
      )}

      <div className="flex justify-center mt-8 space-x-4">
        <Button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          variant="outline"
        >
          Previous
        </Button>
        <span className="self-center">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          variant="outline"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Turf;
