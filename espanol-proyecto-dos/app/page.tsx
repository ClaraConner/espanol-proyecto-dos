import Header from './components/header';
import LeftPanel from "@/app/components/left-panel";
import MiddlePanel from "@/app/components/middle-panel";
import RightPanel from "@/app/components/right-panel";

export default function Home() {
  return (
      <div>
      <Header/>
          <div className="flex flex-row mt-8 justify-around">
              <LeftPanel/>
              <MiddlePanel/>
              <RightPanel/>
          </div>
      </div>
  );
}
