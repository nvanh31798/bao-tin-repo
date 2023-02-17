import React from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import VisibilityIcon from "@mui/icons-material";
import { customerSupportList } from "../../mock/CustomerSupportList";

const CustomerSupport = () => {
  return (
    <div className="grid md:grid-cols-2 md:grid-rows-2 md:p-10 gap-10">
      {customerSupportList &&
        customerSupportList.map((item) => {
          return (
            <div>
              <div className="m-auto flex md:px-10">
                {item.icon}
                <div className="px-5">
                  <span className="py-5 text-xl font-bold uppercase md:whitespace-pre">
                    {item.title}
                  </span>
                  <p className="align-middle py-5 text-justify">
                    {item.description}
                  </p>
                </div>
              </div>
              {/* <p className="text-center cursor-pointer text-sm font-extralight">
                Xem thêm
              </p> */}
            </div>
          );
        })}
    </div>
  );
};

export default CustomerSupport;
