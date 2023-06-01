import styles from "./style.module.scss";

export default function BannerInfo() {
  return (
    <div className={styles.bannerInfo}>
      <h1>Guns</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
        doloremque beatae, dolore fuga quasi asperiores porro possimus
        recusandae voluptates.
      </p>
      <button>
        <span>Lets Go</span>
        <span>►</span>
      </button>
    </div>
  );
}
