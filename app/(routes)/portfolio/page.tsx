/* import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image"; */
import ContainerPage from "@/components/container";
import PortfolioBox from "@/components/portfolio-box";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "@/data";

const PortfolioPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />

      {/*  <AvatarPortfolio />
      <CircleImage /> */}

      <div className="flex flex-col justify-center h-full">
        <span className="text-2xl leading-tight text-center md:text-4xl md:mb-5 text-secondary font-bold">
          Projects
        </span>

        <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </ContainerPage>
  );
};

export default PortfolioPage;
