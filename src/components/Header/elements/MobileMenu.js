import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { IoIosClose } from "react-icons/io";
import clsx from "clsx";
import MobileMenuSearch from "./MobileMenuSearch";
import MobileMenuNav from "./MobileMenuNav";
import MobileMenuWidgets from "./MobileMenuWidgets";

const MobileMenu = ({ activeStatus, getActiveStatus }) => {
  const [sVal, changeSVal] = useState("eur");
  const router = useRouter();

  const { locale } = router;
  const sign = locale === "eur" ? "eur" : "gbr";

  function changeSign(e) {
    changeSVal(e.target.value);
    router.push("/", "/", { locale: e.target.value });
  }

  useEffect(() => {
    changeSVal(sign);
  }, [])

  return (
    <div className={clsx("offcanvas-mobile-menu", activeStatus && "active")}>
      <div
        className="offcanvas-mobile-menu__overlay-close"
        onClick={() => getActiveStatus(false)}
      />
      <div className="offcanvas-mobile-menu__wrapper">
        <button
          className="offcanvas-mobile-menu__close"
          onClick={() => getActiveStatus(false)}
        >
          <IoIosClose />
        </button>
        <div className="offcanvas-mobile-menu__content-wrapper">
          <div className="offcanvas-mobile-menu__content">
            {/* mobile search */}
            {/* <MobileMenuSearch /> */}

            {/* mobile nav menu */}
            <MobileMenuNav getActiveStatus={getActiveStatus} />

            <div className="offcanvas-mobile-menu__middle space-mb--30">
              {/* <div className="lang-curr-style space-mb--20">
                <span className="title">Choose Language </span>
                <select>
                  <option value="en">English</option>
                  <option value="fn">French</option>
                  <option value="de">Germany</option>
                </select>
              </div> */}
              {/* <div className="lang-curr-style">
                <span className="title">Choose Currency</span>
                <select onChange={changeSign} value={sVal}>
                  <option value="eur">EUR</option>
                  <option value="gbr">GBR</option>
                </select>
              </div> */}
            </div>

            {/* mobile widgets */}
            {/* <MobileMenuWidgets /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
