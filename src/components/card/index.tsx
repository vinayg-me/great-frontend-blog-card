import { Button } from "../button";
import rightArrowIcon from "../../assets/icons/arrow-right-line.svg";
import Chip from "../chip";

interface CardProps {
  imgUrl: string;
  badges: string[];
  title: string;
  content: string;
  ctaLink?: string;
}

const Card: React.FC<CardProps> = ({
  imgUrl,
  badges,
  title,
  content,
  ctaLink,
}) => {
  const Icon = () => <img src={rightArrowIcon} />;
  const handleCtaClick = () => {
    if (ctaLink) {
      alert(`${ctaLink} Clicked`);
    }
  };
  return (
    <div className="container bg-white h-[540px] w-[340px] flex flex-col items-start shadow rounded-lg">
      <div className="grid grid-rows-5 grid-flow-col h-full w-full">
        <div className="row-span-3">
          <img src={imgUrl} className="h-full w-full rounded-t-lg" />
        </div>
        <div className="grid row-span-2 grid-flow-rows px-[24px] py-[16px]">
          <>
            {badges.map((badge) => (
              <Chip type="success" title={badge} />
            ))}
            <p className="text-start font-semibold text-lg leading-8">{title}</p>
          </>
          <div>
            <p className="text-start text-base leading-6 py-2">{content}</p>
            {ctaLink && (
              <Button
                label="Read More"
                rightAddOnIcon={<Icon />}
                onClick={handleCtaClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
