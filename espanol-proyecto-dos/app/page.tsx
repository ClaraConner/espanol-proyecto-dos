import Header from './components/header';
import LeftPanel from "@/app/components/left-panel";
import MiddlePanel from "@/app/components/middle-panel";
import RightPanel from "@/app/components/right-panel";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
      <div>
          <Header/>
          <div className="flex flex-row mt-8 justify-around">
              <LeftPanel/>
              <MiddlePanel/>
              <RightPanel/>
          </div>
          <div className="flex flex-row my-4 justify-center">
              <Footer/>
          </div>
      </div>
  );
}
