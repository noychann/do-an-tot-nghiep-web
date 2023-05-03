import * as Yup from "yup";
import { PATTERN_PHONE, PATTERN_PASSWORD, PATTERN_TEXT } from "@/utils";

export const FILE_SIZE = 3; // MB

const FILE_SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png",
];

export const message = {
  REQUIRE: (label) => `Bạn chưa nhập giá trị cho trường  ${label}`,
  ONLY: (label, characters) => `${label} chỉ chấp nhận kí tự ${characters}`,
  MIN_LENGTH: (label, length) =>
    `${label} nhập vào phải từ ${length} ký tự trở lên`,
  MAX_LENGTH: (label, length) => `${label} không được vượt quá ${length} ký tự`,
  FORMAT: (label) => `${label} không đúng định dạng`,
};

export const validationSchema = {
  //"userName": "2101598", "password": "123456",
  emailTest: Yup.string().required(message.REQUIRE("email")),
  passwordTest: Yup.string().required(message.REQUIRE("Mật khẩu")),

  phone: Yup.string()
    .matches(PATTERN_PHONE, message.FORMAT("Số điện thoại"))
    .required(message.REQUIRE("Số điện thoại")),
  password: Yup.string()
    .matches(PATTERN_PASSWORD, message.FORMAT("Mật khẩu"))
    .min(8, message.MIN_LENGTH("Mật khẩu", 8))
    .required(message.REQUIRE("Mật khẩu")),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Mật khẩu không phù hợp")
    .required(message.REQUIRE("Xác nhận lại mật khẩu")),
  fullName: Yup.string()
    .matches(PATTERN_TEXT, message.FORMAT("Họ và tên"))
    .required(message.REQUIRE("Họ và tên")),
  imageFile: Yup.mixed()
    .test(
      "fileSize",
      `Cần chọn ảnh có kích thước dưới ${FILE_SIZE}MB `,
      (value) => (value?.size / 1024 / 1024).toFixed(4) <= FILE_SIZE,
    )
    .test("fileType", message.FORMAT("Ảnh"), (value) =>
      FILE_SUPPORTED_FORMATS.includes(value?.type),
    )
    .required("Vui lòng Tải ảnh CMND/CCCD"),
  otp: Yup.string().required(message.REQUIRE("mã OTP")),
};
