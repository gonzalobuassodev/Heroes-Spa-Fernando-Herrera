import { HeroesList } from "../components";
import { HeroEnum } from "../Enum/hero.enum";

export const DcPage = () => {

  return (
      <>
          <h1>DcPage</h1>
          <hr />

          <HeroesList publisher={HeroEnum.DC} />
          
      </>
  );
}
