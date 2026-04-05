import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
function Content(){
return(
  <div className="realative w-full p-6 -mt-6 ">
     <div className=" absolute top-55 z-20 w-full opacity-80 bg-gradient-to-b h-55 mb-50 from-20%  to-amber-50 "/>
     
    <Carousel autoPlay interval={5000} >
      <CarouselContent >
        <CarouselItem>
          <img loading="lazy" className="w-full h-80 " src="pro.jpg"    alt="not found" />
        </CarouselItem>
        <CarouselItem >
          <img loading="lazy" className="w-full h-80" src="prod1.jpeg" alt="not found" />
        </CarouselItem>
        <CarouselItem>
          <img loading="lazy" className="w-full h-80" src="prod2.jpeg" alt="not found" />
        </CarouselItem>
        <CarouselItem>
          <img loading="lazy" className="w-full h-80" src="prod3.jpeg" alt="not found" />
        </CarouselItem>
        <CarouselItem>
          <img loading="lazy" className="w-full h-80" src="prod4.jpeg" alt="not found" />
        </CarouselItem>
        <CarouselItem>
          <img loading="lazy" className="w-full h-80" src="prod5.jpeg" alt="not found" />
        </CarouselItem>
        <CarouselItem>
          <img loading="lazy" className="w-full h-80" src="prod6.jpeg" alt="not found" />
        </CarouselItem>
            
      </CarouselContent>
      <CarouselPrevious className="absolut z-21 border-4 border-r-0 w-10 border-dashed pr-1 text-amber-950 border-amber-400 left-12" />
    <CarouselNext className=" right-18 z-21 border-4 border-l-0 w-10 border-dashed text-amber-400  border-amber-950 bg-transparent" />
  </Carousel>
  </div>
  
 );
}
export default Content;