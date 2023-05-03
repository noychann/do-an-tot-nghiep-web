export * from "./validators";
export * from "./appLocalStorage";
export * from "./toast";
export * from "./enums";
export * from "./validatorsInput";
import moment from "moment";

// Replace . with ,
export const replaceDotWithComma = (value) => {
  if (!value) return value;
  // equals to -1 if the value is decimal
  if (value.lastIndexOf(",") !== -1) {
    // replacing all dot to comma
    const removedDotVal = value.split(".").join(",");
    const newValue = removedDotVal.replace(/,([^,]*)$/, ".$1");
    return newValue;
  }
  return value.split(".").join(",");
};

// Format number to locale
export const formatNumberToLocale = (value) => {
  if (!value) return value;
  const valueFormated = Number(value);
  return valueFormated.toLocaleString("vi-VN");
};

// Format 2022-11-01T00:00:00.00Z to 11/01/2022 07:00:00
export const formatStringDateHour = (value) => {
  if (value) {
    return moment(value).format("DD/MM/YYYY HH:mm:ss");
  }
  return value;
};

export const addProductToCartLocal = (product, quantity) => {
  const cart = JSON.parse(localStorage.getItem("vinasoy-cart")) || [];

  const checkProduct = cart.some((p) => p.id === product.id);

  if (checkProduct) {
    const newCart = cart.map((p) => {
      if (p.id === product.id) {
        p.quantity = p.quantity + quantity;
      }

      return p;
    });

    localStorage.setItem("vinasoy-cart", JSON.stringify(newCart));

    return true;
  } else {
    cart.push({ ...product, quantity });

    localStorage.setItem("vinasoy-cart", JSON.stringify(cart));

    return true;
  }
};

export const localeIncludes = (
  string,
  searchString,
  {
    position = 0,
    locales,
    usage = "search",
    sensitivity = "base",
    options,
  } = {},
) => {
  if (
    string === undefined ||
    string === null ||
    searchString === undefined ||
    searchString === null
  ) {
    throw new Error("localeIncludes requires at least 2 parameters");
  }

  const stringLength = string.length;
  const searchStringLength = searchString.length;
  const lengthDiff = stringLength - searchStringLength;

  for (let i = position; i <= lengthDiff; i++) {
    if (
      string
        .substring(i, i + searchStringLength)
        .localeCompare(searchString, locales, {
          usage,
          sensitivity,
          ...options,
        }) === 0
    ) {
      return true;
    }
  }

  return false;
};

// Loại bỏ tất cả các text, kí tự đặc biệt, khoảng cách (sử dụng cho input chỉ nhập số)
export const replaceStringInput = (str) => {
  const regex = /[^0-9]*$/;

  str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "");
  str = str.replace(/a|à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "");
  str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "");
  str = str.replace(/e|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "");
  str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "");
  str = str.replace(/i|ì|í|ị|ỉ|ĩ/g, "");
  str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "");
  str = str.replace(/o|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "");
  str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "");
  str = str.replace(/u|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "");
  str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "");
  str = str.replace(/y|ỳ|ý|ỵ|ỷ|ỹ/g, "");
  str = str.replace(/D|Đ/g, "");
  str = str.replace(/d|đ/g, "");
  str = str.replace(/w|q|r|t|p|s|f|g|h|j|k|l|z|x|c|v|b|n|m/g, "");
  str = str.replace(/W|Q|R|T|P|S|F|G|H|J|K|L|Z|X|C|V|B|N|M/g, "");

  str = str.replace(regex, "");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư

  return str;
};

export const stringWithoutAccents = (value) => {
  if (!value) return value;
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d");
};
