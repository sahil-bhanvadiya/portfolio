import { rightArrow } from "@/app/assets/assets";
import { followerData } from "@/data";
import FollowerLists from "../FollowerLists/FollowerLists";
import Form from "./Form";
export default function ContactForm() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.65fr_1fr] gap-5 w-full">
      {/* Form Section */}
      <Form />

      {/* Follower List Section */}
      <FollowerLists followerData={followerData} rightArrow={rightArrow} />
    </div>
  );
}
