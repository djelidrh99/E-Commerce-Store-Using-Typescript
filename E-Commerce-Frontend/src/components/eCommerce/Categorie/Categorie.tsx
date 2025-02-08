import lighting from "@assets/img/lighting.png";
import style from './style.module.css'

const {container,imgContainer,titleContainer}=style

const Categorie = () => {
  return (
    <div className={container}>
      <div className={imgContainer}>
        <img
          className="w-full h-full rounded-full"
          src={lighting}
          alt="lighting"
        />
      </div>
      <div className={titleContainer}>
        <h5 className="font-semibold text-sm lg:text-base">Lighting</h5>
        <h6 className="text-[var(--text-secondary)] text-sm lg:text-base">discover 150 Products</h6>
      </div>
    </div>
  );
};

export default Categorie;
