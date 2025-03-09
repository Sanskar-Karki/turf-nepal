import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

// Form validation schema
const formSchema = z.object({
  // Basic Info
  turfName: z.string().min(3, "Turf name must be at least 3 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  size: z.string().min(1, "Size is required"),
  capacity: z.number().min(1, "Capacity must be at least 1"),

  // Location
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  district: z.string().min(1, "District is required"),

  // Features & Pricing
  hourlyRate: z.number().min(100, "Rate must be at least 100"),
  hasParking: z.boolean(),
  hasChangingRoom: z.boolean(),
  hasFloodlights: z.boolean(),

  // Contact
  contactName: z.string().min(1, "Contact name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof formSchema>;

const TurfRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hasParking: false,
      hasChangingRoom: false,
      hasFloodlights: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      console.log("Form submitted:", data);
      // Add your API call here
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    const fields = getFieldsForStep(step);
    const isValid = await trigger(fields);
    if (isValid) {
      setStep((s) => s + 1);
    }
  };

  const prevStep = () => {
    setStep((s) => s - 1);
  };

  const getFieldsForStep = (step: number) => {
    switch (step) {
      case 1:
        return ["turfName", "description", "size", "capacity"] as const;
      case 2:
        return ["address", "city", "district"] as const;
      case 3:
        return [
          "hourlyRate",
          "hasParking",
          "hasChangingRoom",
          "hasFloodlights",
        ] as const;
      case 4:
        return ["contactName", "phone", "email"] as const;
      default:
        return [];
    }
  };

  return (
    <div className="container mx-auto mt-20 min-h-[70vh] p-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">List Your Turf</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="turfName">Turf Name</Label>
                  <Input
                    id="turfName"
                    {...register("turfName")}
                    className={errors.turfName ? "border-red-500" : ""}
                  />
                  {errors.turfName && (
                    <span className="text-red-500 text-sm">
                      {errors.turfName.message}
                    </span>
                  )}
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    {...register("description")}
                    className={errors.description ? "border-red-500" : ""}
                  />
                  {errors.description && (
                    <span className="text-red-500 text-sm">
                      {errors.description.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="size">Size</Label>
                    <Input
                      id="size"
                      {...register("size")}
                      className={errors.size ? "border-red-500" : ""}
                    />
                    {errors.size && (
                      <span className="text-red-500 text-sm">
                        {errors.size.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="capacity">Capacity</Label>
                    <Input
                      id="capacity"
                      type="number"
                      {...register("capacity", { valueAsNumber: true })}
                      className={errors.capacity ? "border-red-500" : ""}
                    />
                    {errors.capacity && (
                      <span className="text-red-500 text-sm">
                        {errors.capacity.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Location */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    {...register("address")}
                    className={errors.address ? "border-red-500" : ""}
                  />
                  {errors.address && (
                    <span className="text-red-500 text-sm">
                      {errors.address.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      {...register("city")}
                      className={errors.city ? "border-red-500" : ""}
                    />
                    {errors.city && (
                      <span className="text-red-500 text-sm">
                        {errors.city.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="district">District</Label>
                    <Input
                      id="district"
                      {...register("district")}
                      className={errors.district ? "border-red-500" : ""}
                    />
                    {errors.district && (
                      <span className="text-red-500 text-sm">
                        {errors.district.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Features & Pricing */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="hourlyRate">Hourly Rate (NPR)</Label>
                  <Input
                    id="hourlyRate"
                    type="number"
                    {...register("hourlyRate", { valueAsNumber: true })}
                    className={errors.hourlyRate ? "border-red-500" : ""}
                  />
                  {errors.hourlyRate && (
                    <span className="text-red-500 text-sm">
                      {errors.hourlyRate.message}
                    </span>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="hasParking">Parking Available</Label>
                    <Switch id="hasParking" {...register("hasParking")} />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="hasChangingRoom">Changing Room</Label>
                    <Switch
                      id="hasChangingRoom"
                      {...register("hasChangingRoom")}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="hasFloodlights">Floodlights</Label>
                    <Switch
                      id="hasFloodlights"
                      {...register("hasFloodlights")}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact */}
            {step === 4 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="contactName">Contact Name</Label>
                  <Input
                    id="contactName"
                    {...register("contactName")}
                    className={errors.contactName ? "border-red-500" : ""}
                  />
                  {errors.contactName && (
                    <span className="text-red-500 text-sm">
                      {errors.contactName.message}
                    </span>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="flex justify-between mt-6">
              {step > 1 && (
                <Button type="button" variant="outline" onClick={prevStep}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
              )}

              {step < 4 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className={step === 1 ? "ml-auto" : ""}
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={step === 1 ? "ml-auto" : ""}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
      <h1 className="text-center text-xl  ">
        Step {step} of 4 -{" "}
        {step === 1
          ? "Basic Information"
          : step === 2
          ? "Location Details"
          : step === 3
          ? "Features & Pricing"
          : "Contact Information"}
      </h1>
    </div>
  );
};

export default TurfRegistrationForm;
