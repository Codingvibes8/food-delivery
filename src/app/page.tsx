import Offer from "./components/Offer";
import Slider from "./components/Slider";
import Featured from "@/app/components/Featured";
export default function Home() {
  return (
    <div>
      <Slider />
      <Featured />
      <Offer />
    </div>
  );
}
