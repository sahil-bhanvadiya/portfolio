import { lazy, Suspense } from "react";
import Hero from "@/components/Hero/Hero";
import Loader from "@/components/ui/Loader";

// Lazy load heavy components
const MyExperience = lazy(
  () => import("@/components/MyExperience/MyExperience"),
);
const MyStack = lazy(() => import("@/components/MyStack/MyStack"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const ContactForm = lazy(() => import("@/components/ContactForm/ContactForm"));
const FAQ = lazy(() => import("@/components/FAQ/FAQ"));

export default function Home() {
  return (
    <div className="flex lg:flex-1 flex-col gap-0 h-min px-5 overflow-hidden p-0 relative lg:px-0 w-full flex-wrap lg:flex-nowrap items-center justify-start">
      <div className="gap-[100px] flex-col max-w-full w-full lg:max-w-[750px] lg:w-[80%] lg:flex-nowrap flex items-center flex-none h-min justify-center  relative overflow-hidden lg:overflow-visible p-[80px_0px]  ">
        <Hero />
        <Suspense fallback={<Loader />}>
          <MyExperience />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <MyStack />
        </Suspense>
        {/* TODO: WIP */}
        {/* <MyServices /> */}
        {/* <ShowCase showData={2} isMore /> */}
        <Suspense fallback={<Loader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <ContactForm />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <FAQ />
        </Suspense>
      </div>
    </div>
  );
}
