import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import popular from "./../../public/fire.png";
export default function AccordionDemo() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1" className="">
        <AccordionTrigger  className="bg-zinc-900 py-2 rounded-md">
          Topics
        </AccordionTrigger>
        <AccordionContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-3">
              <AccordionTrigger className=" rounded-md">Games</AccordionTrigger>
              <AccordionContent>
                <div className="hover:bg-zinc-800 text-center items-center flex font-semibold justify-start pl-10 gap-4 rounded-md py-2 ">
                  <Image src={popular} className="w-5 h-5" alt=""></Image>{" "}
                  Popular
                </div>
                <div className="hover:bg-zinc-800 text-center items-center flex font-semibold justify-start pl-10 gap-4 rounded-md py-2 ">
                  <Image src={popular} className="w-5 h-5" alt=""></Image>{" "}
                  Popular
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className=" py-2 rounded-md">
                Technology
              </AccordionTrigger>
              <AccordionContent>
                <div className="hover:bg-zinc-800 text-center items-center flex font-semibold justify-start pl-10 gap-4 rounded-md py-2 ">
                  <Image src={popular} className="w-5 h-5" alt=""></Image>{" "}
                  Popular
                </div>
                <div className="hover:bg-zinc-800 text-center items-center flex font-semibold justify-start pl-10 gap-4 rounded-md py-2 ">
                  <Image src={popular} className="w-5 h-5" alt=""></Image>{" "}
                  Popular
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className=" py-2 rounded-md">
                Pop Culture
              </AccordionTrigger>
              <AccordionContent>
                <div className="hover:bg-zinc-800 text-center items-center flex font-semibold justify-start pl-10 gap-4 rounded-md py-2 ">
                  <Image src={popular} className="w-5 h-5" alt=""></Image>{" "}
                  Popular
                </div>
                <div className="hover:bg-zinc-800 text-center items-center flex font-semibold justify-start pl-10 gap-4 rounded-md py-2 ">
                  <Image src={popular} className="w-5 h-5" alt=""></Image>{" "}
                  Popular
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="py-2 rounded-md">
                Movies & TV
              </AccordionTrigger>
              <AccordionContent>
                <div className="hover:bg-zinc-800 text-center items-center flex font-semibold justify-start pl-10 gap-4 rounded-md py-2 ">
                  <Image src={popular} className="w-5 h-5" alt=""></Image>{" "}
                  Popular
                </div>
                <div className="hover:bg-zinc-800 text-center items-center flex font-semibold justify-start pl-10 gap-4 rounded-md py-2 ">
                  <Image src={popular} className="w-5 h-5" alt=""></Image>{" "}
                  Popular
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Create</AccordionTrigger>
        <AccordionContent>
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-3">
              <AccordionTrigger className=" rounded-md">Games</AccordionTrigger>
              <AccordionContent>
                <div className="hover:bg-zinc-800 text-center items-center flex font-semibold justify-start pl-10 gap-4 rounded-md py-2 ">
                  <Image src={popular} className="w-5 h-5" alt=""></Image>{" "}
                  Popular
                </div>
                <div className="hover:bg-zinc-800 text-center items-center flex font-semibold justify-start pl-10 gap-4 rounded-md py-2 ">
                  <Image src={popular} className="w-5 h-5" alt=""></Image>{" "}
                  Popular
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className=" py-2 rounded-md">
                Technology
              </AccordionTrigger>
              <AccordionContent>
                <div className="hover:bg-zinc-800 text-center items-center flex font-semibold justify-start pl-10 gap-4 rounded-md py-2 ">
                  <Image src={popular} className="w-5 h-5" alt=""></Image>{" "}
                  Popular
                </div>
                <div className="hover:bg-zinc-800 text-center items-center flex font-semibold justify-start pl-10 gap-4 rounded-md py-2 ">
                  <Image src={popular} className="w-5 h-5" alt=""></Image>{" "}
                  Popular
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className=" py-2 rounded-md">
                Pop Culture
              </AccordionTrigger>
              <AccordionContent>
                <div className="hover:bg-zinc-800 text-center items-center flex font-semibold justify-start pl-10 gap-4 rounded-md py-2 ">
                  <Image src={popular} className="w-5 h-5" alt=""></Image>{" "}
                  Popular
                </div>
                <div className="hover:bg-zinc-800 text-center items-center flex font-semibold justify-start pl-10 gap-4 rounded-md py-2 ">
                  <Image src={popular} className="w-5 h-5" alt=""></Image>{" "}
                  Popular
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="py-2 rounded-md">
                Movies & TV
              </AccordionTrigger>
              <AccordionContent>
                <div className="hover:bg-zinc-800 text-center items-center flex font-semibold justify-start pl-10 gap-4 rounded-md py-2 ">
                  <Image src={popular} className="w-5 h-5" alt=""></Image>{" "}
                  Popular
                </div>
                <div className="hover:bg-zinc-800 text-center items-center flex font-semibold justify-start pl-10 gap-4 rounded-md py-2 ">
                  <Image src={popular} className="w-5 h-5" alt=""></Image>{" "}
                  Popular
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
