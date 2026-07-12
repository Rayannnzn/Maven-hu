"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const serviceOptions = [
  "HVAC Repair / Maintenance",
  "Plumbing",
  "Electrical",
  "Air Conditioning",
  "Cooling Systems",
  "Preventive Maintenance Plans",
  "Emergency Service",
];

type ScheduleFormProps = {
  compact?: boolean;
  title?: string;
};

export default function ScheduleForm({
  compact = false,
  title = "Schedule a Service",
}: ScheduleFormProps) {
  return (
    <div className={compact ? "" : "rounded-2xl bg-card p-6 shadow-md md:p-10"}>
      {!compact && (
        <h3 className="mb-6 text-xl font-bold text-primary md:text-2xl">
          {title}
        </h3>
      )}
      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="Enter your first name" autoComplete="given-name" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Enter your last name" autoComplete="family-name" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="Enter your phone number" autoComplete="tel" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="service">Service Needed</Label>
          <Select>
            <SelectTrigger id="service" className="w-full">
              <SelectValue placeholder="Select a service..." />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="message">Message (Optional)</Label>
          <Textarea
            id="message"
            placeholder="Describe the issue or what you need..."
            rows={3}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-maven-red font-bold hover:bg-[#b81f1f]"
        >
          Request Service Appointment →
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          We will contact you promptly regarding your request.
        </p>
      </form>
    </div>
  );
}
