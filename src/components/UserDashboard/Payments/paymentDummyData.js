import image1 from "../../../assets/images/home/pic (1).jpg";
import image2 from "../../../assets/images/home/pic (2).jpg";
import image3 from "../../../assets/images/home/pic (3).jpg";

export const paymentData = [
  {
    paid: false,
    title: "Payment for 4 additional photos",
    date: new Date(Date.now()),
    orderStatus: "waiting for payment",
    price: 100,
    thumbnail: image1,
  },
  {
    paid: true,
    title: "Traditional & White Wedding / Video & Photo",
    date: new Date(Date.now()),
    orderStatus: "photo processing",
    price: 15000,
    thumbnail: image2,
  },
  {
    paid: true,
    title: "Traditional & White Wedding / Video & Photo",
    date: new Date(Date.now()),
    orderStatus: "photo processing",
    additionalServices: ["lead photographer"],
    price: 15000,
    thumbnail: image3,
  },
];
