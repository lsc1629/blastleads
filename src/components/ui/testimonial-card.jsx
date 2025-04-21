import React from "react";
import { cn } from "../../lib/utils";
import { Avatar, AvatarImage } from "./avatar";

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}) {
  const Card = href ? 'a' : 'div';
  
  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex flex-col rounded-lg border-t",
        "bg-gradient-to-b from-gray-100/50 to-gray-50/10",
        "p-4 text-start sm:p-6",
        "hover:from-gray-100/60 hover:to-gray-50/20",
        "max-w-[320px] sm:max-w-[320px] mx-4",
        "transition-colors duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none text-primary">
            {author.name}
          </h3>
          <p className="text-sm text-gray-500">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm text-gray-600">
        {text}
      </p>
    </Card>
  );
}
