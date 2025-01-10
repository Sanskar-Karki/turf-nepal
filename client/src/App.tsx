import { Button } from "./components/ui/button";
import { Calendar } from "@/components/ui/calendar";

const App = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Turf Nepal</h1>
        <Button variant="turf">ShadCn Button</Button>
        <Calendar mode="single" className="rounded-md border" />
      </div>
    </>
  );
};

export default App;
