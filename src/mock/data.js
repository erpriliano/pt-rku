import React from "react"

import cleaningImg1 from "../images/gallery/cleaning-1.jpg"
import cleaningImg2 from "../images/gallery/cleaning-2.jpg"
import containerImg from "../images/gallery/container-1.jpg"
import electricalImg1 from "../images/gallery/listrik-1.jpg"
import electricalImg2 from "../images/gallery/listrik-2.jpg"
import electricalImg3 from "../images/gallery/listrik-3.jpg"

//Navigation Menu
export const navigationMenu = [
  {
    title: "Beranda",
    linkTo: "home",
    mobileSVG: (
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: "Tentang Kami",
    linkTo: "about",
    mobileSVG: (
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Layanan Kami",
    linkTo: "services",
    mobileSVG: (
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
]

//Home Section or Hero Section
export const companyProfile = {
  name: "PT. Rezki Karfadz Utama",
  about:
    "Kami siap melayani kebutuhan anda dalam bidang elektrikal, perawatan kebersihan gedung serta penyedia barang dan jasa. Kami selalu belajar serta menganalisa kebutuhan klien kami demi memberikan solusi terbaik serta kualitas barang dan jasa bagi kebutuhan klien, karena bagi kami melayani anda dengan profesional dan kepuasan anda adalah prioritas bagi kami.",
  shortHistory:
    'PT. Rezki Karfadz Utama secara resmi berdiri pada tahun 2010 di Jakarta. Sebagai suatu perusahaan, kami fokus dalam bidang pengadaan barang dan jasa. Kami yakin dengan latar belakang yang kami miliki, kami dapat memberikan solusi terbaik untuk anda, demi kebutuhan pelanggan, sesuai dengan motto kami "Illuminates the need solution"',
  mobileNumber: +6287889977882,
  phoneNumber: +622129361198,
  email: "rezkikarfadzutama@yahoo.com",
  address:
    "Graha Komando, Jl. Raya Cipinang Indah No. 01, Jakarta Timur, 13420",
  companyVision: "One Solution",
  companyMission: [
    "Memberikan pelayanan terbaik dalam kebutuhan produk dan jasa",
    "Memberikan solusi yang berkualitas bagi pelanggan",
    "Bekerja efektif dan efisien",
  ],
}

//Services
export const companyServices = [
  {
    serviceTitle: "Mekanikal Elektrikal",
    services: [
      "Genset",
      "Grounding system",
      "Maintenance",
      "Panel system",
      "Penangkal petir",
      "UPS",
      "Panel TM (Cubicle)",
      "Trafo",
      "Kabel",
      "Tiang",
    ],
    descriptions: [
      "Pemasangan baru / Perubahan listrik Tegangan Rendah (TR) daya 450VA - 197.000VA",
      "Pemasangan baru / Perubahan listrik Tegangan Menengah (TM) daya ≥ 200KVA",
      "Jasa pemeliharaan dan teknisi",
      "Jasa perbaikan",
      "Jasa pemasangan",
      "Sertifikasi",
    ],
  },
  {
    serviceTitle: "General Cleaning",
    services: [
      "Cleaning service",
      "Gondola",
      "Maintenance",
      "Pengecatan",
      "Epoxy lantai",
      "Rope access",
    ],
    descriptions: [
      "Re-sealant (Ext)",
      "ACP (Ext)",
      "Dinding keramik (Ext)",
      "Water proofing (Ext)",
      "Granit (Int)",
      "Karpet (Int)",
      "Teraso (Int)",
      "Poles marmer (Int)",
    ],
  },
  {
    serviceTitle: "Supplier Barang dan Jasa",
    services: ["Elektrikal", "Cleaning"],
    descriptions: [
      "Genset",
      "Kabel",
      "UPS",
      "Trafo",
      "Panel ATS AMF",
      "Chemical",
      "Peralatan kebersihan",
      "Peralatan keamanan",
    ],
  },
]

//Gallery data
export const gallery = [
  cleaningImg1,
  cleaningImg2,
  containerImg,
  electricalImg1,
  electricalImg2,
  electricalImg3,
]

//Footer Data
export const footerData = {
  companyName: companyProfile.name,
  author: "erpriliano",
  facebook: "",
  twitter: "",
  instagram: "",
  linkedIn: "",
}
