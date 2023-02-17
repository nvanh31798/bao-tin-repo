import axios from "axios";
import { ApiConfig } from "../../common/ApiConfig";
import { FormFaceModal } from "../../models/formface";
import { GendersModal } from "../../models/genders";

export const fetchGenders = async (): Promise<GendersModal[]> => {
  let data: GendersModal[] = [];
  const fetchURL = ApiConfig.prod_baseUrl + "api/gender/";
  await axios
    .get(fetchURL)
    .then((response) => {
      data = response.data;
    })
    .catch((err) => {
      console.error(err);
    });
  return data;
};

export const fetchFormFace = async (): Promise<FormFaceModal[]> => {
  let data: FormFaceModal[] = [];
  const fetchURL = ApiConfig.prod_baseUrl + "api/form-face";
  await axios
    .get(fetchURL)
    .then((response) => {
      data = response.data;
    })
    .catch((err) => {
      console.error(err);
    });
  return data;
};

export const fetchGlassesShape = () => {};
export const fetchGlassesMaterial = () => {};
