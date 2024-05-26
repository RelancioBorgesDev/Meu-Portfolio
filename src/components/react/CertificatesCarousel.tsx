import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CertificatesCarousel() {
  return (
    <Carousel className="w-full relative">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 20 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardContent className="flex pt-2 ">
                <img
                  className="rounded-xl border-4 border-zinc-600"
                  src={`/certificados/certificado${index}.png`}
                  alt=""
                  width={600}
                  height={600}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <span className="max-md:absolute max-md:left-12 max-md:top-0 max-md:bottom-0">
        <CarouselPrevious />
      </span>
      <span className="max-md:absolute max-md:right-12 max-md:top-0 max-md:bottom-0">
        <CarouselNext />
      </span>
    </Carousel>
  );
}
